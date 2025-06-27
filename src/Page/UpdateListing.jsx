import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateListing = () => {
  const { user, theme } = useContext(userContext);
  const data = useLoaderData();

  const {
    title,
    roomType,
    description,
    contact,
    availability,
    lifestyle,
    amount,
    Location,
    roomPhoto,
    _id,
  } = data[0];

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_url}/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) =>
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Post Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  return (
    <div className="min-h-screen m-4">
      <Helmet>
        <title>Update Listing</title>
      </Helmet>

      <div
        className={`my-10 w-full lg:w-10/12 mx-auto p-8 rounded-xl shadow-md ${
          theme === "light"
            ? "border border-gray-200 bg-white text-black"
            : "border border-gray-400 bg-[#191E24] text-gray-50"
        }`}
      >
        <h1 className="font-bold text-3xl mb-6">Update Your Post</h1>

        <form onSubmit={(e) => handleUpdate(e, _id)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-semibold text-sm">
                Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
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
                name="Location"
                defaultValue={Location}
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
                name="amount"
                defaultValue={amount}
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
                name="roomType"
                list="roomType"
                defaultValue={roomType}
                placeholder="Room Type"
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
              <datalist id="roomType">
                <option value="New" />
                <option value="Old" />
              </datalist>
            </div>

            {/* Lifestyle */}
            <div className="flex flex-col gap-2">
              <label htmlFor="lifestyle" className="font-semibold text-sm">
                Lifestyle Preferences
              </label>
              <input
                type="text"
                name="lifestyle"
                list="lifestyle"
                defaultValue={lifestyle}
                placeholder="Lifestyle"
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
                name="contact"
                defaultValue={contact}
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
                name="availability"
                list="availability"
                defaultValue={availability}
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
                type="text"
                name="photoUrl"
                defaultValue={roomPhoto}
                placeholder="Image link..."
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
                className={`input input-md w-full rounded-md focus:outline-none border px-4 py-2 ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              />
            </div>

            {/* Description (Full Width) */}
            <div className="flex flex-col gap-2 lg:col-span-2">
              <label htmlFor="description" className="font-semibold text-sm">
                Description
              </label>
              <textarea
                name="description"
                required
                rows={5}
                defaultValue={description}
                placeholder="Write detailed description here..."
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
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateListing;
