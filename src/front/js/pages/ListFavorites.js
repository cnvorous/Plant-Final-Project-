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
	console.log(favoritesObject)
	const favoritesArray = favoritesObject.plants_selected
	console.log(favoritesArray);

	return (
		<div className="single-fav-body d-flex-inline">
			<h1 className="text-center">{name} list</h1>
			<div className="favs-list d-sm-flex flex-wrap justify-content-sm-evenly">
				{favoritesArray.length > 0 && favoritesArray.map((plant, index) => {
					return (
						<PlantCard plants={plant} key={index} onDelete={true} listName={name} />
					);
				})}
			</div>
		</div>
	);
};

ListFavorites.propTypes = {
	match: PropTypes.object
};
