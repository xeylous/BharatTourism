import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Manually import images
import tajMahal from '../../images/tajmahal.jpg';
import jaipur from '../../images/jaipur.jpg';
import goaBeach from '../../images/goa_beach.jpg';
import sikkim from '../../images/sikkim.jpg';
import chennai from '../../images/chennai.jpg';
import kashmir from '../../images/kashmir.jpg';

const HomePage = () => {
    const touristSpots = [
        { name: "Taj Mahal", image: tajMahal },
        { name: "Jaipur", image: jaipur },
        { name: "Goa Beach", image: goaBeach },
        { name: "Sikkim", image: sikkim },
        { name: "Chennai", image: chennai },
        { name: "Kashmir", image: kashmir },
        // Add more tourist spots as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // 2 seconds
    };

    return (
        <div className="home-page min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-gray-800">
            <header className="home-header bg-blue-600 text-white p-6 shadow-md">
                <h1 className="text-3xl font-bold">Welcome to Bharat Tourism</h1>
                <p className="mt-2">Explore the beauty and diversity of India</p>
            </header>
            <section className="home-content p-6">
                <h2 className="text-2xl font-semibold text-white">Discover Destinations</h2>
                <p className="mt-2 text-white">Find the best places to visit in India, from the majestic Himalayas to the serene beaches of Goa.</p>
                <Slider {...settings} className="mt-6">
                    {touristSpots.map((spot, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xl mx-auto">
                                <img src={spot.image} alt={spot.name} className="w-full h-[30rem] object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-center">{spot.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default HomePage;
