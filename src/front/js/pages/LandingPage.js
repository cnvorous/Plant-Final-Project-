import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="top-banner d-flex">
				<div className="top-banner-box1">
					Empty
				</div>
				<div className="top-banner-box2 m-auto">
					<div className="text-center">
						<i className="fas fa-seedling fa-3x"></i>
					</div>
					<div className="text-center">
						Leaf it to Us
					</div>
				</div>
				<div className="top-banner-box3 d-flex">
					<div className="m-auto">
						<i className="fas fa-user fa-4x"></i>
					</div>
					<div className="d-flex flex-column m-auto">
						<Link to="/createaccount">
							<span>
								Sign Up/ Create Account
							</span>
						</Link>
						<div className="row">  {/* added row and input-sm, col-xs-3  didnt work */}
							<div class="form-floating mb-3 col-xs-3">
								<input type="email" class="form-control input-sm" id="floatingInput" placeholder="name@example.com" />
								<label for="floatingInput">Login Email</label>
							</div>
						</div>
						<div children="row">  {/* added row and input-sm, col-xs-3  didnt work */}
							<div class="form-floating col-xs-3">
								<input type="password" class="form-control input-sm" id="floatingPassword" placeholder="Password" />
								<label for="floatingPassword">Password</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="middle-banner d-flex flex-row justify-content-around">
				<Link to="/searchplantdata">
					<button type="button" className="button1 btn">
						Discover Plant Varieties
					</button>
				</Link>
				<Link to="/Favorites">
					<button type="button" className="button1 btn">
						Shareables
					</button>
				</Link>
				<div class="dropdown">
					<button class="button1 btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Natural uses for your plants
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<Link to="" class="dropdown-item">
							<li>Skin Care Remedies</li>
						</Link>
						<Link to="" class="dropdown-item">
							<li>Natural Insect Repellent</li>
						</Link>
						<Link to="" class="dropdown-item">
							<li>Plants that can harm family/pets</li>
						</Link>
					</ul>
				</div>
			</div>

			<div className="landing-body m-5">
				<h1>About (website Name): </h1> {/*when i used br it broke code */}
				<p></p>
				<h4>Our site is dedicated to helping users find a streamline way of keeping your plants
					not just healthy but thriving.
				</h4>
				<p></p>
				<p><i className="fas fa-tint fa-2x"></i>
					We've all been gulity of showing our plants to much love and giving them more then what
					they need With our site you will be able to effortlessly make sure your plant is watered
					and fertilized at the most optimal time and using the correct measurements.
				</p>
				<p><i className="fas fa-chart-line fa-2x"></i>
					You can track your plants growth progress and even share your prized plants in our community gallery.
					Feel free to share you Green Thumb tips.
				</p>
				<p><i className="fas fa-angle-double-right fa-2x"></i>
					Not sure where to start ... thats ok we have you covered.  Just <Link to="/search">CLICK HERE</Link> and search plant options
					by size, sunlight exposure, seasons, hardiness and what plants can be used for other inhome
					uses.
				</p>
			</div>

			<div className="bottom-banner d-flex-column">
				<div className="green-thumb text-center">
					<Link to="/greenthumbgallery">
						<button type="button" className="button1 btn">
							Check out and Post in our Community Green Thumb Gallery
						</button>
					</Link>
				</div>
				<div className="justify-content-center m-5">
					**INSERT GalleryGreenThumb TAG - photo cards of plants**** {/*<GalleryGreenThumb/>*/}
				</div>
			</div>

		</div>
	);
};
