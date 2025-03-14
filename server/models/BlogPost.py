from db import db

class BlogPost(db.Moedel):
    __tablename__ = "blogPosts"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    category = db.Column(db.String(50))
    read_time = db.Column(db.String(20))
    excerpt = db.Column(db.Text)
    tags = db.Column(db.JSON)
    date = db.Column(db.Date)
    url = db.Column(db.String(255))
    image = db.Column(db.String(255))