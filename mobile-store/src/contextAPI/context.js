import React from "react";
import { useState } from "react";
import { storeProducts } from "../data/data";

export const AuthContext = React.createContext({
  id: "",
  setId: () => {},
  setShowModal: () => {},
  data: [],
  showModal: false,
  setCartData: () => {},
  cartData: [],
  removeCartData: () => {},
  handleClick: () => {},
});

const AppContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [cartData, setCartData] = useState([]);

  const handleClick = (id) => {
    const filteredData = storeProducts.filter((elem) => elem.id === id);

    if (!storeProducts[id - 1].inCart) {
      storeProducts[id - 1].count = 1;
      setCartData([...cartData, filteredData[0]]);
      storeProducts[id - 1].inCart = true;
    }
    return;
  };

  const removeCartData = (id) => {
    const arr = cartData.filter((elem) => elem.id !== id);
    storeProducts[id - 1].inCart = false;
    storeProducts[id - 1].count = 0;

    setCartData([...arr]);
  };

  return (
    <AuthContext.Provider
      value={{
        id,
        data: [...storeProducts],
        showModal,
        cartData,
        setCartData,
        setShowModal,
        setId,
        removeCartData,
        handleClick,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AppContext;
