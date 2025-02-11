from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from database.db import db
from routes.personal_info import personal_info_routes
from routes.services import services_routes
from routes.testimonials import testimonial_routes
from routes.blog_posts import blog_post_routes
from routes.education import education_routes
from routes.skills import skills_routes
from routes.projects import projects_routes
import os

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
instance_path = os.path.join(basedir, 'instance')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(instance_path, 'portfolio.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

# Create database tables
with app.app_context():
    db.create_all()


# Register routes
personal_info_routes(app)
services_routes(app)
testimonial_routes(app)
blog_post_routes(app)
education_routes(app)
skills_routes(app)
projects_routes(app)


if __name__ == '__main__':
    app.run(port=5555, debug=True)
