import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const SinglePlantView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>

			<p className="text-center">
				Single Planet View Page
			</p>
		
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlantView.propTypes = {
	match: PropTypes.object
};
