export default function ItemBillCard(item: Iitem) {
  return (
    <div className="flex flex-col justify-between items-center bg-green-950 rounded-xl py-4 px-8 gap-5">
      <img className="w-[90%]" src={item.img} alt={item.name} />
      <div className="w-full flex flex-col justify-between items-start gap-2">
        <h2 className="text-2xl font-semibold text-white text-nowrap">
          {item.name}
        </h2>
        <h2 className="text-2xl font-semibold text-amber-200 text-nowrap">
          {item.price}
        </h2>
        <h3 className="text-xl font-semibold text-white text-nowrap">
          Qty: {item.quantity}
        </h3>
      </div>
    </div>
  );
}
