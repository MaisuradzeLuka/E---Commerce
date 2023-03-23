import Header from "../generalUI/Header";
import Products from "./Products";
import { useContext } from "react";
import Modal from "../generalUI/Modal";
import { AuthContext } from "../contextAPI/context";

const MainPage = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      {ctx.showModal && <Modal />}
      <Header />
      <Products />
    </>
  );
};

export default MainPage;
