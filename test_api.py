import requests

url = "http://127.0.0.1:5000/api/parse_article"
data = {"url": "https://mp.weixin.qq.com/s/xxxx"}
resp = requests.post(url, json=data)
print(resp.json())