from database.db import db

class BlogPost(db.Model):
    __tablename__ = 'blog_posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50))
    read_time = db.Column(db.String(20))
    excerpt = db.Column(db.Text)
    date = db.Column(db.Date, nullable=False)
    url = db.Column(db.String(500))
    image = db.Column(db.String(500))
    tags = db.relationship('BlogTag', backref='post', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'category': self.category,
            'read_time': self.read_time,
            'excerpt': self.excerpt,
            'date': self.date.strftime('%Y-%m-%d'),
            'url': self.url,
            'image': self.image,
            'tags': [tag.tag for tag in self.tags]
        }

class BlogTag(db.Model):
    __tablename__ = 'blog_tags'

    id = db.Column(db.Integer, primary_key= True)
    tag = db.Column(db.String(50))
    post_id = db.Column(db.String, db.ForeignKey('blog_posts.id'))