import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlantView = props => {
   //const { store, actions } = useContext(Context);
   //const params = useParams();
   const dataFromComponent = props.location.state;   // state should =(props.plants)


   return (

      <div className="single-plant-container d-flex">
         <div className="plant-image">
            <img src={dataFromComponent.plant_image} className="card-img" alt="..." />
         </div>
         <div className="d-flex flex-column plant-info">

            <p className="card-text ">{dataFromComponent.common_name}</p> {/*props.location.state.name was from class*/}
            <p className="card-text">Seasonal: {dataFromComponent.seasonal}</p>{/*{dataFromLink.seasonal/ */}
            <p className="card-text">watering: {dataFromComponent.water_req}</p>
            <p className="card-text">Light Levels: {dataFromComponent.light_exposure}</p>
            <p className="card-text">Height: {dataFromComponent.height}</p>
            <p className="card-text">size: {dataFromComponent.size}</p>
            <p className="card-text">Blooming: {dataFromComponent.blooms}</p>
            <p className="card-text">Temperature: {dataFromComponent.temperature}</p>
            <p className="card-text">Fertilizer: {dataFromComponent.fertilizer_req}</p>

            <p className="card-text">Description: {dataFromComponent.plant_details}</p>
            <p className="card-text">Plant Care: {dataFromComponent.plant_care_tips}</p>
            <p className="card-text">Watering Tips: {dataFromComponent.water_tips}</p>
         </div>
      </div>
   );
};


