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
    <div className="plant-card-container">
      <div
        className="card plant-card border-primary"
        style={{ width: "15rem" }}
        f
      >
        <div className="card-header text-end">

          {/* {props.onDelete && (
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                actions.removeFavoritePlantItem(
                  props.listName,
                  props.plants.id
                );
              }}
            >
              <i className="far fa-trash-alt"> </i>
            </button>
          )} */}
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
              <i className="far fa-trash-alt"> </i>
            </button>

          ) : (
            <button className="btn heart-btn btn-sm">
              <div className="dropdown">
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
            </button>
          )}

        </div>
        <img
          src={props.plants.plant_image}
          className="card-img-top plant-card-img"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.plants.common_name}</h5>
          <p className="card-text">
            Size:<br></br>
            {props.plants.size}
          </p>
          <p className="card-text">
            Blooms:<br></br>
            {props.plants.blooms}
          </p>
          <p className="card-text">
            Water Frequency:<br></br>
            {props.plants.water_req}
          </p>
          <p className="card-text">
            Light Exposure:<br></br>
            {props.plants.light_exposure}
          </p>
          <Link to={{ pathname: "/singleplantview", state: props.plants }}>
            {" "}
            <span
              className="search-button btn btn-md plant-details"
              role="button"
            >
              Plant Details
            </span>
          </Link>
        </div>

      </div>
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
