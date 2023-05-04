# Need to know
Its good practice to: 

Always start with (activating venv) stay within the environment.

Run flask run instead of python app.py

Otherwise there will be a dependency hell

## Set the Flask application environment variable by running the command:
*export FLASK_APP=app.py*

## Developement mode auto debugging and reload code changes
export FLASK_ENV=development

# Installs
*python -m venv venv*

*pip install supabase*

*pip freeze > requirements.txt*

*pip install Flask*

*pip install httpx*

*pip install python-dotenv*

*pip install flask[async]*

*pip install email-validator*

*pip install flask-bcrypt*

<!-- *pip install sqlalchemy* -->

*pip freeze > requirements.txt*
*pip install -r requirements.txt / install req*

*pip install bcrypt*

*pip install --upgrade --force-reinstall supabase*


## Debug 
*app run(debug=True)*

*flask run --debug*

# Issues
httpx 0.16.1 was outdated 
*pip install --upgrade httpx*
Successfully installed httpcore-0.17.0 httpx-0.24.0

# Structure of templates 
Jinja2 default templating engine for Flask

Check version *pip freeze | grep Jinja2*

Jinja2==3.1.2

Backend
  ├── app.py
  └── templates/
      ├── layout.html
      ├── login.html
      └── signup.html