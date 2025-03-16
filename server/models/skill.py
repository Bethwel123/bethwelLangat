from db import db

class Skill(db.Model):
    __tablename__ = "skills"

    id = db.Coulmn(db.integer, primary_key=True)
    category = db.column(db.String, nullable=False)
    name = db.Column(db.String(100), nullable=False)