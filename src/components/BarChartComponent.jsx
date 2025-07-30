import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import '../styles/DashboardPage.CSS';

function BarChartComponent({data}) {
  return (
        <section className="graph">
          <h2>Equipos por Facultad</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} layout="vertical"  margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }}/>
              <Tooltip />
              <Bar dataKey="operativo" fill="#4CAF50" name="Operativo" />
              <Bar dataKey="mantenimiento" fill="#FFC107" name="Mantenimiento" />
              <Bar dataKey="baja" fill="#9E9E9E" name="Baja" />
              <Bar dataKey="reservado" fill="#F44336" name="Reservado" />
            </BarChart>
          </ResponsiveContainer>
        </section>
  )
}

export default BarChartComponent
