import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
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
    );
};

export default Footer;
