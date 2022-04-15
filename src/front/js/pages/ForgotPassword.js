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
      <div className="create-account-div">
         <div className="text-center">
            <p> Forgot Password</p>
            <p> Please enter your email address below and press send to recieve a temporary password</p>
         </div>
         <div className="text-center">
            <input className="w-49" type="text" placeholder="Email" name="fname" />
            <button className="btn send-btn" onClick={() => makeVisible()} type="Send" value="Send">
               Send
            </button>
            <div className="text-center">
               <label> An email has been send to you with a temporary password</label>
            </div>
         </div >
         <div className="text-center">
            <Link to="/passwordreset">
               <button className="pw btn">password-reset Page</button>
            </Link>
         </div>
      </div >

   );
};

ForgotPassword.propTypes = {
   match: PropTypes.object
};
