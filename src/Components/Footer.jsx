import React, { useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { NavLink } from "react-router";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import Swal from "sweetalert2";

const Footer = () => {
  const { theme } = useContext(userContext);
  const light = theme == "light";
  const handleSubs = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Subscribe Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.form.reset();
  };
  return (
    <footer
      className={`footer sm:footer-horizontal shadow-sm p-10 ${
        light ? "bg-white text-black" : "bg-[#191E24] text-white"
      }`}
    >
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <aside className="space-y-2">
          <img src="/logo.png" alt="Logo" width={30} height={30} />
          <p>
            <a
              className={`text-sm lg:text-xl font-semibold ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Find<span className="font-bold ml-1">Mate</span>
            </a>
            <br />
            Connecting Roommate care, <br />since - 2025
          </p>
          <div className="flex gap-4 ">
            <a
              href="https://www.facebook.com/sorifulhasan3000"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <MdFacebook size={24} color="#1877F2" />
            </a>
            <a
              href="https://www.youtube.com/@codingwithhasan300"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaYoutube size={24} color="#FF0000" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-soriful-hasan-53a9b52b3/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <SiLinkedin style={{ color: "#0A66C2" }} size={24} />
            </a>
          </div>
        </aside>

        {/* Services Links */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <div className="flex flex-col gap-3">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link link-hover"
            >
              Home
            </NavLink>

            <NavLink
              to="/browseListing"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link link-hover"
            >
              Browse Listing
            </NavLink>
            <NavLink
              to="/dashboard/findRoommate"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link link-hover"
            >
              Add Roommate
            </NavLink>
            <NavLink
              to="/dashboard/myListing"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link link-hover"
            >
              My Listing
            </NavLink>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <div className="flex flex-col gap-2">
            <a className="link link-hover">Sylhet, Bangladesh</a>
            <a className="link link-hover">sorifullhasan300@gmail.com</a>
            <a className="link link-hover">+8801835458727</a>
          </div>
        </nav>

        {/* Policies */}
        <nav>
          <form className="" onSubmit={handleSubs}>
            <h6 className="footer-title">
              Subscribe to our monthly newsletter for exclusive content
            </h6>
            <fieldset className="w-80 mt-4">
              <label>Enter your email address</label>
              <div className="join mt-4">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="input input-bordered join-item "
                />
                <button className="btn bg-green-500 text-white join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
