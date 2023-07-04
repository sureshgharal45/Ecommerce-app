import "./cart-item.styles.scss";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemFromCart,
  incQuantity,
  decQuantity,
} from "../../store/cart/cart.action";
import { toast } from "react-toastify";

//component to display the cart items
function CartItem({ cartItem }) {
  const { brand, images, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  //function to delete the cartItem from the cart
  const handelDelete = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
    toast("Item Removed!");
  };

  //function to increase the cartItem in the cart
  const handelIncrease = () => {
    dispatch(incQuantity(cartItems, cartItem));
    toast("Item Added!");
  };

  //function to decrease the cartItem in the cart
  const handelDecrease = () => {
    dispatch(decQuantity(cartItems, cartItem));
    toast("Item Removed!");
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={images && images[0]} alt={`${brand}`} />
      </div>
      <span className="name"> {brand} </span>
      <span className="quantity">
        <div className="arrow" onClick={handelDecrease}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handelIncrease}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={handelDelete}>
        &#10005;
      </div>
    </div>
  );
}

export default CartItem;
