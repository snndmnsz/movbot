import React from "react";

function Add({props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22px"
      height="22px"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

export default Add;
