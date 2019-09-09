# S3 Buckets used by all environments for build and logging infrastructure

resource "aws_s3_bucket" "logs" {
  bucket = "logs.${var.webapp_url_base}"
  acl = "log-delivery-write"
}

resource "aws_s3_bucket" "build" {
   bucket = "build.${var.webapp_url_base}"
   acl = "private"
}

module "dev_env" {
  source = "./deployed_env"

  environment = "dev"
  log_bucket_id = aws_s3_bucket.logs.id
  route53_zone_id = var.route53_zone_id
  webapp_url_base = var.webapp_url_base
}

module "qa_env" {
  source = "./deployed_env"

  environment = "qa"
  log_bucket_id = aws_s3_bucket.logs.id
  route53_zone_id = var.route53_zone_id
  webapp_url_base = var.webapp_url_base
}

module "uat_env" {
  source = "./deployed_env"

  environment = "uat"
  log_bucket_id = aws_s3_bucket.logs.id
  route53_zone_id = var.route53_zone_id
  webapp_url_base = var.webapp_url_base
}

module "staging_env" {
  source = "./deployed_env"

  cloudfront_ssl_certificate_arn = "arn:aws:acm:us-east-1:021548413574:certificate/84232518-e6b6-454b-9378-41ef014cb01d"
  environment = "staging"
  log_bucket_id = aws_s3_bucket.logs.id
  route53_zone_id = var.route53_zone_id
  webapp_url_base = var.webapp_url_base
}
