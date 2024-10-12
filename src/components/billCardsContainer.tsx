import ItemBillCard from "./itemBillCard";

export default function BillCardsContainer(props: IbillContainerProps) {
  const itemsArray = props.billData;

  return (
    <div className="grid grid-cols-5 gap-x-10 p-4">
      {itemsArray.map((item: Iitem) => (
        <ItemBillCard {...item} key={item.name} />
      ))}
    </div>
  );
}
