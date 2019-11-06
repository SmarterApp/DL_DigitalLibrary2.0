terraform {
  backend "s3" {
    encrypt = true
    bucket = "build.webapp.dl.smarterbalanced.org"
    region = "us-west-2"
    key = "terraform-state/uat/terraform.tfstate"
    dynamodb_table = "terraform-state-lock.webapp.dl.smarterbalanced.org"
  }
}
