import Header from "../../generalUI/Header";
import CartStyles from "./Cart.module.css";
import { AuthContext } from "../../contextAPI/context";
import { useContext } from "react";
import { BsFillTrashFill, BsTypeH1 } from "react-icons/bs";
import Button from "../../generalUI/Button";

const Cart = () => {
  const ctx = useContext(AuthContext);
  let subTotal = 0;

  const handleQuantityChange = (index, sum, id, price, count) => {
    const changedCartData = ctx.cartData;
    // console.log(ctx.cartData, id);
    if (changedCartData[index].count <= 0) {
      ctx.removeCartData(id);
    } else if (sum === "minus") {
      changedCartData[index].count--;
    } else if (sum === "plus") {
      changedCartData[index].count++;
    }

    ctx.setCartData([...changedCartData]);
  };

  if (!ctx.cartData.length) {
    return (
      <section>
        <Header />
        <h2 className={CartStyles.emptyCart}>Cart is empty</h2>
      </section>
    );
  } else {
    return (
      <section className={CartStyles.mainWrapper}>
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
        {ctx.cartData.map((elem, index) => {
          let { img, price, title, count, total, id } = elem;
          total = count * price;
          subTotal += total;
          return (
            <article key={id} className={CartStyles.wrapper}>
              <img src={img} alt={elem} />
              <span>{title}</span>
              <span>{`$${price}`}</span>
              <span className={CartStyles.span}>
                <Button
                  className={CartStyles.btnCount}
                  onClick={() =>
                    handleQuantityChange(index, "minus", id, price, count)
                  }
                >
                  -
                </Button>
                {count}
                <Button
                  className={CartStyles.btnCount}
                  onClick={() =>
                    handleQuantityChange(index, "plus", id, price, count)
                  }
                >
                  +
                </Button>
              </span>
              <span>
                <BsFillTrashFill
                  className={CartStyles.icon}
                  onClick={() => ctx.removeCartData(id)}
                />
              </span>
              <span>{`Item Total: $${total}`}</span>
            </article>
          );
        })}
        <aside>
          <Button
            className={CartStyles.btn}
            onClick={() => ctx.clearCart(ctx.cartData)}
          >
            CLEAR CHART
          </Button>
          <span>SUBTOTAL: ${subTotal}</span>
          <span>TAX: ${(subTotal * 10) / 100}</span>
          <span>TOTAL: ${subTotal + (subTotal * 10) / 100}</span>
        </aside>
      </section>
    );
  }
};

export default Cart;
