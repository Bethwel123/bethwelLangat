from database.db import db

class Education(db.Model):
    __tablename__ = 'education'

    id = db.Column(db.Integer, primary_key=True)
    degree = db.Column(db.String(100), nullable=False)
    institution = db.Column(db.String(100), nullable=False)
    duration = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    achievements = db.relationship('Achievement', backref='education', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'degree': self.degree,
            'institution': self.institution,
            'duration': self.duration,
            'description': self.description,
            'achievements': [achievement.name for achievement in self.achievements]
        }
    
class Achievement(db.Model):
    __tablename__ = 'achievements'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    education_id = db.Column(db.Integer, db.ForeignKey('education.id'), nullable=False)
