import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
      <div className="flex justify-center gap-8 text-3xl mb-8">
        <a href="mailto:Info@Billfify.com" className="text-gray-600 hover:text-red-600" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.instagram.com/billfify" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/share/12H788M4615/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700" title="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="tel:+17252212818" className="text-gray-600 hover:text-green-600" title="Call">
          <i className="fas fa-phone"></i>
        </a>
      </div>
      <div className="text-lg text-gray-700 space-y-2">
        <p>
          <strong>Email:</strong>
          <a href="mailto:Info@Billfify.com" className="text-blue-600 hover:underline"> Info@Billfify.com </a>
        </p>
        <p>
          <strong>Cell Phone:</strong>
          <a href="tel:+17252212818" className="text-blue-600 hover:underline">(725) 221-2818</a>
        </p>
      </div>
    </section>
  );
}