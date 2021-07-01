import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

export const Error = () => {
  return (
    <div className="section-center">
      <h1 className="error-page-heading">you have dropped in on wrong url!</h1>
      <Link to="/">
        <button className="error-page-btn">
          Travel Back Home
          <ImHome />
        </button>
      </Link>
      {/* yeh button pe bounce vala animation daal dena */}
    </div>
  );
};
