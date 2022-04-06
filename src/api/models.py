from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

pivots = db.Table('pivots',
    db.Column('favorite_id',db.Integer, db.ForeignKey('favorites.id'), primary_key=True)
    db.Column('plant_id', db.Integer, db.ForeignKey('plant.id'), primary_key=True)
)

class User(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    email=db.Column(db.String(120), unique=True, nullable=False)
    password=db.Column(db.String(80), unique=False, nullable=False)
    first_name=db.Column(db.String(70), nullable=False)
    last_name=db.Column(db.String(70), nullable=False)
    phone=db.Column(db.String(30), nullable=False)
    sms_checkbox=db.Column(db.Boolean(), unique=False, nullable=False)
    zipcode=db.Column(db.String(15), nullable=False)
    profile_image=db.Column(db.String(250), nullable=True)
    favorite=db.relationship("Favorites")
    

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "sms_checkbox": self.sms_checkbox,
            "zipcode": self.zipcode,
            "profile_image": self.profile_image,
        }

        ################################

class Favorites(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'))
    list_name=db.Column(db.String(40), nullable=True) #would come from user 
            #  pivots = db.relationship('Discussion', secondary=pivots, lazy='subquery',
            #     backref=db.backref('users', lazy=True))
            # comments = db.relationship('Comment', backref='users', lazy=True)
    pivots = db.relationship('Plant', secondary=pivots, lazy='subquery',
        backref=db.backref('favorites', lazy=True))
    plants=db.relationship('Plant', backref='favorites', lazy=True)
    plant_selected = db.relationship('Plant', backref='favorites', lazy=True)

                # plant_id=db.children = relationship("Plant",
                #                 secondary=pivots,
                #                 backref="parents")

    def __repr__(self):
        return '<Favorites%r>' % self.id

    def serialize(self):
        return {
               "id": self.id,
              "list_name": self.list_name,
              #"favorites":                //fav[] how would we return picked plants
              "plants": list(map(lambda plant: plant.serialize(), self.plants))
        }

class Plant(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    scientific_name=db.Column(db.String(250), nullable=False)
    common_name=db.Column(db.String(250), nullable=False)
    size=db.Column(db.String(50), nullable=False)
    height=db.Column(db.String(50), nullable=False) 
    blooms=db.Column(db.String(250), nullable=False)
    seasonal=db.Column(db.String(250), nullable=False) 
    growth_period=db.Column(db.String(250), nullable=False)
    light_exposure=db.Column(db.String(250), nullable=False)
    most_suitable_location=db.Column(db.Text(), nullable=False)
    temperature=db.Column(db.String(50), nullable=False)
    plant_image=db.Column(db.Text(), nullable=False)
    water_req=db.Column(db.String(50), nullable=False) 
    water_tips=db.Column(db.Text(), nullable=False)
    water_day=db.Column(db.Integer, nullable=False)
    fertilizer_req=db.Column(db.String(250), nullable=False)
    fertilizer_tips=db.Column(db.Text(), nullable=False)
    poisonous=db.Column(db.Text(), nullable=False)
    plant_details=db.Column(db.Text(), nullable=False)
    plant_care_tips=db.Column(db.Text(), nullable=False)
    favorite_id=db.Column(db.Integer, db.ForeignKey('favorites.id'))
    plant_selected = db.relationship('Plant', backref='favorites', lazy=True)

    def __repr__(self):
        return '<Plant %r>' % self.common_name

    def serialize(self):
        return {
               "id": self.id,
            "scientific_name": self.scientific_name,
            "common_name": self.common_name,
            "size": self.size,
            "height": self.height,
            "blooms": self.blooms,
            "seasonal": self.seasonal, 
            "growth_period": self.growth_period,
            "light_exposure": self.light_exposure,
            "most_suitable_location": self.most_suitable_location,
            "temperature": self.temperature,
            "plant_image": self.plant_image,
            "water_req": self.water_req,
            "water_tips": self.water_tips,
            "fertilizer_req": self.fertilizer_req,
            "fertilizer_tips": self.fertilizer_tips,
            "poisonous": self.poisonous,
            "plant_details": self.plant_details,
            "plant_care_tips": self.plant_care_tips,
            "plant_selected": list(map(lambda plant_selected: plant_selected.serialize(), self.plant_selected))
        }





