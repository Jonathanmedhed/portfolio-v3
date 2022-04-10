import React from "react";

const Section = ({ option, sectionName, children }) => {
  return (
    <div className={option === sectionName ? "section" : "section-closed"}>
      {option === sectionName && <>{children}</>}
    </div>
  );
};

export default Section;
