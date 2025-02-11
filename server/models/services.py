from database.db import db

class Services(db.Model):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    icon = db.Column(db.String(50))
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    features = db.relationship('ServiceFeature', backref='service', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'icon': self.icon,
            'title': self.title,
            'description': self.description,
            'features': [feature.name for feature in self.features]
        }

class ServiceFeature(db.Model):
    __tablename__ = 'service_features'

    id = db.Column(db.Integer, primary_key=True)
    feature = db.Column(db.String(200))
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
    
    def to_dict(self):
        return {
            'id': self.id,
            'feature': self.feature
        }