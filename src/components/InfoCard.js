import React from "react";

const InfoCard = ({
  date,
  title,
  subTitle,
  location,
  img,
  imgClassName,
  mainTitle,
}) => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-left">
          <div className="date">{date}</div>
          <div className="card-title">{title}</div>
          <div className="card-sub-title">{subTitle}</div>
          <div className="location">{location}</div>
        </div>
        <img
          alt="cct-logo"
          className={`${imgClassName ? imgClassName : ""}`}
          src={img}
        ></img>
      </div>
      <div className="card-body">{mainTitle}</div>
      <div className="card-line"></div>
    </div>
  );
};

export default InfoCard;
