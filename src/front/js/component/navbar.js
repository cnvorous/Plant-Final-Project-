import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light button1">
			<div className="container">
				<Link to="/demo">
					<button className="button-weather btn btn-primary">Weather App</button>
				</Link>
				<div className="ml-auto">
					<ul className="nav">
						<li className="nav-item">
							<Link to="/">
								<a className="nav-link active" aria-current="page">Home</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/dashboard">
								<a className="nav-link">Profile</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/growthgallery">
								<a className="nav-link">Gallery</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/favorites">
								<a className="nav-link">Favorites</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/calendar">
								<a className="nav-link"><i className="far fa-calendar-alt fa-2x"></i></a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
