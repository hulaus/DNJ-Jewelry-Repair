# a basic Flask web application with three routes:
from flask import Flask, render_template, request, redirect, url_for
from forms import LoginForm, SignupForm

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm(request.form)
    if request.method == "POST" and form.validate():
        # Process the validated login data
        # Authenticate the user and log them in
        return redirect(url_for("success"))
    return render_template("login.html", form=form)

@app.route("/signup", methods=["GET", "POST"])
def signup():
    form = SignupForm(request.form)
    if request.method == "POST" and form.validate():
        # Process the validated signup data
        # Save the user data and log them in
        return redirect(url_for("success"))
    return render_template("signup.html", form=form)

@app.route("/success")
def success():
    return "Success"

if __name__ == "__main__":
    app.run()