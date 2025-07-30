import EquipmentCard from "../components/EquipmentCard";
import HeaderComponent from "../components/HeaderComponent";
import SearchBar from "../components/SearchBar";
import '../styles/InventarioPage.css';
import '../styles/GlobalStyles.css';
import { useContext } from "react";
import { ComputerEquipmentContext } from "../contexts/computerEquipment.context";

function InventarioPage() {

  const {computerEquipmentsList} = useContext(ComputerEquipmentContext);
  const showComputerEquipments = () =>
    computerEquipmentsList.map((equipo) => (
      <EquipmentCard key={equipo.numeroSerie} equipo={equipo} />
    ));

  return (
    <>
      <HeaderComponent />
      <SearchBar />
      <section className="catalog">
        <ul className="computerEquipmentsList">{showComputerEquipments()}</ul>
      </section>
    </>
  );
}

export default InventarioPage;
