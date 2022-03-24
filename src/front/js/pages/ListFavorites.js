import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { PlantCard } from "../component/PlantCard";
import { Context } from "../store/appContext";

export const ListFavorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const name = params.listname
	const favoritesObject = store.favoritesList.find((item) => item.name == name);
	const favoritesArray = favoritesObject.favorites
	console.log(favoritesArray);

	return (
		<div className="container d-flex-inline">
			<div className="fav-heading text-center">
				{name} list
			</div>
			<div className="favs-list d-sm-flex flex-wrap justify-content-sm-evenly">
				{favoritesArray.map((plant, index) => {
					return (
						<PlantCard plants={plant} key={index} />
					);
				})}
			</div>
		</div>
	);
};

ListFavorites.propTypes = {
	match: PropTypes.object
};
