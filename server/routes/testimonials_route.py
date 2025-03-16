from flask import jsonify
from models.testimonial import Testimonial

def testimonials_routes(app):
    @app.route('/api/testimonials', methods=['GET'])
    def get_testimonials():
        testimonials = Testimonial.query.all()
        return jsonify([{
            'id': testimonial.id,
            'name': testimonial.name,
            'role': testimonial.role,
            'text': testimonial.text,
            'image': testimonial.image
        } for testimonial in testimonials])