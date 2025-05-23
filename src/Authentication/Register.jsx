import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { userContext } from "./AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    signUp,
    signInWithGoogle,
    updateUserProfile,
    setUser,
    user,
    setLoading,
    theme,
  } = useContext(userContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // pass validation
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must uppercase",
        showConfirmButton: false,
        timer: 1500,
      });

      return;
    }
    if (!/[a-z]/.test(password)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must lower case",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (password.length < 6) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must six character",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const userInfo = {
      displayName: name,
      photoURL: photo,
    };

    signUp(email, password)
      .then((customer) => {
        //user update profile
        updateUserProfile(userInfo)
          .then(() => {
            setUser({ ...user, ...userInfo });
            navigate("/");
            setLoading(false);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Sign up Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            navigate("/");
            setLoading(false);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Something was wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) =>
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something was wrong",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  const handleRegisterGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something was wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div
        className={`${
          theme === "light"
            ? "card bg-base-100 w-full  max-w-lg shrink-0 py-6 px-4 border rounded-sm border-gray-200 "
            : "card bg-[#191E24] w-full text-white  max-w-lg shrink-0 py-6 px-4 border rounded-sm border-gray-500 "
        }`}
      >
        <div className="place-items-center mt-4">
          <div className="text-start w-full ">
            <h1 className="text-2xl font-bold">Register</h1>
          </div>
        </div>
        <div className="card-body">
          <form
            onSubmit={handleSignIn}
            className="fieldset place-items-center "
          >
            <input
              type="text"
              name="name"
              required
              className="py-4  text-sm focus:outline-none  border-[#AAAAAA] w-full border-0 border-b rounded-none"
              placeholder="Full Name"
            />

            <input
              type="text"
              name="photo"
              required
              className="py-4 text-sm  focus:outline-none  border-[#AAAAAA] w-full border-0 border-b rounded-none"
              placeholder="Photo URL"
            />

            <input
              type="email"
              name="email"
              required
              className="py-4 text-sm  focus:outline-none  border-[#AAAAAA] w-full border-0 border-b rounded-none"
              placeholder="Email"
            />

            <input
              type="text"
              name="password"
              required
              className="py-4 text-sm  focus:outline-none  border-[#AAAAAA] w-full border-0 border-b rounded-none"
              placeholder="Password"
            />

            <div className="w-full  flex justify-center">
              <button
                className={`${
                  theme === "light"
                    ? "btn full w-full bg-[#23BE0A] mt-4 text-white"
                    : "btn full w-full bg-[#1E2939] text-white mt-4 "
                }`}
              >
                Register
              </button>
            </div>
            <div className="mt-4">
              <Link to={"/login"} className="link link-hover font-semibold ">
                Already have an account?{" "}
                <span className="link link-hover underline text-[#23BE0A]">
                  Login
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="flex my-8 max-w-lg w-full items-center gap-2">
        <div className="border-b w-full border-[#AAAAAA]"></div>
        <p className={`${theme == "light" ? "" : "text-white"}`}>Or</p>
        <div className="w-full border-b border-[#AAAAAA]"></div>
      </div>
      <div className=" w-full  flex justify-center">
        <button
          onClick={handleRegisterGoogle}
          className={`${
            theme === "light"
              ? "btn bg-white w-sm rounded-2xl text-black border-[#e5e5e5] "
              : "bg-[#1E2939] w-sm text-white btn text-black  rounded-2xl"
          }`}
        >
          <FcGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
