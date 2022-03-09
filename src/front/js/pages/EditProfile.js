import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const EditProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<p className="text-center">
				Edit profile
			</p>
	

			<Link to="/">
				<span className="btn btn-primary btn-sm" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

EditProfile.propTypes = {
	match: PropTypes.object
};
