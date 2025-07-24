import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";
import Contact from "./components/Contact";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then(setReviews);
  }, []);

  const handleNewReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Contact />
      <ReviewForm onReviewSubmit={handleNewReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;