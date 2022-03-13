
import React from "react";
//import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
//import XENA from "../../img/XENA.jpg";
import {Link} from "react-router-dom/Link";

export const PlantCard = props => {
   // changed from props // have to either use prop.item/key or use {}and call declared item from listing the <card/>tag
  // const [state, setState] = useState({}); //initialize state here

   return (
      <div className="plant-card-container">

         <div className="card" style="width: 18rem;">
            <div className="card-header text-end">
               <i className="far fa-heart">Add to Favorites</i>
            </div>
            <img src="https://media.istockphoto.com/photos/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-picture-id1278906674?b=1&k=20&m=1278906674&s=170667a&w=0&h=PRsEw9KpsggCTUEqH_DqgtEKRt884wAGfQCQTeS8xBY=" className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{props.plant.name}</h5>
               <p className="card-text">Height:{ }</p>
               <p className="card-text">Seasonal:{ }</p>
               <p className="card-text">Water Dependent:{ }</p>
               <p className="card-text">Base Size:{ }</p>
               <Link to="/singleplantview">
                  <span className="button1 btn btn-primary btn-lg" role="button">
                     Plant Details
                  </span>
               </Link>
            </div>
            <div className="card-footer text-muted">
               Send Card via Email or Text
            </div>
         </div>

      </div >
   );
};

/*** Define the data-types for your component's properties **/
PlantCard.propTypes = {
   plant: PropTypes.object,
   // history: PropTypes.object, // was already in template
   // onDelete: PropTypes.func // was already in template
};

/** Define the default values foryour component's properties**/
PlantCard.defaultProps = {
   onDelete: null
};