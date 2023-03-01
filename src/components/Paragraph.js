import React from "react";

const Paragraph = (props) => {
  return (
    <p className={`text-lg font-normal mb-3 text-gray-300 ${props.className} `}>
        {props.children}
    </p>
  );
};

export default Paragraph;
