import React from "react";
import ab from "../assets/ab.png";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img src={ab} alt="About Us" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 text-lg">
            Welcome to Billfify!<br /><br />
            Tired of paying high bills month after month? At Billfify, we help you lower your everyday expenses by negotiating with service providers on your behalf. Whether it’s electricity, internet, gas, or other household bills, our team works hard to get you the best possible rates so you can save money and focus on what really matters.<br /><br />
            No hassle, no stress, just simple savings.<br />
            Join us today and take control of your bills!
          </p>
        </div>
      </div>
    </section>
  );
}