import React from "react";

const InfoCard = ({ icon, title, items }) => {
  return (
    <div className="text-card">
      <div className="card-icon-title">
        <div className="card__icon">
          <i className={`${icon}`}></i>
        </div>
        <span>{title}</span>
      </div>
      <div className="items-list">
        {items.map((item) => (
          <div key={item.name} className="item">
            <i className={`${item.icon}`}></i>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
