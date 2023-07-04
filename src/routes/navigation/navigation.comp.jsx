import React from "react";
import "./navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.comp";

const Navigation = () => {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link to="allProds" className="navLinks">
            <h2 className="logo">E-CartStore</h2>
          </Link>
          <Link to="allProds" className="navLinks">
            Products
          </Link>
          <Link to="addProd" className="navLinks">
            Add Product
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <p className="name">Suresh Gharal</p>
            <img
              className="avatar"
              src="https://cdn-icons-png.flaticon.com/512/547/547420.png"
              alt="navImage"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
