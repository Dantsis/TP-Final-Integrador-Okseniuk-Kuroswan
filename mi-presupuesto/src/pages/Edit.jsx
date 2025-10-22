import { useNavigate, useParams } from 'react-router-dom';
import { useMovements } from '../context/MovementsContext';
import MovementForm from '../components/MovementForm';
import { useMemo } from 'react';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getById, update, remove } = useMovements();

  const current = useMemo(() => getById(id), [id, getById]);

  if (!current) {
    return <p>No se encontró el movimiento.</p>;
  }

  const handleSubmit = (values) => {
    update(id, values);
    navigate('/');
  };

  const handleDelete = () => {
    if (confirm('¿Eliminar este registro?')) {
      remove(id);
      navigate('/');
    }
  };

  return (
    <section>
      <h1>Editar movimiento</h1>
      <MovementForm
        initial={current}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/')}
      />
      <button onClick={handleDelete} className="danger" style={{ marginTop: 12 }}>
        Eliminar
      </button>
    </section>
  );
}

