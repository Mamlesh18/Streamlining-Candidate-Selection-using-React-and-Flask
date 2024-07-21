from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from bson import ObjectId

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

@app.route('/filter', methods=['GET'])
@cross_origin(origin='*')
def get_top10_details():
    interval = request.args.get('interval', 'recent')  # Get the selected time interval
    collection = db['user-details']
    
    # Sorting logic based on the selected interval
    if interval == 'oneWeek':
        top10_data = list(collection.find().limit(10).sort([('date_field', -1)]))  # Replace 'date_field' with the actual date field
    elif interval == 'oneMonth':
        top10_data = list(collection.find().limit(10).sort([('date_field', -1)]))  # Replace 'date_field' with the actual date field
    elif interval == 'threeMonths':
        top10_data = list(collection.find().limit(10).sort([('date_field', -1)]))  # Replace 'date_field' with the actual date field
    elif interval == 'sixMonths':
        top10_data = list(collection.find().limit(10).sort([('date_field', -1)]))  # Replace 'date_field' with the actual date field
    else:
        top10_data = list(collection.find().limit(10).sort([('_id', -1)]))  # Default: Sort by _id
    
    top10_data_formatted = [
        {
            '_id': str(doc['_id']),
            'name': doc.get('name', ''),
            'email': doc.get('email', ''),
            'phone': doc.get('phone', ''),
            'state': doc.get('state', ''),
            'job': doc.get('job', ''),
        }
        for doc in top10_data
    ]
    return send_response(top10_data_formatted)

if __name__ == '__main__':
    app.run(debug=True)
