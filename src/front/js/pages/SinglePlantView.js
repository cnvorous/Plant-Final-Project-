// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const SinglePlantView = props => {
// 	//const { store, actions } = useContext(Context);
// 	//const params = useParams();
// 	const dataFromLink = props.location.state;

// 	return (
// <div>
// 			<p className="text-center">
// 				Single Planet View Page
// 			</p>
//
// 	<div className="single-plant-container">
//			<div className="top-row d-flex">
//				<div className="alarm">
//           <i class="far fa-bell">Set Reminder</i>
//				</div>
//				<div className="plant-image">
// 				<img src="https://target.scene7.com/is/image/Target/GUEST_8acd0212-7aa5-4d0d-aec2-b7a73e037fc6" alt="short plant" className="card-img w-50 h-50" alt="..." />
//				 </div>
//				 <div className="fav-list-icon-dropdown">
//				   <i class="far fa-heart">Set to Favorites List</i> {/*want to set onclick event on heart to trigger list ams selection */}
//				   <i class="fas fa-qrcode"></i>
//				</div>
//			</div>
//             {/*<div></div> not sure if need to wrap table in its own div below */}
//             <div className="row row-cols-3 middle-row">
//                <div className="col">
//                  <h1 className="card-text ">{dataFromLink.name}</h1> {/*props.location.state.name was from class*/}
//                </div>
//						<div className="col">
//						  <p className="card-text">Seasonal: {dataFromLink.seasonal}</p>
//						</div>
//						<div className="col">
//						   <p className="card-text">watering: {dataFromLink.watering}</p>
//						</div>
//                <div className="col">
//	                  <p className="card-text">Hardiness: {dataFromLink.hardiness}</p>
//						</div>
//						<div className="col">
//						   <p className="card-text">Height: {dataFromLink.height}</p>
//						</div>
//						<div className="col">
//							<p className="card-text">Color: {dataFromLink.color}</p>
//                </div>
//                <div className="col">
//                   <p className="card-text">Blooming: {dataFromLink.blooming}</p>
//                </div>
//						<div className="col">
//                   <p className="card-text">Sun Exposure: {dataFromLink.sun_expoxure}</p>
//                </div>
//						<div className="col">
//                  <p className="card-text">Fertilizer: {dataFromLink.fertilizer}</p>
//                </div>
//					</div>
//					<div className="bottom-row">
//             <p>Description: {dataFromLink.description}</p>
//					</div>
//
// 	
//   
// </div>
// 	);
// };

// SinglePlantView.propTypes = {    will not need this for this view 
// 	match: PropTypes.object        since called in plantcard component
// };
