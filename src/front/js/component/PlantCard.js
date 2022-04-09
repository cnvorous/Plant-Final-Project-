
import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
//import XENA from "../../img/XENA.jpg";
import { Link } from "react-router-dom";
import { ListFavorites } from "../pages/ListFavorites";
import { Context } from "../store/appContext";
import { unstable_renderSubtreeIntoContainer } from "react-dom/cjs/react-dom.development";


export const PlantCard = (props) => {
   const { store, actions } = useContext(Context);
   //const [favList, setFavList] = useState(store.favoritesList);

   // console.log(props.plants);

   return (
      <div className="plant-card-container mb-3">

         <div className="card plant-card border-primary" style={{ width: "15rem" }}>
            <div className="card-header text-end">
               <button className="heart-btn btn-sm">
                  <i className="far fa-heart heart">
                     <div className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Send to which favs list:
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           {store.favoritesList.map((fav, index) => {
                              return (
                                 <li key={index}
                                    onClick={() => { actions.addFavoritePlantItem(fav.name, props.plants) }
                                    }
                                 >
                                    {fav.name}
                                 </li>)
                           })};
                        </ul>
                     </div>
                  </i>
               </button>
            </div>
            <img src={props.plants.plant_image} className="card-img-top plant-card-img" alt="..." />
            <div className="card-body">
               <h5 className="card-title">Name:<br></br>{props.plants.common_name}</h5>
               <p className="card-text">Size:<br></br>{props.plants.size}</p>
               <p className="card-text">Blooms:<br></br>{props.plants.blooms}</p>
               <p className="card-text">Water Frequency:<br></br>{props.plants.water_req}</p>
               <p className="card-text">Light Exposure:<br></br>{props.plants.light_exposure}</p>
               <Link to={{ pathname: "/singleplantview", state: props.plants }}> {/* passing props plant from plant card to single view*/}
                  <span className="button1 btn btn-primary btn-md" role="button">
                     Plant Details
                  </span>
               </Link>
            </div>
            <div className="card-footer text-muted">
               Send Card via Email or Text
               {props.onDelete &&
                  <button
                     onClick={() => { actions.removeFavoritePlantItem(props.listName, props.plants) }}><i className="far fa-trash-alt"></i></button>}
            </div>
         </div>

      </div >
   );
};

/*** Define the data-types for your component's properties **/
PlantCard.propTypes = {
   plants: PropTypes.object,
   onDelete: PropTypes.bool,
   listName: PropTypes.string,
   // history: PropTypes.object, // was already in template
   // onDelete: PropTypes.func // was already in template
};

PlantCard.defaultProps = {
   onDelete: false,
};