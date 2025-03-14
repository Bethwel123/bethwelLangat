from . import db

class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    technologies = db.Column(db.JSON)
    image = db.Column(db.String(255))
    github = db.Column(db.String(255))
    live = db.Column(db.String(255))