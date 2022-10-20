import React from "react";

const Day = ({ cityB, filledCart, dealer }) => {
  class Day {
    constructor() {
      this.name = randomEvents[Math.floor(Math.random() * randomEvents.length)];
    }
  }

  const randomEvents = [
    "Обычный день",
    "Дождь",
    "Ровная дорога",
    "Телега сломалась",
    "Река",
    "Встретил местного",
    "Разбойники большой дороги",
    "Придорожный трактир",
    "Товар испортился",
  ];

  const startJourney = () => {
    let restDistance = cityB.distance;

    while (restDistance > 0) {
      let day = new Day();
      let levelRoad = dealer.speed + 2;
      console.log("day1", day);

      if (day === "Обычный день") {
        restDistance -= dealer.speed;
      } else if (day === "Дождь") {
        restDistance -= dealer.speed - 2 > 0;
      } else if (day === "Ровная дорога") {
        restDistance -= levelRoad > 5 ? 5 : levelRoad;
      } else if (day === "Телега сломалась") {
        restDistance = restDistance;
      } else if (day === "Река") {
        restDistance -= Math.ceil(Math.random * 2);
      } else if (day === "Встретил местного") {
        restDistance -= dealer.speed + Math.ceil(Math.random * 3 + 3);
      }
      /* else if ((day === "Разбойники большой дороги")) {
      restDistance -= dealer.speed;
      if (dealer.money > 0) {
        dealer.money = 0;
      } else {
        Math.max(filledCart.quality.cof);
      }
    } else if ((day === "Придорожный трактир")) {
      if ((go = "continue")) {
        restDistance -= dealer.speed;
      }
    } else if ((day === "Товар испортился")) {
        restDistance -= dealer.speed;
        filledCart = filledCart.filter(
          (v, i) => i !== Math.random() * filledCart.length
        );
      } */

      restDistance -= 5;
      dealer.speed = Math.ceil(Math.random() * 5);
      day = new Day();

      console.log("filledCart", filledCart);
      console.log("restDistance", restDistance);
      console.log("dealer.speed", dealer.speed);
    }
  };

  return (
    <div className="div" style={{ padding: "1rem 0" }}>
      <button onClick={startJourney}>ОТПРАВИТЬСЯ В ПУТЬ</button>
      <h3> День {}</h3>
      <p></p>
    </div>
  );
};

export default Day;
