import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import Navbar from "../Navbar";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

// imgs
import loadingImg from "../../images/loading.svg";

const Main = () => {
  const { i18n } = useTranslation();

  const currentLanguage = () => i18n.language || window.localStorage.i18nextLng;

  const [option, setOption] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const goTo = (section) => {
    if (section === option) {
      setOption(false);
    } else {
      setOption(section);

      /* switch (section) {
        case "about":
          window.scrollTo({
            left: 0,
            top: aboutRef.current.offsetTop - 100,
            behavior: "smooth",
          });
          break;
        case "resume":
          window.scrollTo({
            left: 0,
            top: resumeRef.current.offsetTop - 100,
            behavior: "smooth",
          });
          break;
        case "projects":
          window.scrollTo({
            left: 0,
            top: projectsRef.current.offsetTop - 100,
            behavior: "smooth",
          });
          break;
        case "contact":
          window.scrollTo({
            left: 0,
            top: contactRef.current.offsetTop - 100,
            behavior: "smooth",
          });
          break;
        default:
          break;
      } */
    }
  };

  return (
    <div
      className={`main ${option ? "--active" : ""} ${
        loaded ? "" : "--center-all"
      }`}
    >
      <img
        alt="loading"
        className={`loader ${loaded ? "--hide" : ""}`}
        src={loadingImg}
      ></img>
      <div className={`main__content ${loaded ? "" : "--hide"}`}>
        {/**
         * Navbar
         */}
        <Navbar
          active={option ? true : false}
          className={`${loaded ? "" : "--hide"}`}
          currentLanguage={currentLanguage}
          goTo={goTo}
          option={option}
        />
        {/**
         * Profile
         */}
        <Profile
          active={option ? true : false}
          className={`${loaded ? "" : "--hide"}`}
          currentLanguage={currentLanguage}
          loaded={loaded}
          setLoaded={setLoaded}
        />
        {/**
         * Sections
         */}
        <div className="sections">
          {/**
           * About Me
           */}{" "}
          <AboutMe option={option} />
          {/**
           * Resume
           */}
          <Resume language={currentLanguage} option={option} />
          {/**
           * Projects
           */}
          <Projects option={option} />
          {/**
           * Contact
           */}
          <Contact currentLanguage={currentLanguage} option={option} />
        </div>
      </div>
    </div>
  );
};

export default Main;
