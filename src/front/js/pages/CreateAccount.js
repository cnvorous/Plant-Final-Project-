import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { UploadImages } from "../component/UploadImages";

export const CreateAccount = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const profileArray = store.profile;
	//*const [newProfile, setNewProfile] = useState({});//*
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [firstNameValue, setFirstNameValue] = useState("");
	const [lastNameValue, setLastNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [stateZipCodeValue, setStateZipCodeValue] = useState("");

	const handleSubmit = () => {
		actions.createAccount({ email: emailValue, password: passwordValue, firstName: firstNameValue, lastName: lastNameValue, phone: phoneValue, stateZipCode: stateZipCodeValue });

	}


	return (
		<div className="create-account-div text-center">
			{/* <div className="text-center justify-content-center">
				<i className=' fas fa-user-circle fa-5x'></i>
				<UploadImages />
			</div> */}
			<div className="p-5 d-flex justify-content-center row form">
				<div className="col-5 mb-3">
					<input className="w-70" type="text" onChange={(e) => setEmailValue(e.target.value)} placeholder="Username/Email" name="fname" />
				</div>
				<div className="col-5 mb-3">
					<input className="w-70" type="text" onChange={(e) => setPasswordValue(e.target.value)} placeholder="Password" name="fname" />
				</div>
				<div className="col-5 mb-3">
					<input className="w-70" type="text" onChange={(e) => setFirstNameValue(e.target.value)} placeholder="First Name" name="fname" />
				</div>
				<div className="col-5 mb-3">
					<input className="w-70" type="text" onChange={(e) => setLastNameValue(e.target.value)} placeholder="Last Name" name="fname" />
				</div>
				<div className="col-5 mb-3">
					<input className="w-70" type="text" onChange={(e) => setPhoneValue(e.target.value)} placeholder="Phone" name="fname" />
				</div>
				<div className="col-5 mb-3">
					<input className="w-70" type="text" onChange={(e) => setStateZipCodeValue(e.target.value)} placeholder="State/Zip code" name="fname" />
				</div>
				<div><input type="checkbox" />
					<label>Check to receive SMS notifications</label>
				</div>
				<input className="submit-button btn" onClick={() => {
					handleSubmit();
					console.log(store.account)
				}} type="submit" value="Sign Up" />

				<div>
					<Link to="/forgotPassword">
						<a className="nav-link">Forgot my password??</a>
					</Link>

				</div>
			</div>


		</div>
	);
};

CreateAccount.propTypes = {

};
