import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const GrowthGallery = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const lavender = ["https://k2j4u5m5.stackpathcdn.com/wp-content/uploads/2021/01/baby-lavender-seedling-germinating.jpg", "https://previews.123rf.com/images/travelman/travelman1712/travelman171200055/92543301-jeunes-plants-de-lavande-cultiv%C3%A9s-dans-le-jardin.jpg", "http://lh6.ggpht.com/gp9ocJgec8PnMA3N8ah3MLDyf0zEauRdFV6x4GCDCbwjhewW8QbtHUE3jGbpszrlQOC4ZkiEUgHA1fLP5bvocaQ=s900", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-grow-lavender-1622644170.jpg?crop=1.00xw:0.708xh;0,0.186xh&resize=1200:*"]

	return (
		<div>
			<h1 className="text-center"> GrowthGallery</h1>
			<div>
				<h2 className="text-center">Lavender</h2>
				<div className="d-flex justify-content-evenly" >
					{lavender.map((item, index) => {
						return (
							<div className="card" style={{ width: "18rem" }}>
								<img src={item} className="card-img-top h-75" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Stage {index + 1}</h5>
								</div>
							</div>
						)
					})}
					{/* <div className="card" style={{ width: "18rem" }}>
						<img src="https://k2j4u5m5.stackpathcdn.com/wp-content/uploads/2021/01/baby-lavender-seedling-germinating.jpg" className="card-img-top h-50" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Stage 1</h5>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img src="https://previews.123rf.com/images/travelman/travelman1712/travelman171200055/92543301-jeunes-plants-de-lavande-cultiv%C3%A9s-dans-le-jardin.jpg" className="card-img-top h-75" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Stage 2</h5>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img src="http://lh6.ggpht.com/gp9ocJgec8PnMA3N8ah3MLDyf0zEauRdFV6x4GCDCbwjhewW8QbtHUE3jGbpszrlQOC4ZkiEUgHA1fLP5bvocaQ=s900" className="card-img-top h-75" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Stage 3</h5>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-grow-lavender-1622644170.jpg?crop=1.00xw:0.708xh;0,0.186xh&resize=1200:*" className="card-img-top h-75" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Stage 4</h5>
						</div>
					</div> */}


				</div>
				<p>Description:

				</p>
			</div>


		</div>

	);
};

GrowthGallery.propTypes = {
	match: PropTypes.object
};
