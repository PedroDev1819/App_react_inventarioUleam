import '../styles/RegistrarEquipo.css';

function EquipmentMaintenance({form, handleChange}) {
  return (
    <div className='cardForm'>
        <h3>Mantenimiento del Equipo</h3>
      <label htmlFor="Umantenimiento">Ultimo mantenimiento realizado:</label>
      <input
        type="date"
        id='Umantenimiento'
        name="ultimo_mantenimiento"
        value={form.ultimo_mantenimiento || ""}
        onChange={handleChange}
      />

      <label htmlFor="Pmantenimiento">Proximo mantenimiento:</label>
      <input
        type="date"
        id='Pmantenimiento'
        name="programar_mantenimiento"
        value={form.programar_mantenimiento || ""}
        onChange={handleChange}
      />
        <label htmlFor="obervacion">Observaciones:</label>
      <textarea name="observaciones" id="observacion" value={form.observaciones || ""} onChange={handleChange}></textarea>
    </div>
  )
}

export default EquipmentMaintenance
