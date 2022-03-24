import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CloseModal } from "../component/CloseModal";

export const CreateFavorites = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [favList, setFavList] = useState("");
	const [state, setState] = useState({ showModal: false, id: null });


	return (
		<div>
			<div className="input-group m-3">
				<input className="form-control favorites-input" id="inputGroup-sizing-sm" type="text" value={favList} onChange={(e) => setFavList(e.target.value)} placeholder="Create Favorites List" aria-label="default input example" />
				<button className="btn fav-search-btn" onClick={() => {
					let list = [...store.favoritesList, { name: favList, favorites: [] }]
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
								<span>{list.name}
									<button className="btn"
										onClick={() => { props.onDelete(); }}>
										<i className="far fa-trash-alt"
											onDelete={() => setState({ showModal: true, id: list.id })}>
										</i>
									</button>
								</span>
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
			<CloseModal show={state.showModal}
				onClose={() => setState({ showModal: false })}
				id={state.id}
			/>
			{""}
		</div>
	);
};

CreateFavorites.propTypes = {
	onDelte: PropTypes.func
};
