from flask import request, jsonify
from database.db import db
from models.skills import Skill

def skills_routes(app):
    @app.route('/skills', methods=['GET'])
    def get_skills():
        skills = Skill.query.all()
        grouped_skills = {
            'frontend': [],
            'backend': [],
            'database': [],
            'tools': [],
            'softSkills': [],
            'git': []
        }
    
        for skill in skills:
            category_id = skill.category_id
            if category_id in grouped_skills:
                grouped_skills[category_id].append(skill.name)
        
        return jsonify(grouped_skills)
    
    @app.route('/skills/<string:id>', methods=['GET'])
    def get_skill(id):
        skill = Skill.query.get_or_404(id)
        return jsonify({
            'id': skill.id,
            'name': skill.name,
            'category_id': skill.category_id
        })
    
    @app.route('/skills', methods=['POST'])
    def create_skill():
        data = request.get_json()

        if not data.get('name'):
            return jsonify({'error': 'Name is required'}), 400
        
        if not data.get('category_id'):
            return jsonify({'error': 'Category Id id required'}), 400
        
        skill = Skill(
            name = data['name'],
            category_id = data['category_id']
        )

        db.session.add(skill)
        db.session.commit()

        return jsonify({
            'id': skill.id,
            'name': skill.name,
            'category_id': skill.category_id
        }), 201
    
    @app.route('/skills/<string:id>', methods=['PUT'])
    def update_skill(id):
        skill = Skill.query.get_or_404(id)
        data = request.get_json()

        if 'name' in data:
            skill.name = data['name']
        if 'category_id' in data:
            skill.category_id = data['category_id']

        db.session.commit()
        
        return jsonify({
            'id': skill.id,
            'name': skill.name,
            'category_id': skill.category_id
        })

    @app.route('/skills/<string:id>', methods=['DELETE'])
    def delete_skill(id):
        skill = Skill.query.get_or_404(id)
        db.session.delete(skill)
        db.session.commit()
        return jsonify({'message': 'Skill deleted successfully'})

    @app.route('/skills/category/<string:category_id>', methods=['GET'])
    def get_skills_by_category(category_id):
        skills = Skill.query.filter_by(category_id=category_id).all()
        return jsonify([{
            'id': skill.id,
            'name': skill.name,
            'category_id': skill.category_id
        } for skill in skills])