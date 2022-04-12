import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { PlantCard } from "../component/PlantCard";
import { Context } from "../store/appContext";

export const MyPlants = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const listname = params.listname;
  const favoritesObject = store.favoritePlants.filter(
    (item) => item.category_name == "MyPlants"
  );
  console.log(favoritesObject);
  var favPlantDetails = favoritesObject.map((fav) => {
    let found = store.plantLibrary.find((plant) => plant.id == fav.plant_id);
    return found;
  });
  console.log(favPlantDetails);

  return (
    <div className="single-fav-body d-flex-inline">
      <h1 className="text-center">My Plants</h1>
      <div className="favs-list d-sm-flex flex-wrap justify-content-sm-evenly">
        {favPlantDetails && favPlantDetails.length > 0
          ? favPlantDetails.map((favPlant, index) => {
              return (
                <PlantCard
                  plants={favPlant}
                  key={index}
                  onDelete={true}
                  listName={listname}
                />
              );
            })
          : "Loading... "}
      </div>
    </div>
  );
};

MyPlants.propTypes = {
  match: PropTypes.object,
};
