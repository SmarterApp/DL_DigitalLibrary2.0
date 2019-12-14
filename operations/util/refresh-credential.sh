#!/bin/bash
api_base_url="${CDL_API_BASE_URL:-https://api-dev.dl.smarterbalanced.org}"
curl \
  "${api_base_url}/oauth/v2/token?client_id=1_sdm598elk2sw4soosgoc44sc8gsc8swkg88o0840gcs0cwk4o&client_secret=1wa315evz5wksok8wscg848kckcwsogocc4k8wc08g8k8w4k84&grant_type=client_credentials" \
  | jq -r .access_token > credential
