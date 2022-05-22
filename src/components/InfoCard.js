import { t } from "i18next";
import React, { useState } from "react";

const InfoCard = ({
  className,
  date,
  title,
  subTitle,
  location,
  img,
  imgClassName,
  mainTitle,
  quote,
}) => {
  const [showFullQuote, setShowFullQuote] = useState(false);
  return (
    <div className={`card ${className ? className : ""}`}>
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
      {mainTitle && <div className="card-body">{mainTitle}</div>}
      {quote && (
        <p className="card-quote">
          {quote && quote.length > 200 && !showFullQuote
            ? `${quote.substring(0, 200)}..."`
            : quote}
          {quote && quote.length > 200 && !showFullQuote ? (
            <span
              role="button"
              tabIndex={0}
              onClick={() => setShowFullQuote(true)}
              onKeyDown={() => setShowFullQuote(true)}
            >
              {t("global.m0re")}
            </span>
          ) : (
            <span
              role="button"
              tabIndex={0}
              onClick={() => setShowFullQuote(false)}
              onKeyDown={() => setShowFullQuote(false)}
            >
              {t("global.l3ss")}
            </span>
          )}
        </p>
      )}
      <div className="card-line"></div>
    </div>
  );
};

export default InfoCard;
