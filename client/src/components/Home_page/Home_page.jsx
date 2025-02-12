import React from 'react';

const HomePage = () => {
    const touristSpots = [
        { name: "Taj Mahal", image: "path/to/tajmahal.jpg" },
        { name: "Jaipur", image: "path/to/jaipur.jpg" },
        { name: "Goa Beach", image: "path/to/goa.jpg" },
        // Add more tourist spots as needed
    ];

    return (
        <div className="home-page min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-gray-800">
            <header className="home-header bg-blue-600 text-white p-6 shadow-md">
                <h1 className="text-3xl font-bold">Welcome to Bharat Tourism</h1>
                <p className="mt-2">Explore the beauty and diversity of India</p>
            </header>
            <section className="home-content p-6">
                <h2 className="text-2xl font-semibold text-white">Discover Destinations</h2>
                <p className="mt-2 text-white">Find the best places to visit in India, from the majestic Himalayas to the serene beaches of Goa.</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {touristSpots.map((spot, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                            <img src={spot.image} alt={spot.name} className="w-full h-64 object-cover rounded-t-lg" />
                            <h3 className="text-xl mt-2">{spot.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="home-footer bg-gray-800 text-white text-center p-4">
                <p>&copy; 2023 Bharat Tourism. All rights reserved.</p>
                <div className="mt-4">
                    <p>Contact us: info@bharattourism.com</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://facebook.com" className="text-blue-400">Facebook</a>
                        <a href="https://twitter.com" className="text-blue-300">Twitter</a>
                        <a href="https://instagram.com" className="text-pink-400">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
