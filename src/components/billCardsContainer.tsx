import ItemBillCard from "./itemBillCard";

export default function BillCardsContainer() {
  const itemsArray = [
    {
      name: "Cappuccino",
      img: "/Cappuccino.png",
      price: "$3.5",
      quantity: 0,
    },
    {
      name: "Latte",
      img: "/Latte.png",
      price: "$4",
      quantity: 0,
    },
    {
      name: "Espresso",
      img: "/Espresso.png",
      price: "$2.5",
      quantity: 0,
    },
    {
      name: "Mocha",
      img: "/Mocha.png",
      price: "$4.5",
      quantity: 0,
    },
    {
      name: "Americano",
      img: "/Americano.png",
      price: "$3",
      quantity: 0,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-x-10 p-4">
      {itemsArray.map((item: Iitem) => (
        <ItemBillCard {...item} key={item.name} />
      ))}
    </div>
  );
}
