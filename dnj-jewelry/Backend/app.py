from flask import Flask, jsonify, request
import httpx
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Flask application
app = Flask(__name__)

# Supabase API URLs
SUPABASE_URL = os.environ['SUPABASE_URL']
SUPABASE_API_KEY = os.environ['SUPABASE_API_KEY']
SUPABASE_HEADERS = {
    "apikey": os.environ['SUPABASE_ANON_KEY'],
    "authorization": f"Bearer {os.environ['SUPABASE_ANON_KEY']}",
    "content-type": "application/json",
}


# Routes
@app.route('/')
def home():
    return jsonify(message="Welcome to the home page!")


@app.route('/jewelry')
def jewelry():
    return jsonify(message="This is the jewelry page!")


@app.route('/aboutus')
def aboutus():
    return jsonify(message="This is the aboutus page!")


@app.route('/custom')
def custom():
    return jsonify(message="This is the custom page!")


# Need data sanitization
@app.route('/signup', methods=['POST'])
def signup():
    email = request.json.get('email')
    password = request.json.get('password')

    data = {"email": email, "password": password}
    response = httpx.post(f"{SUPABASE_URL}/auth/v1/signup",
                          json=data, headers=SUPABASE_HEADERS)

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify(response.json()), 400


@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    data = {"email": email, "password": password}
    response = httpx.post(f"{SUPABASE_URL}/auth/v1/token?grant_type=password",
                          json=data, headers=SUPABASE_HEADERS)

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify(response.json()), 400


if __name__ == '__main__':
    app.run()
