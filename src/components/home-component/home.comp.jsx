import { useSelector } from "react-redux";
import Sort from "../sort/sort.comp";
import "./home.styles.scss";
import { selectIsLoading } from "../../store/products/product.selector";
import { ClipLoader } from "react-spinners";
import Products from "../products/products.comp";


const override = {
  display: "block",
  margin: "20% auto",
};

//home component
const HomeComponent = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="home-container">
      <Sort />
      {isLoading ? <ClipLoader cssOverride={override} /> : <Products />}
    </div>
  );
};

export default HomeComponent;
