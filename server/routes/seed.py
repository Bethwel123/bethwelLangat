from app import app
from db import db
from models.personal_info import PersonalInfo
from models.service import Service
from models.project import Project
from models.blog_post import BlogPost
from models.testimonial import Testimonial
from models.skill import Skill
from datetime import datetime
import json

def load_data():
    with open('data.json', 'r') as file:
        data = json.load(file)
        
    with app.app_context():
        db.create_all()
        
        personal_info = PersonalInfo(**data['personalInfo'])
        db.session.add(personal_info)
        
        for service_data in data['services']:
            service = Service(**service_data)
            db.session.add(service)
            
        for project_data in data['projects']:
            project = Project(**project_data)
            db.session.add(project)
            
        for post_data in data['blogPosts']:
            post_data['date'] = datetime.strptime(post_data['date'], '%Y-%m-%d').date()
            post = BlogPost(**post_data)
            db.session.add(post)

        for category, skills in data['skills'].items():
            for skill_name in skills:
                skill = Skill(category=category, name=skill_name)
                db.session.add(skill)
            
        for testimonial_data in data['testimonials']:
            testimonial = Testimonial(**testimonial_data)
            db.session.add(testimonial)
            
        db.session.commit()

if __name__ == '__main__':
    load_data()