from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/parse_article', methods=['POST'])
def parse_article():
    data = request.get_json()
    url = data.get('url')
    # TODO: 实现微信公众号文章抓取和信息抽取
    # 这里返回示例数据
    return jsonify({
        'category': '城市设计',
        'info': {
            '设计单位': '某设计院',
            '位置': '某城市某区',
            '规模': '10万平方米',
            '核心策略': '生态优先，功能复合'
        },
        'images': [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg'
        ]
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000) 