import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { UploadImages } from "../component/UploadImages";

export const EditProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div id="editProfile">
			<div className="text-center">
				<i className='fas fa-user-circle'></i>
				<UploadImages />
			</div>
			<p className="text-center">
				Edit profile
			</p>
			Log in and user profile

			<div className="p-5 d-flex justify-content-spacebetween row">
				<div className="col-6 mb-3">
					<input className="w-75" type="text" placeholder="Username/Email" name="fname" />
				</div>
				<div className="col-6 mb-3">
					<input className="w-75" type="text" placeholder="Password" name="fname" />
				</div>
				<div className="col-6 mb-3">
					<input className="w-75" type="text" placeholder="First Name" name="fname" />
				</div>
				<div className="col-6 mb-3">
					<input className="w-75" type="text" placeholder="Last Name" name="fname" />
				</div>
				<div className="col-6 mb-3">
					<input className="w-75" type="text" placeholder="Phone" name="fname" />
				</div>
				<div className="col-6 mb-3">
					<input className="w-75" type="text" placeholder="State/Zip code" name="fname" />
				</div>
				<div><input type="checkbox" />
					<label>Check to receive SMS notifications</label>
				</div>

				<input className="submitButton btn btn-primary" type="submit" value="Submit" />

				<Link to="/dashboard">
					<p className="text-center">Use this link to get to Dashboard page</p>
				</Link>
			</div>







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
