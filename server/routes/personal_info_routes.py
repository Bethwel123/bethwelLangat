from flask import jsonify
from models.personal_info import PersonalInfo

def personal_info_routes(app):
    @app.route('/api/personal-info', methods=['GET'])
    def get_personal_info():
        info = PersonalInfo.query.first()
        return jsonify({
            'name': info.name,
            'title': info.title,
            'email': info.email,
            'phone': info.phone,
            'location': info.location,
            'bio': info.bio
        })