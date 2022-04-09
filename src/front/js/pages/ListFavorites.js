import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { PlantCard } from "../component/PlantCard";
import { Context } from "../store/appContext";

export const ListFavorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const listname = params.listname
	const favoritesObject = store.favoritePlants.find((item) => item.name == listname);
	console.log(favoritesObject)
	// const favoritesArray = favoritesObject.plants_selected
	// console.log(favoritesArray);

	return (
		<div className="single-fav-body d-flex-inline">
			<h1 className="text-center">{listname} list</h1>
			<div className="favs-list d-sm-flex flex-wrap justify-content-sm-evenly">
				{favoritesObject && favoritesObject.length > 0 ? (favoritesObject.map((plant, index) => {
					return (
						<PlantCard plants={plant} key={index} onDelete={true} listName={plant.name} />
					);
				}))
					: "Loading... "}
			</div>
		</div>
	);
};

ListFavorites.propTypes = {
	match: PropTypes.object
};
