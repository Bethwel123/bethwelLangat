from db import db

class Testimonial(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    role = db.Column(db.String(100))
    text = db.Column(db.Text)
    image = db.Column(db.String(255))