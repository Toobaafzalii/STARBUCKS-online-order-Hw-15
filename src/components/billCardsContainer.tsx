import { useState, useEffect } from "react";
import ItemBillCard from "./itemBillCard";

export default function BillCardsContainer(props: IbillContainerProps) {
  const { billData } = props;
  const [orderCost, setOrderCost] = useState(0);

  useEffect(() => {
    const totalCost = billData.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setOrderCost(totalCost);
  }, [billData]);

  return (
    <div className="flex flex-col justify-between items center">
      <p className="text-3xl md:text-4xl font-semibold text-center">Bill</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-5 p-4">
        {billData.map((item: Iitem) => (
          <ItemBillCard {...item} key={item.name} />
        ))}
      </div>
      <div className="text-center py-5 text-3xl md:text-4xl font-semibold">{`Total: $${orderCost}`}</div>
    </div>
  );
}
