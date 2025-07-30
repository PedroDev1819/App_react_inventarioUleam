import { useContext, useMemo } from "react";
import { ComputerEquipmentContext } from "../contexts/computerEquipment.context";
import BarChartComponent from "../components/BarChartComponent";
import "../styles/DashboardPage.css";
import PieChartComponent from "../components/PieChartComponent";
import InventoryStats from "../components/InventoryStats";
import { differenceInMonths, parseISO } from "date-fns";
import HeaderComponent from '../components/HeaderComponent'

const COLORS = [
  "#FF6384", // rojo rosado
  "#36A2EB", // azul brillante
  "#FFCE56", // amarillo dorado
  "#4BC0C0", // verde agua
  "#9966FF", // morado
  "#FF9F40", // naranja
  "#C9CBCF", // gris claro
  "#00A86B", // verde esmeralda
];

function DashboardPage() {
  const { computerEquipmentsList } = useContext(ComputerEquipmentContext);

  // Estadísticas
  const stats = useMemo(() => {
    let total = computerEquipmentsList.length;
    let enMantenimiento = computerEquipmentsList.filter((e) =>
      e.estado.toLowerCase().includes("en mantenimiento")
    ).length;
    let enUso = computerEquipmentsList.filter((e) =>
      e.estado.toLowerCase().includes("operativo")
    ).length;
    let baja = computerEquipmentsList.filter((e) =>
      e.estado.toLowerCase().includes("dado de baja")
    ).length;
    let reservado = computerEquipmentsList.filter((e) =>
      e.estado.toLowerCase().includes("reservado")
    ).length;
    return { total, enMantenimiento, enUso, baja, reservado };
  }, [computerEquipmentsList]);

  // Datos para gráfico de barras (equipos por facultad)
  const equiposPorFacultad = useMemo(() => {
    const facultades = {};

    computerEquipmentsList.forEach((e) => {
      const nombreFacultad = e.facultad || "Sin Facultad";
      const estado = e.estado.toLowerCase();

      if (!facultades[nombreFacultad]) {
        facultades[nombreFacultad] = {
          name: nombreFacultad,
          operativo: 0,
          mantenimiento: 0,
          baja: 0,
          reservado: 0,
        };
      }

      if (estado.includes("operativo")) {
        facultades[nombreFacultad].operativo++;
      } else if (estado.includes("en mantenimiento")) {
        facultades[nombreFacultad].mantenimiento++;
      } else if (estado.includes("dado de baja")) {
        facultades[nombreFacultad].baja++;
      } else if (estado.includes("reservado")) {
        facultades[nombreFacultad].reservado++;
      }
    });

    return Object.values(facultades);
  }, [computerEquipmentsList]);

  // Datos para gráfico de pastel (categorías/tipos de equipo)
  const equiposPorCategoria = useMemo(() => {
    const categorias = {};
    computerEquipmentsList.forEach((e) => {
      categorias[e.tipoEquipo] = (categorias[e.tipoEquipo] || 0) + 1;
    });
    return Object.entries(categorias).map(([name, value]) => ({ name, value }));
  }, [computerEquipmentsList]);

  const inMaintenance = computerEquipmentsList.filter(
  (equipment) => equipment.estado === "En mantenimiento"
);

const overdueMaintenance = computerEquipmentsList.filter((equipment) => {
  if (equipment.ultimo_mantenimiento) {
    const last = parseISO(equipment.ultimo_mantenimiento);
    return differenceInMonths(new Date(), last) >= 12;
  }
  return false;
});

  return (
    <>
      <HeaderComponent />
      <div className="dashboard">
        <InventoryStats data={stats} />

        <BarChartComponent data={equiposPorFacultad} />
        <PieChartComponent data={equiposPorCategoria} colors={COLORS} />

        <section className="listDashboard">
          <h2>Equipos en mantenimiento</h2>
          <ul>
            {inMaintenance.map((eq) => (
              <li key={eq.numeroSerie} >
                {eq.tipoEquipo}-{eq.nombre} {eq.estado}
              </li>
            ))}
          </ul>
        </section>

        <section className="listDashboard">
          <h2>Notificaciones</h2>
          <ul>
            {overdueMaintenance.map((eq) => (
              <li key={eq.numeroSerie} >
                {eq.nombre} (Ultimo mantenimiento: {eq.ultimo_mantenimiento})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default DashboardPage;
