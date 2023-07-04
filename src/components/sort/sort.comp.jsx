import React from "react";
import "./sort.styles.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsArray } from "../../store/products/product.selector";
import { selectIsSorted } from "../../store/products/product.selector";
import { selectSortedProds } from "../../store/products/product.selector";
import {
  sortProduct,
  unsortProduct,
} from "../../store/products/product.action";

const Sort = () => {
  const products = useSelector(selectProductsArray);
  const sortedProds = useSelector(selectSortedProds);
  const isSorted = useSelector(selectIsSorted);

  const dispatch = useDispatch();

  //function to handle sorted and unsoted products
  const handleSort = () => {
    if (!isSorted) {
      dispatch(sortProduct(sortedProds));
      toast("Products has been sorted!");
    } else {
      dispatch(unsortProduct(products));
      toast("Product has been unsorted!");
    }
  };

  return (
    <div className="aligns">
      <div className="sort-btn" onClick={handleSort}>
        {isSorted ? <p>X Sort by Price</p> : <p>Sort by Price</p>}
      </div>
    </div>
  );
};

export default Sort;
