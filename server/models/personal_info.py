from database.db import db

class PersonalInfo(db.Model):
    __tablename__ = 'personal_info'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    title = db.Column(db.String(100))
    email = db.Column(db.String(100))
    phone = db.Column(db.String(100))
    location = db.Column(db.String(100))
    bio = db.Column(db.Text) 
