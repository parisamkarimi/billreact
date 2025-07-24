const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export async function submitReview(data) {
  const res = await fetch(`${API_URL}/api/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchReviews() {
  const res = await fetch(`${API_URL}/api/reviews`);
  return res.json();
}
