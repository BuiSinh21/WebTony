from app.routes import *
from app import api

api.add_resource(home, "//")
api.add_resource(get_vocabulary, "/vocabulary/")
api.add_resource(get_random_vocabulary, "/random_vocabulary")
api.add_resource(check_meaning, "/meaning/<v1>/")
api.add_resource(check_verb, "/verb")