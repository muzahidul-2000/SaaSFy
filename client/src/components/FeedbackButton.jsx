import { useState } from "react";
import FeedbackForm from "./FeedBackForm";
import { useUser, useClerk } from "@clerk/clerk-react";

const FeedbackButton = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!user) {
      // if not logged in, open Clerk Sign-In modal
      openSignIn();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-[#f7cdd1] text-[#2d2d2d] px-4 py-2 rounded-full shadow-lg hover:bg-[#f5b9be]"
      >
        Feedback
      </button>

      {/* Feedback Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4 text-[#5cbdb9]">Your Feedback</h2>
            <FeedbackForm onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackButton;
