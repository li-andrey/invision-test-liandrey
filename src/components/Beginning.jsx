import React, { useState } from "react";

const Beginning = ({ addDealer, cities, cityA, addCityB }) => {
  const [dealer, setDealer] = useState({});
  const [cityB, setCityB] = useState({ name: "", distance: 0 });

  class Dealer {
    constructor() {
      this.capacity = Math.ceil(Math.random() * 50 + 10);
      this.speed = Math.ceil(Math.random() * 5);
      this.money = Math.floor(Math.random() * 100 + 10);
    }
  }

  class CityB {
    constructor() {
      this.name = cities[Math.floor(Math.random() * cities.length)];
      this.distance = Math.floor(Math.random() * 50 + 50);
    }
  }

  const startInfo = () => {
    let dealer = new Dealer();
    setDealer(dealer);
    addDealer(dealer);

    let cityB = new CityB();
    setCityB(cityB);
    addCityB(cityB);
  };

  return (
    <div className="div" style={{ padding: "1rem 0" }}>
      <button onClick={startInfo}>НАЧАТЬ</button>
      <div className="div">
        <p>Вместимость телеги: {dealer.capacity} единиц</p>
        <p>Денег в наличии: {dealer.money} монет</p>

        <p>Ты сейчас в городе - {cityA} </p>
        <p>
          Город назначения - {cityB.name}, ехать осталось {cityB.distance} лиг
        </p>
      </div>
    </div>
  );
};

export default Beginning;
