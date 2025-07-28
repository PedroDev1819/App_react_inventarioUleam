import '../styles/RegistrarEquipo.css';

function LocationForm({ form, handleChange }) {
  return (
    <div className="cardForm">
      <h3>Ubicación y Asignación</h3>
      <select name="facultad" value={form.facultad} onChange={handleChange}>
        <option value="">Seleccione una Facultad o Departamento</option>

        {/* Facultades */}
        <option value="Ingenieria">Facultad de Ingenieria</option>
        <option value="Ciencias">Facultad de Ciencias</option>
        <option value="Medicina">Facultad de Medicina</option>
        <option value="Derecho">Facultad de Derecho</option>
        <option value="Economia">Facultad de Economia</option>
        <option value="Educacion">Facultad de Educacion</option>
        <option value="Arquitectura">Facultad de Arquitectura</option>
        <option value="Artes">Facultad de Artes</option>
        <option value="Informatica">Facultad de Informatica</option>

        {/* Departamentos */}
        <option value="Financiero">Departamento Financiero</option>
        <option value="Tecnologico">
          Departamento de Tecnologías de la Información
        </option>
        <option value="Gestion Academica">
          Departamento de Gestion Academica
        </option>
        <option value="Talento humano">Departamento de Talento Humano</option>
        <option value="Servicios Generales">Servicios Generales</option>
        <option value="Mantenimiento">Departamento de Mantenimiento</option>
      </select>

      <select name="sala" value={form.sala} onChange={handleChange}>
        <option value="">Seleccione una sala</option>
        <option value="Aula 1">Aula 1</option>
        <option value="Aula 2">Aula 2</option>
        <option value="Aula 3">Aula 3</option>
        <option value="Sala de docentes">Sala de Docentes</option>
        <option value="Sala de reuniones">Sala de Reuniones</option>
        <option value="Sala de proyecciones">Sala de Proyecciones</option>
        <option value="Laboratorio 1">Laboratorio 1</option>
        <option value="Laboratorio 2">Laboratorio 2</option>
        <option value="Laboratorio general">Laboratorio General</option>
        <option value="Auditorio">Auditorio</option>
        <option value="Biblioteca">Biblioteca</option>
        <option value="Oficina administrativa">Oficina Administrativa</option>
        <option value="Recepcion">Recepcion</option>
      </select>

      <input
        type="text"
        name="responsable"
        placeholder="Responsable Asignado"
        value={form.responsable}
        onChange={handleChange}
      />
    </div>
  );
}

export default LocationForm;
