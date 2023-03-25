import { GiRotaryPhone } from "react-icons/gi";
import { BsFillCartPlusFill } from "react-icons/bs";
import Button from "./Button";
import HeaderStyles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className={HeaderStyles.nav}>
        <div>
          <Link to="/">
            <GiRotaryPhone className={HeaderStyles.icon} />
          </Link>
          <Link to="/">
            <h1>Products</h1>
          </Link>
        </div>
        <Link to="/cart">
          <Button className={HeaderStyles.btn}>
            <BsFillCartPlusFill />
            <span>My Cart</span>
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
