import React, { useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";

const FindRoommate = () => {
  const { user, theme } = useContext(userContext);
  const userPhoto = user?.photoURL;
  const handleSubmitData = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    fetch("https://roommate-finder-server-steel.vercel.app/addRoommate", {
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
    <div className="min-h-screen">
      <div
        className={`${
          theme === "light"
            ? "border  my-10 xl:w-9/12 mx-auto p-8 border-gray-200 bg-white"
            : "border my-10 lg:w-9/12 mx-auto p-8 border-gray-400 bg-[#191E24] text-gray-50"
        }`}
      >
        <h1
          className={`${
            theme === "light"
              ? "font-bold  text-2xl text-start"
              : "font-bold  text-2xl text-start text-white"
          }`}
        >
          Add Post
        </h1>
        <form onSubmit={handleSubmitData}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div className="">
              <input
                type="text"
                required
                name="title"
                placeholder="Title"
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
              />
            </div>
            <div className="">
              <input
                type="text"
                required
                name="Location"
                placeholder="Location"
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
              />
            </div>
            <div className="">
              <input
                type="text"
                required
                name="amount"
                placeholder="Rent Amount"
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
              />
            </div>
            <div className="">
              <input
                type="text"
                required
                name="roomType"
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
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
                required
                type="text"
                name="lifestyle"
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
                placeholder="Lifestyle Preferences"
                list="lifestyle"
              />
              <datalist id="lifestyle">
                <option value="Early riser"></option>
                <option value="Night owl"></option>
                <option value="Smoker"></option>
                <option value="Non-smoker"></option>
                <option value="Pet"></option>
              </datalist>
            </div>
            <div className="">
              <input
                required
                type="text"
                name="description"
                placeholder="Description"
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
              />
            </div>
            <div className="">
              <input
                type="text"
                required
                name="contact"
                placeholder="Contact Info "
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
              />
            </div>
            <div className="">
              <input
                type="text"
                required
                name="availability"
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
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
                required
                name="email"
                value={user.email}
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
              />
            </div>
            <div className="">
              <input
                type="text"
                required
                name="name"
                value={user.displayName}
                placeholder="Soriful Hasan"
                className={`${
                  theme === "light"
                    ? "focus:outline-none input input-md w-full bg-white "
                    : "focus:outline-none input input-md w-full "
                }`}
              />
            </div>
          </div>
          <div className=" flex justify-center w-full    mt-20">
            <button
              className={`${
                theme === "light"
                  ? "btn full w-full xl:w-4xl bg-[#23BE0A] text-white"
                  : "btn full w-full xl:w-4xl bg-gray-700  text-white"
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
