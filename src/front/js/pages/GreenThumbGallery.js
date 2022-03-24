import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const GreenThumbGallery = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<div className="row">
				<div className="col-6 text-center"  >
					<h1>GreenThumbGallery</h1>
				</div>
				<div className="col-6 mt-3">
					<input className="w-50" placeholder="upload pic of plant" />
					<i className="fa fa-camera"></i>
				</div>

			</div>
			<p className="text-center">
				GreenThumbGallery Page
			</p>

		</div>
	);
};

GreenThumbGallery.propTypes = {
	match: PropTypes.object
};
