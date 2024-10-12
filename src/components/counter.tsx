import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function Counter() {
  const [itemQty, setItemQty] = useState(0);

  const minusQty = () => {
    if (itemQty > 0) {
      setItemQty(itemQty - 1);
    }
  };

  return (
    <div className="inline-flex justify-between items-center min-w-32 bg-white rounded-md">
      <button
        className="bg-amber-200 px-3 py-4 rounded-l-md"
        onClick={() => setItemQty(itemQty + 1)}
      >
        <FaPlus />
      </button>
      <div className="px-4 py-3 font-semibold">{itemQty}</div>
      <button
        className="bg-amber-200 px-3 py-4 rounded-r-md"
        onClick={minusQty}
      >
        <FaMinus />
      </button>
    </div>
  );
}
