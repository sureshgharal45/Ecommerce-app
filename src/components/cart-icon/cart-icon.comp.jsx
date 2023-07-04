import "./cart-icon.styles.scss";
import React from "react";
import { selectCartCount } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

//component for to dislay cartIcon
const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <div className="cart-icon-container">
      <img src="./shopping-bag.png" className="shopping-icon" alt="shoppingBag"/>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
