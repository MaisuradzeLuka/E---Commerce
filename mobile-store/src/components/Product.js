import ProdStyles from "./Product.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contextAPI/context";

const Product = ({ id }) => {
  const ctx = useContext(AuthContext);

  const iconClickHandler = (id) => {
    ctx.setId(id);
    ctx.setShowModal(true);
    ctx.handleClick(id);
  };

  const filteredCtx = ctx.data.filter((elem) => elem.id === id);
  const { title, img, price, inCart } = filteredCtx[0];
  console.log(inCart);

  return (
    <li className={ProdStyles.card}>
      <div className={ProdStyles.img}>
        <Link
          to="/prodInfo"
          className={ProdStyles.link}
          onClick={() => ctx.setId(id)}
          state={id}
        >
          <img src={img} alt={img} />
        </Link>
        <button type="button" onClick={() => iconClickHandler(id)}>
          {inCart ? (
            "IN CART"
          ) : (
            <BsFillCartPlusFill className={ProdStyles.icon} />
          )}
        </button>
      </div>
      <div className={ProdStyles.price}>
        <span>{title}</span>
        <span>{`$${price}`}</span>
      </div>
    </li>
  );
};

export default Product;
