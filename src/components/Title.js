import React from "react";

const Title = ({ value, reverse, className }) => {
  let text = (
    <>
      <span>{value && value[0] && value[0]}</span>
      {value && value[1] && value[1]}
    </>
  );
  return (
    <span
      className={`top ${reverse ? "--reverse" : ""} ${
        className ? className : ""
      }`}
    >
      {className && className.includes("button") ? (
        <div className="content">{text}</div>
      ) : (
        text
      )}
    </span>
  );
};

export default Title;
