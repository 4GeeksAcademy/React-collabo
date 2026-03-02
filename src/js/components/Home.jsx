import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"; 

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container mt-5 pt-5"> 
				<Jumbotron />
			</div>
		</div>
	);
};

export default Home;