from flask import Flask, render_template, request, url_for


app = Flask(__name__)


"""
Render templates are just spot fillers for now. Eventually these routes 
will be access points into our db to get/post data
"""
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    # form = 
    if request.method == "POST" and form.validate():
        # Process the validated login data
        # Authenticate the user and log them in 
      #  return redirect(url_for("success"))
        return render_template("signup.html") #form=form
    
if __name__ == "__main__":
    app.run(debug=True, port=5001)





