import { useEffect, useState } from "react";
import BillCardsContainer from "./components/billCardsContainer";
import MenuCardsContainer from "./components/menuCardsContainer";

const BILL_DATA = [
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
];
export default function App() {
  const [billData, setBillData] = useState(BILL_DATA);
  useEffect(() => {
    const storageBillData = localStorage.getItem("bill-data");
    if (storageBillData) {
      setBillData(JSON.parse(storageBillData));
    }
  }, []);
  useEffect(() => {
    console.log(billData);
  }, [billData]);
  const onQtyChange = (itemsArray: Iitem[]) => {
    setBillData(itemsArray);
    localStorage.setItem("bill-data", JSON.stringify(itemsArray));
  };

  const handleSubmit = () => {
    setBillData((data) => data.map((item) => ({ ...item, quantity: 0 })));
    localStorage.removeItem("bill-data");
    alert("THANKS FOR YOUR ORDER");
  };

  const renderButtonDisabled = () => {
    let disabled = true;
    billData.forEach((item) => {
      if (item.quantity > 0) {
        disabled = false;
      }
    });
    return disabled;
  };

  return (
    <div className="container mx-auto flex flex-col justify-between items-center mt-10 gap-1">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <img src="./logo.png" alt="STARBUCKS" />
        <h1 className="text-4xl md:text-6xl font-bold font-sans">STURBUCKS</h1>
      </div>
      <p className="text-3xl md:text-4xl font-semibold text-center">
        Starbucks online coffee order
      </p>
      <MenuCardsContainer onQtyChange={onQtyChange} data={billData} />
      <BillCardsContainer billData={billData} />
      <button
        disabled={renderButtonDisabled()}
        onClick={handleSubmit}
        className={`w-[96%] text-center bg-amber-200 text-white py-4 text-2xl md:text-3xl rounded-md font-semibold mx-auto mb-5 ${
          renderButtonDisabled() && "!bg-gray-400"
        }`}
      >
        Submit Order
      </button>
    </div>
  );
}
