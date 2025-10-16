import { useParams } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams();
  return (
    <div className="container mt-16">
      <div className="card">
        <h2>Editar movimiento</h2>
        <p className="meta">ID: {id}</p>
        <p className="meta">Semana 2: formulario de edicion con datos cargados.</p>
      </div>
    </div>
  );
}
