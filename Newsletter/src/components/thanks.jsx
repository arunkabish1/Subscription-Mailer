import { useNavigate, useLocation } from "react-router-dom";
import tick from "../assets/icon-success.svg";

const Thanks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const handlesubmit = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center md:bg-gray-800 p-5">
      <div className="bg-white flex flex-col items-center gap-5 p-8 rounded-lg md:shadow-lg w-full max-w-md">
        <img src={tick} className="w-1/5" alt="Success icon" />
        <div className="text-center">
          <h2 className="font-bold text-4xl">Thanks for</h2>
          <h2 className="font-bold text-4xl">subscribing!</h2>
        </div>
        <p className="text-sm text-center">
          A confirmation mail has been sent to{" "}
          <span className="font-semibold">{email || "your email"}</span>. Please
          open it and click the button to confirm your subscription.
        </p>
        <button
          onClick={handlesubmit}
          className="w-full p-3 bg-slate-800 hover:bg-yellow-500 hover:text-black text-white font-semibold rounded-lg mt-5"
        >
          Dismiss Message
        </button>
      </div>
    </div>
  );
};

export default Thanks;
