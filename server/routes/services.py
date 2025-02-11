from flask import jsonify, request
from database.db import db
from models.services import Services, ServiceFeature

def services_routes(app):
    @app.route('/services', methods=['GET'])
    def get_services():
        services = Services.query.all()
        return jsonify([{
            'id': service.id,
            'icon': service.icon,
            'title': service.title,
            'description': service.description,
            'features': [feature.feature for feature in service.features]
        } for service in services])

    @app.route('/services/<int:id>', methods=['GET'])
    def get_service(id):
        services = Services.query.get_or_404(id)
        return jsonify([{
            'id': service.id,
            'icon': service.icon,
            'title': service.title,
            'description': service.description,
            'features': [feature.feature for feature in service.features]
        } for service in services])

    @app.route('/services', methods=['POST'])
    def create_service():
        data = request.get_json()
        new_service = Services(
            icon=data['icon'],
            title=data['title'],
            description=data['description']
        )
        db.session.add(new_service)

        # Add features
        for feature_text in data['features']:
            feature = ServiceFeature(
                feature=feature_text,
                service=new_service
            )
            db.session.add(feature)

        db.session.commit()
        return jsonify({'message': 'Service created successfully'}), 201

    @app.route('/services/<int:id>', methods=['PUT'])
    def update_service(id):
        service = Services.query.get_or_404(id)
        data = request.get_json()
        for key, value in data.items():
            setattr(service, key, value)
        db.session.commit()
        return jsonify({'message': 'Service updated successfully'})

    @app.route('/services/<int:id>', methods=['DELETE'])
    def delete_service(id):
        service = Services.query.get_or_404(id)
        db.session.delete(service)
        db.session.commit()
        return jsonify({'message': 'Service deleted successfully'})
