import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const ForgotPassword = props => {
   //const { store, actions } = useContext(Context);
   //const params = useParams();


   function makeVisible() {
      var x = document.getElementById("temporaryPasswordMsg");
      if (x.style.visibility === 'hidden') {
         x.style.visibility = 'visible';
      } else {
         x.style.visibility = 'hidden';
      }
   }

   return (
      <div className="text-center">
         <p> Forgot Password</p>
         <p> Please enter your email address below and press send to recieve a temporary password</p>
         <div className="p-5 d-flex justify-content-spacebetween row">
            <div className="col-6 mb-3">
               <input className="w-75" type="text" placeholder="Email" name="fname" />
               <input className="sendButton btn btn-primary" onClick={() => makeVisible()} type="Send" value="Send" />
               <label id="temporaryPasswordMsg"> An email has been send to you with a temporary password</label>
            </div>
         </div>
         <Link to="/passwordreset">
            <a className="nav-link">go to password-reset</a>
         </Link>
      </div>
   );
};

ForgotPassword.propTypes = {
   match: PropTypes.object
};
