import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

export const WeatherPage = () => {
	const { store, actions } = useContext(Context);
	const [zipcode, setZipcode] = useState("");
	const [weatherData, setWeatherData] = useState({});  //result is zipcode input
	console.log(weatherData);
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
				<div className="weather-ternary-div">
					{store.weatherInfo.list &&
						<div className="ternary-weather-output">
							<h2>City Name: {store.weatherInfo.city.name}</h2>
							<p>Current Weather: {store.weatherInfo.list[0].weather[0].description}</p>
							<p>Max Temp: {convertDegrees(store.weatherInfo.list[0].temp.max)}</p>
							<p>Min Temp: {convertDegrees(store.weatherInfo.list[0].temp.min)}</p>
						</div>}
				</div>


			</div>
		</div>

	);
};


// WeatherPage.propTypes = {
// 	match: PropTypes.object
// };