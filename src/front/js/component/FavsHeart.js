
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const FavsHeart = () => {
	const { store, actions } = useContext(Context);
	


   return (
      <div className="container">
         
      </div >
   );
};

/*** Define the data-types for your component's properties **/
FavsHeart.propTypes = {
   zipcode: PropTypes.object,
   // history: PropTypes.object, // was already in template
   // onDelete: PropTypes.func // was already in template
};
