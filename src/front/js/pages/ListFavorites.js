import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { PlantCard } from "../component/PlantCard";
import { Context } from "../store/appContext";

export const ListFavorites = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const listname = params.listname;
  const favoritesObject = store.favoritePlants.filter(
    (item) => item.category_name == listname
  );
  console.log(favoritesObject);
  var favPlantDetails = favoritesObject.map((fav) => {
    let found = store.plantLibrary.find((plant) => plant.id == fav.plant_id);
    return found;
  });
  console.log(favPlantDetails);

  return (
    <div className="single-body d-flex-inline">
      <p className="text-center single-name">{listname}</p>
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
          : "Check out some plants... add what you like!"}
      </div>
    </div >
  );
};

ListFavorites.propTypes = {
  match: PropTypes.object,
};
