import "./cart-icon.styles.scss";
import React from "react";
// import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.png";
import { selectCartCount } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <div className="cart-icon-container">
      {/* <ShoppingSvg className="shopping-icon" /> */}
      <img src="./shopping-bag.png" className="shopping-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
