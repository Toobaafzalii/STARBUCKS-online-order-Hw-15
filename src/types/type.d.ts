
interface Iitem {
    name: string;
    img: string;
    price: number;
    quantity: number;
  }
  
  interface IcounterProps {
    onQtyChange : (state: number) => void
  }

  interface ImenuProps {
    item: Iitem
    onQtyChange : (state:  { name: string; quantity: number }) => void
  }

interface ImenuContainerProps {
    onQtyChange : (state: Iitem[]) => void
}

interface IbillContainerProps {
  billData : Iitem[]
}
