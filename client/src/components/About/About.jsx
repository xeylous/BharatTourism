import React from "react";
import { Route } from "react-router-dom";

const About = () => {
  return (

    <div className="bg-gray-100 py-10 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold">Bharat Tourism!</span> We
          are dedicated to providing you with the best travel experiences across
          India. Our mission is to showcase the rich cultural heritage,
          breathtaking landscapes, and diverse traditions of this incredible
          country.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our team of experienced travel experts is passionate about helping you
          discover hidden gems and popular destinations. Whether you're looking
          for a relaxing beach vacation, an adventurous trek, or a cultural tour
          of historic cities, we have something for everyone.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We believe in responsible tourism and strive to promote sustainable
          travel practices. Join us on a journey to explore the beauty and
          diversity of Bharat!
        </p>
      </div>
    </div>
  );
};

export default About;
