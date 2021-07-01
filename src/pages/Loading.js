import React from "react";
import loading from "../images/loading.gif";

export const Loading = () => {
  return (
    <div className="loading-img-container">
      <img src={loading} alt="loading..." className="loading-img" />
    </div>
  );
};
