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

    <div className="card plant-card d-flex flex-column" >
      <div className="green">
        {props.onDelete ? (
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              actions.removeFavoritePlantItem(
                props.listName,
                props.plants.id
              );
            }}
          >
            <i class="fas fa-trash"></i>
          </button>

        ) : (
          // <button className="btn heart-btn btn-sm">
          <div className="dropdown btn btn-sm">
            <a
              className="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                className={
                  props.onDelete
                    ? "fas fa-heart heart text-danger"
                    : "fas fa-heart heart"
                }
              >
                <br></br>
                Send to favorites list:</i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {store.favoritesList.map((list, index) => {
                return (
                  <li
                    className="drop"
                    key={index}
                    onClick={() => {
                      if (list == "MyPlants")
                        actions.addMyPlant(list, props.plants);
                      else actions.addFavoritePlantItem(list, props.plants);
                    }}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>
          // </button>
        )}

      </div>
      <div className=" d-flex justify-content-center">
        <img
          src={props.plants.plant_image}
          className="plant-img"
          alt="..."
        />
      </div>
      <div className="d-flex justify-content-center">
        <p className="common">{props.plants.common_name}</p>
      </div>
      <div className="d-flex justify-content-center">
        <p className="card-text">
          Size:<br></br>
          {props.plants.size}
        </p>
        <p className="card-text">
          Blooms:<br></br>
          {props.plants.blooms}
        </p>

      </div>
      <div className="d-flex row">
        <p className="card-text">
          Water Frequency:<br></br>
          {props.plants.water_req}
        </p>
        <p className="card-text">
          Light Exposure:<br></br>
          {props.plants.light_exposure}
        </p>
      </div>
      <Link to={{ pathname: "/singleplantview", state: props.plants }}>
        {" "}
        <span
          className="btn search-button plant-details"
          role="button"
        >
          Plant Details
        </span>
      </Link>
    </div>


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
