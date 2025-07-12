from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(name)

client = MongoClient("mongodb://localhost:27017/")
db = client.WebTony 
collection = db.data

@app.route('/data', methods=['GET'])
def get_all_collections_data():
    result = {}
    for name in db.list_collection_names():
        collection = db[name]
        result[name] = list(collection.find({}, {"_id": 0}))
    return jsonify(result)

if name == 'main':
    app.run(debug=True)