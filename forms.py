# Imports 'FlaskForm' class from 'flask_wtf' module
from flask_wtf import FlaskForm
from wtforms import Form, StringField, PasswordField, validators

# Defines a LoginForm class that inherits from the Form class
class LoginForm(Form):
    email = StringField(
        "Email", [validators.DataRequired(), validators.Email()])
    password = PasswordField("Password", [validators.DataRequired()])


class SignupForm(Form):
    name = StringField(
        "Name", [validators.DataRequired(), validators.Length(min=2, max=50)])
    email = StringField(
        "Email", [validators.DataRequired(), validators.Email()])
    password = PasswordField(
        "Password", [validators.DataRequired(), validators.Length(min=8, max=20)])
    confirm_password = PasswordField("Confirm Password", [validators.DataRequired(
    ), validators.EqualTo('password', message='Passwords must match')])
