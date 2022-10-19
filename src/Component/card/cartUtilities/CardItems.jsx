import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCard,
} from "../../../app/cardSlice";
import trash from "../../../assets/trash.png";

const CardItems = ({
  item: { id, title, img, classPr, rating, text, price, cardQauntity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItems = () => {
    dispatch(
      setRemoveItemFromCard({
        id,
        title,
        img,
        classPr,
        rating,
        text,
        price,
        cardQauntity,
      })
    );
  };

  const onsetIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        img,
        classPr,
        rating,
        text,
        price,
        cardQauntity,
      })
    );
  };
  const onsetDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        img,
        classPr,
        rating,
        text,
        price,
        cardQauntity,
      })
    );
  };
  return (
    <div className="cart-item">
      <div className={`${classPr} card-img-item center-elements`}>
        <img src={img} alt="" />
        <p>{price}$</p>
      </div>
      <div className="cart-detial">
        <div className="card-detial-middle">
          <div className="text">
            <h6>{title}</h6>
            <p>{text}</p>
          </div>
          <div className="qauntity">
            <span className="q-icon" onClick={onsetDecreaseItemQTY}>
              -
            </span>
            <p className="q-number">{cardQauntity}</p>
            <span className="q-icon" onClick={onsetIncreaseItemQTY}>
              +
            </span>
          </div>
        </div>
        <div className="card-detail-left">
          <p className="total-price">{price * cardQauntity}$</p>
          <img src={trash} alt="" onClick={onRemoveItems} />
        </div>
      </div>
    </div>
  );
};

export default CardItems;
