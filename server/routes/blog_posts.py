from flask import jsonify, request
from models.blog_posts import BlogPost, BlogTag
from database.db import db
from datetime import datetime

def blog_post_routes(app):
    @app.route('/blog-posts', methods=['GET'])
    def get_blog_posts():
        posts = BlogPost.query.all()
        # return jsonify([post.to_dict() for post in posts])
        return jsonify([{
            'id': post.id,
            'title': post.title,
            'category': post.category,
            'read_time': post.read_time,
            'excerpt': post.excerpt,
            'date': post.date,
            'url': post.url,
            'image': post.image,
            'tags': [tag.tag for tag in post.tags]
        } for post in posts])

    @app.route('/blog-posts', methods=['POST'])
    def create_blog_post():
        try:
            data = request.get_json()

            # Create a new blog post
            post = BlogPost(
                title=data['title'],
                category=data['category'],
                read_time=data['read_time'],
                excerpt=data['excerpt'],
                date=datetime.strptime(data['date'], '%Y-%m-%d'),
                url=data['url'],
                image=data['image']
            )
            db.session.add(post)

            # Add tags
            for tag_name in data['tags']:
                tag = BlogTag(tag=tag_name, post=post)
                db.session.add(tag)

            db.session.commit()
            return jsonify({'message': 'Blog post created successfully'}), 201
        except Exception as e:
            print(e)
            return jsonify({'error': 'Failed to create blog post'}), 400
    
    
    @app.route('/blog-posts/<int:id>', methods=['PUT'])
    def update_blog_post(id):
        post = BlogPost.query.get(id)
        data = request.json
        post.title = data['title']
        post.category = data['category']
        post.read_time = data['read_time']
        post.excerpt = data['excerpt']
        post.date = data['date']
        post.url = data['url']
        post.image = data['image']
        db.session.commit()
        return jsonify(post.to_dict())
    
    @app.route('/blog-posts/<int:id>', methods=['DELETE'])
    def delete_blog_post(id):
        post = BlogPost.query.get(id)
        db.session.delete(post)
        db.session.commit()
        return jsonify(post.to_dict())
