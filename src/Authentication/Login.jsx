import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { userContext } from "./AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(userContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => alert("email and password not valid"));
  };
  const handleLoginGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        alert("login succsessfully");
        location?.state ? navigate(location?.state) : navigate("/");
        console.log(user);
      })
      .catch((error) => {
        alert("something was wrong");
      });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 py-6 px-4 border rounded-sm border-gray-200 ">
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
              className=" py-4 focus:outline-none text-sm border-[#AAAAAA] w-full border-0 border-b rounded-none"
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
              <p className=" text-end link text-[#23BE0A]">Forget Password</p>
            </div>

            <div className="w-full  flex justify-center">
              <button className="btn bg-[#23BE0A] text-white mt-4 w-full">
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
        <p>Or</p>
        <div className="w-full border-b border-[#AAAAAA]"></div>
      </div>
      <div className=" w-full  flex justify-center">
        <button
          onClick={handleLoginGoogle}
          className="btn bg-white w-sm rounded-2xl text-black border-[#e5e5e5]"
        >
          <FcGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
