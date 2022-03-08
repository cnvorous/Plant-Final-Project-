import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { LandingPage } from "./pages/LandingPage";
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
import { Dashboard } from "./pages/Dashboard";

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
						<Route exact path="/" component={LandingPage} />

						<Route exact path="/createaccount" component={CreateAccount} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/favorites" component={Favorites} />
						<Route exact path="/search" component={SearchPlantData} />
						<Route exact path="/singleplant" component={SinglePlantView} />
						<Route exact path="/growthgallery" component={GrowthGallery} />
						<Route exact path="/calendar" component={Calendar} />
						<Route exact path="/greenthumb" component={GreenThumbGallery} />
						<Route exact path="/demo" component={Demo} />
						<Route exact path="/single/:theid" component={Single} />
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
