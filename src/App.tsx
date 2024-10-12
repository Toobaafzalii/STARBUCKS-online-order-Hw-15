import { useState } from "react";
import BillCardsContainer from "./components/billCardsContainer";
import MenuCardsContainer from "./components/menuCardsContainer";

export default function App() {
  const [billData, setBillData] = useState([
    {
      name: "Cappuccino",
      img: "/Cappuccino.png",
      price: 3.5,
      quantity: 0,
    },
    {
      name: "Latte",
      img: "/Latte.png",
      price: 4,
      quantity: 0,
    },
    {
      name: "Espresso",
      img: "/Espresso.png",
      price: 2.5,
      quantity: 0,
    },
    {
      name: "Mocha",
      img: "/Mocha.png",
      price: 4.5,
      quantity: 0,
    },
    {
      name: "Americano",
      img: "/Americano.png",
      price: 3,
      quantity: 0,
    },
  ]);
  const onQtyChange = (itemsArray: Iitem[]) => {
    setBillData(itemsArray);
  };

  return (
    <div className="container mx-auto flex flex-col justify-between items-center mt-10 gap-1">
      <div className="flex justify-between items-center gap-4">
        <img src="./logo.png" alt="STARBUCKS" />
        <h1 className="text-6xl font-bold font-sans">STURBUCKS</h1>
      </div>
      <p className="text-4xl font-semibold">Starbucks online coffee order</p>
      <MenuCardsContainer onQtyChange={onQtyChange} />
      <BillCardsContainer billData={billData} />
    </div>
  );
}
