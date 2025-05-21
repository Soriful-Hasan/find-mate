import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { userContext } from "./AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    signUp,
    signInWithGoogle,
    updateUserProfile,
    setUser,
    user,
    setLoading,
  } = useContext(userContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // pass validation
    if (!/[A-Z]/.test(password)) {
      alert("password must uppercase");
      return;
    }
    if (!/[a-z]/.test(password)) {
      alert("password must lower case");
      return;
    }
    if (password.length < 6) {
      alert("password must six character");
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
          })
          .catch((error) => {
            navigate("/");
            setLoading(false);
            alert("something was wrong");
          });

        console.log("login succsessfully", customer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegisterGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        alert("login succsessfully");
        console.log(user);
      })
      .catch((error) => {
        alert("something was wrong");
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0  py-6 px-4 border rounded-sm border-gray-200  ">
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
              <button className="btn bg-[#23BE0A] text-white mt-4 w-full">
                Login
              </button>
            </div>
            <div>
              <Link to={"/login"} className="link link-hover">
                Already have an account? <span className="link">Login</span>
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
          onClick={handleRegisterGoogle}
          className="btn bg-white w-sm rounded-2xl text-black border-[#e5e5e5]"
        >
          <FcGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
