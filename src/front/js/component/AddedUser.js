// commented whole page out for now-cv 3/12

// import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
// import XENA from "../../img/XENA.jpg";
// import Link from "react-router-dom/Link";

// export const AddedUser = props => {
// 	// changed from props // have to either use prop.item/key or use {}and call declared item from listing the <card/>tag
// 	const [state, setState] = useState({}); //initialize state here

// 	return (
// 		<li className="list-group-item">
// 			<div className="row w-100">
// 				<div className="col-12 col-sm-6 col-md-3 px-0">
// 					<img src={XENA} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
// 				</div>
// 				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
// 					<div className=" float-right">
// 						<Link to={"/EditContact/" + props.contactDetails.id}>
// 							<button className="btn">
// 								<i className="fas fa-pencil-alt mr-3" />
// 							</button>
// 						</Link>
// 						<button
// 							className="btn"
// 							onClick={() => {
// 								props.onDelete();
// 							}}>
// 							<i className="fas fa-trash-alt" />
// 						</button>
// 					</div>
// 					<label className="name lead">{props.contactDetails.full_name}</label>
// 					<br />
// 					<i className="fas fa-map-marker-alt text-muted mr-3" />
// 					<span className="text-muted">{props.contactDetails.address}</span>
// 					<br />
// 					<span
// 						className="fa fa-phone fa-fw text-muted mr-3"
// 						data-toggle="tooltip"
// 						title=""
// 						data-original-title="(870) 288-4149"
// 					/>
// 					<span className="text-muted small">{props.contactDetails.phone}</span>
// 					<br />
// 					<span
// 						className="fa fa-envelope fa-fw text-muted mr-3"
// 						data-toggle="tooltip"
// 						data-original-title=""
// 						title=""
// 					/>
// 					<span className="text-muted small text-truncate">{props.contactDetails.email}</span>
// 				</div>
// 			</div>
// 		</li>
// 	);
// };

// /**
//  * Define the data-types for
//  * your component's properties
//  **/
// AddedUser.propTypes = {
// 	contactDetails: PropTypes.object, // ***VIP added this line to code to validate {contactDetails}as passed prop
// 	history: PropTypes.object, // was already in template
// 	onDelete: PropTypes.func // was already in template
// };

// /**
//  * Define the default values for
//  * your component's properties
//  **/
// AddedUser.defaultProps = {
// 	onDelete: null
// };