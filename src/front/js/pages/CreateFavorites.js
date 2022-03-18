import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CreateFavorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [favList, setFavList] = useState("");
	console.log(favList);

	return (
		<div>
			<div className="input-group">
				<input className="form-control favorites-input" id="inputGroup-sizing-sm" type="text" value={favList} onChange={(e) => setFavList(e.target.value)} placeholder="Create Favorites List" aria-label="default input example" />
				<button className="btn" onClick={() => {
					let list= [...store.favoritesList,{ name: favList, favorites: [] }]
					actions.createNewFavoritesList(list);
					setFavList("");
				}}>Add New List
				</button>
			</div>
			<div>
				<ul>
					{store.favoritesList.length > 0 && store.favoritesList.map((list, index) => {
						return (
							<li key={index}>
								{list.name}
							</li>
						);
					})}
				</ul>
			</div>

			<Link to="/listfavorites">
				<span>
					This link will connect them with page to see the List they click on this current page.
				</span>
			</Link>
		</div>
	);
};

CreateFavorites.propTypes = {
	match: PropTypes.object
};
