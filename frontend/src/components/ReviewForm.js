import React, { useState } from "react";

export default function ReviewForm({ onReviewSubmit }) {
  const [review, setReview] = useState({
    name: "",
    comment: "",
    rating: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.name || !review.comment || !review.rating) return;

    const res = await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review)
    });

    const data = await res.json();
    onReviewSubmit(data);
    setReview({ name: "", comment: "", rating: 0 });
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          ⭐ Share Your Experience
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border rounded"
            value={review.name}
            onChange={(e) => setReview({ ...review, name: e.target.value })}
          />
          <textarea
            placeholder="Your Review"
            className="w-full mb-4 p-2 border rounded"
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
          ></textarea>
          <div className="mb-4">
            <span className="mr-2 font-semibold">Rating:</span>
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                type="button"
                key={i}
                onClick={() => setReview({ ...review, rating: i })}
                className={`text-2xl ${i <= review.rating ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
