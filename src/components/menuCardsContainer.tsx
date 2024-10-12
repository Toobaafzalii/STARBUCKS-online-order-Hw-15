import { useState } from "react";
import ItemMenuCard from "./itemMenuCard";

export default function MenuCardsContainer(props: ImenuContainerProps) {
  const [itemsArray, setItemsArray] = useState([
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

  const onQtyChange = (state: { name: string; quantity: number }) => {
    const updatedItemsArray = [...itemsArray];
    const itemIndex = itemsArray.findIndex((item) => item.name === state.name);
    if (itemIndex !== -1) {
      updatedItemsArray[itemIndex].quantity = state.quantity;
    }
    setItemsArray(updatedItemsArray);
    props.onQtyChange(updatedItemsArray);
  };

  return (
    <div className="grid grid-cols-5 gap-x-10 p-4">
      {itemsArray.map((item: Iitem) => (
        <ItemMenuCard item={item} onQtyChange={onQtyChange} key={item.name} />
      ))}
    </div>
  );
}
