from flask import Blueprint, request, jsonify
from flask_restx import Namespace, Resource, fields
import uuid
from .models import user_data
from .schemas.register_request import RegisterRequest
from .schemas.register_response import RegisterResponse
from .schemas.get_profile_request import GetProfileRequest
from .schemas.get_profile_response import GetProfileResponse

main = Namespace('main', description="Main API operations")

register_request_model = main.model('RegisterRequest', {
    'name': fields.String(required=True, description="User's name"),
    'location': fields.String(required=True, description="User's location"),
    'phonenumber': fields.String(required=True, description="User's phone number"),
    'email': fields.String(required=True, description="User's email address"),
    'description': fields.String(required=True, description="Description of the user"),
    'rating': fields.Float(required=True, description="User rating")
})

register_response_model = main.model('RegisterResponse', {
    'user_id': fields.String(description="Unique ID of the registered user")
})

get_profile_response_model = main.model('GetProfileResponse', {
    'name': fields.String(required=True, description="User's name"),
    'location': fields.String(required=True, description="User's location"),
    'phonenumber': fields.String(required=True, description="User's phone number"),
    'email': fields.String(required=True, description="User's email address"),
    'description': fields.String(required=True, description="Description of the user"),
    'rating': fields.String(required=True, description="User rating")
})

@main.route('register')
class Register(Resource):
    @main.expect(register_request_model)
    @main.marshal_with(register_response_model, code=201)
    def post(self):
        data = request.get_json()
        register_request = RegisterRequest.from_request(data)

        user_id = str(uuid.uuid4())

        user_data[user_id] = {
            'name': register_request.name,
            'location': register_request.location,
            'phonenumber': register_request.phonenumber,
            'email': register_request.email,
            'description': register_request.description,
            'rating': register_request.rating
        }

        response = RegisterResponse(user_id)
        return response.to_json(), 201

@main.route('getprofile')
class GetProfile(Resource):
    @main.doc(params={'user_id': 'The unique identifier of the user'})
    @main.marshal_with(get_profile_response_model, code=200)
    def get(self):
        user_id = request.args.get('user_id')

        if not user_id:
            return {'error': 'user_id is required'}, 400

        user = user_data.get(user_id)
        if not user:
            return {'error': 'User not found'}, 404

        user['user_id'] = user_id
        return user, 200

