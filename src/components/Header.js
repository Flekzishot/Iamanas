import React from "react";

const Header = (props) => {
  return (
    <h1 className={`text-3xl font-bold mb-5 text-black ${props.className}`}>
        {props.children}
    </h1>
  );
};

export default Header;
