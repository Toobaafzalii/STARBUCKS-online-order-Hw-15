import BillCardsContainer from "./components/billCardsContainer";
import MenuCardsContainer from "./components/menuCardsContainer";

export default function App() {
  return (
    <div className="container mx-auto">
      <MenuCardsContainer />
      <BillCardsContainer />
    </div>
  );
}
