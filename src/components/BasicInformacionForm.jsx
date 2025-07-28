import "../styles/RegistrarEquipo.css";

function BasicInformacionForm({form, handleChange}) {
  return (
    <div className="cardForm">
            <h3>Información Básica</h3>

            <select
              name="tipoEquipo"
              value={form.tipoEquipo}
              onChange={handleChange}
            >
              <option value="">Tipo de Equipo</option>
              <option value="Impresora">Impresora</option>
              <option value="Computadora de escritorio">
                Computadora de escritorio
              </option>
              <option value="Laptop">Laptop</option>
              <option value="Servidor">Servidor</option>
              <option value="Proyector">Proyector</option>
              <option value="Escaner">Escaner</option>
              <option value="Router">Router</option>
              <option value="Switch">Switch</option>
              <option value="Pizarra digital">Pizarra digital</option>
              <option value="Telefono IP">Telefono IP</option>
            </select>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del equipo"
              value={form.nombre}
              onChange={handleChange}
            />
            <input
              type="text"
              name="marca"
              placeholder="Marca"
              value={form.marca}
              onChange={handleChange}
            />
            <input
              type="text"
              name="modelo"
              placeholder="Modelo"
              value={form.modelo}
              onChange={handleChange}
            />
            <input
              type="text"
              name="numeroSerie"
              placeholder="Número de serie"
              value={form.numeroSerie}
              onChange={handleChange}
            />
            <label>
              Seleccionar imagen:
              <input type="file" name="imagen" accept="image/*" onChange={handleChange} />
            </label>
          </div>
  )
}

export default BasicInformacionForm
