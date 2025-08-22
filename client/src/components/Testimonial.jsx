import { useEffect, useState } from "react";
import { db } from "../firebase"; 
import { collection, getDocs } from "firebase/firestore";
import { assets } from "../assets/assets"; // your star icons

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "feedbacks"));
        const data = querySnapshot.docs.map((doc) => doc.data());

        setFeedbacks(data);

        // calculate average rating
        if (data.length > 0) {
          const total = data.reduce((acc, f) => acc + f.rating, 0);
          setAvgRating((total / data.length).toFixed(1));
        }
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  const feedbacksToShow = showAll ? feedbacks : feedbacks.slice(0, 3);

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      <div className="text-center mb-6">
        <h2 className="text-[#5cbdb9] text-[42px] font-semibold">Loved by Creators</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Don't just take our word for it. Here's what our users are saying.
        </p>
        {feedbacks.length > 0 && (
          <p className="mt-3 text-lg font-medium text-yellow-600">
            ⭐ Average Rating: {avgRating}/5
          </p>
        )}
      </div>

      {/* Feedback Cards */}
      <div className="flex flex-wrap mt-10 justify-center">
        {feedbacksToShow.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={i < testimonial.rating ? assets.star_icon : assets.star_dull_icon}
                    className="w-4 h-4"
                    alt="star"
                  />
                ))}
            </div>
            <p className="text-gray-500 text-sm my-5">"{testimonial.comment}"</p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center gap-4">
              <img
                src={testimonial.userPhoto || assets.profile_img_1}
                className="w-12 h-12 object-cover rounded-full"
                alt="user"
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      {feedbacks.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-[#f7cdd1] text-[#2d2d2d] rounded-lg shadow-md hover:bg-[#f5b9be]"
          >
            {showAll ? "Show Less" : "View All Feedback"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
