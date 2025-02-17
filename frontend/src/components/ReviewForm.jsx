import React, { useState } from "react";
import axios from "axios";

const ReviewPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 1,
    title: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("http://localhost:8080/api/v1/reviews", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setSuccess("Review submitted successfully!");
        setFormData({ name: "", role: "", rating: 1, title: "", comment: "" });
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Error submitting review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md flex gap-8">
      {/* Left Side - Review Form */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium mb-2">Role</label>
            <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium mb-2">Rating</label>
            <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md">
              {[1, 2, 3, 4, 5].map((number) => (
                <option key={number} value={number}>{number}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-2">Feedback</label>
            <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} required rows="4" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <button type="submit" disabled={loading} className={`w-full py-2 text-white font-bold rounded-md ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#6A38C2] hover:bg-[#5b2ca2]"}`}>
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      {/* Right Side - Review Info */}
      <div className="w-1/2 flex flex-col items-center text-center">
        <img src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg?semt=ais_hybrid" alt="JobPortal Reviews" className="w-full h-auto rounded-lg shadow-md" />
        <h2 className="text-2xl font-bold mt-4">JobPortal</h2>
        <p className="text-gray-600 mt-2">
          JobPortal is your go-to platform for finding the best job opportunities.
          Our user reviews help professionals make informed career decisions.
          Join our community and share your experience today!
        </p>
      </div>
    </div>
  );
};

export default ReviewPage;
