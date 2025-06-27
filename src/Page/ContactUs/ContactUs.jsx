import React, { useContext } from "react";
import { userContext } from "../../Authentication/AuthProvider";

const ContactUs = () => {
  const { theme } = useContext(userContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen lg:mt-20 mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-300 ${
        isDark ? " text-white" : " text-black"
      }`}
    >
      {/* Left Form */}
      <form className="space-y-10">
        <h2 className="text-3xl font-bold">ASK YOUR QUESTION</h2>
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} max-w-md`}>
          Got any questions about the product or scaling on our platform? We're
          here to help. Chat to our friendly team 24/7 and get onboard in less
          than 5 minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className={`input input-bordered w-full ${
              isDark ? "bg-[#2A2E37] text-white" : ""
            }`}
          />
          <input
            type="text"
            placeholder="Last name"
            className={`input input-bordered w-full ${
              isDark ? "bg-[#2A2E37] text-white" : ""
            }`}
          />
        </div>

        <input
          type="email"
          placeholder="you@company.com"
          className={`input input-bordered w-full ${
            isDark ? "bg-[#2A2E37] text-white" : ""
          }`}
        />

        <div className="flex gap-2">
          <select
            className={`select select-bordered ${
              isDark ? "bg-[#2A2E37] text-white" : ""
            }`}
          >
            <option>US</option>
            <option>BD</option>
            <option>IN</option>
          </select>
          <input
            type="text"
            placeholder="+88018555522"
            className={`input input-bordered w-full ${
              isDark ? "bg-[#2A2E37] text-white" : ""
            }`}
          />
        </div>

        <textarea
          placeholder="Leave us a message..."
          className={`textarea textarea-bordered w-full ${
            isDark ? "bg-[#2A2E37] text-white" : ""
          }`}
          rows="4"
        ></textarea>

        <button
          type="submit"
          className={`${
            theme === "light"
              ? "btn full w-full bg-[#23BE0A] mt-4 text-white"
              : "btn full w-full bg-[#2A2E37] text-white mt-4 "
          }`}
        >
          Send message
        </button>
      </form>

      {/* Right Side - Contact Info */}
      <div className="lg:mt-20">
        <img src="/contact.svg" alt="Contact Illustration" />
      </div>
    </div>
  );
};

export default ContactUs;
