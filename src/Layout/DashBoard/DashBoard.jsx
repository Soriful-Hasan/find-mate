import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FaHome, FaBoxOpen, FaHistory, FaUserEdit } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { userContext } from "../../Authentication/AuthProvider";
const DashBoard = () => {
  const { theme, user } = useContext(userContext);
  const isDark = theme === "dark";

  const link = [
    <div className="mt-6 flex flex-col gap-5">
      {/* Single NavLink */}
      <li>
        <NavLink
          to="/dashboard/dashBoardMain"
          className={({ isActive }) =>
            `${
              isActive
                ? isDark
                  ? "bg-gray-700 text-white font-semibold"
                  : "bg-gray-100 font-semibold"
                : isDark
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-100"
            } flex items-center px-4 py-2 rounded-md transition-colors duration-200`
          }
        >
          <FaHome style={{ marginRight: 8 }} />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/findRoommate"
          className={({ isActive }) =>
            `${
              isActive
                ? isDark
                  ? "bg-gray-700 text-white font-semibold"
                  : "bg-gray-100 font-semibold"
                : isDark
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-100"
            } flex items-center px-4 py-2 rounded-md transition-colors duration-200`
          }
        >
          <FaBoxOpen style={{ marginRight: 8 }} />
          Add Post
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/myListing"
          className={({ isActive }) =>
            `${
              isActive
                ? isDark
                  ? "bg-gray-700 text-white font-semibold"
                  : "bg-gray-100 font-semibold"
                : isDark
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-100"
            } flex items-center px-4 py-2 rounded-md transition-colors duration-200`
          }
        >
          <FaHistory style={{ marginRight: 8 }} />
          My Post
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/updateProfile"
          className={({ isActive }) =>
            `${
              isActive
                ? isDark
                  ? "bg-gray-700 text-white font-semibold"
                  : "bg-gray-100 font-semibold"
                : isDark
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-100"
            } flex items-center px-4 py-2 rounded-md transition-colors duration-200`
          }
        >
          <FaUserEdit style={{ marginRight: 8 }} />
          Update Profile
        </NavLink>
      </li>
    </div>,
  ];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Drawer Content (Right Side) */}
      <div
        className={`drawer-content flex flex-col transition-all duration-300 ${
          isDark ? "bg-[#1A1D23] text-white" : "bg-[#F8FAFD] text-black"
        }`}
      >
        {/* Mobile Navbar */}
        <div
          className={`navbar w-full lg:hidden ${
            isDark ? "bg-[#2A2E37]" : "bg-white"
          }`}
        >
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Dashboard</div>
        </div>

        {/* Main Content */}
        <Outlet />
      </div>

      {/* Sidebar (Left Side) */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul
          className={`menu min-h-full w-80 p-4 justify-between flex flex-col transition-all duration-300 ${
            isDark
              ? "bg-[#1F232A] text-white"
              : "bg-[#FFFFFF] text-base-content"
          }`}
        >
          {/* Top Logo and Title */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="Logo" width={30} height={30} />
              <h1 className="font-semibold mt-2 text-2xl flex gap-2">
                Find Mate
              </h1>
            </div>

            {/* Sidebar Links */}
            {link}
          </div>

          {/* Bottom Back Button */}
          <li className="mt-auto">
            <NavLink
              to="/"
              className={`btn w-full text-center text-white ${
                isDark ? "bg-[#1E2939] " : "bg-[#23BE0A] "
              }`}
            >
              Back to Main Page <IoExit size={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
