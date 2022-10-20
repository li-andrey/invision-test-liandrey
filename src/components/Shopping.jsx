import React, { useState } from "react";

const Shopping = ({ dealer, goodsQuality, goodsType, addFilledCart }) => {
  const [filledCart, setFilledCart] = useState([]);
  const [balance, setBalance] = useState({ restCapacity: 0, restMoney: 0 });

  class Product {
    constructor() {
      this.type = goodsType[Math.floor(Math.random() * goodsType.length)];
      this.weight = Math.ceil(Math.random() * 15);
      this.price = Math.ceil(Math.random() * 30);
      this.quality =
        goodsQuality[Math.floor(Math.random() * goodsQuality.length)];
    }
  }

  let product = new Product();

  const buyGoods = () => {
    let restCapacity = dealer.capacity;
    let restMoney = dealer.money;
    // let selectedGoods = goods[Math.floor(Math.random() * goods.length)];
    let goodsWeight = product.weight;
    let goodsPrice = product.price;
    let filledCart = [];
    // console.log("Изначально места в телеге", restCapacity);
    // console.log("Изначально денег", restMoney);
    while (restCapacity >= goodsWeight && restMoney >= goodsPrice) {
      //   if (restCapacity >= goodsWeight && restMoney >= goodsPrice) {
      //     console.log(
      //       `Купил ${goodsWeight} единиц ${product.type} ${product.quality.name} за ${goodsPrice} монет`,
      //       product
      //     );
      //   }
      restCapacity -= goodsWeight;
      restMoney -= goodsPrice;
      filledCart.push(product);
      //   selectedGoods = goods[Math.floor(Math.random() * goods.length)];
      product = new Product();
      goodsWeight = product.weight;
      goodsPrice = product.price;
      //   console.log("оставшееся место в телеге", restCapacity);
      //   console.log("вес следующего товара", goodsWeight);
      //   console.log("оставшиеся деньги", restMoney);
      //   console.log("цена следующего товара", goodsPrice);
    }
    // console.log(`Места осталось: ${restCapacity}`, restCapacity);
    // console.log(`Денег осталось: ${restMoney}`, restMoney);
    // console.log(filledCart);
    setBalance({ restCapacity: restCapacity, restMoney: restMoney });
    setFilledCart(filledCart);
    addFilledCart(filledCart);
  };

  return (
    <div className="div" style={{ padding: "1rem 0" }}>
      <button onClick={buyGoods}>ЗАКУПИТЬСЯ ПРОДУКТАМИ</button>
      {filledCart.map((p, i) => (
        <p key={i}>
          Купил {p.weight} единиц {p.type} ({p.quality.name}) за {p.price} монет
        </p>
      ))}
      <p>Места осталось: {balance.restCapacity} единиц</p>

      <p>Денег осталось: {balance.restMoney} монет</p>
    </div>
  );
};

export default Shopping;
