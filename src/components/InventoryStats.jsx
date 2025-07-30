import '../styles/DashboardPage.css';

function InventoryStats({ data }) {
  return (
    <section className="cardDashboard">
      <table className="tableCardDashboard">
        <thead>
          <tr>
            <th>Total de Equipos</th>
            <th>Operativo</th>
            <th>En Mantenimiento</th>
            <th>Dado de Baja</th>
            <th>Reservado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data.total}
            </td>
            <td>
              {data.enUso}
            </td>
            <td>
                {data.enMantenimiento}
            </td>
            <td>
              {data.baja}
            </td>
            <td>
              {data.reservado}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default InventoryStats;
