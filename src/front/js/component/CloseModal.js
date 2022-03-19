
import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CloseModal = props => {
   // changed from props // have to either use prop.item/key or use {}and call declared item from listing the <card/>tag
   // const [state, setState] = useState({}); //initialize state here
   const { store, actions } = useContext(Context);

   return (
      <div className="modal-box modal" tabIndex="-1" role="dialog"
         style={{ display: props.show ? "inline-block" : "none" }}>
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Are you postive?</h5>
                  {props.onClose ? (
                     <button onClick={() => props.onClose()}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  ) :
                     ("")
                  }
               </div>
               <div className="modal-body">
                  <p>Warning: Will lose compiled favorites list</p>
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-primary"
                     onClick={() => props.onClose()}>
                     Do NOT make changes
                  </button>
                  <button className="btn btn-secondary"
                     type="button"
                     data-dismiss="modal"
                     onClick={(e) => {
                        actions.deleteFavsList(props.id);
                        props.onClose();
                     }}>
                     Do it!
                  </button>
               </div>
            </div>
         </div>
      </div >
   );
};

/*** Define the data-types for your component's properties **/
CloseModal.propTypes = {
   onClose:PropTypes.func,
   show: PropTypes.bool,
   id: PropTypes.string
   // history: PropTypes.object, // was already in template
   // onDelete: PropTypes.func // was already in template
};

/** Define the default values foryour component's properties**/
CloseModal.defaultProps = {
   show:false,
   onClose: null,
};