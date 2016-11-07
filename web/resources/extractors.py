from flask_restful import Resource
from flask_jwt import jwt_required
from marshmallow import Schema, fields, post_load, validates, ValidationError
from models.extractor import Extractor

class ExtractorSchema(Schema):
	id = fields.Str(dump_only=True)
	# timelines = fields.Nested(TimelineSchema, many=True, only='id')

	@post_load
	def make_db(self, data):
		return Extractor(**data)

	class Meta:
		# How many of these should be required
		additional = ('description', 'version', 'input_type', 'output_type')

class ExtractorResource(Resource):
	@jwt_required()
	def get(self, extractor_id):
		pass
	def put(self, extractor_id):
		pass

class ExtractorListResource(Resource):
	@jwt_required()
	def get(self):
		pass
	def put(self):
		pass