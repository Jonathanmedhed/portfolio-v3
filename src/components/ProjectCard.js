import React from "react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ img, title, month, year, content, link }) => {
  const { t } = useTranslation();

  return (
    <div className="project">
      <img src={`${img}`} alt={title}></img>
      <div className="project-body">
        <div className="project-body__date">
          <span className="date">
            {month} {year}
          </span>
        </div>
        <div className="project-body__title">
          <h3>{title}</h3>
        </div>
        <div className="project-body__text">
          <p>{content}</p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${link}`}
          className="btn btn-primary"
        >
          {t("global.v1s1t")}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
