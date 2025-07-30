import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegistrarEquipo.css";
import "../styles/GlobalStyles.css";
import HeaderComponent from "../components/HeaderComponent";
import BasicInformacionForm from "../components/BasicInformacionForm";
import LocationForm from "../components/LocationForm";
import AInformationForm from "../components/AInformationForm";
import DocumentsForm from "../components/DocumentsForm";
import { useContext } from "react";
import { ComputerEquipmentContext } from "../contexts/computerEquipment.context";

const RegistrarEquipo = () => {
  const { computerEquipmentsList, setList, setCopyList } = useContext(
    ComputerEquipmentContext
  );
  const navigate = useNavigate();

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
    factura: null,
    actaEntrega: null,
  });

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

    if (!form.tipoEquipo)
      return alert("Por favor, seleccione el tipo de equipo");
    if (!form.nombre.trim())
      return alert("Por favor, ingrese el nombre del equipo");
    if (!form.marca.trim()) return alert("Por favor, ingrese la marca");
    if (!form.modelo.trim()) return alert("Por favor, ingrese el modelo");
    if (!form.numeroSerie.trim())
      return alert("Por favor, ingrese el número de serie");

    if (!form.facultad)
      return alert("Por favor, seleccione la facultad o departamento");
    if (!form.sala) return alert("Por favor, seleccione la sala");
    if (!form.responsable.trim())
      return alert("Por favor, ingrese el responsable asignado");

    if (!form.fechaAdquisicion)
      return alert("Por favor, seleccione la fecha de adquisición");
    if (!form.estado)
      return alert("Por favor, seleccione el estado del equipo");
    if (!form.fuenteAdquisicion)
      return alert("Por favor, seleccione la fuente de adquisición");
    if (!form.valor || form.valor <= 0)
      return alert("Por favor, ingrese un valor válido");

    if (!form.imagen) return alert("Por favor, suba la imagen");

    const updatedList = [...computerEquipmentsList, form];
    setList(updatedList);
    setCopyList(updatedList);
    navigate("/inventario");
  };

  return (
    <>
      <HeaderComponent />
      <section className="formRegister-container">
        <h2>Registrar Nuevo Equipo</h2>
        <form onSubmit={handleSubmit} className="gridContainerForm">
          <BasicInformacionForm form={form} handleChange={handleChange} />
          <LocationForm form={form} handleChange={handleChange} />
          <AInformationForm form={form} handleChange={handleChange} />
          <DocumentsForm handleChange={handleChange} />

          <button className="btn" type="submit">
            Guardar Equipo
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => navigate("/inventario")}
          >
            Cancelar
          </button>
        </form>
      </section>
    </>
  );
};

export default RegistrarEquipo;
