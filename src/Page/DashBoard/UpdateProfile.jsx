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
  const { user, loading, updateUserProfile, setLoading } =
    useContext(userContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const userProfileData = {
      displayName: name,
      photoURL: photoURL,
    };
    setLoading(true); // Loading শুরু করো
    updateUserProfile(userProfileData)
      .then(() => {
        setLoading(false); // Update success হলে loading false
        Swal.fire({
          title: "Profile Updated",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        setLoading(false); // Error হলেও loading false করো
        console.error(error);
        Swal.fire({
          title: "Failed to update",
          text: error.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="flex justify-center flex-col min-h-screen">
      {loading ? (
        <div className="">
          <Loader></Loader>
        </div>
      ) : (
        <>
          <div className="w-5/12  mx-auto shadow-sm  place-items-center bg-white rounded ">
            <div className=" place-items-center">
              <div className="avatar mt-10">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div className="  w-full">
                <form onSubmit={handleUpdateProfile}>
                  <input
                    type="text"
                    name="name"
                    className="input w-full mt-10"
                    defaultValue={user?.displayName}
                  />
                  <input
                    type="text"
                    name="photo"
                    className="input w-full mt-10"
                    defaultValue={user?.photoURL}
                  />
                  <div className=" w-full">
                    <button
                      type="submit"
                      className="btn mt-10 w-full border mb-10 "
                    >
                      Update Profile{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UpdateProfile;
