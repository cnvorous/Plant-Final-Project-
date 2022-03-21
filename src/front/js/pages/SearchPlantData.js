import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlantCard } from "../component/PlantCard";


export const SearchPlantData = props => {
	const { store, actions } = useContext(Context); //access items on flux page
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
					<div className="col d-flex flex-column">
						<label className="filter-options">Size of Plant Base:</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Small</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Medium</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Large</label>
					</div>
					<div className="col d-flex flex-column">
						<label className="filter-options">Water Dependency:</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Low (montly)</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Moderate (weekly)</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />High(every few days)</label>
					</div>
					<div className="col d-flex flex-column">
						<label className="filter-options">Sun Exposure:</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Indirect Light</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Direct Light</label>
					</div>
					<div className="col d-flex flex-column">
						<label className="filter-options">Growth Season:</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Spring/Summer</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Fall/Winter</label>
					</div>
					<div className="col"></div> {/*empty space on purpose*/}
					<div className="col"></div>{/*empty space on purpose*/}
					<div className="col d-flex flex-column mt-3"> {/*-opacity-25 */}
						<label className="filter-options">Blooming</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Yes</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />No</label>
					</div>
					<div className="col d-flex flex-column mt-3">
						<label className="filter-options">Fertilization Dependency</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Weekly</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Monthly</label>
					</div>
					<div className="col d-flex flex-column mt-3">
						<label className="filter-options">Plant Height</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Small</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Medium</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Large</label>
					</div>
					<div className="col d-flex flex-column mt-3">
						<label className="filter-options">Toxicity</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Harmful to Children</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Harmful to Pets</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Safe for Humans & Pets</label>
					</div>
					<div className="col"></div>{/*empty space on purpose*/}
				</div>

			</div>


			<div className="plant-results-body bg-primary bg-opacity-10 m-5 p-5"> {/*Question why does margin in bootstrap not pass 5 */}
				<div className="plant-div d-sm-flex flex-wrap justify-content-sm-evenly">
					{store.plantLibrary.map((plant, index) => {
						return (
							<PlantCard key={index} plants={plant} />

							// plantData={{
							// 	index:index,
							// 	name: plant.commonName,
							// 	prop2: `Size:`,
							// 	prop3: `Blooms:`,
							// 	prop4: `Water Dependency: `,
							// 	prop5: `Light Exposure: `,
							// 	prop6: `Plant Image:`,
							// 	value2: plant.size,
							// 	value3: plant.blooms,
							// 	value4: plant.waterReq,
							// 	value5: plant.lightExposure,
							// 	value6: plant.plantImage
							// }}   // always need key when mapping 
						);
					})}
				</div>
			</div>
			<div className="tempdiv">
				<Link to="/singleplantview">
					Temp Link to take to Single Plant View
				</Link>
			</div>
		</div>
	);
};

SearchPlantData.propTypes = {
	match: PropTypes.object
};
