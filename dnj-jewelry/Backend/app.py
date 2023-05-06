import os
import httpx
import requests
from dotenv import load_dotenv
from email_validator import validate_email, EmailNotValidError
import bcrypt
from supabase_py import create_client
from flask import Flask, jsonify, request, render_template
from api.routes import my_routes
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
# Enables CORS on all routes and specific origins
CORS(app, origins=['http://localhost:3000'])
app.register_blueprint(my_routes)

supabase_url = os.environ['SUPABASE_URL']
supabase_key = os.environ['SUPABASE_API_KEY']
supabase_secret_key = os.environ['SUPABASE_SECRET_KEY']

session = requests.Session()
supabase = create_client(supabase_url, supabase_key)


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if email is not None:
            email = email.decode('ascii')

        # Validate email address
        try:
            validate_email(email)
        except EmailNotValidError:
            return jsonify(message="Invalid email address"), 400

        # Hash the password
        hashed_password = bcrypt.hashpw(
            password.encode('utf-8'), bcrypt.gensalt())

        # Create user
        user = supabase.auth.sign_up(
            email=email, password=hashed_password.decode('utf-8'))

        if user:
            return jsonify(message="User created successfully"), 201, {"Location": '/'}
        else:
            return jsonify(message="Error creating user"), 400
    else:
        return render_template('signup.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        # Logging incoming!
        logging.info('Received login request with email %s', email)

        if email is None:
            return jsonify({"error": "Email is required"}), 400

        # Validate email address
        try:
            validate_email(email)
        except EmailNotValidError:
            return jsonify(message="Invalid email address"), 400

        # Check if user exists
        user = supabase.auth.sign_in(email=email, password=password)

        if user:
            return jsonify(message="Login successful"), 200
        else:
            return jsonify(message="Invalid email or password"), 401
    else:
        return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)