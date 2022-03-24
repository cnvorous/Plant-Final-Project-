import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light">
      <Link to="/weatherpage">
        <button className="btn weather-search-button">Search Weather</button>
      </Link>
      <div className="ml-auto">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard">
              <a className="nav-link">Profile</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/growthgallery">
              <a className="nav-link">Gallery</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createfavorites">
              <a className="nav-link">Favorites</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calendar">
              <a className="nav-link">
                <i className="far fa-calendar-alt fa-2x"></i>
              </a>
            </Link>
          </li>
          {store.profile.length > 0 && (
            <li>
              <button
                className="btn btn-danger"
                onClick={() => {
                  actions.logout();
                }}
              >
                Log Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
