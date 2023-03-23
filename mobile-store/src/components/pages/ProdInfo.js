import ProdInfoStyles from "./ProdInfo.module.css";
import Header from "../../generalUI/Header";
import Button from "../../generalUI/Button";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contextAPI/context";

const ProdInfo = () => {
  const location = useLocation();
  const id = location.state;
  const ctx = useContext(AuthContext);
  const filteredData = ctx.data.filter((elem) => elem.id === id);
  const { title, company, img, info, price, inCart } = filteredData[0];
  const arr = ctx.cartData;
  // const handleClick = () => {
  //   if (!inCart) {
  //     ctx.setCartData([...arr, filteredData[0]]);
  //     ctx.data[id - 1].inCart = true;
  //   }
  //   return;
  // };

  return (
    <>
      <Header />
      <section className={ProdInfoStyles.phoneInfo}>
        <h2>{title}</h2>
        <div className={ProdInfoStyles["info-wrapper"]}>
          <img src={img} alt={img} />
          <article>
            <h3>{`Model: ${title}`}</h3>
            <h4>{`MADE BY: ${company}`}</h4>
            <span>{`Prise: $${price}`}</span>
            <p>Some Info About Product:</p>
            <p className={ProdInfoStyles.info}>{info}</p>
            <div>
              <Link to="/">
                <Button className={ProdInfoStyles.btn1}>
                  Back To Products
                </Button>
              </Link>
              <Button
                className={ProdInfoStyles.btn2}
                onClick={() => {
                  ctx.handleClick(id);
                }}
              >
                Add To Cart
              </Button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProdInfo;
