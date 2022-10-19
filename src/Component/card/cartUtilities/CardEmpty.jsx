import emtyBag from "../../../assets/emptybag.png";
import arrow from "../../../assets/cardArrow.png";

const CardEmpty = ({onCartToggle}) => {
  return (
    <div className="empty" onClick={onCartToggle}>
      <img src={emtyBag} alt="" />
      <div className="back">
        <p>
          <img src={arrow} alt="" />
          back to home page
        </p>
      </div>
    </div>
  );
};

export default CardEmpty;
