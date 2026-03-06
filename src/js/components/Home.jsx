import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
    const cardsData = [
        { title: "Card 1", description: "Texto 1...", imageUrl: "https://placehold.co/500x325" },
        { title: "Card 2", description: "Texto 2...", imageUrl: "https://placehold.co/500x325" },
        { title: "Card 3", description: "Texto 3...", imageUrl: "https://placehold.co/500x325" },
        { title: "Card 4", description: "Texto 4...", imageUrl: "https://placehold.co/500x325" },
    ];

    return (
        <div>
            <Navbar />
            <div className="container mt-5 py-5"> 
                <Jumbotron />
                <div className="row text-center">
                    {cardsData.map((card, index) => (
                        <Card 
                            key={index}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;