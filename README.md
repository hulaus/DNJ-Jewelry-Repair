# DNJ-Jewelry-Repair

*python -m venv venv*

*venv\Scripts\activate* I had to cd into Scripts inorder to activate enviroment!

Framework for Python: Flask

Using Templates & Jinja UNLV-SD-05-PPP\PPP-5 DAY 5\In Class\Blueprints and Views

https://flask-wtf.readthedocs.io/en/1.0.x/
Flask Library: WTForms - Create a form: Define a form using your chosen validation library. This form will include fields for user input and the associated validation rules.
*pip install Flask WTForms*
*pip install email_validator*

Structure:
Python_Flask_Validator/
    ├── app.py             "app.py" contains the route definitions, view functions, and other server-side logic.
    ├── forms.py            The "forms.py" file contains the form classes for handling user input and validation. | Easily import your forms into 'app.py'
    ├── templates/          The "templates folder" contains the HTML templates that are rendered and sent to the client (browser) by the server.
    │   ├── contacts.html   Not configured
    │   ├── home.html       Login/Signup 
    │   ├── login.html      Configured
    |   |── service.html    Not configured
    │   ├── signup.html     Configured
    ├── static/
    │   ├── css/
    │   ├── js/
    ├── venv/               Python virtual environment