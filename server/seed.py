from app import app, db
from models.personal_info import PersonalInfo
from models.services import Services, ServiceFeature
from models.skills import SkillCategory, Skill
from models.projects import Project, ProjectTechnology
from models.education import Education, Achievement
from models.blog_posts import BlogPost, BlogTag
from models.testimonials import Testimonials
from datetime import datetime

def seed_database():
    with app.app_context():
        # Clear existing data
        db.drop_all()
        db.create_all()

        # Seed Personal Info
        personal_info = PersonalInfo(
            name="Bethwel Langat",
            title="Full Stack Software Developer",
            email="bethwellangat654@gmail.com",
            phone="+254 719218481",
            location="Nairobi, Kenya",
            bio="Passionate full stack developer with expertise in modern web technologies. Creating elegant solutions to complex problems. Always eager to learn and grow in a fast-paced environment."
        )
        db.session.add(personal_info)

        # Seed Services
        services_data = [
            {
                "icon": "FaCode",
                "title": "Frontend Development",
                "description": "Creating responsive React-based user interfaces",
                "features": [
                    "React Single Page Applications",
                    "Component Development",
                    "State Management",
                    "Frontend Routing",
                    "React Hooks Implementation",
                    "Context API Usage"
                ]
            },
            # Add other services here
        ]

        for service_info in services_data:
            service = Services(
                icon=service_info["icon"],
                title=service_info["title"],
                description=service_info["description"]
            )
            db.session.add(service)
            
            for feature in service_info["features"]:
                service_feature = ServiceFeature(
                    feature=feature,
                    service=service
                )
                db.session.add(service_feature)

        # Seed Skills
        skill_categories = {
            "frontend": ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Redux"],
            "backend": ["Node.js", "Flask", "Python", "Django", "RESTful APIs"],
            "database": ["PostgreSQL", "MySQL", "SQLite"],
            "tools": ["Git", "Docker", "VS Code", "Postman", "Heroku", "Vercel", "Render"],
            "softSkills": ["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability"],
            "git": ["Git", "GitHub"]
        }

        for category_id, skills in skill_categories.items():
            category = SkillCategory(
                id=category_id,
                name=category_id.capitalize()
            )
            db.session.add(category)
            
            for index, skill_name in enumerate(skills, 1):
                skill = Skill(
                    id=f"{category_id}_{index}",
                    name=skill_name,
                    category=category
                )
                db.session.add(skill)

        # Seed Projects
        projects_data = [
            {
                "title": "E-commerce Platform",
                "description": "Full-stack e-commerce solution with payment integration",
                "technologies": ["React", "Node.js", "Flask", "Stripe"],
                "image": "https://imgs.search.brave.com/AmjyOqh1VuTZLISukjqV36IGhtivwLwxb75zISJEdTQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lYXN5LXNob3Bw/aW5nLW9ubGluZS1j/b25jZXB0XzM2NzQz/LTI5MS5qcGc_c2Vt/dD1haXNfaHlicmlk",
                "github": "https://github.com/johndoe/ecommerce",
                "live": "https://ecommerce-demo.com"
            },
            # Add other projects here
        ]

        for project_info in projects_data:
            project = Project(
                title=project_info["title"],
                description=project_info["description"],
                image=project_info["image"],
                github=project_info["github"],
                live=project_info["live"]
            )
            db.session.add(project)
            
            for tech in project_info["technologies"]:
                project_tech = ProjectTechnology(technology=tech, project=project)
                db.session.add(project_tech)

        # Seed Blog Posts
        blog_posts_data = [
            {
                "title": "Building a Simple Web Application Security Scanner with Python",
                "category": "Development",
                "read_time": "5 min read",
                "excerpt": "Learn best practices for building large-scale React applications with optimal performance.",
                "tags": ["Python", "Web Security", "Automation"],
                "date": "2024-01-15",
                "url": "https://www.freecodecamp.org/news/build-a-web-application-security-scanner-with-python/",
                "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            },
            # Add other blog posts here
        ]

        
        for post_info in blog_posts_data:
            post = BlogPost(
                title=post_info["title"],
                category=post_info["category"],
                read_time=post_info["read_time"],
                excerpt=post_info["excerpt"],
                date=datetime.strptime(post_info["date"], "%Y-%m-%d"),
                url=post_info["url"],
                image=post_info["image"]
            )
            db.session.add(post)
            
            for tag_name in post_info["tags"]:
                tag = BlogTag(tag=tag_name, post=post)
                db.session.add(tag)

        # seed education
        education_data = [
            {
                "degree": "Bachelor of Science in Computer Science",
                "institution": "KCS University",
                "duration": "2019 - 2023",
                "description": "Focused on software engineering principles and modern development practices.",
                "achievements": [
                    "First Class Honours",
                    "Best Final Year Project Award",
                    "President of Computing Society"
                ]
            },
            {
                "degree": "Full Stack Web Development",
                "institution": "Tech Academy Bootcamp",
                "duration": "2023",
                "description": "Intensive program covering modern web development technologies and practices.",
                "achievements": [
                    "Built 5 full-stack applications",
                    "Awarded Best Team Project",
                    "Perfect attendance record"
                ]
            }
        ]

        for edu_info in education_data:
            education = Education(
                degree=edu_info["degree"],
                institution=edu_info["institution"],
                duration=edu_info["duration"],
                description=edu_info["description"]
            )
            db.session.add(education)
            
            for achievement_name in edu_info["achievements"]:
                achievement = Achievement(
                    name=achievement_name,
                    education=education
                )
                db.session.add(achievement)

        # Seed Testimonials
        testimonials_data = [
            {
                "name": "Sarah Johnson",
                "role": "Project Manager at TechCorp",
                "text": "Working with this developer was an excellent experience. They delivered high-quality code and met all deadlines.",
                "image": "https://randomuser.me/api/portraits/women/1.jpg"
            },
            # Add other testimonials here
        ]

        for testimonial_info in testimonials_data:
            testimonial = Testimonials(
                name=testimonial_info["name"],
                role=testimonial_info["role"],
                text=testimonial_info["text"],
                image=testimonial_info["image"]
            )
            db.session.add(testimonial)

        db.session.commit()

if __name__ == "__main__":
    seed_database()
