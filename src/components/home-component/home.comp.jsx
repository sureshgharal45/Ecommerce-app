import { useSelector } from "react-redux";
import Sort from "../sort/sort.comp";
import "./home.styles.scss";
import { selectIsLoading } from "../../store/products/product.selector";
import { ClipLoader } from "react-spinners";
import Products from "../products/products.comp";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

//home component
const HomeComponent = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="home-container">
      <Sort />
      {isLoading ? <ClipLoader className={override} /> : <Products />}
    </div>
  );
};

export default HomeComponent;
