from wtforms import Form, StringField, PasswordField, validators

class LoginForm(Form):
    email = StringField("Email", [validators.DataRequired(), validators.Email()])
    password = PasswordField("Password", [validators.DataRequired()])

class SignupForm(Form):
    name = StringField("Name", [validators.DataRequired(), validators.Length(min=2, max=50)])
    email = StringField("Email", [validators.DataRequired(), validators.Email()])
    password = PasswordField("Password", [validators.DataRequired(), validators.Length(min=6, max=20)])
    confirm_password = PasswordField("Confirm Password", [validators.DataRequired(), validators.EqualTo('password', message='Passwords must match')])