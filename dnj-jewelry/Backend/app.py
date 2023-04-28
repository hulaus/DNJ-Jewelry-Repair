from flask import Flask, jsonify, request
from supabase_py import create_client
from dotenv import load_dotenv
from email_validator import validate_email, EmailNotValidError
import os
import bcrypt

# Load environment variables
load_dotenv()

# Flask application
app = Flask(__name__)

# Supabase client
supabase_url = os.environ['SUPABASE_URL']
supabase_key = os.environ['SUPABASE_API_KEY']
supabase = create_client(supabase_url, supabase_key)

# Signup route 
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
    user = supabase.auth.sign_up(email=email, password=hashed_password.decode('utf-8'))

    if user:
        return jsonify(message="User created successfully"), 201, {"Location": '/'}
    else:
        return jsonify(message="Error creating user"), 400


# Render sign-up form | Temporary should run by frontend
@app.route('/signup', methods=['GET'])
def signup_form():
    html = '''
        <!DOCTYPE html>
        <html>
            <head>
                <title>Sign up</title>
            </head>
            <body>
                <h1>Sign up</h1>
                <form method="POST" action="/signup">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required><br><br>
                    <input type="submit" value="Sign up">
                </form>
            </body>
        </html>
    '''
    return html

# Login route
@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    user = supabase.auth.sign_in(email=email, password=password)
    if type(user) == str:
        return jsonify(message=user), 401

    return jsonify(user), 200

# Render login form | Temporary should run by frontend
@app.route('/login', methods=['GET'])
def login_form():
    html = '''
        <!DOCTYPE html>
        <html>
            <head>
                <title>Login</title>
            </head>
            <body>
                <h1>Login</h1>
                <form method="POST" action="/login">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required><br><br>
                    <input type="submit" value="Login">
                </form>
            </body>
        </html>
    '''
    return html

if __name__ == '__main__':
    app.run(debug=True)