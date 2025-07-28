import '../styles/RegistrarEquipo.css';

function DocumentsForm({ handleChange }) {
  return (
    <div className="cardForm">
      <h3>Subir Documentos</h3>

      <label>
        Subir Factura:
        <input
          type="file"
          name="factura"
          onChange={handleChange}
          accept="image/*"
        />
      </label>

      <label>
        Subir Acta de Entrega:
        <input
          type="file"
          name="actaEntrega"
          onChange={handleChange}
          accept="image/*"
        />
      </label>
    </div>
  );
}

export default DocumentsForm;
