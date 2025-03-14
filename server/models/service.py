from db import db

class Service(db.Model):
    __tablename__ = "services"

    id = db.Column(db.Integer, primary_key=True)
    icon = db.Column(db.String(50))
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    features = db.Column(db.JSON)