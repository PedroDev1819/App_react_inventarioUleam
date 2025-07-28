import '../styles/RegistrarEquipo.css';

function AInformationForm({ form, handleChange }) {
  return (
    <div className="cardForm">
      <h3>Información Administrativa</h3>

      <label htmlFor="fecha">Fecha de Adquisicion:</label>
      <input
        type="date"
        id='fecha'
        name="fechaAdquisicion"
        value={form.fechaAdquisicion}
        onChange={handleChange}
      />

      <select name="estado" value={form.estado} onChange={handleChange}>
        <option value="">Estado del Equipo</option>
        <option value="Operativo">Operativo</option>
        <option value="En mantenimiento">En mantenimiento</option>
        <option value="Fuera de servicio">Fuera de servicio</option>
        <option value="Dado de baja">Dado de baja</option>
        <option value="Reservado">Reservado</option>
      </select>

      <select name="fuenteAdquisicion" id="fuenteAdquisicion">
        <option value="">Fuente de Adquisicion del Equipo</option>
        <option value="Compra directa">Compra directa</option>
        <option value="Donacion">Donacion</option>
        <option value="Proyecto">Proyecto</option>
      </select>

      <input
        type="number"
        name="valor"
        placeholder="Valor aproximado ($)"
        onChange={handleChange}
        value={form.valor}
      />
    </div>
  );
}

export default AInformationForm;
