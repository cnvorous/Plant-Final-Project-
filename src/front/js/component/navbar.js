import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light d-flex">
      <div className="d-flex justify-content-start">

        <Link to="/searchplantdata">
          <button type="button" className="button1 btn">
            Discover Plant Varieties
          </button>
        </Link>
      </div>
      <div className="ml-auto">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">
              <span className="nav-link active" aria-current="page">
                Home
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard">
              <span className="nav-link">Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calendar">
              <span className="nav-link">
                <i className="far fa-calendar-alt fa-2x"></i>
              </span>
            </Link>
          </li>
          {/* logout btn becomes seen when person signs in */}
          {store.profile.length > 0 && (
            <li>
              <button
                className="btn logout-btn"
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
