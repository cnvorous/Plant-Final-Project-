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
			login:[] // added for now- cv 3/12
		},
		actions: {
			// added for now -cv 3/12
			// Use getActions to call a function within a fuction
			getPlantData: () => {
				fetch("https://plantlink.p.rapidapi.com/plantTypes", {
					"method": "GET",
					"headers": {
						"Access-Control-Allow-Origin": "*",
						//"authorization": "Basic Y252b3JvdXM6RnVuZXZlbnRzMzMjIw==",
						"x-rapidapi-host": "plantlink.p.rapidapi.com",
						"x-rapidapi-key": "5f370309abmsh52b2ef22b0e99a0p19db05jsn15130b55cf47"
					}
				})
					.then(response => {
						var data = response.json()
						console.log(data);
					})
					.catch(err => {
						console.error(err);
					});
			},

			//all code below was in template 

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
