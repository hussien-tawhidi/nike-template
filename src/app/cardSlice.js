import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cardState: false,
  cardItems: localStorage.getItem("card")
    ? JSON.parse(localStorage.getItem("card"))
    : [],
  cardTotalAmount: 0,
  cardTotalQauntity: 0,
};

const CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setOpenCard: (state, action) => {
      state.cardState = action.payload.cardState;
    },

    setCloseCard: (state, action) => {
      state.cardState = action.payload.cardState;
    },

    setAddItemToCard: (state, action) => {
      const itemIndex = state.cardItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cardQauntity += 1;
        toast.success("item QTY increas");
      } else {
        const temp = { ...action.payload, cardQauntity: 1 };
        state.cardItems.push(temp);
        toast.success(`${action.payload.title} add to card`);
      }
      localStorage.setItem("card", JSON.stringify(state.cardItems));
    },

    setRemoveItemFromCard: (state, action) => {
      const removeItem = state.cardItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cardItems = removeItem;
      localStorage.setItem("card", JSON.stringify(state.cardItems));
      toast.success(`${action.payload.title} removed from card`);
    },

    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cardItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cardQauntity += 1;
      }
      localStorage.setItem("card", JSON.stringify(state.cardItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cardItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cardItems[itemIndex].cardQauntity > 1) {
        state.cardItems[itemIndex].cardQauntity -= 1;
      }
    },

    setClearCardItems: (state, action) => {
      state.cardItems = [];
      toast.success("Card Cleared");
      localStorage.setItem("card", JSON.stringify(state.cardItems));
    },

    setGetTotals: (state, action) => {
      let { totalAmount, totalQty } = state.cardItems.reduce(
        (cardTotal, cardItem) => {
          const { price, cardQauntity } = cardItem;
          const totalPrice = price * cardQauntity;
  
          cardTotal.totalAmount += totalPrice;
          cardTotal.totalQty += cardQauntity;
  
          return cardTotal;
        },
        {
          totalAmount: 0,
          totalQty: 0,
        }
      );
      state.cardTotalAmount = totalAmount;
      state.cardTotalQauntity = totalQty;
    },
  },
});

export const {
  setOpenCard,
  setCloseCard,
  setAddItemToCard,
  setRemoveItemFromCard,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCardItems,
  setGetTotals,
} = CardSlice.actions;

export const selectCardState = (state) => state.card.cardState;

// show items on the card
export const selectCardItems = (state) => state.card.cardItems;

export const selectTotalAmount = (state) => state.card.cardTotalAmount;

export const selectTotalQTY = (state) => state.card.cardTotalQauntity;

export default CardSlice.reducer;
