from flask import jsonify
from models.project import Project

def projects_routes(app):
    @app.route('/api/projects', methods=['GET'])
    def get_projects():
        projects = Project.query.all()
        return jsonify([{
            'id': project.id,
            'title': project.title,
            'description': project.description,
            'technologies': project.technologies,
            'image': project.image,
            'github': project.github,
            'live': project.live
        } for project in projects])