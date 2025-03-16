from flask import jsonify
from models.blog_post import BlogPost

def blog_posts_routes(app):
    @app.route('/api/blog-posts', methods=['GET'])
    def get_blog_posts():
        posts = BlogPost.query.all()
        return jsonify([{
            'id': post.id,
            'title': post.title,
            'category': post.category,
            'readTime': post.read_time,
            'excerpt': post.excerpt,
            'tags': post.tags,
            'date': post.date.strftime('%Y-%m-%d'),
            'url': post.url,
            'image': post.image
        } for post in posts])