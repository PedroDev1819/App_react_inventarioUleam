import { useContext, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";
import { ComputerEquipmentContext } from "../contexts/computerEquipment.context";
import "../styles/DashboardPage.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function DashboardPage() {
  const { computerEquipmentsList } = useContext(ComputerEquipmentContext);

  // Estadísticas
  const stats = useMemo(() => {
    let total = computerEquipmentsList.length;
    let enMantenimiento = computerEquipmentsList.filter(e => e.estado.toLowerCase().includes("mantenimiento")).length;
    let enUso = computerEquipmentsList.filter(e => e.estado.toLowerCase().includes("operativo")).length;
    let baja = computerEquipmentsList.filter(e => e.estado.toLowerCase().includes("baja")).length;

    return { total, enMantenimiento, enUso, baja };
  }, [computerEquipmentsList]);

  // Datos para gráfico de barras (equipos por facultad)
  const equiposPorFacultad = useMemo(() => {
    const facultades = {};
    computerEquipmentsList.forEach(e => {
      facultades[e.facultad] = (facultades[e.facultad] || 0) + 1;
    });
    return Object.entries(facultades).map(([name, value]) => ({ name, value }));
  }, [computerEquipmentsList]);

  // Datos para gráfico de pastel (categorías/tipos de equipo)
  const equiposPorCategoria = useMemo(() => {
    const categorias = {};
    computerEquipmentsList.forEach(e => {
      categorias[e.tipoEquipo] = (categorias[e.tipoEquipo] || 0) + 1;
    });
    return Object.entries(categorias).map(([name, value]) => ({ name, value }));
  }, [computerEquipmentsList]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <img src="/assets/images/logos/minilogo.png" alt="ULEAM" className="logo" />
        <nav className="dashboard-nav">
          <a href="/"><ion-icon name="log-out-outline"></ion-icon></a>
          <a href="/equipos"><ion-icon name="laptop-outline"></ion-icon></a>
          <a href="#"><ion-icon name="notifications-outline"></ion-icon></a>
          <a href="#"><ion-icon name="person-circle-outline"></ion-icon></a>
        </nav>
      </header>

      <section className="card">
        <table className="table-card">
          <thead>
            <tr>
              <th>Total de Equipos</th>
              <th>En Mantenimiento</th>
              <th>En Uso</th>
              <th>Dado de Baja</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><ion-icon name="desktop-outline"></ion-icon> {stats.total}</td>
              <td><ion-icon name="hammer-outline"></ion-icon> {stats.enMantenimiento}</td>
              <td><ion-icon name="checkmark-circle"></ion-icon> {stats.enUso}</td>
              <td><ion-icon name="close-circle"></ion-icon> {stats.baja}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="graphs">
        <div className="graph">
          <h2>Equipos por Facultad</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={equiposPorFacultad} layout="vertical"  margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
              <XAxis type="number" />
              <YAxis dataKey={name} type="category"/>
              <Tooltip />
              <Bar dataKey="value" fill="#4C51BF" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="graph">
          <h2>Distribución por Categoría</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={equiposPorCategoria}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {equiposPorCategoria.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="container-activities">
        <section className="table">
          <h2 className="title">Actividades Recientes</h2>
          <table className="content">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Acción</th>
                <th>Responsable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/05/2025</td>
                <td>Mantenimiento correctivo</td>
                <td>Tec. Julio Andrade</td>
              </tr>
              <tr>
                <td>17/05/2025</td>
                <td>Mantenimiento preventivo</td>
                <td>Tec. Andres Navia</td>
              </tr>
            </tbody>
          </table>
          <button className="btn">Registrar Actividad</button>
        </section>

        <section className="list">
          <h2 className="title">Tareas Pendientes</h2>
          <ul className="content">
            <li>5 equipos sin revisión en más de 1 año</li>
            <li>3 mantenimientos programados esta semana</li>
            <li>2 equipos marcados como "Baja"</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
