import React from "react";
import arrow from "../../../assets/cardArrow.png";
import close from "../../../assets/close.png";
const CardCount = ({onCartToggle,onClearCardItem,totalQauntity}) => {
  return (
    <div className="card-count">
      <div className="counter-left">
        <img src={arrow} alt="" onClick={onCartToggle}/>
        <div className="counter-text">
          <p>
            your card <span>({totalQauntity}) items</span>
          </p>
        </div>
      </div>
      <div className="counter-right" onClick={onClearCardItem}>
        <img src={close} alt="" />
      </div>
    </div>
  );
};

export default CardCount;
