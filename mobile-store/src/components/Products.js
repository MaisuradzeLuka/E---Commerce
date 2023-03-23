import ProdStyles from "./Products.module.css";
import Product from "./Product";
import { useContext } from "react";
import { AuthContext } from "../contextAPI/context";

const Products = () => {
  const ctx = useContext(AuthContext);

  return (
    <section className={ProdStyles.section}>
      <h2>
        <span>OUR</span> PRODUCTS
      </h2>
      <ul className={ProdStyles.wrapper}>
        {ctx.data.map((product) => {
          return <Product id={product.id} key={product.id} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
