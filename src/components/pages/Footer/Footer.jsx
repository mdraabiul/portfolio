import React from "react";
import { Email, Facebook, Github, Linkedin } from "../../svg/SVG";
import { copyRight } from "../../constants";
import "./footer.css";
const Footer = () => {
  const webLinks = [
    { name: Email, href: "mailto:mdrabiul.asia@gmail.com" },
    {
      name: Facebook,
      href: "https://www.facebook.com/profile.php?id=61551066272087",
    },
    { name: Linkedin, href: "https://www.linkedin.com/in/sniperrabiul/" },
    { name: Github, href: "https://github.com/mdraabiul" },
  ];
  return (
    <div className="footer">
      <div className="footer__social">
        {webLinks.map((links, index) => (
          <div key={index} className={`footer__social-${links}`}>
            <a target="_blank" rel="noreferrer" href={links.href}>
              <links.name />
            </a>
          </div>
        ))}
      </div>

      <div className="copyright">
        <small>&copy;{copyRight}</small>
      </div>
    </div>
  );
};

export default Footer