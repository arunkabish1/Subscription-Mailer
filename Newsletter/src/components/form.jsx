import svgg from "../assets/illustration-sign-up-mobile.svg";
import tick from "../assets/icon-list.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import svggg from "../assets/illustration-sign-up-desktop.svg";

const Form = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlesubmit = async () => {
    if (validateEmail(email)) {
      try {
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            clientEmail: email,
            userEmail: 'your-email@gmail.com', // Your email or another email
          }),
        });

        const data = await response.json();
        if (response.ok) {
          alert('Emails sent successfully!');
          navigate("/thanks", { state: { email } });
        } else {
          alert(data.message || 'Error sending emails.');
        }
      } catch (error) {
        alert('Error: ' + error.message);
      }
    } else {
      window.alert("Please enter a valid email address.");
    }
  };

  return (
    <div>
      <div className="bg-white md:flex flex-row-reverse md:justify-center md:gap10 md:items-center md:p-52 lg:p-64 lg:gap-10 md:max-h-screen">
        <img
          className="block md:hidden min-w-full"
          src={svgg}
          alt="Mobile SVG"
        />
        <img className="hidden md:block" src={svggg} alt="Desktop SVG" />

        <div className="sm:min-w-96">
          <h1 className="text-4xl p-6 lg:text-5xl font-bold">Stay Updated!</h1>
          <p className="pl-6 md:w-80 lg:w-96">
            Join 60,000+ product managers receiving monthly updates on
          </p>
          <div className="p-6 flex-col space-y-4">
            <div className="flex gap-4">
              <img className="pb-4" src={tick} />
              <p> Product discovery and building what matters</p>
            </div>
            <div className="flex gap-4">
              <img className="pb-6" src={tick} />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex gap-4">
              <img src={tick} />
              <p>And much more!</p>
            </div>
          </div>
          <div className="mr-6 ml-6 pt-4">
            <p className="pb-2 font-bold text-sm" htmlFor="emailid">
              Email Address
            </p>
            <div className="md:grid">
              <input
                className="p-3 w-full rounded-lg border-2"
                type="email"
                placeholder="email@company.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handlesubmit}
                className="w-full p-3 bg-slate-800 hover:bg-yellow-500 hover:text-black hover:border-2 border-gray-400 text-white font-semibold rounded-lg mt-5"
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
