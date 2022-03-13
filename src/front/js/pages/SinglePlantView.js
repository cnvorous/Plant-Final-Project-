// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const SinglePlantView = props => {
// 	//const { store, actions } = useContext(Context);
// 	//const params = useParams();
// 	const dataFromLink = props.location.state;

// 	return (
// 		<div>
// 			<p className="text-center">
// 				Single Planet View Page
// 			</p>
// 			{/* // info comes from REACT Router */}
// 			<div className="single-card-container d-flex">
// 				<img src="https://target.scene7.com/is/image/Target/GUEST_8acd0212-7aa5-4d0d-aec2-b7a73e037fc6" alt="short plant" className="card-img w-50 h-50" alt="..." />
// 				<div className="character-details d-flex flex-column">
// 					<h1 className="card-title ">{dataFromLink.name}</h1> {/*props.location.state.name was from class*/}
// 					<p className="card-text">Seasonal: {dataFromLink.seasonal}</p>
// 					<p className="card-text">watering: {dataFromLink.watering}</p>
// 					<p className="card-text">Hardiness: {dataFromLink.hardiness}</p>
// 					<p className="card-text">Height: {dataFromLink.height}</p>
// 					<p className="card-text">Color: {dataFromLink.color}</p>
// 					<p className="card-text">Blooming: {dataFromLink.blooming}</p>
// 					<p className="card-text">Sun Exposure: {dataFromLink.sun</p>
// 					<p className="card-text"><small className="text-muted">Muted Text</small></p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// SinglePlantView.propTypes = {    will not need this for this view 
// 	match: PropTypes.object        since called in plantcard component
// };
