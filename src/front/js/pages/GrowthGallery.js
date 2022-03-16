import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const GrowthGallery = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<p className="text-center">
				GrowthGallery Page
			</p>
			<Link to="/greenthumbgallery">
				<a className="nav-link">view and set timmer for your own growthgallery</a>
			</Link>

		</div>
	);
};

GrowthGallery.propTypes = {
	match: PropTypes.object
};
