from flask import jsonify, request
from models.education import Education, Achievement
from database.db import db


# Get all
def education_routes(app):
    @app.route('/education', methods=['GET'])
    def get_education():
        education_list = Education.query.all()
        return jsonify([edu.to_dict() for edu in education_list])
    
# Get one
def get_education(app):
    @app.route('/education/<int:id>', methods=['GET'])
    def education_by_id(id):
        education = Education.query.get(id)
        return jsonify(education.to_dict())
    
# Create a new education record
def create_education(app):
    @app.route('/education', methods=['POST'])
    def create_education():
        data = request.get_json()

        # Validate input data
        if not all(key in data for key in ('degree', 'institution', 'duration', 'description')):
            return jsonify({"error": "Missing required fields"}), 400
        education = Education(
            degree=data['degree'],
            institution=data['institution'],
            duration=data['duration'],
            description=data['description']
        )
        db.session.add(education)
        db.session.commit()
        return jsonify(education.to_dict()), 201
    
# Update an education record
def update_education(app):
    @app.route('/education/<int:education_id>', methods=['PUT'])
    def update_education(education_id):
        education = Education.quer.get_or_404(education_id)
        data = request.get_json()

        education.degree = data['degree']
        education.institution = data['institution']
        education.duration = data['duration']
        education.description = data['description']

        db.session.commit()
        return jsonify(education.to_dict())
    
# Create a new achievement for a specifc education
def create_achievement(app):
    @app.route('/education/<int:education_id>/achievements', methods=['POST'])
    def create_achievement(education_id):
        data = request.get_json()
        education = Education.query.get_or_404(education_id)
        new_achievement = Achievement(
        name=data['name'],
        education_id=education.id
        )
        db.session.add(new_achievement)
        db.session.commit()
        return jsonify({'id': new_achievement.id, 'name': new_achievement.name}), 201

# Get all achievements for a specific education record
def get_achievemnts(app):
    @app.route('/education/<int:education_id/achievements', methods=['GET'])
    def get_achievements(education_id):
        education = Education.queru.get_or_404(education_id)
        return jsonify([achievement.name for achievement in education.achievements])
    
# Update an achievement for a specific record
def update_achievement(app):
    @app.route('/education/<int:education_id>/achievements', methods=['PUT'])
    def upate_achievement(education_id, achievement_id):
        education = Education.query.get_or_404(education_id)
        achievement = Achievement.query.get_or_404(achievement_id)
        data = request.get_json()
        
        achievement.name = data['name']

        db.session.commit()
        return jsonify({'id': achievement.id, 'name': achievement.name})
    
# Delete an achievement fro  a specific eduaction record
def delete_achievement(app):
    @app.route('education/<int:education_id>/achievements', methods=['DELETE'])
    def delete_achievement(education_id, achievement_id):
        education = Education.query.get_or_404(education_id)
        achievement = Achievement.query.get_or_404(achievement_id)
        db.session.delete(achievement)
        db.session.commit()
        return '', 204
    
# Delete an education record
def detlete_education(app):
    @app.route('/education/<int:education_id>', methods=['DELETE'])
    def delete_education(education_id):
        education = Education.query.get_or_404(education_id)
        db.session.delete(education)
        db.session.commit()
        return '', 204
    
