from database.db import db

class Project(db.Model):
    __tablename__ = 'project'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    image = db.Column(db.String(100))
    github = db.Column(db.String(100))
    live = db.Column(db.String(200))
    technologies = db.relationship('ProjectTechnology', backref='project', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image': self.image,
            'github': self.github,
            'live': self.live,
            'technologies': [tech.name for tech in self.technologies]
        }


class ProjectTechnology(db.Model):
    __tablename__ = 'project_technologies'

    id = db.Column(db.Integer, primary_key=True)
    technology = db.Column(db.String(100))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))