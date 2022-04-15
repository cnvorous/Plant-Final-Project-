import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const GrowthGallery = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const lavender = ["https://k2j4u5m5.stackpathcdn.com/wp-content/uploads/2021/01/baby-lavender-seedling-germinating.jpg", "https://previews.123rf.com/images/travelman/travelman1712/travelman171200055/92543301-jeunes-plants-de-lavande-cultiv%C3%A9s-dans-le-jardin.jpg", "http://lh6.ggpht.com/gp9ocJgec8PnMA3N8ah3MLDyf0zEauRdFV6x4GCDCbwjhewW8QbtHUE3jGbpszrlQOC4ZkiEUgHA1fLP5bvocaQ=s900", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-grow-lavender-1622644170.jpg?crop=1.00xw:0.708xh;0,0.186xh&resize=1200:*"]
	const africanViolet = ["https://media.istockphoto.com/photos/propagating-african-violets-growing-african-violet-from-leaf-cuttings-picture-id1217029269?k=20&m=1217029269&s=612x612&w=0&h=8aG54PCgT1H5wy7WAg4wkekz0JAYg2hQDidvQG2TD88=", "https://www.gardenandgreenhouse.net/wp-content/uploads/2009/01/IMG_1432-1.jpg", "https://preview.redd.it/r758mipba0g41.jpg?auto=webp&s=12a0135679d98738664014f54be63cfb69f75716", "https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/african-violet-houseplant.jpg?itok=uXXhjxlK"]
	return (
		<div>
			<h1 className="card-body text-center"> GrowthGallery</h1>
			<div>
				<h2 className=" card-bottom text-center">Lavender</h2>
				<div className="d-flex justify-content-evenly" >
					{lavender.map((item, index) => {
						return (
							<div className="card" style={{ width: "18rem" }}>
								<img src={item} className="card-img-top h-75" alt="..." />
								<div className="card-body">
									<h5 className="card-title text-center">Stage {index + 1} </h5>
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
				<div className="bg-plant p-2 border rounded m-2 card-bottom ">
					<h3>Description:</h3>
					<ul>
						<li>Stage 1:
							Lavender thrives in a lot of sun and dry soil because it is a Mediterranean plant. As a result, you should choose a suitable location in your yard that receives plenty of sunlight. Lavender requires at least 4 hours of direct sunlight to thrive.</li>
						<li>stage 2:
							The lavender is then planted after the soil has been prepared. Growing lavender from seed is a difficult task.
							That is why it is suggested that you get lavender from a nursery and plant it.</li>
						<li>stage 3:
							Caring for lavender is one of the most challenging aspects of growing it.You’ll need to water your lavender plants at least twice a week for the first few days after transplanting them from the nursery to your herb garden until they’ve established themselves.
						</li>
						<li>stage 4:
							Harvest your plant first thing in the morning, when the oils are most concentrated.

							When half of the flower buds have opened, cut the lavender stems.

							Avoid cutting the plant’s woody section since this will cause it to rot.
						</li>
					</ul>
				</div>

			</div>

			<div>
				<h2 className="text-center">African Violet</h2>
				<div className="d-flex justify-content-evenly" >
					{africanViolet.map((item, index) => {
						return (
							<div className="card" style={{ width: "18rem" }}>
								<img src={item} className="card-img-top h-75" alt="..." />
								<div className="card-body text-center">
									<h5 className="card-title">Stage {index + 1}</h5>
								</div>
							</div>
						)
					})}
				</div>


				<div className="bg-plant p-2 border rounded m-2 card-bottom ">
					<h3>Description:</h3>
					<ul>
						<li>Stage 1: When potting, remember that violet leaves, stems and root systems are very tender and easily broken.
						</li>
						<li>stage 2:Violets, like most plants, respond well to regular doses of fertilizer. Most violet hobbyists prefer to use liquid or water-soluble fertilizers such as 20-20-20 every four to six weeks.

						</li>
						<li>stage 3:African violets are easily propagated by division (see Potting). You also can get more violets with leaf-petiole cuttings; however, this takes longer to produce a flowering plant.

						</li>
						<li>stage 4:Violets exposed to too much sunlight will have pale yellow-green leaves. Bleached-out, burned or dead areas also may be present

						</li>
					</ul>
				</div>


			</div>
		</div>
	);
};

GrowthGallery.propTypes = {
	match: PropTypes.object
};
