import "./App.styles.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.comp";
import Home from "./routes/home/home.comp";
import AddProd from "./routes/addProductForm/addProd.comp";
import Cart from "./routes/cart/cart.comp";
import HomeComponent from "./components/home-component/home.comp";
import ProductDetail from "./components/product-detail/product-detail.comp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="addProd" element={<AddProd />} />
          <Route path="cart" element={<Cart />} />
          <Route path="allProds" element={<HomeComponent />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
