import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const PasswordReset = props => {
    //const { store, actions } = useContext(Context);
    //const params = useParams();

    return (
        <div className="text-center">

            <div className="p-5 d-flex justify-content-spacebetween row">
                <div className="col-6 mb-3">
                    <input className="w-75" type="text" placeholder="New Password" />
                    <input className="w-75" type="text" placeholder=" Confirm New Password" />
                    <input className=" submitButton btn btn-primary" type="Submit" value="Submit" />
                </div>
            </div>
        </div>
    );
};

PasswordReset.propTypes = {
    match: PropTypes.object
};
