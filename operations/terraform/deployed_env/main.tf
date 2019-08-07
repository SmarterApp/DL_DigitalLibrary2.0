data "aws_iam_policy_document" "website_bucket_policy" {
  statement {
    actions     = [ "s3:GetObject" ]
    effect      = "Allow"
    resources   = [ "${aws_s3_bucket.deploy.arn}/*" ]

    principals {
      type        = "AWS"
      identifiers = [ "*" ]
    }
  }
}

resource "aws_s3_bucket" "deploy" {
  bucket = "${var.environment}.${var.webapp_url_base}"
  acl    = "public-read"

  # We rely on the S3 website functionality to provide the implicit mapping of
  # / to /index.html for CloudFront.
  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  logging {
    target_bucket = "${var.log_bucket_id}" # bucket not managed by this module
    target_prefix = "${var.environment}/s3-access/"
  }

  tags = {
    Environment = "${var.environment}"
  }
}

resource "aws_s3_bucket_policy" "website_bucket_policy" {
  bucket = "${aws_s3_bucket.deploy.id}"
  policy = "${data.aws_iam_policy_document.website_bucket_policy.json}"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.deploy.id}.${aws_s3_bucket.deploy.website_domain}"
    origin_id   = "S3-${aws_s3_bucket.deploy.id}"

    custom_origin_config {
      http_port = 80
      https_port = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = ["TLSv1.2"]
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

  aliases = ["${var.environment}.${var.webapp_url_base}"]

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
    acm_certificate_arn = "arn:aws:acm:us-east-1:021548413574:certificate/4f3ba860-b25a-401e-a871-cc1270dee9be"
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
