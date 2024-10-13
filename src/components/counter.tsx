import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function Counter(props: IcounterProps) {
  const { onQtyChange, quantity } = props;
  const minusQty = () => {
    if (quantity > 0) {
      onQtyChange(quantity - 1);
    }
  };
  const plusQty = () => {
    onQtyChange(quantity + 1);
  };
  return (
    <div className="inline-flex justify-between items-center min-w-32 bg-white rounded-md">
      <button className="bg-amber-200 px-3 py-4 rounded-l-md" onClick={plusQty}>
        <FaPlus />
      </button>
      <div className="px-4 py-3 font-semibold">{quantity}</div>
      <button
        className="bg-amber-200 px-3 py-4 rounded-r-md"
        onClick={minusQty}
      >
        <FaMinus />
      </button>
    </div>
  );
}
