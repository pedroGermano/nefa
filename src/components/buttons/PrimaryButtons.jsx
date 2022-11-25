import React from "react";

export default function PrimaryButtons({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-primary 
        hover:bg-white 
          hover:border 
        hover:text-primary 
        transition-colors 
        duration-300 
        rounded-full 
        text-white py-4 px-10 mx-2"
      {...props}
    >
      {children}
    </button>
  );
}
