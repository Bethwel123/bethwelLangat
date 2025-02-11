from database.db import db

class SkillCategory(db.Model):
    __tablename__ = 'skill_category'

    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    skills = db.relationship('Skill', backref='category', lazy=True, cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'skills': [skill.name for skill in self.skills]
        }

class Skill(db.Model):
    __tablename__ = 'skills'

    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category_id = db.Column(db.String, db.ForeignKey('skill_category.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }