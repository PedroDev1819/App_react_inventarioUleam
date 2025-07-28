import {useNavigate} from 'react-router-dom'
import './EquipmentCard.css';

function EquipmentCard({ equipo }) {

  const navigate = useNavigate();

  return (
    <li className="equipo-card" onClick={() => navigate(`/equipo/${equipo.numeroSerie}`)}>
      <img src={equipo.imagen} alt={equipo.nombre} className="equipo-imagen" />
      <div className="equipo-detalles">
        <h3 className="equipo-titulo">{equipo.tipoEquipo}</h3>
        <p className="equipo-estado">{equipo.estado}</p>
        <p className="equipo-ubicacion">{equipo.facultad}</p>
      </div>
    </li>
  );
}

export default EquipmentCard;
