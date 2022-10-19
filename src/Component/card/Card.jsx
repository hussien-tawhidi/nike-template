import { useDispatch, useSelector } from "react-redux";
import {
  selectCardItems,
  selectCardState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCardItems,
  setCloseCard,
  setGetTotals,
} from "../../app/cardSlice";
import { useEffect } from "react";
import CardCount from "./cartUtilities/CardCount";
import CardEmpty from "./cartUtilities/CardEmpty";
import CardItems from "./cartUtilities/CardItems";

const Card = () => {
  const dispatch = useDispatch();
  const ifCardState = useSelector(selectCardState);
  const cartItems = useSelector(selectCardItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQauntity=useSelector(selectTotalQTY)

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onClearCardItem = () => {
    [dispatch(setClearCardItems())];
  };

  const onCartToggle = () => {
    dispatch(
      setCloseCard({
        cardState: false,
      })
    );
  };
  return (
    <div className={`cart ${ifCardState ? "card-show" : "card-hide"}`}>
      <div className="cart-half-width">
        <CardCount
          onCartToggle={onCartToggle}
          onClearCardItem={onClearCardItem}
          totalQauntity={totalQauntity}
        />
        {cartItems.length == 0 ? (
          <CardEmpty onCartToggle={onCartToggle} />
        ) : (
          <>
            {cartItems.map((item, i) => (
              <CardItems key={i} item={item} />
            ))}
          </>
        )}
        <div className="checkout-card">
          <div className="subTitle">
            <p className="subtitle">subtotal</p>
            <p>{totalAmount}$</p>
          </div>
          <p className="sub-text">taxes and shipping calculate at shipping</p>
          <button className="btn btn-dark">checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
