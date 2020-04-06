import React from "react";

export default ({ header, children }) => (
  <div className="card mt-5">
    <div className="card-header">{header}</div>
    <div className="card-body">{children}</div>
  </div>
);
