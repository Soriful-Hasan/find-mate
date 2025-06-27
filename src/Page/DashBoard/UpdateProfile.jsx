import React, { useContext } from "react";
import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { userContext } from "../../Authentication/AuthProvider";
import clsx from "clsx";
import Loader from "../../Components/Loader";
import Swal from "sweetalert2";
const UpdateProfile = () => {
  const { user, loading, theme, updateUserProfile, setLoading } =
    useContext(userContext);

  const isDark = theme === "dark";
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const userProfileData = {
      displayName: name,
      photoURL: photoURL,
    };
    setLoading(true);
    updateUserProfile(userProfileData)
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: "Profile Updated",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        Swal.fire({
          title: "Failed to update",
          text: error.message,
          icon: "error",
        });
      });
  };
  return (
    <div
      className={`flex justify-center flex-col min-h-screen transition-all duration-300 ${
        isDark ? "bg-[#1A1D23] text-white" : "bg-gray-50 text-black"
      }`}
    >
      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div
          className={`w-11/12  md:w-6/12 lg:w-8/12 xl:w-6/12 mx-auto shadow-sm rounded ${
            isDark ? "bg-[#2A2E37]" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center py-10">
            <div className="avatar mb-6">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </div>

            <form
              onSubmit={handleUpdateProfile}
              className="w-full px-8 md:px-12"
            >
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={`input w-full ${
                    isDark ? "bg-[#3A3F4B] text-white" : ""
                  }`}
                  defaultValue={user?.displayName}
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium mb-2"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  type="text"
                  name="photo"
                  className={`input w-full ${
                    isDark ? "bg-[#3A3F4B] text-white" : ""
                  }`}
                  defaultValue={user?.photoURL}
                />
              </div>

              <button
                type="submit"
                className={`btn w-full mt-6 border-none text-white ${
                  theme === "light" ? "bg-[#23BE0A]" : "bg-gray-700"
                }`}
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
