import React from "react";
import { useTranslation, Trans } from "react-i18next";

import Title from "../Title";
import Section from "../Section";

const AboutMe = ({ option }) => {
  const { t } = useTranslation();

  let myName = "Jonathan Medina";

  let now = new Date();

  const getAge = () => {
    var born = new Date(1987, 11, 4);
    return now.getFullYear() - born.getFullYear() - 1;
  };

  const intro = () => (
    <div className="text">
      <Trans i18nKey="global.ab0utMe">
        <span className="text-primary"></span>
        {{ myName }}
      </Trans>
    </div>
  );

  const personalInfo = () => (
    <div className="list">
      <div className="item">
        <div className="label">{t("global.4g3")}....</div>
        <div className="value">{getAge()}</div>
      </div>
      <div className="item">
        <div className="label">{t("global.r3s1d3nc3")}...</div>
        <div className="value">Venezuela</div>
      </div>
      <div className="item">
        <div className="label">{t("global.st4tus")}...</div>
        <div className="value">{t("global.s1ngl3")}</div>
      </div>
    </div>
  );

  const hobbieIcons = () => (
    <div className="icon-list">
      <i className="fas fa-book"></i>
      <i className="fas fa-dumbbell"></i>
      <i className="fas fa-futbol"></i>
      <i className="fas fa-laptop-code"></i>
      <i className="fas fa-headphones"></i>
    </div>
  );

  return (
    <Section option={option} sectionName="about">
      <div className="section__header">
        <div className="section__header__content">
          <Title value={[t("global.ab0ut"), ` ${t("global.m3")}`]} />
        </div>
      </div>
      <div className="section__content">
        <div className="text-list">
          {intro()}
          {personalInfo()}
        </div>
        <Title
          className="--sm mt-half"
          value={[t("global.m1y"), ` ${t("global.h0bb13s")}`]}
        />
        {hobbieIcons()}
      </div>
    </Section>
  );
};

export default AboutMe;
