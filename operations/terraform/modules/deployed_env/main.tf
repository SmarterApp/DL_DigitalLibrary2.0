output "deploy_bucket_arn" {
  description = "ARN of the bucket that is created to host deployed artifacts."
  value = aws_s3_bucket.deploy.arn
}

data "aws_iam_policy_document" "deploy_bucket_access_policy" {
  statement {
    actions     = [ "s3:GetObject" ]
    effect      = "Allow"
    resources   = [ "${aws_s3_bucket.deploy.arn}/*" ]

    principals {
      type        = "CanonicalUser"
      identifiers = [ aws_cloudfront_origin_access_identity.origin_access_identity.s3_canonical_user_id ]
    }
  }

  statement {
    actions     = [ "s3:ListBucket" ]
    effect      = "Allow"
    resources   = [ "${aws_s3_bucket.deploy.arn}" ]

    principals {
      type        = "CanonicalUser"
      identifiers = [ aws_cloudfront_origin_access_identity.origin_access_identity.s3_canonical_user_id ]
    }
  }
}

resource "aws_s3_bucket" "deploy" {
  bucket = "${var.environment}.${var.webapp_url_base}"
  acl    = "private"

  logging {
    target_bucket = "${var.log_bucket_id}" # bucket not managed by this module
    target_prefix = "${var.environment}/s3-access/"
  }

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "OAI for ${var.environment} environment."
}

resource "aws_s3_bucket_policy" "deploy_bucket_access_policy" {
  bucket = "${aws_s3_bucket.deploy.id}"
  policy = "${data.aws_iam_policy_document.deploy_bucket_access_policy.json}"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.deploy.bucket_regional_domain_name}"
    # domain_name = "${aws_s3_bucket.deploy.id}.${aws_s3_bucket.deploy.website_domain}"
    origin_id   = "S3-${aws_s3_bucket.deploy.id}"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path}"
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Digital Library 2.0 ${var.environment} distribution."
  default_root_object = "/index.html"

  logging_config {
    include_cookies = false
    bucket          = "${var.log_bucket_id}.s3.amazonaws.com" # bucket not managed by this module
    prefix          = "${var.environment}/cloudfront/"
  }

  aliases = concat(["${var.environment}.${var.webapp_url_base}"],var.additional_cloudfront_aliases)

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.deploy.id}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 31536000 # default cache for a year
    max_ttl                = 31536000

    compress               = true
    viewer_protocol_policy = "redirect-to-https"

  }

  custom_error_response {
    error_code = 404
    response_code = 200
    response_page_path = "/index.html"
  }

  price_class            = "PriceClass_100" # US and Canada only

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = "${var.environment}"
  }

  viewer_certificate {
    # Note that this certificate is managed outside of this Terraform
    # module
    acm_certificate_arn = "${var.cloudfront_ssl_certificate_arn}"
    ssl_support_method  = "sni-only"
  }
}

resource "aws_route53_record" "www" {
  zone_id = "${var.route53_zone_id}"
  name = "${var.environment}.${var.webapp_url_base}"
  type = "A"

  alias {
    name                    = "${aws_cloudfront_distribution.s3_distribution.domain_name}"
    zone_id                 = "${aws_cloudfront_distribution.s3_distribution.hosted_zone_id}"
    evaluate_target_health  = false
  }
}
