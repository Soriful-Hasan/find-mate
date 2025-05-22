import React, { useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";

const FindRoommate = () => {
  const { user } = useContext(userContext);
  const userPhoto = user?.photoURL;
  const handleSubmitData = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    fetch("http://localhost:3000/addRoommate", {
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
        }
      });
  };
  return (
    <div className=" border my-10 w-8/12 mx-auto p-8 border-gray-200 bg-white">
      <h1 className="font-bold  text-2xl text-start">Add Post</h1>
      <form onSubmit={handleSubmitData}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div className="">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="focus:outline-none input input-md w-full border-green-500"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="Location"
              placeholder="Location"
              className="focus:outline-none border-green-500 input input-md w-full"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="amount"
              placeholder="Rent Amount"
              className="border-green-500 focus:outline-none input input-md w-full"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="roomType"
              className="border-green-500 focus:outline-none input w-full"
              placeholder="Room Type"
              list="roomType"
            />
            <datalist id="roomType">
              <option value="Single"></option>
              <option value="Shared"></option>
            </datalist>
          </div>
          <div className="">
            <input
              type="text"
              name="lifestyle"
              className="input w-full border-green-500 focus:outline-none"
              placeholder="Lifestyle Preferences"
              list="lifestyle"
            />
            <datalist id="lifestyle">
              <option value="Smoking"></option>
              <option value="Pet"></option>
            </datalist>
          </div>
          <div className="">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-md w-full border-green-500 focus:outline-none"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="contact"
              placeholder="Contact Info "
              className="input input-md w-full border-green-500 focus:outline-none"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="availability"
              className="input w-full border-green-500 focus:outline-none"
              placeholder="availability"
              list="availability"
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
              value={user.email}
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="name"
              value={user.displayName}
              placeholder="Soriful Hasan"
              className="input input-md w-full disabled:not-read-only border-green-500 focus:outline-none"
            />
          </div>
        </div>
        <div className=" flex justify-center w-full   mt-20">
          <button className="btn full w-full bg-[#23BE0A] text-white">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindRoommate;
