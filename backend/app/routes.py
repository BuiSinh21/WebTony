from flask import Flask, request, jsonify
from flask_restful import Resource
from app.vocabulary import vocabs, used_vocabs
import random

class home(Resource):
    def post(self):
        return jsonify({"message": "Hello Word"})
    def get(self):
        return {"message": "Viewed successfully"}
    def put(self):
        return jsonify({"message": "Edited successfully"})
    def delete(self):
        return jsonify({"message": "Goodbye Word"})

class get_vocabulary(Resource):
    def get(self):
        return jsonify({"message": vocabs})

class get_random_vocabulary(Resource):
    def get(self):
        vocab = random.choice(vocabs)
        while vocab in used_vocabs:
            if len(used_vocabs) >= len(vocabs):
                return jsonify({"message": "No more verbs"})
            vocab = random.choice(vocabs)
        used_vocabs.append(vocab)
        return jsonify({"message": vocab})

class check_meaning(Resource):
    def get(self, v1):
        for vocab in vocabs:
            if vocab["V1"] == v1.lower():
                return jsonify({"message": vocab["Meaning"]})
        return jsonify({"message": "Verb not found"})

class check_verb(Resource):
    def get(self):
        for vocab in vocabs:
            if vocab["Meaning"] == request.get_json()["meaning"]:
                return jsonify({"message": vocab["V1"]})
        return jsonify({"message": "Meaning not found"})