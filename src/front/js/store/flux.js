import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			profile: [], // for login/landing page
			account: [],
			plantLibrary: [],  //database of plants for search since no proper API]
			weatherInfo: {},
			favoritesList: [],
			favoritePlants: [
				{ name: "test" }
			],
		},

		actions: {

			removeList: (id) => {
				fetch(
					"https://3001-cnvorous-plantfinalproje-8ku0pcae2xq.ws-us38.gitpod.io/api/favorites/" + id,
					{
						method: "DELETE",
						headers: { "Content-Type": "application/json" },
					}
				)
					.then((response) => response.json())
					.then((data) => {
						console.log(data)
						setStore({ favoritesList: data })
					})
					.catch((err) => console.log(err));
			},

			postFavoritesName: (name) => {
				fetch("https://3001-cnvorous-plantfinalproje-8ku0pcae2xq.ws-us38.gitpod.io/api/favorites",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							"name": name,
						}),
					})
					.then((response) => response.json())
					.then((data) => {
						console.log(data)
						setStore({ favoritesList: data })
					})
					.catch((err) => console.log(err))
			},

			getFavorites: () => {
				fetch("https://3001-cnvorous-plantfinalproje-8ku0pcae2xq.ws-us38.gitpod.io/api/favorites",
					{ method: "GET" })
					.then((response) => response.json())
					.then((data) => setStore({ favoritesList: data }))
					.catch((err) => console.log(err))
			},

			getPlantData: () => {
				fetch("https://3001-cnvorous-plantfinalproje-8ku0pcae2xq.ws-us38.gitpod.io/api/plants",
					{ method: "GET" })
					.then((response) => response.json())
					.then((data) => setStore({ plantLibrary: data }))
					.catch((err) => console.log(err))
			},

			////creataccount /////
			createAccount: (array) => {
				setStore({ account: array });
			},

			login: (email, password) => {  //landing page
				setStore({ profile: [{ "email": email, "password": password }] });  //the key is in red
			},
			logout: () => {       //landing page
				setStore({ profile: [] });
			},

			// plantData:(plantName)=>{
			// 	setStore({plantLibrary:[{"plantName": plantName}]});
			// },



			getWeatherData: (zipcode) => {
				fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?zip=${zipcode}%2Cus`, {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
						"x-rapidapi-key": "5f370309abmsh52b2ef22b0e99a0p19db05jsn15130b55cf47"
					}
				})
					.then(response => response.json())
					.then(data => setStore({ weatherInfo: data }))  //data is response from respjson
					.catch(err => {
						console.error(err);
					});
			},
			createNewFavoritesList: (newList) => {
				setStore({ favoritesList: newList });
			},

			FillSavedFavoriteHeart: (fav, index) => {
				const newFavoritesList = getStore().favoritesList; {/*gives local copy of favs to pushinto  */ }
				newFavoritesList.push(fav)

				setStore({ favoritesList: newFavoritesList });
			},

			addFavoritePlantItem: (listName, plant) => {
				const newList = getStore().favoritesList.map((item, index) => {
					let found = item.favorites.find((object) => object.commonName == plant.commonName)
					if (item.name == listName && !found) {
						item.favorites = [...item.favorites, plant]
					}
					return item
				})
				console.log(newList);
				setStore({ favoritesList: newList });
			},
			removeFavoritePlantItem: (listName, plant) => {
				const newList = getStore().favoritesList.map((item, index) => {
					let found = item.favorites.find((object) => object.commonName == plant.commonName)
					console.log("found", found);
					if (item.name == listName && found) {
						let list = item.favorites.filter((object) => object.commonName != plant.commonName)
						item.favorites = list
						console.log(list);
					}
					return item
				})
				console.log(newList);
				setStore({ favoritesList: newList });
			},


		}
	};
};

// const demo= store.demo.map((elm,i)={
//     if (i===index) elm.background=color;
// 	 return elm;

// 	 setStore({demo:demo});
// });

// deleteFavsList: (id) => {
// 	setStore(setFavList(""));
// },
export default getState;
