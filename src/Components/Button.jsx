import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-3 py-2 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
