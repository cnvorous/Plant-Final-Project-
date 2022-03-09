import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginPage = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (

		<div className="vh-100">
			<div className="container-fluid h-custom">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div>
						<img src="https://i.pinimg.com/originals/46/5b/7c/465b7cd4220c8d389422d22e74f18cc3.jpg"/>
					</div>
					<div>
						<form>
							<div className="form-outline mb-4">
								<input type="email" id="form3Example3" className="form-control form-control-lg"
									placeholder="Enter a valid email address"/>
								<label className="form-label" for="form3Example3">Email address</label>
							</div>
							<div className="form-outline mb-3">
								<input type="password" id="form3Example4" className="form-control form-control-lg"
									placeholder="Enter password" />
								<label className="form-label" for="form3Example4">Password</label>
							</div>
							<div className="d-flex justify-content-between align-items-center">
								<div className="form-check mb-0">
									<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
									<label className="form-check-label" for="form2Example3">
										Remember me
									</label>
								</div>
								<a href="#!" className="text-body">Forgot password?</a>
							</div>
							<div className="text-center text-lg-start mt-4 pt-2">
								<button type="button" className="btn btn-success btn-lg"
									style="padding-left: 2.5rem; padding-right: 2.5rem;">
										Login
								</button>
								<p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
								<a href="#!"className="link-danger">Register</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
				<div className="text-white mb-3 mb-md-0">
					Copyright © 2022. All rights reserved.
				</div>
			</div>
	<div>
	<p>
	LOG IN PAGE 
	</p>
	</div>
		</div>

	);
};

{/* <Link to="/">
<span className="btn btn-primary btn-lg" href="#" role="button">
	Back home
</span>
</Link> */}

LoginPage.propTypes = {
	match: PropTypes.object
};
