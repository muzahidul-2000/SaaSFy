import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useUser } from "@clerk/clerk-react";

const FeedbackForm = ({ onClose }) => {
  const { user } = useUser();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment || rating === 0) {
      alert("Please add a comment and rating.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "feedbacks"), {
        email: user?.primaryEmailAddress?.emailAddress || "anonymous",
        name: user?.fullName || "Anonymous",
        userImage: user?.imageUrl || "/default-user.png",
        comment,
        rating,
        createdAt: serverTimestamp(),
      });

      setComment("");
      setRating(0);
      onClose();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Rating Stars */}
      <div className="flex gap-2 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-2xl ${
              rating >= star ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Comment */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your feedback..."
        className="w-full border border-gray-300 rounded-lg p-2 mb-3"
        rows="3"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FeedbackForm;
