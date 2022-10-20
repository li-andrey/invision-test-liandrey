import React, { useState } from "react";
import Beginning from "../Beginning";
import Shopping from "../Shopping";
import Day from "../Day";

const Home = () => {
  const [dealer, setDealer] = useState({});
  const [cityB, setCityB] = useState({ name: "", distance: 0 });
  const [filledCart, setFilledCart] = useState([]);

  const cities = ["Алматы", "Атырау", "Астана", "Актай", "Актобе"];
  const cityA = "Москва";
  const goodsQuality = [
    { index: 0, name: "нормальное", cof: 1.2 },
    { index: 1, name: "слегка ипорчен", cof: 0.95 },
    { index: 2, name: "половина испортилась", cof: 0.55 },
    { index: 3, name: "почти весь пропал", cof: 0.25 },
    { index: 4, name: "испорчен в хлам", cof: 0.1 },
  ];
  const goodsType = ["Мясо", "Сухофрукты", "Зерно", "Мука", "Ткань", "Краска"];

  const addDealer = (newDealer) => {
    setDealer(newDealer);
  };

  const addCityB = (newCityB) => {
    setCityB(newCityB);
  };

  const addFilledCart = (newFilledCart) => {
    setFilledCart(newFilledCart);
  };

  return (
    <div className="Home" style={{ padding: "1rem" }}>
      <h1>Торговец</h1>

      <Beginning
        addDealer={addDealer}
        cities={cities}
        cityA={cityA}
        addCityB={addCityB}
      />
      <Shopping
        dealer={dealer}
        goodsQuality={goodsQuality}
        goodsType={goodsType}
        addFilledCart={addFilledCart}
      />
      <Day dealer={dealer} cityB={cityB} filledCart={filledCart} />
    </div>
  );
};

export default Home;
