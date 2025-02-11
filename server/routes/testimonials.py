from flask import request, jsonify
from database.db import db
from models.testimonials import Testimonials

def testimonial_routes(app):
    @app.route('/testimonials', methods=['GET'])
    def get_testimonials():
        testimonials = Testimonials.query.all()
        return jsonify([testimonial.to_dict() for testimonial in testimonials])
    
    @app.route('/testimonials/<int:id>', methods=['GET'])
    def get_testimonial(id):
        testimonial = Testimonials.query.get_or_404(id)
        return jsonify(testimonial.to_dict())

    @app.route('/testimonials', methods=['POST']) 
    def create_testimonial():
        data = request.get_json()

        if not data.get('name'):
            return jsonify({'error': 'Name is required'}), 400
            
        if not data.get('role'):
            return jsonify({'error': 'Role is required'}), 400
            
        if not data.get('text'):
            return jsonify({'error': 'Text is required'}), 400

        testimonial = Testimonials(
            name=data['name'],
            role=data['role'],
            text=data['text'],
            image=data.get('image')
        )

        db.session.add(testimonial)
        db.session.commit()

        return jsonify(testimonial.to_dict()), 201

    @app.route('/testimonials/<int:id>', methods=['PUT'])
    def update_testimonial(id):
        testimonial = Testimonials.query.get_or_404(id)
        data = request.get_json()

        if 'name' in data:
            testimonial.name = data['name']
        if 'role' in data:
            testimonial.role = data['role']
        if 'text' in data:
            testimonial.text = data['text']
        if 'image' in data:
            testimonial.image = data['image']

        db.session.commit()
        return jsonify(testimonial.to_dict())

    @app.route('/testimonials/<int:id>', methods=['DELETE'])
    def delete_testimonial(id):
        testimonial = Testimonials.query.get_or_404(id)
        db.session.delete(testimonial)
        db.session.commit()
        return jsonify({'message': 'Testimonial deleted successfully'})