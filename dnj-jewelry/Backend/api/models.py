# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(40), unique=True, nullable=False)
    password = db.Column(db.String(60), unique=True, nullable=False)

    def __repr__(self):
        return f'<user {self.username}>'