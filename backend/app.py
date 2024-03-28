from flask import Flask, send_from_directory,request,json
from flask_cors import CORS
import json
import os

app = Flask(__name__, static_folder="./build", static_url_path="/")
CORS(app)

@app.route("/")
def index():
      return "Welcome to the Flask API!"
@app.route("/checkIn/", methods=['POST'])
def checkIn_hardware(projectid, qty):
     print('post request working')
     data= request.json
     if(data['checkIn'] > 0):
       print("%d hardware checked in" % data['checkIn'])
     return "%d hardware checked in" % qty
# def checkOut_hardware(projectid, qty):
#     return 0
# def joinProject(projectid):
#     return 0
# def leaveProject(projectid):
#     return 0

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False, port=5000)