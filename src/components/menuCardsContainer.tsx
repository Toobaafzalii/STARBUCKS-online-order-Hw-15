import ItemMenuCard from "./itemMenuCard";

export default function MenuCardsContainer(props: ImenuContainerProps) {
  const { data } = props;

  const onQtyChange = (state: { name: string; quantity: number }) => {
    const updatedItemsArray = [...data];
    const itemIndex = data.findIndex((item) => item.name === state.name);
    if (itemIndex !== -1) {
      updatedItemsArray[itemIndex].quantity = state.quantity;
    }
    props.onQtyChange(updatedItemsArray);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-5 p-4">
      {data.map((item: Iitem) => (
        <ItemMenuCard item={item} onQtyChange={onQtyChange} key={item.name} />
      ))}
    </div>
  );
}
