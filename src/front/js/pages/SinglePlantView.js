import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlantView = props => {
   //const { store, actions } = useContext(Context);
   //const params = useParams();
   const dataFromComponent = props.location.state;   // state should =(props.plants)


   return (
      <div>
         <div className="single-plant-container">
            <div className="top-row d-flex justify-content-around">
               <div className="alarm">
                  <i class="far fa-bell">Set Reminder</i>
               </div>
               <div className="plant-image">
                  <img src="https://target.scene7.com/is/image/Target/GUEST_8acd0212-7aa5-4d0d-aec2-b7a73e037fc6" alt="short plant" className="card-img w-50 h-50" alt="..." />
               </div>
               <div className="fav-list-icon-dropdown">
                  <i class="far fa-heart">Set to Favorites List</i> {/*want to set onclick event on heart to trigger list ams selection */}
                  <i class="fas fa-qrcode"></i>
               </div>
            </div>
            {/*<div></div> not sure if need to wrap table in its own div below */}
            <div className="row row-cols-3 middle-row">
               <div className="col">
                  <h1 className="card-text ">{dataFromComponent.common_name}</h1> {/*props.location.state.name was from class*/}
               </div>
               <div className="col">
                  <p className="card-text">Seasonal: {dataFromComponent.seasonal}</p>{/*{dataFromLink.seasonal/ */}
               </div>
               <div className="col">
                  <p className="card-text">watering: {dataFromComponent.water_req}</p>
               </div>
               <div className="col">
                  <p className="card-text">Light Levels: {dataFromComponent.light_exposure}</p>
               </div>
               <div className="col">
                  <p className="card-text">Height: {dataFromComponent.height}</p>
               </div>
               <div className="col">
                  <p className="card-text">size: {dataFromComponent.size}</p>
               </div>
               <div className="col">
                  <p className="card-text">Blooming: {dataFromComponent.blooms}</p>
               </div>
               <div className="col">
                  <p className="card-text">Temperature: {dataFromComponent.temperature}</p>
               </div>
               <div className="col">
                  <p className="card-text">Fertilizer: {dataFromComponent.fertilizer_req}</p>
               </div>
            </div>
            <div className="bottom-row">
               <p>Description: {dataFromComponent.plant_details}</p>
               <p>Plant Care: {dataFromComponent.plant_care_tips}</p>
               <p>Watering Tips: {dataFromComponent.water_tips}</p>
            </div>
         </div>
      </div>
   );
};


