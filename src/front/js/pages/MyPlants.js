import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { PlantCard } from "../component/PlantCard";
import { Context } from "../store/appContext";

export const MyPlants = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const listname = "MyPlants";
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
    <div className="single-body d-flex-inline">
      <h1 className="single-name text-center">My Tracked Plants</h1>
      <div className="plant-div m-5 p-4 row d-flex flex-wrap justify-content-center">
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
          : "Add your current plant collection here... "}
      </div>
    </div>
  );
};

MyPlants.propTypes = {
  match: PropTypes.object,
};
