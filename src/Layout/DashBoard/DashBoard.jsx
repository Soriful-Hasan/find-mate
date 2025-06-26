import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FaHome, FaBoxOpen, FaHistory, FaUserEdit } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
const DashBoard = () => {
  const link = [
    <div className="mt-6 flex flex-col gap-5">
      <li>
        <NavLink
          to="/dashboard/dashBoardMain"
          className={({ isActive }) =>
            isActive ? "bg-gray-100 font-semibold" : " "
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
            isActive ? "bg-gray-100 font-semibold" : " "
          }
        >
          <FaBoxOpen style={{ marginRight: 8 }} />
          Find Roommate
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/myListing"
          className={({ isActive }) =>
            isActive ? "bg-gray-100 font-semibold" : " "
          }
        >
          <FaHistory style={{ marginRight: 8 }} />
          My Listing
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/updateProfile"
          className={({ isActive }) =>
            isActive ? "bg-gray-100 font-semibold" : " "
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
      <div className="drawer-content flex flex-col bg-[#F8FAFD]">
        {/* Mobile Navbar */}
        <div className="navbar bg-white w-full lg:hidden">
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
          <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
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

        <ul className="menu bg-[#FFFFFF] text-base-content min-h-full w-80 p-4 justify-between flex flex-col">
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
            <NavLink to="/" className="btn  w-full text-center">
              Back to Main Page <IoExit size={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
