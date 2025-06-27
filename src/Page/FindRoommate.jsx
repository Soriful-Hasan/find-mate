import React, { useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FindRoommate = () => {
  const { user, theme } = useContext(userContext);
  const userPhoto = user?.photoURL;
  const handleSubmitData = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_url}/addRoommate`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...userData, userPhoto }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Post Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="min-h-screen m-4">
      <Helmet>
        <title>Add Post</title>
      </Helmet>

      <div
        className={`my-10 w-full lg:w-10/12 mx-auto p-8 rounded-xl shadow-md ${
          theme === "light"
            ? "border border-gray-200 bg-white text-black"
            : "border border-gray-400 bg-[#191E24] text-gray-50"
        }`}
      >
        <h1 className="font-bold text-3xl mb-6">Add Post</h1>

        <form onSubmit={handleSubmitData}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-semibold text-sm">
                Title
              </label>
              <input
                type="text"
                required
                name="title"
                placeholder="Title"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label htmlFor="Location" className="font-semibold text-sm">
                Location
              </label>
              <input
                type="text"
                required
                name="Location"
                placeholder="Location"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* Rent Amount */}
            <div className="flex flex-col gap-2">
              <label htmlFor="amount" className="font-semibold text-sm">
                Rent Amount
              </label>
              <input
                type="text"
                required
                name="amount"
                placeholder="Rent Amount"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* Room Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="roomType" className="font-semibold text-sm">
                Room Type
              </label>
              <input
                type="text"
                required
                name="roomType"
                list="roomType"
                placeholder="Room Type"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
              <datalist id="roomType">
                <option value="Single" />
                <option value="Shared" />
              </datalist>
            </div>

            {/* Lifestyle Preferences */}
            <div className="flex flex-col gap-2">
              <label htmlFor="lifestyle" className="font-semibold text-sm">
                Lifestyle Preferences
              </label>
              <input
                type="text"
                required
                name="lifestyle"
                list="lifestyle"
                placeholder="Lifestyle Preferences"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
              <datalist id="lifestyle">
                <option value="Early riser" />
                <option value="Night owl" />
                <option value="Smoker" />
                <option value="Non-smoker" />
                <option value="Pet" />
              </datalist>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact" className="font-semibold text-sm">
                Contact Info
              </label>
              <input
                type="text"
                required
                name="contact"
                placeholder="Contact Info"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* Availability */}
            <div className="flex flex-col gap-2">
              <label htmlFor="availability" className="font-semibold text-sm">
                Availability
              </label>
              <input
                type="text"
                required
                name="availability"
                list="availability"
                placeholder="Availability"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
              <datalist id="availability">
                <option value="Available" />
                <option value="Unavailable" />
              </datalist>
            </div>

            {/* Photo URL */}
            <div className="flex flex-col gap-2">
              <label htmlFor="photoUrl" className="font-semibold text-sm">
                Photo URL
              </label>
              <input
                type="url"
                required
                name="roomPhoto"
                placeholder="Room Photo URL"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-sm">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={user?.email}
                readOnly
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                readOnly
                placeholder="Your Name"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* Description - Full Width */}
            <div className="flex flex-col gap-2 lg:col-span-2">
              <label htmlFor="description" className="font-semibold text-sm">
                Description
              </label>
              <textarea
                name="description"
                required
                placeholder="Write your detailed description here..."
                rows={5}
                className={`textarea w-full rounded-md resize-y focus:outline-none border px-4 py-3 ${
                  theme === "light"
                    ? "bg-white border-gray-300 text-black"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center w-full mt-12">
            <button
              type="submit"
              className={`btn w-full xl:w-96 text-white rounded-lg py-3 font-semibold ${
                theme === "light"
                  ? "bg-[#23BE0A] hover:bg-green-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindRoommate;
