from flask import jsonify, request
from database.db import db
from models.personal_info import PersonalInfo

def personal_info_routes(app):
    @app.route('/personalInfo', methods=['GET'])
    def get_personalInfo():
        data = PersonalInfo.query.first()
        return jsonify({
            'name': data.name,
            'title': data.title,
            'email': data.email,
            'phone': data.phone,
            'location': data.location,
            'bio': data.bio
        })

    @app.route('/personalInfo', methods=['POST'])
    def create_personal_info():
        data = request.get_json()
        new_info = PersonalInfo(**data)
        db.session.add(new_info)
        db.session.commit()
        return jsonify({'message': 'Personal info created successfully'}), 201

    @app.route('/personalInfo/<int:id>', methods=['PUT'])
    def update_personal_info(id):
        info = PersonalInfo.query.get_or_404(id)
        data = request.get_json()
        for key, value in data.items():
            setattr(info, key, value)
        db.session.commit()
        return jsonify({'message': 'Personal info updated successfully'})

    @app.route('/personalInfo/<int:id>', methods=['DELETE'])
    def delete_personal_info(id):
        info = PersonalInfo.query.get_or_404(id)
        db.session.delete(info)
        db.session.commit()
        return jsonify({'message': 'Personal info deleted successfully'})     