import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CloseModal } from "../component/CloseModal";

export const CreateFavorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [favItem, setFavItem] = useState("");
	const [favList, setFavList] = useState(store.favoritesList);

	const saveList = (e) => {
		console.log(e);
		if (e.keyCode == 13) {
			let list = [...favList,
			{ name: favItem, favorites: [] }]
			actions.createNewFavoritesList(list);
			setFavItem("");
			setFavList(list);
		}
	};

	const removeList = (index) => {
		let list = favList.filter((item, i) => i != index) //gives a new array 
		actions.createNewFavoritesList(list);
		setFavList(list);
	};

	return (
		<div className="fav-body">
			<div className="create-favs-container">
				<h5>Favorite Plants </h5>
				<div className="favs-bar text-center">
					<input className="favorites-input" type="text"
						placeholder="Create Favorites List" aria-label="default input example"
						onChange={(e) => setFavItem(e.target.value)}
						value={favItem}
						onKeyUp={(e) => saveList(e)} />
					<button className="btn fav-search-btn"
						onClick={() => {
							let list = [...favList,
							{ name: favItem, favorites: [] }]
							actions.createNewFavoritesList(list);
							setFavItem("");
							setFavList(list);
						}}>Add New List
					</button>
				</div>
				<div className="list-body ad-sm-inline-flex">
				<ul className="favs-ul">
					{favList.length > 0 && favList.map((list, index) => {
						return (
							<button className="li-btn">
							<li className="fav-list-item" key={index}>
								<Link to={`/listfavorites/${list.name}`}>
									{list.name}
								</Link>
								<span className="delete-icon"
									onClick={() => removeList(index)} >
									{""}
									<i className="far fa-trash-alt"></i>
								</span>
							</li>
							</button>
						);
					})}
				</ul>
				</div>
				<div className="favs-counter text-center">
					<em>
						{favList.length == 0 ? "No Current Favorites List" : `${favList.length} Favorites List`}
					</em>
				</div>
			</div>
		</div>
	);
};

CreateFavorites.propTypes = {
	onDelte: PropTypes.func
};
