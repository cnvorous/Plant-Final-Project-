import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const PasswordReset = props => {
    //const { store, actions } = useContext(Context);
    //const params = useParams();

    return (
        <div className="landing-body">
            <div className="d-flex justify-content-center">
                <div className="col-6">
                    <input className="w-75 m-5" type="text" placeholder="New Password" />
                    <input className="w-75 m-5" type="text" placeholder=" Confirm New Password" />
                    <input className="ms-5 submit-btn btn btn-primary" type="Submit" value="Submit" />
                </div>
            </div>
        </div>
    );
};

PasswordReset.propTypes = {
    match: PropTypes.object
};
