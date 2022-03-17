
import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const WeatherBox= props => {
   // changed from props // have to either use prop.item/key or use {}and call declared item from listing the <card/>tag
   // const [state, setState] = useState({}); //initialize state here

   return (
      <div className="weather-box-container">
         
               <Link to={{pathname: "/", state: props.zipcode}}> </Link>

      </div >
   );
};

/*** Define the data-types for your component's properties **/
WeatherBox.propTypes = {
   zipcode: PropTypes.object,
   // history: PropTypes.object, // was already in template
   // onDelete: PropTypes.func // was already in template
};
