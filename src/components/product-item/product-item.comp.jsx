import React, { useState } from "react";
import "./product-item.styles.scss";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectProductsArray } from "../../store/products/product.selector";
import { useNavigate } from "react-router-dom";
import {
  saveEditProduct,
  deleteProduct,
} from "../../store/products/product.action";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductItem = ({ product }) => {
  const { title, price, images, rating, description, id } = product;
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newRating, setNewRating] = useState(rating);
  const [newDescription, setNewDescription] = useState(description);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleRatingChange = (e) => {
    setNewRating(e.target.value);
  };

  const handleDescChange = (e) => {
    setNewDescription(e.target.value);
  };

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProductsArray);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    toast("Product Added to cart!");
  };

  const handleSave = () => {
    const newValues = {
      title: newTitle,
      price: newPrice,
      rating: newRating,
      description: newDescription,
    };

    dispatch(saveEditProduct(products, product, newValues));
    toast("Product Updated");
    setIsEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteProduct(products, product));
    toast("Product Deleted!");
  };

  const handleShowDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <div className="image-price-rating-container">
        <img onClick={handleShowDetails} src={images[0]} alt={title} />

        <div className="title-rating-price">
          <div className="title-container">
            {isEdit ? (
              <input value={newTitle} onChange={(e) => handleTitleChange(e)} className="inputBox"/>
            ) : (
              <h3>{title}</h3>
            )}
          </div>
          <div className="price-container">
            <p>
              Rs.
              {isEdit ? (
                <input
                  value={newPrice}
                  onChange={(e) => handlePriceChange(e)}
                  className="inputBox"
                />
              ) : (
                price
              )}
            </p>
          </div>
          <div className="rating-container">
            {isEdit ? (
              <input
                value={newRating}
                onChange={(e) => handleRatingChange(e)}
                className="inputBox"
              />
            ) : (
              <ReactStars
                count={5}
                size={28}
                value={rating}
                color2={"#ffd700"}
              />
            )}
          </div>
        </div>
      </div>

      <div className="desc-actions">
        <div className="description-container">
          {isEdit ? (
            <textarea
              value={newDescription}
              rows="5"
              cols="30"
              onChange={(e) => handleDescChange(e)}
              className="inputBox"
            />
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div>
          {isEdit ? (
            <div className="action-container">
              <div className="action-icon" onClick={handleSave}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  alt="save"
                />
              </div>

              <div className="action-icon" onClick={() => setIsEdit(false)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/391/391247.png"
                  alt="cancel"
                />
              </div>
            </div>
          ) : (
            <div className="action-container">
              <div className="action-icon" onClick={() => setIsEdit(true)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2919/2919592.png"
                  alt="edit"
                />
              </div>
              <div className="action-icon" onClick={handleDelete}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                  alt="delete"
                />
              </div>
              <div className="action-icon" onClick={addProductToCart}>
                <img
                  src="./cart.png"
                  alt="addToCart"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
