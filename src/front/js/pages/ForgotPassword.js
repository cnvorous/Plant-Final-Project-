import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const ForgotPassword = props => {
   //const { store, actions } = useContext(Context);
   //const params = useParams();

   return (
      <div className="text-center">
         <p> Forgot Password Page </p>
      </div>
   );
};

ForgotPassword.propTypes = {
   match: PropTypes.object
};
