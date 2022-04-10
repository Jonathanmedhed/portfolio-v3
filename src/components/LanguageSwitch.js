import React from "react";
import { useTranslation } from "react-i18next";

// Images
import spainIcon from "../images/spanish-icon.png";
import britishIcon from "../images/british-icon.jpg";

const LanguageSwitch = ({ active, onClick }) => {
  const { i18n } = useTranslation();

  const currentLanguage = () => i18n.language || window.localStorage.i18nextLng;

  const changeLanguage = () => {
    onClick();

    switch (currentLanguage()) {
      case "en":
        i18n.changeLanguage("es");
        break;
      case "es":
        i18n.changeLanguage("en");
        break;
      default:
        break;
    }
  };

  return (
    <div className={`switch-currency ${active ? "--active" : ""}`}>
      <img className={"spanish"} src={spainIcon} alt="sp-flag"></img>
      <label className="switch">
        <input
          checked={currentLanguage() === "en"}
          onChange={() => changeLanguage()}
          type="checkbox"
        ></input>
        <span className="slider round"></span>
      </label>
      <img className={"british"} src={britishIcon} alt="gb-flag"></img>
    </div>
  );
};

export default LanguageSwitch;
