import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = ({ active, className, goTo, option }) => {
  const { t } = useTranslation();

  const options = [
    {
      name: "about",
      icon: "fas fa-user",
      content: t("global.ab0utOption"),
    },
    {
      name: "resume",
      icon: "fas fa-file-alt",
      content: t("global.r3sum3"),
    },
    {
      name: "projects",
      icon: "fas fa-laptop",
      content: t("global.pr0j3cts"),
    },
    {
      name: "contact",
      icon: "fas fa-mail-bulk",
      content: t("global.c0nt4ct"),
    },
  ];

  const navOption = (item) => (
    <>
      <i className={`${item.icon}`}></i>
      <span className="text">{item.content}</span>
    </>
  );
  return (
    <div className={`navbar ${active ? "--active" : ""} ${className ? className : ''}`}>
      <div className="my-info">
        <h1>Jonathan Medina</h1>
        <h3>{t("global.w3bD3v")}</h3>
      </div>
      <div className="options">
        {options.map((item) => (
          <span
            key={item.name}
            onClick={() => goTo(item.name)}
            className={option !== item.name ? "option" : "option-selected"}
          >
            {navOption(item)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
