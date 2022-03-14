import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const CreateAccount = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<div className="text-center">
				Create you account log in and user profile

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

					<span><input className="w-50 btn btn-primary" type="submit" value="Submit" /></span>
				</div>


			</div>




			<Link to="/">
				<span className="btn btn-primary btn-sm" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

CreateAccount.propTypes = {

};
