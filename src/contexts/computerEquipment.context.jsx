import { createContext, useState, useEffect } from "react";
import computerEquipment from "../data/computerEquipment.json";

const ComputerEquipmentContext = createContext();

function CEquipmentProviderWrapper(props) {
  const storedEquipments = localStorage.getItem("equipos"); // Datos del local storage
  const [computerEquipmentsList, setList] = useState(
    storedEquipments ? JSON.parse(storedEquipments) : computerEquipment
  );
  const [copyList, setCopyList] = useState(computerEquipment);

  useEffect(() => {
    localStorage.setItem("equipos", JSON.stringify(computerEquipmentsList));
  }, [computerEquipmentsList]);

  return (
    <ComputerEquipmentContext.Provider
      value={{ computerEquipmentsList, setList, copyList, setCopyList }}
    >
      {props.children}
    </ComputerEquipmentContext.Provider>
  );
}

export { ComputerEquipmentContext, CEquipmentProviderWrapper };
