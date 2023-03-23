import Header from "../../generalUI/Header";
import CartStyles from "./Cart.module.css";
import { AuthContext } from "../../contextAPI/context";
import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import Button from "../../generalUI/Button";

const Cart = () => {
  const ctx = useContext(AuthContext);

  return (
    <section>
      <Header />
      <h2>
        YOUR <span> CART</span>
      </h2>
      <section
        className={CartStyles.wrapper}
        style={{ fontFamily: "Gill Sans" }}
      >
        <h3>PRODUCTS</h3>
        <h3>NAME OF PRODUCT</h3>
        <h3>PRICE</h3>
        <h3>QUANTITY</h3>
        <h3>REMOVE</h3>
        <h3>TOTAL</h3>
      </section>
      {ctx.cartData.map((elem) => {
        let { img, price, title, count, total, id } = elem;
        return (
          <article key={id} className={CartStyles.wrapper}>
            <img src={img} alt={elem} />
            <span>{title}</span>
            <span>{`$${price}`}</span>
            <span className={CartStyles.span}>
              <Button
                className={CartStyles.btnCount}
                onClick={() => {
                  // ctx.setCartData(...ctx.cartData);
                  // count++;
                  // console.log(count);
                  console.log(ctx);
                }}
              >
                -
              </Button>
              {count}
              <Button className={CartStyles.btnCount}>+</Button>
            </span>
            <span>
              <BsFillTrashFill
                className={CartStyles.icon}
                onClick={() => ctx.removeCartData(id)}
              />
            </span>
            <span>{`Item Total: $${price * count}`}</span>
          </article>
        );
      })}
      {/* <Button className={CartStyles.btn} onClick={() => ctx.setCartData([])}>
        CLEAR CHART
      </Button> */}
    </section>
  );
};

export default Cart;
