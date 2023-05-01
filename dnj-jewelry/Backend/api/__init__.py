from dotenv import load_dotenv
import os
from email_validator import validate_email, EmailNotValidError
from flask import Flask, jsonify, request
# from flask_sqlalchemy import SQLAlchemy
from supabase_py import create_client
import bcrypt
from api.routes import my_routes
# from api.routes import models
from flask_cors import CORS

from api import views


# Load environment variables
load_dotenv()

# Flask application
def create_app():
    app = Flask(__name__)
    CORS(app)

# Routes from routes.py
app.register_blueprint(my_routes)

# Supabase client | Secret_key adds security
supabase_url = os.environ['SUPABASE_URL']
supabase_key = os.environ['SUPABASE_API_KEY']
supabase_secret_key = os.environ['SUPABASE_SECRET_KEY']
supabase = create_client(supabase_url, supabase_key)

# Signup route | Working in progress
@app.route('/signup', methods=['POST'])
def signup():
    email = request.form.get('email')
    password = request.form.get('password')

    # Validate email address
    try:
        validate_email(email)
    except EmailNotValidError:
        return jsonify(message="Invalid email address"), 400

    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Create user
    user = supabase.auth.sign_up(
        email=email, password=hashed_password.decode('utf-8'))

    if user:
        return jsonify(message="User created successfully"), 201, {"Location": '/'}
    else:
        return jsonify(message="Error creating user"), 400


if __name__ == '__main__':
    app.run(debug=True, port=5000)
