import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.jsx";
import { Card } from "./card.jsx";
import { Jumbotron } from "./jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
		</div>
	);
};

export default Home;
