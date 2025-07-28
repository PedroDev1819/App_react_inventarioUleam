import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ComputerEquipmentContext } from "../contexts/computerEquipment.context";
import HeaderComponent from "../components/HeaderComponent";
import "../styles/EquipoDetail.css";
import "../styles/GlobalStyles.css";

function EquipoDetail() {
  const { codigo } = useParams();
  const navigate = useNavigate();
  const { computerEquipmentsList } = useContext(ComputerEquipmentContext);
  const computerEquipment = computerEquipmentsList.find(
    (e) => e.numeroSerie == codigo
  );

  return (
    <>
      <HeaderComponent />
      <article className="equipment-detail">
        <div className="equipment-header">
          <div>
            <h2>{computerEquipment.nombre}</h2>
            <p className="equipment-type">{computerEquipment.tipoEquipo}</p>
          </div>
          <img
            src={computerEquipment.imagen}
            alt={`Imagen de ${computerEquipment.nombre}`}
            className="equipment-image"
          />
        </div>

        <div className="equipmentInformation-container">
          <section className="equipment-section">
            <h3>Información Técnica</h3>
            <ul>
              <li>
                <strong>Marca:</strong> {computerEquipment.marca}
              </li>
              <li>
                <strong>Modelo:</strong> {computerEquipment.modelo}
              </li>
              <li>
                <strong>Número de Serie:</strong>{" "}
                {computerEquipment.numeroSerie}
              </li>
              <li>
                <strong>Estado:</strong> {computerEquipment.estado}
              </li>
              <li>
                <strong>Valor:</strong> ${computerEquipment.valor}
              </li>
            </ul>
          </section>

          <section className="equipment-section">
            <h3>Ubicación</h3>
            <ul>
              <li>
                <strong>Facultad:</strong> {computerEquipment.facultad}
              </li>
              <li>
                <strong>Sala:</strong> {computerEquipment.sala}
              </li>
              <li>
                <strong>Responsable:</strong> {computerEquipment.responsable}
              </li>
            </ul>
          </section>

          {computerEquipment.observaciones && (
            <section className="equipment-section">
              <h3>Observaciones</h3>
              <p>{computerEquipment.observaciones}</p>
            </section>
          )}

          <section className="equipment-section">
            <h3>Mantenimiento</h3>
            <ul>
              <li>
                <strong>Último mantenimiento:</strong>{" "}
                {computerEquipment.ultimo_mantenimiento}
              </li>
              <li>
                <strong>Próximo mantenimiento:</strong>{" "}
                {computerEquipment.programar_mantenimiento}
              </li>
            </ul>
          </section>

          <section className="equipment-section">
            <h3>Documentos</h3>
            <ul>
              <li>
                <strong>Factura:</strong> {computerEquipment.factura}
              </li>
              <li>
                <strong>Acta de Entrega:</strong>{" "}
                {computerEquipment.actaEntrega}
              </li>
            </ul>
          </section>
          <div>
            <button
              className="btn"
              onClick={() => navigate(`/editar_equipo/${codigo}`)}
            >
              Editar Informacion
            </button>
            <button className="btn" onClick={() => navigate("/inventario")}>
              Regresar
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default EquipoDetail;
