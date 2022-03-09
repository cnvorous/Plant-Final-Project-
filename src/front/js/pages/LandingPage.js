import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="top-banner d-flex justify-content-between">
				<div className="top-banner-box1">
					Empty
				</div>
				<div className="top-banner-box2">
					<div className="text-center">
						<i className="fa-solid fa-hand-holding-seedling">LOGO Symbol </i> {/*Icon not working */}
					</div>
					<div className="text-center">
						Website name: Leaf it to Us (placeholder)
					</div>
				</div>
				<div className="top-banner-box3 d-flex-row"> {/*can i not use d-flex here? */}
					<div>
						<i class="fas fa-user"></i>
					</div>
					<div className="d-flex-column">
						<span>
							<a href="/createaccount">Sign Up/ Create Account</a>
						</span>
						<button type="button" className="btn btn-warning btn-sm">
						<a href="/loginpage">
							Login:Email/Password
						</a>
						</button>
					</div>
				</div>
			</div>

			{/* <div className="dropdown-menu">
					<form class="px-4 py-3">
						<div class="form-group">
							<label for="exampleDropdownFormEmail1">Email address</label>
							<input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
						</div>
						<div class="form-group">
							<label for="exampleDropdownFormPassword1">Password</label>
							<input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
						</div>
						<div class="form-check">
							<input type="checkbox" class="form-check-input" id="dropdownCheck">
								<label class="form-check-label" for="dropdownCheck">
									Remember me
								</label>
						</div>
						<button type="submit" class="btn btn-primary">Sign in</button>
					</form>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#">New around here? Sign up</a>
					<a class="dropdown-item" href="#">Forgot password?</a>
				</div>*/}

			<div className="middle-banner d-flex flex-row justify-content-around">
				<button type="button" className="btn btn-warning">{/*trying to make links broke code */}
					Discover Plant Varieties
				</button>
				<button type="button" className="btn btn-warning">
					Shareables
				</button>
				<div class="dropdown"> {/*I cant get toggle to drop and trying to make links broke code */}
					<button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Natural uses for your plants
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						<button class="dropdown-item" type="button">Skin Care Remedies</button>{/* trying to make links broke code */}
						<button class="dropdown-item" type="button">Natural Insect Repellent</button>
						<button class="dropdown-item" type="button">Plants that can harm family/pets</button>
					</div>
				</div>
			</div>

			<div className="landing-body m-5">
				<h1 className="transbox">About (website Name): </h1> {/*when i used br it broke code */}
				<p></p>
				<h4 className="transbox">Our site is dedicated to helping users find a streamline way of keeping your plants
					not just healthy but thriving.
				</h4>
				<p></p>
				<p className="transbox">
					<i class="fas fa-raindrops"></i> {/* Icons not working */}
					<i class="fa-solid fa-raindrops"></i>
					We've all been gulity of showing our plants to much love and giving them more then what
					they need With our site you will be able to effortlessly make sure your plant is watered
					and fertilized at the most optimal time and using the correct measurements.
				</p>
				<p className="transbox">
					You can track your plants growth progress and even share your prized plants in our community gallery.
					Feel free to share you Green Thumb tips.
				</p>
				<p className="transbox">
					Not sure where to start ... thats ok we have you covered.  Just <a href="/search">CLICK HERE</a>and search plant options
					by size, sunlight exposure, seasons, hardiness and what plants can be used for other inhome
					uses.
				</p>
			</div>

			<div className="bottom-banner d-flex-column">
				<div className="green-thumb text-center">
					{/*<Link to="/greenthumbgallery">*/} {/*Not sure why Link isnt working and breaks code */}
					<button type="button" className="btn btn-warning">
						Check out and Post in our Community Green Thumb Gallery
					</button>
					{/*</Link>*/}
				</div>
				<div className="justify-content-center m-5">
					****INSERT GalleryGreenThumb TAG here will have photo cards of plants**** {/*<GalleryGreenThumb/>*/}
				</div>
			</div>

		</div>
	);
};
