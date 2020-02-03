#### Provider Configuration

provider "aws" {
  region = var.aws_region
}

# S3 Buckets used by all environments for build and logging infrastructure

resource "aws_s3_bucket" "logs" {
  bucket = "logs.${var.webapp_url_base}"
  acl = "log-delivery-write"

}

resource "aws_s3_bucket" "build" {
  bucket = "build.${var.webapp_url_base}"
  acl = "private"

  versioning {
    enabled = true
  }

  lifecycle {
    prevent_destroy = true
  }
}

# DynamoDB table used for Terraform Remote State locking
resource "aws_dynamodb_table" "dynamodb-terraform-state-lock" {
  name = "terraform-state-lock.${var.webapp_url_base}"
  hash_key = "LockID"
  read_capacity = 20
  write_capacity = 20
 
  attribute {
    name = "LockID"
    type = "S"
  }
 
  tags = {
    Name = "DynamoDB Terraform State Lock Table"
  }
}


output "aws_s3_bucket_build" {
  description = "S3 logging bucket resource."
  value = aws_s3_bucket.build
}

output "aws_s3_bucket_logs" {
  description = "S3 logging bucket resource."
  value = aws_s3_bucket.logs
}
