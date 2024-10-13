import Counter from "./counter";
export default function ItemMenuCard(props: ImenuProps) {
  const onQtyChange = (state: number) => {
    props.onQtyChange({
      name: props.item.name,
      quantity: state,
    });
  };

  return (
    <div className="flex flex-col justify-between items-center bg-green-950 rounded-xl py-4 px-8 gap-5">
      <img className="w-[90%]" src={props.item.img} alt={props.item.name} />
      <div className="w-full flex flex-col justify-between items-start gap-2">
        <h2 className="text-2xl font-semibold text-white text-nowrap">
          {props.item.name}
        </h2>
        <h2 className="text-2xl font-semibold text-amber-200 text-nowrap">
          {`$${props.item.price}`}
        </h2>
      </div>
      <Counter onQtyChange={onQtyChange} quantity={props.item.quantity} />
    </div>
  );
}
