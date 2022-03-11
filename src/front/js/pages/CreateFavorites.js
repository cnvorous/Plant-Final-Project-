import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CreateFavorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<p className="text-center">
				Favorites Page
			</p>

			<Link to="/listfavorites">
				<span>
					List Favorites
				</span>
			</Link>
		</div>
	);
};

CreateFavorites.propTypes = {
	match: PropTypes.object
};
