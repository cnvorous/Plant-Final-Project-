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
            <p className="plant-name text-center">{dataFromComponent.common_name}</p>
            <div className="d-flex flex-column">
               <div className="d-flex flex-row justify-content-between mb-4">
                  <p className="card-plant">Size: <span className="top-details">
                     <br></br> {dataFromComponent.size}</span></p>
                  <p className="card-plant">Height: <span className="top-details">
                     <br></br>   {dataFromComponent.height}</span></p>
                  <p className="card-plant">Blooming: <span className="top-details">
                     <br></br>   {dataFromComponent.blooms}</span></p>
                  <p className="card-plant">Growth Season:<span className="top-details">
                     <br></br>{dataFromComponent.growth_period}</span></p>
               </div>
               <div className="d-flex flex-row justify-content-between mb-4">
                  <p className="card-plant">Fertilizer: <span className="top-details">
                     <br></br>   {dataFromComponent.fertilizer_req}</span></p>
                  <p className="card-plant">Watering: <span className="top-details">
                     <br></br>   {dataFromComponent.water_req}</span></p>
                  <p className="card-plant">Light Levels: <span className="top-details">
                     <br></br>  {dataFromComponent.light_exposure}</span></p>
                  <p className="card-plant">Most Suitable Temperature: <span className="top-details">
                     <br></br>   {dataFromComponent.temperature}</span></p>

               </div>
            </div>
            <div>
               <p className="card-plant">Description:<span className="top-details">
                  <br></br>  {dataFromComponent.plant_details}</span></p>
               <p className="card-plant">Most Suitable Placement:<span className="top-details">
                  <br></br>  {dataFromComponent.most_suitable_location}</span></p>
               <p className="card-plant">Plant Care: <span className="top-details">
                  <br></br>  {dataFromComponent.plant_care_tips}</span></p>
               <p className="card-plant">Watering Tips:<span className="top-details">
                  <br></br>  {dataFromComponent.water_tips}</span></p>
               <p className="card-plant">Fertilizing Tips:<span className="top-details">
                  <br></br>  {dataFromComponent.fertilizer_tips}</span></p>
               <p className="card-plant">Poisonous Risk:<span className="top-details">
                  <br></br>  {dataFromComponent.poisonous}</span></p>
            </div>
         </div>
      </div>
   );
};



