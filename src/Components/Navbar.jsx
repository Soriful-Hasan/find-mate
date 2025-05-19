import React, { use, useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { Link } from "react-router";
import Loader from "./Loader";

const Navbar = () => {
  const { user, userSignOut, loading } = useContext(userContext);

  const link = [
    <div className="flex gap-6 font-bold">
      <Link to={"/"}>Home</Link>
      <Link to={"/findRoommate"}>Find Roommate</Link>
    </div>,
  ];

  const handleSignOut = () => {
    userSignOut()
      .then((result) => alert("user sign out successfully"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Room mate</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end  space-x-5">
          <div
            className="tooltip tooltip-bottom"
            data-tip={user?.auth?.displayName}
          >
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              <div className="avatar">
                <div className="w-12 rounded-full ">
                  <img src={user?.photoURL} />
                </div>
              </div>
            )}
          </div>
          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : (
            <>
              {user ? (
                <button className="btn" onClick={handleSignOut}>
                  LogOut
                </button>
              ) : (
                <Link className="btn" to={"/login"}>
                  LogIn
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
