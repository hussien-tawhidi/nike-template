import React from "react";

const FlexComponent = ({
  ifExit,
  endpoint: { title, heading, text, img, btn, url },
}) => {
  return (
    <div className={`flex-component ${ifExit?"flex-revevrse":""}`}>
      <div className="flex-texts">
        <h6>{heading}</h6>
        <h5>{title}</h5>
        <p>{text}</p>
        <a href={url}> {btn}</a>
      </div>
      <div className="flex-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default FlexComponent;
