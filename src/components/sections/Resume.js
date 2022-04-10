import React from "react";
import { useTranslation } from "react-i18next";

import Title from "../Title";
import Section from "../Section";
import InfoCard from "../InfoCard";
import IconsCard from "../IconsCard";

// images
import ucLogo from "../../images/UC_logo.png";
import cctLogo from "../../images/cct.png";
import biekosImg from "../../images/biekos.png";

const Resume = ({ language, option }) => {
  const { t } = useTranslation();

  const educationTemplate = () => (
    <div className="text-card">
      <InfoCard
        date="2016 - 2019"
        title="CCT"
        subTitle="College of Computing Technology"
        location={t("locations.dub")}
        img={cctLogo}
        mainTitle={t("global.bachDegComp")}
      />
      <InfoCard
        date="2009 - 2014"
        title="UC"
        subTitle={t("global.uniCab")}
        location={t("locations.arag")}
        img={ucLogo}
        imgClassName="tall-logo"
        mainTitle={t("global.honorDegAdm")}
      />
    </div>
  );

  const experienceTemplate = () => (
    <div className="text-card">
      <InfoCard
        date="2/2021 - 5/2021"
        title="Biekos"
        subTitle="College of Computing Technology"
        location={`${t("locations.norw")} (${t("global.remot3")})`}
        img={biekosImg}
        mainTitle={`${t("global.devJun")} (Front-end)`}
      />
    </div>
  );

  const skills = [
    {
      title: "front - end",
      icon: "fas fa-desktop",
      items: [
        { name: "React js", icon: "fab fa-react" },
        { name: "Html", icon: "fab fa-html5" },
        { name: "Css", icon: "fab fa-css3-alt" },
        { name: "Sass", icon: "fab fa-sass" },
        { name: "Next js", icon: "fas fa-step-forward" },
      ],
    },
    {
      title: "back - end",
      icon: "fas fa-server",
      items: [
        { name: "Node js", icon: "fab fa-node-js" },
        { name: "Express js", icon: "fab fa-etsy" },
      ],
    },
    {
      title: t("global.dat4b"),
      icon: "fas fa-database",
      items: [
        { name: "MongoDB", icon: "fas fa-leaf" },
        { name: "PostgreSQL", icon: "fas fa-republican" },
      ],
    },
    {
      title: t("global.l4ng"),
      icon: "fas fa-laptop-code",
      items: [
        { name: "Javascript", icon: "fab fa-js-square" },
        { name: "Python", icon: "fab fa-python" },
      ],
    },
    {
      title: t("global.depl0yment"),
      icon: "fas fa-rocket",
      items: [
        { name: "AWS", icon: "fab fa-aws" },
        { name: "Heroku", icon: "fas fa-heading" },
        { name: "Digital Ocean", icon: "fab fa-digital-ocean" },
      ],
    },
    {
      title: t("global.oth3r"),
      icon: "fas fa-laptop-house",
      items: [
        { name: "GitHub", icon: "fab fa-github-alt" },
        { name: "Phabricator", icon: "fab fa-phabricator" },
        { name: "Selenium", icon: "far fa-check-square" },
      ],
    },
  ];

  const cvButton = (className) => (
    <Title
      className={`--button ${className ? className : ""}`}
      reverse={true}
      value={[t("global.d0wnl04d"), " CV"]}
    />
  );

  return (
    <Section option={option} sectionName="resume">
      <div className="section__header">
        <div className="section__header__content">
          <Title
            value={[t("global.r3sum3Up")[0], t("global.r3sum3Up").substring(1)]}
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              language() === "es"
                ? "https://docs.google.com/document/d/1WBJAKugsGaG-hy7NdhfbxXolTQt_rHbZsuY-xKFFJ1A/edit?usp=sharing"
                : "https://docs.google.com/document/d/13MNrLJ7cPpZDpzG9LGUUPsPt-wc0oIfeknpuTSG073g/edit?usp=sharing"
            }
            className="link"
          >
            {cvButton()}
          </a>
        </div>
      </div>
      <div className="section__content">
        {/**
         * Experience
         */}
        <div className="section__item">
          <Title
            className="--sm"
            english={["E", "xperience"]}
            value={[
              t("global.exp3rience")[0],
              t("global.exp3rience").substring(1),
            ]}
          />
          {experienceTemplate()}
        </div>
        {/**
         *  Skills
         */}
        <div className="section__item">
          <Title
            className="--sm"
            value={[t("global.sk1lls")[0], t("global.sk1lls").substring(1)]}
          />
          {skills.map((skill, i) => (
            <span key={i}>
              <IconsCard
                icon={skill.icon}
                items={skill.items}
                title={skill.title}
              />
            </span>
          ))}
        </div>
        {/**
         * Education
         */}
        <div className="section__item">
          <Title
            className="--sm"
            english={["E", "xperience"]}
            value={[
              t("global.educati0n")[0],
              t("global.educati0n").substring(1),
            ]}
          />
          {educationTemplate()}
        </div>
        {cvButton("--centered")}
      </div>
    </Section>
  );
};

export default Resume;
