import React, { useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";

const Loader = () => {
  const { theme } = useContext(userContext);
  const isLight = theme == "light";
  return (
    <div className="min-h-screen flex justify-center">
      <span
        className={`${
          isLight
            ? "loading loading-spinner loading-xl"
            : "loading loading-spinner loading-xl text-white"
        }`}
      ></span>
    </div>
  );
};

export default Loader;
