
import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
//import XENA from "../../img/XENA.jpg";
import { Link } from "react-router-dom";
import { ListFavorites } from "../pages/ListFavorites";
import { Context } from "../store/appContext";


export const PlantCard = (props) => { {/*{plantData}this props will need to change */}
   const { store, actions } = useContext(Context);

   return (
      <div className="plant-card-container mb-3">

         <div className="card plant-card border-primary" style={{ width: "15rem" }}>
            <div className="card-header text-end">
               <button className="heart-btn btn-sm"
                  onClick={() => actions.FillSavedFavoriteHeart(props)}>  {/*{plantData}this props will need to change */}
                  <i className="far fa-heart heart">
                     <div className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Send to which favs list:
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           {store.favoritesList.map((fav, index) => {
                              return (
                                 <li key={index}>
                                    <Link to="/createfavorites">{fav.name}</Link>
                                 </li>);
                           })};
                        </ul>
                     </div>
                  </i>
               </button>
            </div>
            <img src={props.plants.plantImage} className="card-img-top plant-card-img" alt="..." />
            <div className="card-body">
               <h5 className="card-title">Name:{props.plants.commonName}</h5> {/**{props.plants.name} */}
               <p className="card-text">Size:{props.plants.size}</p>
               <p className="card-text">Blooms:{props.plants.blooms}</p>
               <p className="card-text">Water Dependency:{props.plants.waterReq}</p>
               <p className="card-text">Light Exposure:{props.plants.lightExposure}</p>
               <Link to={{ pathname: "/singleplantview", state: props.plants }}> {/* passing props plant from plant card to single view*/}
                  <span className="button1 btn btn-primary btn-md" role="button">
                     Plant Details
                  </span>
               </Link>
            </div>
                     {/* <img src={plantData.value6} className="card-img-top plant-card-img" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">Name:{plantData.commonName}</h5> 
                        <p className="card-text">Size:{plantData.prop2}{plantData.value2}</p>
                        <p className="card-text">Blooms:{plantData.prop3}{plantData.value3}</p>
                        <p className="card-text">Water Dependency:{plantData.prop4}{plantData.value4}</p>
                        <p className="card-text">Light Exposure:{plantData.plants.prop5}{plantData.value5}</p>
                        <Link to={{ pathname: "/singleplantview"+ plantData.commonName, state: plantData }}> 
                           <span className="button1 btn btn-primary btn-md" role="button">
                              Plant Details
                           </span>
                        </Link>
                     </div> */}
            <div className="card-footer text-muted">
               Send Card via Email or Text
            </div>
         </div>

      </div >
   );
};

/*** Define the data-types for your component's properties **/
PlantCard.propTypes = {
   plants: PropTypes.object,
   plant: PropTypes.string,
   // history: PropTypes.object, // was already in template
   // onDelete: PropTypes.func // was already in template
};

/** Define the default values foryour component's properties**/
// PlantCard.defaultProps = {
//    onDelete: null
// };