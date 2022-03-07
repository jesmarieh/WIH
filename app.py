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
    req = requests.get('https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=10&sex=male')
    #data = json.loads(req.content)
    return req.json()["Result"]["Resources"]["You may also be interested in these health topics:"]["Resource"][0]#["MyHFCategory"]#["RelatedItems"]#["RelatedItems"]#render_template('index.html', data=data)
    
    #Covid API
    req_covid_states = requests.get('https://api.covidactnow.org/v2/states.json?apiKey=ea36a1efe33d425db88f635e70ea17a6')
    req_covid_counties = requests.get('https://api.covidactnow.org/v2/counties.json?apiKey=ea36a1efe33d425db88f635e70ea17a6')


#https://cat-fact.herokuapp.com/facts

#

if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)