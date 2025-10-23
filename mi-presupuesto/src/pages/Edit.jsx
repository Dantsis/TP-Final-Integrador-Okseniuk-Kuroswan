import { useParams, Navigate } from 'react-router-dom';
import { useMovements } from '../context/MovementsContext';
import MovementForm from '../components/MovementForm';

export default function Edit() {
  const { id } = useParams();
  const { byId } = useMovements();
  const item = byId(id);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  const initialValues = {
    description: item.description,
    category: item.category,
    type: item.type,
    amount: String(item.amount),
    date: item.date,
  };

  return (
    <div className="container mt-16">
      <h2 style={{ marginBottom: 12 }}>Editar movimiento</h2>
      <MovementForm initialValues={initialValues} mode="edit" id={id} />
    </div>
  );
}

