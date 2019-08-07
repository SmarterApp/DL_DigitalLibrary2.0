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
  webapp_base_url = var.webapp_base_url
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
  webapp_base_url = var.webapp_base_url
}

module "staging_env" {
  source = "./deployed_env"

  environment = "staging"
  log_bucket_id = aws_s3_bucket.logs.id
  route53_zone_id = var.route53_zone_id
  webapp_base_url = var.webapp_base_url
}


