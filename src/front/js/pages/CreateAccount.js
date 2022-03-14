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
				<div className="profile " name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
					<h1>Username/Email: <input type="text" name="fname" /></h1>
					<h2>Password: <input type="text" name="fname" /></h2>
					<h3>Firstname: <input type="text" name="fname" /></h3>
					<h4>Lastname: <input type="text" name="fname" /></h4>
					<h5>phone: <input type="text" name="fname" /></h5>
					<h6>State/Zip code: <input type="text" name="fname" /></h6>
					<span><input type="submit" value="Submit" /></span>
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
