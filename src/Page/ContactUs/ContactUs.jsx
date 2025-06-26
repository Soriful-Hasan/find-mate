import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen lg:mt-20  mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left Form */}
      <form className="space-y-10">
        <h2 className="text-3xl font-bold">ASK YOUR QUESTION</h2>
        <p className="text-gray-600 max-w-md">
          Got any questions about the product or scaling on our platform? We're
          here to help. Chat to our friendly team 24/7 and get onboard in less
          than 5 minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="input input-bordered w-full"
          />
        </div>

        <input
          type="email"
          placeholder="you@company.com"
          className="input input-bordered w-full"
        />

        <div className="flex gap-2">
          <select className="select select-bordered">
            <option>US</option>
            <option>BD</option>
            <option>IN</option>
          </select>
          <input
            type="text"
            placeholder="+1 (555) 000-0000"
            className="input input-bordered w-full"
          />
        </div>

        <textarea
          placeholder="Leave us a message..."
          className="textarea textarea-bordered w-full"
          rows="4"
        ></textarea>

        <button type="submit" className="btn bg-[#23BE0A] text-white w-full">
          Send message
        </button>
      </form>

      {/* Right Side - Contact Info */}
      <div className="lg:mt-20 text-gray-800">
        <img src="/contact.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
