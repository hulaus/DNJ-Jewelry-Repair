import requests
import json

GRAPHQL_QUERY = """
  query {
    shop {
      name
    }
  }
"""

def get_server_side_props():
  # Get the Storefront API url
  response = requests.post(
    url=client.get_storefront_api_url(),
    headers=client.get_private_token_headers({"buyerIp": "..."}),
    json={"query": GRAPHQL_QUERY}
  )

  if not response.ok:
    raise ValueError(response.text)

  data = json.loads(response.text)

  return {"props": data}
