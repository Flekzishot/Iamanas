import React from "react";

const Paragraph = (props) => {
  return (
    <p className={`text-lg font-normal mb-3 text-black ${props.className} `}>
        {props.children}
    </p>
  );
};

export default Paragraph;
