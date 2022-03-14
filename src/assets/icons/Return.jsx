import React from "react";

function Return({props,className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="22px"
      width="22px"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

export default Return;
