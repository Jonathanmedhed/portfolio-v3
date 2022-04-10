import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitch from "../LanguageSwitch";
import CatPopUp from "../CatPopUp";

// Images
import profileImg from "../../images/descarga.jpg";
import loadingImg from "../../images/loading.svg";
import catBrit from "../../images/cat-brit.png";
import catMex from "../../images/cat-mexican.png";
import barrel from "../../images/barrel.png";

const Profile = ({ active }) => {
  const { t } = useTranslation();

  const [loaded, setLoaded] = useState(false);
  const [showCat, setShowCat] = useState(false);

  let cats = [
    { nationality: "en", img: catBrit },
    { nationality: "es", img: catMex },
  ];

  return (
    <div
      className={`${loaded ? "profile--loaded" : "profile"} ${
        active ? "--active" : ""
      }`}
    >
      <img alt="loading" className="loader" src={loadingImg}></img>
      <div className="picture__container">
        <img
          alt="profile-pic"
          className="picture"
          onLoad={() => setLoaded(true)}
          src={profileImg}
        ></img>
        <div className="barrel__container">
          <CatPopUp box={barrel} cats={cats} start={showCat} />
        </div>
      </div>
      <div className="profile-body">
        <LanguageSwitch active={active} onClick={() => setShowCat(true)} />
        <h1>Jonathan Medina</h1>
        <h3>{t("global.w3bD3v")}</h3>
        <div className="socials">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/Jonathanmedhed"}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://www.linkedin.com/in/jonathan-medina-heddrich-49164196/"
            }
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      {/*  <div className="profile-footer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            currentLanguage() === "es"
              ? "https://drive.google.com/file/d/11sFdTsbF1xxkyU4Wn-5ZAYcK3Cxshfml/view?usp=sharing"
              : "https://drive.google.com/file/d/1nxkYBgUtDRrIRMhxRqguLkZZob9FSqEU/view?usp=sharing"
          }
          className="button"
        >
          {t("global.d0wnl04d")} CV
        </a>
        <div onClick={() => goTo("contact")} className="button">
          {t("global.c0nt4ct")}
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
