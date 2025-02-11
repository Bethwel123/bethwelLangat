from database.db import db

class Testimonials(db.Model):
    __tablename__ = "testimonials"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    role = db.Column(db.String(100))
    text = db.Column(db.Text)
    image = db.Column(db.String(500))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'role': self.role,
            'text': self.text,
            'image': self.image
        }