import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { userContext } from "./AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, signInWithGoogle, theme, setLoading } =
    useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
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

    signIn(email, password)
      .then((user) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        location?.state ? navigate(location?.state) : navigate("/");
      })
      .catch(
        (error) =>
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Email or password not valid",
            showConfirmButton: false,
            timer: 1500,
          }),
        setLoading(false)
      );
  };
  const handleLoginGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        location?.state ? navigate(location?.state) : navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email or Password invalid",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div
        className={`${
          theme === "light"
            ? "card bg-base-100 w-full  max-w-lg shrink-0 py-6 px-4 border rounded-sm border-gray-200 "
            : "card bg-[#191E24] w-full text-white  max-w-lg shrink-0 py-6 px-4 border rounded-sm border-gray-500 "
        }`}
      >
        <div className="place-items-center mt-4">
          <div className="text-start w-full ">
            <h1 className="text-2xl font-bold">Login</h1>
          </div>
        </div>
        <div className="card-body">
          <form
            onSubmit={handleSignIn}
            className="fieldset w-full place-items-center"
          >
            <input
              type="email"
              name="email"
              required
              className={`${
                theme === "light"
                  ? " py-4 focus:outline-none text-sm border-[#AAAAAA] w-full border-0 border-b rounded-none"
                  : " py-4 focus:outline-none text-white text-sm border-[#AAAAAA] w-full border-0 border-b rounded-none"
              }`}
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              required
              className="py-4 text-sm focus:outline-none  w-full mt-6 border-[#AAAAAA] border-0 border-b rounded-none"
              placeholder="Password"
            />

            <div className="flex justify-around  mt-8 w-full">
              <p className="font-semibold">Remember Me</p>
              <p
                className={`${
                  theme === "light"
                    ? "text-end link text-[#23BE0A]"
                    : "text-end link text-white"
                }`}
              >
                Forget Password
              </p>
            </div>

            <div className="w-full  flex justify-center">
              <button
                className={`${
                  theme === "light"
                    ? "btn full w-full bg-[#23BE0A] mt-4 text-white"
                    : "btn full w-full bg-[#1E2939] text-white mt-4 "
                }`}
              >
                Login
              </button>
            </div>
            <div className="text-center mt-4  tex w-full font-semibold">
              <Link to={"/register"} className="">
                don't have an account?{" "}
                <span className="link link-hover underline text-[#23BE0A]">
                  Create account
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
          onClick={handleLoginGoogle}
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

export default Login;
