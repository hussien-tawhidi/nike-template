import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="row">
          {titles.map((title, i) => (
            <div className="col-4" key={i}>
              <h6 className="footer-title">{title.title}</h6>
            </div>
          ))}
        </div>
        <div className="row">
          {links.map((link, i) => (
            <div className="col-4 " key={i}>
              {link.map((val, i) => (
                <a href="/" key={i} className="footer-links">
                  {val.link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="copy-right">
        <p>copyright all reserved rights 2022 by: hussien tawhidi</p>
      </div>
    </div>
  );
};

export default Footer;
