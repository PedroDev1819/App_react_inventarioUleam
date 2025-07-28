import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import InventarioPage from './pages/InventarioPage' 
import RegistrarEquipoPage from './pages/RegistrarEquipoPage'
import ReportesPage from './pages/ReportesPage'
import EquipoDetail from './pages/EquipoDetail'
import NotFound from './pages/NotFound'
import EditarEquipoPage from './pages/EditarEquipoPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}/>
      <Route path='/dashboard' element={<DashboardPage />}/>
      <Route path='/inventario' element={<InventarioPage />}/>
      <Route path='/registrar_equipo' element={<RegistrarEquipoPage />}/>
      <Route path='/reportes' element={<ReportesPage />}/>
      <Route path="/equipo/:codigo" element={<EquipoDetail />} />
      <Route path="/editar_equipo/:codigo" element={<EditarEquipoPage />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App