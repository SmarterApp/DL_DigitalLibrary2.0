#### Variables

variable "environment" {
  description = "The short name of the environment this deployment represents. For example: 'dev', 'qa', 'uat', or 'prod'. The short name will be used to name resources (S3 buckets, etc)."
}

variable "webapp_url_base" {
  description = "Base URL for the webapp. Used to create S3 bucket names, Route53 route sets, etc."
  default = "webapp.dl.smarterbalanced.org"
}

variable "route53_zone_id" {
  # The hosted zone is not specific to DL webapp front end (also used by the
  # API) and is not managed by this Terraform module.
  description = "Route 53 hosted zone id for the DL environments. See https://console.aws.amazon.com/route53/home?region=us-west-2#resource-record-sets:Z2ZK4QKRG6BNF0"
  default = "Z2ZK4QKRG6BNF0"
}

variable "log_bucket_id" {
  description = "Id of the S3 bucket to which logs should be written."
}

variable "cloudfront_ssl_certificate_arn" {
  description = "ARN of the managed SSL certificate to use for this environment."
  default = "arn:aws:acm:us-east-1:021548413574:certificate/4f3ba860-b25a-401e-a871-cc1270dee9be"
}

