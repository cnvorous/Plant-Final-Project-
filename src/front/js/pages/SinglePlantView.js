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
            <img src="https://target.scene7.com/is/image/Target/GUEST_8acd0212-7aa5-4d0d-aec2-b7a73e037fc6" alt="short plant" className="card-img" alt="..." />
         </div>
         <div className="d-flex flex-column plant-info">
            <div className="col">
               <h1 className="card-text ">{dataFromComponent.common_name}</h1> {/*props.location.state.name was from class*/}


               <p className="card-text">Seasonal: {dataFromComponent.seasonal}</p>{/*{dataFromLink.seasonal/ */}


               <p className="card-text">watering: {dataFromComponent.water_req}</p>


               <p className="card-text">Light Levels: {dataFromComponent.light_exposure}</p>


               <p className="card-text">Height: {dataFromComponent.height}</p>

               <p className="card-text">size: {dataFromComponent.size}</p>


               <p className="card-text">Blooming: {dataFromComponent.blooms}</p>

               <p className="card-text">Temperature: {dataFromComponent.temperature}</p>


               <p className="card-text">Fertilizer: {dataFromComponent.fertilizer_req}</p>

            </div>

            <p>Description: {dataFromComponent.plant_details}</p>
            <p>Plant Care: {dataFromComponent.plant_care_tips}</p>
            <p>Watering Tips: {dataFromComponent.water_tips}</p>

         </div>
      </div>
   );
};


