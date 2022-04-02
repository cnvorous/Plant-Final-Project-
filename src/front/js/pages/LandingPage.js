import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profile, setProfile] = useState(store.profile);
	useEffect(() => {
		if (store.profile.length !== 2) {
			setProfile(store.profile)
		}
	}, [store.profile]);

	return (
		<div>
			<div className="top-banner d-flex">
				<div className="top-banner-box1"> {/*this div is meant to be empty */}
				</div>
				<div className="top-banner-box2 m-auto">
					<div className="text-center">
						<img className="seed-logo" src="https://us.123rf.com/450wm/nad1992/nad19921601/nad1992160100010/50559166-abstract-leafs-care-vector-logo-icon-eco-icon-with-green-leaf-.jpg" />
					</div>
					<div className="text-center main-text">
						<strong>Leaf it to Us</strong>
					</div>
				</div>
				<div className="top-banner-box3 d-flex m-auto">
					<div className="m-auto">
					</div>
					<div>
						{profile.length > 0 ? <div>{store.profile.map((item, index) => {
							return (
								<span>Logged-in as:{item.email}</span>
							)
						})}</div> :    //need the colon for tenr. expression
							<div>
								<Link to="/createaccount">
									<span className="create-link">
										Sign Up/ Create Account
									</span>
								</Link>
								<div className="row">  {/* added row and input-sm, col-xs-3  didnt work */}
									<div className="form-floating mb-3 col-xs-3">
										<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control input-sm" id="floatingInput" placeholder="name@example.com" />
										<label for="floatingInput">Login Email</label>
									</div>
								</div>
								<div className="row">  {/* added row and input-sm, col-xs-3  didnt work */}
									<div className="form-floating col-xs-3">
										<input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
											onKeyPress={(e) => {
												if (e.key == "Enter") {
													actions.login(email, password)
												}
											}} className="form-control input-sm" id="floatingPassword" placeholder="Password" />
										<label for="floatingPassword">Password</label>
									</div>
								</div>
								<div>
									<Link to="/forgotpassword">
										<span className="text-center">Forgot Password??</span>
									</Link>
								</div>
							</div>}
					</div>
				</div>
			</div>
			<div className="landing-body m-5">

				<div class="container">
					<h1 className="text-center heading-text-1">About Leaf it to Us: </h1>
					<h4 className="heading-text-2">Our site is dedicated to helping users find a streamline way of keeping your plants
						not just healthy but thriving.
					</h4>
					<div class="row row-cols-3">
						<div class="col">
							<p className="main-text">
								<i className="fas fa-tint fa-2x"></i>
								We've all been gulity of showing our plants to much love and giving them more then what
								they need With our site you will be able to effortlessly make sure your plant is watered
								and fertilized at the most optimal time and using the correct measurements.
							</p>
						</div>
						<div class="col">
							<p className="main-text">
								<i className="fas fa-chart-line fa-2x"></i>
								You can track your plants growth progress and even share your prized plants in our community gallery.
								Feel free to share you Green Thumb tips.
							</p>
						</div>
						<div class="col">
							<p className="main-text">
								<i className="fas fa-angle-double-right fa-2x"></i>
								Not sure where to start ... thats ok we have you covered.  Just <Link to="/searchplantdata">CLICK HERE</Link> and search plant options
								by size, sunlight exposure, seasons, hardiness and what plants can be used for other inhome
								uses.
							</p>
						</div>
						<div className="middle-banner d-flex justify-content-center">
							<div>
								<Link to="/searchplantdata">
									<button type="button" className="button1 btn">
										Discover Plant Varieties
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};
