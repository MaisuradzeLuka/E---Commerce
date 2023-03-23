import ModalStyles from "./Modal.module.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../contextAPI/context";

const Modal = () => {
  const ctx = useContext(AuthContext);
  const filteredData = ctx.data.filter((elem) => elem.id === ctx.id);
  const { img, title, price } = filteredData[0];

  return (
    <div className={ModalStyles["back-drop"]}>
      <div className={ModalStyles.wrapper}>
        <h2>Item Added To Cart</h2>
        <img src={img} alt={img} />
        <span>{title}</span>
        <span className={ModalStyles.span}>{`Price: $${price}`}</span>
        <Button
          onClick={() => ctx.setShowModal(false)}
          className={ModalStyles.btn1}
        >
          Continue Shopping
        </Button>
        <Link to="/cart">
          <Button
            className={ModalStyles.btn2}
            onClick={() => ctx.setShowModal(false)}
          >
            Go To Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
