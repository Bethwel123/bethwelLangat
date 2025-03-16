def init_routes(app):
    from .main import main_bp  # Example: Import your blueprint
    app.register_blueprint(main_bp)
