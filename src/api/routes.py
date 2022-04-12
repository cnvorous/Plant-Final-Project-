"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Plant, Favorites
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/plants', methods=['GET'])
def get_plants():
    plant_query = Plant.query.all()
    all_plants = list(map(lambda x: x.serialize(), plant_query))

    #all_plants= [plant.serialize() for plant in plant_query]  this means same thing as line 23

    return jsonify(all_plants), 200


@api.route('/plants', methods=['POST'])
def post_plants():
    body=request.get_json()
    print(body)
    for item in body:
        each_plant= Plant(
            blooms= item['blooms'],
            common_name= item['common_name'],
            fertilizer_req= item['fertilizer_req'],
            fertilizer_tips= item['fertilizer_tips'],
            growth_period= item['growth_period'],
            height= item['height'],
            light_exposure= item['light_exposure'],
            most_suitable_location= item['most_suitable_location'],
            plant_care_tips= item['plant_care_tips'], 
            plant_details= item['plant_details'],
            plant_image= item['plant_image'], 
            poisonous=item['poisonous'], 
            scientific_name=item['scientific_name'], 
            seasonal= item['seasonal'],
            size= item['size'], 
            temperature= item['temperature'],
            water_req= item['water_req'], 
            water_tips= item['water_tips'],
            water_day=item['water_day'],
            )

        db.session.add(each_plant)
        db.session.commit()

    plant_query = Plant.query.all()
    all_plants = list(map(lambda x: x.serialize(), plant_query))
    return jsonify(all_plants), 200 

@api.route('/favorites', methods=['GET'])
def get_favorties_plants():

    favorite_query = Favorites.query.all()
    favorite_list= [favorite.serialize()for favorite in favorite_query]

    return jsonify(favorite_list), 200


@api.route('/favorites', methods=['POST'])
def post_favorite():
    body=request.get_json()
    favorite= Favorites(name=body['category_name'], user_id=body['user_id'], plant_id=body['plant_id'])

    db.session.add(favorite)
    db.session.commit()

    favorite_query = Favorites.query.all()
    favorite_list= [favorite.serialize()for favorite in favorite_query]

    return jsonify(favorite_list), 200

@api.route('/favorites/<int:id>', methods=['DELETE'])
def delete_favorite(id):
    favorite= Favorites.query.get(id)
    # if favorite is None:
    #     raise APIException("Favorite List not found", status_code=404)

    db.session.delete(favorite)
    db.session.commit()

    favorite_query = Favorites.query.all()
    favorite_list= [favorite.serialize()for favorite in favorite_query]

    return jsonify(favorite_list), 200
