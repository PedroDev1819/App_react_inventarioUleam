import { ComputerEquipmentContext } from "../contexts/computerEquipment.context";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const navigate = useNavigate();
  const { setList, copyList } = useContext(ComputerEquipmentContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);

    const filteredList = copyList.filter(
      (equipo) =>
        equipo.nombre.toLowerCase().includes(value) ||
        equipo.tipoEquipo.toLowerCase().includes(value) ||
        equipo.marca.toLowerCase().includes(value)
    );

    setList(filteredList);
  };

  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Nombre/ Tipo/ Marca-Modelo"
          value={searchText}
          onChange={handleSearch}
        />
        <button>
          <FaSearch className="searchIcon" />
        </button>
      </div>
      <button className="btn">Filtrar</button>
      <button className="btn" onClick={() => navigate('/registrar_equipo')}>Registrar Equipo</button>
      <button className="btn">Generar Reporte</button>
    </div>
  );
}

export default SearchBar;
