from flask import jsonify
from models.service import Service

def services_routes(app):
    @app.route('/api/services', methods=['GET'])
    def get_services():
        services = Service.query.all()
        return jsonify([{
            'id': service.id,
            'icon': service.icon,
            'title': service.title,
            'description': service.description,
            'features': service.features
        } for service in services])