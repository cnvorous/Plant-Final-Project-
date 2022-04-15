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
        <p className="plant-name text-center">
          <strong>User Dashboard</strong>
        </p>
      </div>

      <div className="doubles">
        <div className="d-inline-flex flex-column justify-content-between">
          <div className="dashboard-box-1">
            <div className="dashboard-link btn">
              <Link to="/createfavorites">
                Favorites List
              </Link>
            </div>
          </div>
          <div className="dashboard-box-2">
            <div className="dashboard-link btn">
              <Link to="/growthgallery">
                Plant Growth Gallery
              </Link>
            </div>
          </div>
        </div>

        <div className="d-inline-flex flex-column justify-content-between">
          <div className="dashboard-box-3">
            <div className="second-link btn">
              <Link to="/calendar">
                H20/Fertilization Schd
              </Link>
            </div>
          </div>
          <div className="dashboard-box-4">
            <div className="second-link btn">
              <Link to="/weatherpage">
                Search Weather
              </Link>
            </div>
          </div>
        </div>
        <div className="d-inline-flex flex-column justify-content-between">
          <div className="dashboard-box-5">
            <div className="dashboard-link btn">
              <Link to="/editprofile">
                Update User Info
              </Link>
            </div>
          </div>
          <div className="dashboard-box-6">
            <div className="dashboard-link btn">
              <Link to="/editprofile">
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

Dashboard.propTypes = {
  match: PropTypes.object,
};
