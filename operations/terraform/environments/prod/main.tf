provider "aws" {
  region = var.aws_region
}

# pull in the global environment state
data "terraform_remote_state" "global" {
  backend = "s3"

  config = {
    encrypt = true
    bucket = "build.${var.webapp_url_base}"
    region = var.aws_region
    key = "terraform-state/global/terraform.tfstate"
    dynamodb_table = "terraform-state-lock.${var.webapp_url_base}"
  }
}

module "prod_env" {
  source = "../../modules/deployed_env"

  cloudfront_ssl_certificate_arn = "arn:aws:acm:us-east-1:021548413574:certificate/ec71cd85-d990-4090-b40b-8ab2352e9f0b"
  environment = "prod"
  log_bucket_id = data.terraform_remote_state.global.outputs.aws_s3_bucket_logs.id
  route53_zone_id = var.route53_zone_id
  webapp_url_base = var.webapp_url_base
}
