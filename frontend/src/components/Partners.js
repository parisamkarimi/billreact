import React from "react";
import cox from "../assets/Cox-Logo.png";
import tmob from "../assets/T-Mobile.png";
import att from "../assets/ATT-Logo.png";

export default function Partners() {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Trusted by Our Partners</h2>
      <div className="flex justify-between items-center max-w-7xl mx-auto space-x-10">
        <img src={cox} alt="Cox Logo" className="h-16 md:h-20 object-contain mx-auto w-1/4" />
        <img src={tmob} alt="T-Mobile Logo" className="h-16 md:h-20 object-contain mx-auto w-1/4" />
        <img src={att} alt="AT&T Logo" className="h-16 md:h-20 object-contain mx-auto w-1/4" />
        <div className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2 mt-4 md:mt-0 w-1/4">
          <span>+50</span>
          <span className="text-sm text-gray-500">More Partners</span>
        </div>
      </div>
    </section>
  );
}