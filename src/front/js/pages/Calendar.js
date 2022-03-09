import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Calendar = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<p className="text-center">
				Calendar
			</p>
		
			<Link to="/">
				<span className="btn btn-primary btn-sm" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Calendar.propTypes = {
	match: PropTypes.object
};
