import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const SearchPlantData = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<p className="text-center">
				Plant Search will have search bar and then info will pull below div holding filter 
			</p>
	
		</div>
	);
};

SearchPlantData.propTypes = {
	match: PropTypes.object
};
