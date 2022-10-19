import { useDispatch } from "react-redux";
import { setAddItemToCard, setOpenCard } from "../../app/cardSlice";

const Item = ({
  id,
  classPr,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
  ifExit,
}) => {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, classPr, text, img, rating, price };
    dispatch(setAddItemToCard(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCard({
        cardState: true,
      })
    );
  };
  return (
    <div
      className={`item bg-gradient-to-b ${classPr}  ${
        ifExit ? "row-item" : "column-item"
      }`}
    >
      <div className="item-texts">
        <h6>{title}</h6>
        <p>{text}</p>
        <div className="customer">
          <p>{price}$</p>
          <p className="rate-star">{rating}*</p>
        </div>
        <div className="buttons">
          <div className="shopping-card" onClick={() => onAddToCard()}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <button className="buy-btn" onClick={() => {onAddToCard();onCartToggle();}}>
            {btn}
          </button>
        </div>
      </div>
      <div className="item-img">
        <img src={img} alt={`product/img${id}`} />
      </div>
    </div>
  );
};

export default Item;
