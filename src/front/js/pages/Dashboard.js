import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div>
      <p className="text-center">Dashboard Profile Page</p>



      <Link to="/">
        <span className="btn btn-primary btn-sm" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );


  <div class="list-group">
    <a
      href="#"
      class="list-group-item list-group-item-action active"
      aria-current="true"
    >
      Lets Find Some Plants!!!
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      Favorites List
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      Plant Growth Gallery
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      A fourth link item
    </a>
    <a class="list-group-item list-group-item-action disabled">
      A disabled link item
    </a>
  </div>



};



Dashboard.propTypes = {
  match: PropTypes.object,
};
