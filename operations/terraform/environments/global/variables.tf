#### Variables

variable "aws_region" {
  description = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"
  default = "us-west-2"
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
