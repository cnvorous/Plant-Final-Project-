import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="dashboard-container">
      <div>
        <p className="text-center">Dashboard Profile Page</p>
      </div>
{/* 
  // i commented out 4:14pm Sat 3/12 since code was not allowing page to run
      // other pages to put code in and see how other pages working.    */}

      <div>
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
      </div>

      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          The current link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">A second link item</a>
        <a href="#" class="list-group-item list-group-item-action">A third link item</a>
        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
        <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  match: PropTypes.object,
};
