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

	return (
		<div className="weather-container">
			<input className="form-control" type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Enter Zipcode" aria-label="default input example" />
			<button className="btn weather-search-button" onClick={() => {
				actions.getWeatherData(zipcode);
			}}>Search Weather</button>
			{store.weatherInfo.list &&
				<div>
					{store.weatherInfo.list[0].weather[0].description}
				</div>}
		</div>
	);
};


// WeatherPage.propTypes = {
// 	match: PropTypes.object
// };