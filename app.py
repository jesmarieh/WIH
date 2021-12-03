from flask import Flask, render_template
import requests
import json
from flask_cors import CORS
#from flask_restful import Api, Resource, reqparse
#from api.ApiHandler import ApiHandler

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def index():
    req = requests.get('https://cat-fact.herokuapp.com/facts')
    data = json.loads(req.content)
    return render_template('index.html', data=data)




#https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=10&sex=male

#

if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)