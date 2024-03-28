from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route("/")
def index():
    return "Welcome to the Flask API!"

@app.route("/checkIn/", methods=['POST'])
def checkIn_hardware():
    data = request.json
    if data and 'qty' in data and int(data['qty']) > 0:
        qty = data['qty']
        print(f"{qty} hardware checked in")
        return f"{qty} hardware checked in"
    else:
        return "Invalid request", 400

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False, port=5000)