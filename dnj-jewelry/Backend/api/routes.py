from flask import jsonify, Blueprint, request

my_routes = Blueprint("my_routes", __name__)


@my_routes.route('/')
def home():
    data = {"message": "Homes endpoint"}
    return jsonify(data)


@my_routes.route('/jewlry')
def jewelry():
    data = {"message": "Jewelry endpoint"}
    return jsonify(data)


@my_routes.route('/forum')
def forum():
    data = {"message": "Forum endpoint"}
    return jsonify(data)


@my_routes.route('/aboutus')
def aboutus():
    data = {"message": "About us endpoint"}
    return jsonify(data)


@my_routes.route('/custom')
def custom():
    data = {"message": "Custom endpoint"}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True, port=5000)