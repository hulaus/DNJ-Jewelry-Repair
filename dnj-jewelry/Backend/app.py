from flask import Flask, request, jsonify
from dotenv import load_dotenv
import supabase
# Python "os" module
import os

# Load environment variables from .env 
load_dotenv()

# Retrieve the values env variables using the "os" module
supabase_url = os.environ.get("SUPABASE_URL")
supabase_key = os.environ.get("SUPABASE_KEY")

# Initialize supabase client
supabase_client = supabase.Client(supabase_url, supabase_key)

# Instance flask app created and stored in a variable
app = Flask(__name__)

# home and aboutus routes return: "message is for testing purposes!"
@app.route("/")
def home():
    return jsonify({"message": "Home page!"})

@app.route("/aboutus")
def aboutus():
    return jsonify({"message": "About us"})

# Login route validation
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    # Supabase to validate login
    result, error = supabase_client.auth.sign_in(email=email, password=password)

    # Check for error
    if error is not None:
        return({"error": error.message}), 400
    else: 
        return jsonify({"message": "Created successfully"}), 200

# Sing up route with validation
@app.route("/signup", methods=["POST"])
def sign():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    # Supabase to create user
    result, error = supabase_client.auth.authsign_up(email=email, password=password)

    if error is not None:
        return jsonify({"error": error.message}), 400
    else:
        return jsonify({"message": "Created successfully!"})   

# If success route
@app.route("/success")
def success():
    return jsonify({"message": "Success"})

# Checks if running local
if __name__ == "__main__":
    
    # Checks if both are set to a value or not
    if supabase_url is None or supabase_key is None:
      raise ValueError("SUPABASE_URL and/or SUPABASE_KEY environment variables are not set")

app.run()