import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";



//create your first component
const Home = () => {
	return (
		<div>
          <Navbar />
		  <Jumbotron />
		  <div className= " container d-flex justify-content-between">
			<Card />
			<Card />
			<Card />
			<Card />
		  </div>
        </div>
	);
};

export default Home;
