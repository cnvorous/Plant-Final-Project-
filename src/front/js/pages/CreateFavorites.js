import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CloseModal } from "../component/CloseModal";

export const CreateFavorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [favItem, setFavItem] = useState("");
	const [favList, setFavList] = useState([]);
	// const [removeFavItem, setRemoveFavItem] =useState(favList)

	const saveList = (e) => {
		if (e.KeyCode == 13) {
			setFavList([...favList, favItem]);
			setFavItem("");
		}
	};

	// const removeItem =(e)=>{
	// 	const name = e.target.value.name
	// 	setRemoveFavItem(removeFavItem.filter(item => item.name !== name));
	//  };
	

	const removeList = (index) => {
		setFavList(favList.filter((taskToRemove, i)=>i !=index));
	};

		// const removeList = (index) => {
   //const removeListArr=favList.filter((taskToRemove, i)=>i !=index);
	// 	setFavList(removeListArr);
	//		updateList(removeListArr);
	// };


	// const saveList=(e)=>{
	// 	if(e.KeyCode==13){
	// 		let favs =[...favList];
	// 		let newFavs= favs.concat({
	// 			label: favItem,
	// 			done: false,
	// 		});
	// 		setFavList(newFavs);
	// 		updateList(newFavs);
	// 		setFavItem("");
	// 	};


	return (
		<div className="create-favs-container">
			<h5>Favorite Plants </h5>
			<div className="favs-bar d-flex">
				<input className="favorites-input" type="text"
				placeholder="Create Favorites List" aria-label="default input example"
					onChange={(e)=>setFavItem(e.target.value)}
					value={favItem} 
					onKeyUp={(e)=>saveList(e)}/>
				<button className="btn fav-search-btn"
				 onClick={() => {
					let list = [...store.favoritesList, 
						{ name: favItem, favorites: [] }]
					actions.createNewFavoritesList(list);
					setFavItem("");
				}}>Add New List
				</button>
			</div>
			<ul className="favs-ul">
				{store.favoritesList.length > 0 && store.favoritesList.map((list, index) => {
					return (
						<li className="fav-list-item" key={index}>
							{list.name}
							<span className="delete-icon"
								 onClick={(e)=>removeList(index)} >  {/*name={item.name} onClick={(e)=>removeList}*/}
								 {""} 
								<i className="far fa-trash-alt"></i>
							</span>
						</li>
					);
				})}
			</ul>
			<div className="favs-counter text-center">
				<em>
					{favList.length == 0 ? "No current favorites list" : `${favList.length}favorites list`}
				</em>
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
	onDelte: PropTypes.func
};
