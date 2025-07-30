import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import '../styles/DashboardPage.css';


function PieChartComponent({data, colors}) {
  return (
    <div className="graph">
          <h2>Distribución por Categoría</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
  )
}

export default PieChartComponent
