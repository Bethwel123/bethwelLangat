from flask import jsonify, request
from database.db import db
from models.projects import Project, ProjectTechnology

def projects_routes(app):
    @app.route('/projects', methods=['GET'])
    def get_projects():
        projects = Project.query.all()
        project_list = []

        for project in projects:
            project_data = {
                'id': project.id,
                'title': project.title,
                'description': project.description,
                'technologies': [tech.technology for tech in project.technologies],
                'image': project.image,
                'github': project.github,
                'live': project.live
            }
            project_list.append(project_data)
        return jsonify(project_list)
        
    @app.route('/projects', methods=['POST'])
    def create_project():
        data = request.get_json()
        new_project = Project(
            title=data['title'],
            description=data['description'],
            image=data['image'],
            github=data['github'],
            live=data['live']
        )
        db.session.add(new_project)

        for tech_name in data['technologies']:
            tech = ProjectTechnology(technology=tech_name, project=new_project)
            db.session.add(tech)

        db.session.commit()
        return jsonify({'message': 'Project created successfully'}), 201
    
    @app.route('/projects/<int:id>', methods=['PUT'])
    def update_project(id):
        project = Project.query.ger_or_404(id)
        data = request.get_json()
        for key, value in data.items():
            setattr(project,key,value)
        db.session.commit()
        return jsonify({'message': "Project updated successfully"}), 201
    
    @app.route('/projects/<int:id>', methods=['DELETE'])
    def delete_project(id):
        project = Project.query.get_or_404(id)
        db.session.delete(project)
        db.session.commit()
        return jsonify({'message': 'Project deleted successfully'})