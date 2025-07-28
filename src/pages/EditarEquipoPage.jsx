import HeaderComponent from "../components/HeaderComponent";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ComputerEquipmentContext } from "../contexts/computerEquipment.context";
import BasicInformacionForm from "../components/BasicInformacionForm";
import LocationForm from "../components/LocationForm";
import AInformationForm from "../components/AInformationForm";
import DocumentsForm from "../components/DocumentsForm";
import EquipmentMaintenance from "../components/EquipmentMaintenance";

function EditarEquipoPage() {
  const { codigo } = useParams();
  const navigate = useNavigate();
  const { computerEquipmentsList, setList, setCopyList } = useContext(
    ComputerEquipmentContext
  );

  const [form, setForm] = useState({
    tipoEquipo: "",
    nombre: "",
    marca: "",
    modelo: "",
    numeroSerie: "",
    imagen: null,
    facultad: "",
    sala: "",
    responsable: "",
    fechaAdquisicion: "",
    estado: "",
    fuenteAdquisicion: "",
    valor: "",
    actaEntrega: null,
    factura: null,
    ultimo_mantenimiento: "",
    programar_mantenimiento: "",
    observaciones: "",
  });

  useEffect(() => {
    const computerEquipment = computerEquipmentsList.find(
      (e) => e.numeroSerie == codigo
    );
    if (computerEquipment) {
      setForm(computerEquipment);
    } else {
      navigate("/inventario");
    }
  }, [codigo, computerEquipmentsList, navigate]);

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      const base64 = await toBase64(files[0]);
      setForm({ ...form, [name]: base64 });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = computerEquipmentsList.map((e) =>
      e.numeroSerie === codigo ? form : e
    );
    setList(updatedList);
    setCopyList(updatedList);
    navigate(`/equipo/${codigo}`);
  };

  return (
    <>
      <HeaderComponent />
      <h2>Editar Informacion</h2>
      <form onSubmit={handleSubmit} className="gridContainerForm">
        <BasicInformacionForm form={form} handleChange={handleChange} />
        <LocationForm form={form} handleChange={handleChange} />
        <AInformationForm form={form} handleChange={handleChange} />
        <DocumentsForm form={form} handleChange={handleChange} />
        <EquipmentMaintenance form={form} handleChange={handleChange} />
        <div>
          <button type="submit" className="btn">
            Guardar Equipo
          </button>
          <button
            type="button"
            onClick={() => navigate(`/equipo/${codigo}`)}
            className="btn"
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}

export default EditarEquipoPage;
