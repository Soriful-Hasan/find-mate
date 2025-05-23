import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

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
    _id,
  } = data[0];

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
  
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());


    fetch(`https://roommate-finder-server-steel.vercel.app/update/${id}`, {
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
    <div
      className={`${
        theme === "light"
          ? "border my-10 w-8/12 mx-auto p-8 border-gray-200 bg-white"
          : "border my-10 w-8/12 mx-auto p-8 border-gray-400 bg-[#191E24] text-gray-50"
      }`}
    >
      <h1 className="font-bold  text-2xl text-start">Update Your Post</h1>
      <form className="" onSubmit={(e) => handleUpdate(e, _id)}>
        <div className=" gap-10 mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={title}
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="Location"
              placeholder="Location"
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
              defaultValue={Location}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="amount"
              placeholder="Rent Amount"
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
              defaultValue={amount}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="roomType"
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
              placeholder="Room Type"
              list="roomType"
              defaultValue={roomType}
            />
            <datalist id="roomType">
              <option value="New"></option>
              <option value="Old"></option>
            </datalist>
          </div>
          <div className="">
            <input
              type="text"
              name="lifestyle"
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
              placeholder="Lifestyle Preferences"
              list="lifestyle"
              defaultValue={lifestyle}
            />
            <datalist id="lifestyle">
              <option value="Smoking"></option>
              <option value="pet"></option>
            </datalist>
          </div>
          <div className="">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
              defaultValue={description}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="contact"
              placeholder="Contact Info "
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
              defaultValue={contact}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="availability"
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
              placeholder="availability"
              list="availability"
              defaultValue={availability}
            />

            <datalist id="availability">
              <option value="Available"></option>
              <option value="Unavailable"></option>
            </datalist>
          </div>
          <div className="">
            <input
              type="text"
              name="email"
              value={user?.email}
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="name"
              value={user?.displayName}
              placeholder="Soriful Hasan"
              className={`${
                theme === "light"
                  ? "focus:outline-none input input-md w-full bg-white border-green-500"
                  : "focus:outline-none input input-md w-full text-white "
              }`}
            />
          </div>
        </div>
        <div className=" flex justify-center mt-20">
          <button
            type="submit"
            className={`${
              theme === "light"
                ? "btn full w-full bg-[#23BE0A] text-white"
                : "btn full w-full bg-gray-700  text-white"
            }`}
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateListing;
