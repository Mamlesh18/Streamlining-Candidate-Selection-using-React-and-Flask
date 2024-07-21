from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from bson import ObjectId
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['job_portal']

@app.route('/add', methods=['POST'])
def add_data():
    data = request.get_json()
    collection = db['testcollection']
    collection.insert_one(data)
    return jsonify({"message": "Data added successfully!"})

@app.route('/get', methods=['GET'])
def get_data():
    collection = db['testcollection']
    data = list(collection.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/signup', methods=['POST'])
@cross_origin(origin='*')
def signup_user():
    request_body = request.get_json()
    collection = db['users']
    usersData = collection.count_documents({'email': request_body['email']})
    print('Total number of documents : ', usersData)
    if usersData > 0:
        return jsonify({"message": "user exists"})
    else:
        collection.insert_one(request_body)
        return jsonify({"message": "Data added successfully!"})

@app.route('/resume', methods=['POST'])
@cross_origin(origin='*')
def resume_user():
    request_body = request.get_json()
    collection = db['user-details']
    usersData = collection.count_documents({'email': request_body['email']})
    print('Total number of documents : ', usersData)
    if usersData > 0:
        return jsonify({"message": "user exists"})
    else:
        collection.insert_one(request_body)
        return jsonify({"message": "Data added successfully!"})

def send_response(data):
    return jsonify({"message": "", "data": data, "success": True})

def error_response(message, success=True):
    return jsonify({"message": message, "data": "", "success": success})

@app.route('/login', methods=['POST'])
@cross_origin(origin='*')
def login_user():
    request_body = request.get_json()
    collection = db['users']
    user = collection.find_one({'email': request_body['email'], 'password': request_body['password']})
    if user:
        user['_id'] = str(user['_id'])
        return send_response({"message": "Login successful", "success": True, "user": user})
    else:
        return error_response("Invalid username or password", False)
@app.route('/filter', methods=['POST'])
@cross_origin(origin='*')
def get_filter_data():
    collection = db['user-details']
    request_body = request.get_json()

    city = request_body['city']
    skill = request_body['skills']

    query = "'$and': [ { '$or': [ { 'skills': { '$in': %SKILLS% } }, { 'jobtype': { '$regex': '%JOBTYPE%', '$options': 'i' } } ] }, { %CITY% } ]"
    pipeline = [
        {'$match': {}},
        {'$addFields': {'cvLastUpdatedInDays': {'$divide': [{'$subtract': [datetime.utcnow(), '$updatedDate']}, 1000 * 60 * 60 * 24]}}},
        {'$group': {'_id': None, 'users': {'$addToSet': '$$ROOT'}, 'jobTitles': {'$addToSet': '$job'}}}
    ]

    if city is not None or skill is not None:
        if skill is not None and len(skill) > 0:
            query = query.replace("%SKILLS%", str(skill))
        else:
            query = query.replace("%SKILLS%", '[]')

        if city != "":
            query = query.replace("%CITY%", "'city': { '$regex': '" + str(city) + "', '$options': 'i' }")
        else:
            query = query.replace("%CITY%", '')

        # Update the $match stage in the pipeline
        pipeline[0]['$match'] = {'%MATCH%': query}
    else:
        pipeline[0]['$match'] = {}

    # Execute the aggregation pipeline
    result = list(collection.aggregate(pipeline))
    return send_response(result)



if __name__ == '__main__':
    app.run(debug=True)
