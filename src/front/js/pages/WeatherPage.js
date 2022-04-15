import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const WeatherPage = () => {
	const { store, actions } = useContext(Context);
	const [zipcode, setZipcode] = useState("");
	const [weatherData, setWeatherData] = useState({});  //result is zipcode input

	// useEffect(()=>{
	// 	setWeatherData(store.weatherInfo);
	// })
	const convertDegrees = (degreesInK) => {
		let farenheit = (degreesInK - 273.15) * 9 / 5 + 32
		let finalDegree = Math.round(farenheit * 10) / 10
		return (finalDegree);
	}

	return (
		<div className="weather-container">
			<div className="weather-frame m-auto">
				<div className="input-group">
					<input className="form-control weather-input" id="inputGroup-sizing-sm" type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Enter Zipcode" aria-label="default input example" />
					<button className="btn weather-search-button" onClick={() => {
						actions.getWeatherData(zipcode);
					}}>Search Local Weather
					</button>
				</div>
				<div className="weather-item">
					{store.weatherInfo.list &&
						<div>
							<p className="weather"><span className="weather-item">City Name:</span>  {store.weatherInfo.city.name}</p>
							<p className="weather"><span className="weather-item">Max Temp:</span> {convertDegrees(store.weatherInfo.list[0].temp.max)} ℉ </p>
							<p className="weather"><span className="weather-item">Min Temp:</span> {convertDegrees(store.weatherInfo.list[0].temp.min)} ℉</p>
							<p className="weather"><span className="weather-item">Current Weather:</span> {store.weatherInfo.list[0].weather[0].description}</p>
						</div>}
				</div>


			</div>
		</div>

	);
};


// WeatherPage.propTypes = {
// 	match: PropTypes.object
// };