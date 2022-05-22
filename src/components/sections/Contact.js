import React from "react";
import { useTranslation } from "react-i18next";

import Title from "../Title";
import Section from "../Section";

const Contact = ({ option, currentLanguage }) => {
  const { t } = useTranslation();

  const mobileIcon = (ref, icon, content) => (
    <div className="show-sm">
      <a href={`${ref}`} className="item-contact">
        <i className={`${icon}`}></i>
        <div className="data">{content}</div>
      </a>
    </div>
  );

  const desktopIcon = (icon, content) => (
    <div className="hide-sm">
      <div className="item-contact">
        <i className={`${icon}`}></i>
        <div className="data">{content}</div>
      </div>
    </div>
  );

  return (
    <Section option={option} sectionName="contact">
      <div className="section__header">
        <div className="section__header__content">
          <Title
            value={
              currentLanguage() === "en"
                ? [t("global.c0nt4ct"), ` ${t("global.m3")}`]
                : [t("global.c0nt4ct")[0], t("global.c0nt4ct").substring(1)]
            }
          />
        </div>
      </div>
      <div className="section__content --centered">
        <div className="contact-list">
          {mobileIcon(`tel:+582432450361`, "fas fa-phone", "+58-243-2450361")}
          {desktopIcon("fas fa-phone", "+58-243-2450361")}
          {mobileIcon(
            `https://wa.me/+584128364157`,
            "fab fa-whatsapp",
            "+58-412-8364157"
          )}
          {desktopIcon("fab fa-whatsapp", "+58-412-8364157")}
          {mobileIcon(
            `mailto:jonathanmedhed@gmail.com`,
            "far fa-envelope",
            "jonathanmedhed@gmail.com"
          )}
          {desktopIcon("far fa-envelope", "jonathanmedhed@gmail.com")}
          <div className="show-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.linkedin.com/in/jonathan-medina-heddrich-49164196/"
              }
              className="item-contact"
            >
              <i className="fab fa-linkedin-in"></i>
              <div className="data">jonathan-medina-heddrich</div>
            </a>
          </div>
          <div className="hide-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.linkedin.com/in/jonathan-medina-heddrich-49164196/"
              }
              className="item-contact"
            >
              <i className="fab fa-linkedin-in"></i>
              <div className="data">jonathan-medina-heddrich</div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
