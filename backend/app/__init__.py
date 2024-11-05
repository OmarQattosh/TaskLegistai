from flask import Flask
from flask_restx import Api
from .routes import main as main_blueprint

def create_app():
    app = Flask(__name__)

    api = Api(app, title="apiDocs", description="API Documentation with Swagger")
    api.add_namespace(main_blueprint, path="/")

    return app
