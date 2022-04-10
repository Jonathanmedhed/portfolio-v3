import React from "react";
import { useTranslation } from "react-i18next";

import Title from "../Title";
import Section from "../Section";
import ProjectCard from "../ProjectCard";

// Images
import heddrichImg from "../../images/heddrichITSolutions.png";
/* import ecommerceImg from "../../images/eCommerceImg.png"; */
import myOnlineShopImg from "../../images/myonlineshop.png";
import portfolioImg from "../../images/portfolio.png";
import easyPeasyImg from "../../images/easypeasy.png";
import biekosImg from "../../images/biekos-page.png";
import biekosWeb from "../../images/biekos-website.png";

const Projects = ({ option }) => {
  const { t } = useTranslation();

  /* 
    {
      img: ecommerceImg,
      month: t("months.moNov"),
      year: "2020",
      title: t("global.eCommWeb"),
      content: t("global.eCommWebExp"),
      link: "https://ecommercespanish.herokuapp.com/",
    }, */

  const projects = [
    {
      img: biekosImg,
      year: "2021-2022",
      title: t("global.biekosPage"),
      content: t("global.biekosInfo"),
      link: "https://app.biekos.com/home",
    },
    {
      img: biekosWeb,
      year: "2022",
      title: t("global.biekosWebsite"),
      content: t("global.biekosWebsiteInfo"),
      link: "https://biekos.com/",
    },
    {
      img: heddrichImg,
      month: t("months.moDec"),
      year: "2020",
      title: t("global.w3bD3vS3rv1c3s"),
      content: t("global.WebDevExp"),
      link: "https://heddrichitsoluciones.herokuapp.com/",
    },
    {
      img: myOnlineShopImg,
      month: t("months.moAug"),
      year: "2020",
      title: t("global.oShopCreate"),
      content: t("global.oShopCreateExp"),
      link: "https://myonlineshopvzla.herokuapp.com/",
    },
    {
      img: portfolioImg,
      month: t("months.moFeb"),
      year: "2020",
      title: t("global.myOldPort"),
      content: t("global.myOldPortExp"),
      link: "https://portfolio-jonathanvzla.herokuapp.com/",
    },
    {
      img: easyPeasyImg,
      month: t("months.moDec"),
      year: "2019",
      title: t("global.collProj"),
      content: t("global.collProjExp"),
      link: "https://easy-peasy-v2.herokuapp.com/",
    },
  ];

  return (
    <Section option={option} sectionName="projects">
      <div className="section__header">
        <div className="section__header__content">
          <Title value={[t("global.m1y"), ` ${t("global.pr0j3ctsUp")}`]} />
        </div>
      </div>
      <div className="section__content">
        <div className="project-list">
          {projects.map((item) => (
            <span key={item.name}>
              <ProjectCard
                img={item.img}
                title={item.title}
                month={item.month}
                year={item.year}
                content={item.content}
                link={item.link}
              />
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
