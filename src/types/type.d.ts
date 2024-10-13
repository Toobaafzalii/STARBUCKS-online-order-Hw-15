
interface Iitem {
    name: string;
    img: string;
    price: number;
    quantity: number;
  }
  
  interface IcounterProps {
    onQtyChange : (state: number) => void
    quantity: number
  }

  interface ImenuProps {
    item: Iitem
    onQtyChange : (state:  { name: string; quantity: number }) => void
  }

interface ImenuContainerProps {
    onQtyChange : (state: Iitem[]) => void
    data: Iitem[]
}

interface IbillContainerProps {
  billData : Iitem[]
}
