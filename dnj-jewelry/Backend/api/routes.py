from flask import jsonify, Blueprint

my_routes = Blueprint("my_routes", __name__)

@my_routes.route('/')
def home():
    data ={"message": "Homes endpoint"}
    return jsonify(data)

@my_routes.route('/jewelry')
def jewelry():
    data={"message": "Jewelry endpoint"}
    return jsonify(data)

#@my_routes.route('/forum')
#def forum():
    
@my_routes.route('/aboutus')   
def aboutus():
    data ={"message": "About us endpoint"}
    return jsonify(data)

@my_routes.route('/custom')
def custom():
    data={"message": "Custom endpoint"}
    return jsonify(data)    
    

    # Render sign-up form
@my_routes.route('/signup', methods=['GET'])
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
@my_routes.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    user = supabase.auth.sign_in(email=email, password=password)
    if type(user) == str:
        return jsonify(message=user), 401

    return jsonify(user), 200

# Render login form
@my_routes.route('/login', methods=['GET'])
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