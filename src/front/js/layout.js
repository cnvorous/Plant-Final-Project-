import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CreateAccount } from "./pages/CreateAccount";
import { Favorites } from "./pages/Favorites";
import { SearchPlantData } from "./pages/SearchPlantData";
import { SinglePlantView } from "./pages/SinglePlantView";
import { GrowthGallery } from "./pages/GrowthGallery";
import { Calendar } from "./pages/Calendar";
import { GreenThumbGallery } from "./pages/GreenThumbGallery";
import { Profile } from "./pages/Profile";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/demo" component={Demo} />
						<Route exact path="/single/:theid" component={Single} />

						<Route exact path="/single/:theid" component={CreateAccount} />
						<Route exact path="/single/:theid" component={Profile} />
						<Route exact path="/single/:theid" component={Favorites} />
						<Route exact path="/single/:theid" component={SearchPlantData} />
						<Route exact path="/single/:theid" component={SinglePlantView} />
						<Route exact path="/single/:theid" component={GrowthGallery} />
						<Route exact path="/single/:theid" component={Calendar} />
						<Route exact path="/single/:theid" component={GreenThumbGallery} />

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
