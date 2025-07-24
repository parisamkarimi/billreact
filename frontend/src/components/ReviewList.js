import React from "react";

export default function ReviewList({ reviews }) {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-2">🎉 Thank You!</h3>
        <p className="text-gray-700">
          Average Rating: {averageRating} / 5 ({reviews.length} review
          {reviews.length !== 1 ? "s" : ""})
        </p>
      </div>
      <h3 className="text-2xl font-bold mb-6 text-gray-800">💬 Recent Reviews</h3>
      <div className="space-y-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-md text-left"
          >
            <h4 className="font-semibold mb-1">{r.name}</h4>
            <div className="text-yellow-400 mb-2">
              {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
            </div>
            <p className="text-gray-800">{r.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}