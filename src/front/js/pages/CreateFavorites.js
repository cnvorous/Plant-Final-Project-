import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CloseModal } from "../component/CloseModal";

export const CreateFavorites = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [favItem, setFavItem] = useState("");
  const [favList, setFavList] = useState(store.favoritesList);

  useEffect(() => {
    setFavList(store.favoritesList);
  }, [store.favoritesList]);

  const saveList = (e) => {
    console.log(e);
    if (e.keyCode == 13) {
      actions.postFavoritesName(favItem);
      setFavItem("");
    }
  };

  return (
    <div className="fav-body">
      <div className="create-favs-container text-center">
        <span className="fav-title">Favorite Plants </span>
        <div className="favs-bar text-center">
          <input
            className="favorites-input"
            type="text"
            placeholder="Create Favorites List"
            aria-label="default input example"
            onChange={(e) => setFavItem(e.target.value)}
            value={favItem}
            onKeyUp={(e) => saveList(e)}
          />
          <button
            className="btn fav-search-btn"
            onClick={() => {
              actions.postFavoritesName(favItem);
            }}
          >
            Add New List
          </button>
        </div>
        <div className="list-body ad-sm-inline-flex">
          {favList.length > 0 ? (
            <ul className="favs-ul">
              {favList.map((list, index) => {
                return (
                  <button className="li-btn" key={index}>
                    <li className="fav-list-item" key={index}>
                      <Link to={`/listfavorites/${list}`}>{list}</Link>
                      <span
                        className="delete-icon"
                        onClick={() => actions.removeList(index)}
                      >
                        {""}
                        <i className="far fa-trash-alt"></i>
                      </span>
                    </li>
                  </button>
                );
              })}
            </ul>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="favs-counter text-center">
          <em>
            {favList.length == 0
              ? "No Current Favorites List"
              : `${favList.length} Favorites List`}
          </em>
        </div>
      </div>
    </div>
  );
};

CreateFavorites.propTypes = {
  onDelte: PropTypes.func,
};
