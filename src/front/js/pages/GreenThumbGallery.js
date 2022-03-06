import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const GreenThumbGallery = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
	

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

GreenThumbGallery.propTypes = {
	match: PropTypes.object
};
