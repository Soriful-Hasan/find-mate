import React, { useContext } from "react";
import { userContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";

const ContactUs = () => {
  const { theme } = useContext(userContext);
  const isDark = theme === "dark";

  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    fetch("https://roommate-finder-server-steel.vercel.app/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Contact Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div
      className={`min-h-screen lg:mt-20 mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-300 ${
        isDark ? " text-white" : " text-black"
      }`}
    >
      {/* Left Form */}
      <form className="space-y-10" onSubmit={handleContact}>
        <h2 className="text-3xl font-bold">ASK YOUR QUESTION</h2>
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} max-w-md`}>
          Got any questions about the product or scaling on our platform? We're
          here to help. Chat to our friendly team 24/7 and get onboard in less
          than 5 minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className={`input input-bordered w-full ${
              isDark ? "bg-[#2A2E37] text-white" : ""
            }`}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className={`input input-bordered w-full ${
              isDark ? "bg-[#2A2E37] text-white" : ""
            }`}
          />
        </div>

        <input
          type="email"
          name="email"
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
            name="number"
            type="text"
            placeholder="+88018555522"
            className={`input input-bordered w-full ${
              isDark ? "bg-[#2A2E37] text-white" : ""
            }`}
          />
        </div>

        <textarea
          name="message"
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
      <div className="flex">
        <img src="/contact.svg" alt="Contact Illustration" />
      </div>
    </div>
  );
};

export default ContactUs;
