import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const PlantUses = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<p className="text-center">
				Plant Uses
				</p>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

PlantUses.propTypes = {
	match: PropTypes.object
};
