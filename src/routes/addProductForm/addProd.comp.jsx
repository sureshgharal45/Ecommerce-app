import React from "react";
import "./addProd.styles.scss";
import AddProductForm from "../../components/add-product-form/add-product-form.comp";

//component to add new product details
const AddProd = () => {
  return (
    <div className="formContainer">
      <AddProductForm />
    </div>
  );
};

export default AddProd;
