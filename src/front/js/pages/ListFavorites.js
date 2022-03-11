import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListFavorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container d-flex-inline">
			<div className="fav-heading text-center">
				Your Favorites
			</div>
			<div className="favs-list">
				<span>
					1.  Summer Time Plants (will be link that leads back to Fav list)
				</span>
				<p>
					INSERT PLANT CARDS here that are favorites
				</p>
			</div>
		</div>
	);
};

ListFavorites.propTypes = {
	match: PropTypes.object
};
