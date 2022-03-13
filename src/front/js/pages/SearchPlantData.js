import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
//import { PlantCard } from "../component/PlantCard";


export const SearchPlantData = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="plant-search-container">

			<div className="input-group mb-3 w-50 p-3 mx-auto mt-5">{/*NEED: seems like mt cant go higher then mt-5 */}
				<span className="search-button input-group-text" id="inputGroup-sizing-default">Plant Search</span>
				<input type="text" placeholder="Type in plant name OR click enter to search..." class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
			</div>
			<p className="text-success text-center mb-4">Filtering Options</p> {/* NEED: using h4 isnt working  */}

			<div className="plant-checkbox-container">

				<div className="row row-cols-6">
					<div className="col"></div>{/*empty space on purpose*/}
					<div className="col">
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Size of Plant Base</label>
					</div>
					<div className="col">
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Plant Height</label>
					</div>
					<div className="col">
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Less Water Dependent</label>
					</div>
					<div className="col">
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Seasonal</label>
					</div>
					<div className="col"></div> {/*empty space on purpose*/}
					<div className="col"></div>{/*empty space on purpose*/}
					<div className="col"> {/*-opacity-25 */}
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Blooming</label>
					</div>
					<div className="col">
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Hardiness</label>
					</div>
					<div className="col">
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Fertilization</label>
					</div>
					<div className="col">
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Color</label>
					</div>
					<div className="col"></div>{/*empty space on purpose*/}
				</div>

			</div>

			<div className="plant-results-body d-flex justify-content-evenly flex-wrap bg-primary bg-opacity-10 m-5 p-5"> {/*Question why does margin in bootstrap not pass 5 */}
				{/*<div className="m-1"><PlanetCard/></div>*/} {/*putting in TAG is breaking code */}
				<div className="m-1">2Box area to contain plant results card in 4 to a row**</div>
				<div className="m-1">3Box area to contain plant results card in 4 to a row**</div>
				<div className="m-1">4Box area to contain plant results card in 4 to a row**</div>
				<div className="m-1">5Box area to contain plant results card in 4 to a row**</div>
			</div>
		</div>
	);
};

SearchPlantData.propTypes = {
	match: PropTypes.object
};
