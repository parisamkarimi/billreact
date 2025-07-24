import React from "react";
import background from "../assets/background.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white px-4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <a
          href="/form"
          className="relative inline-block text-white text-lg font-semibold px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Start Now
        </a>
      </div>
    </section>
  );
}