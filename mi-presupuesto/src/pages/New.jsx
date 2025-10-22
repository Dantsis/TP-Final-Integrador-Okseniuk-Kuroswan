import { useNavigate } from 'react-router-dom';
import { useMovements } from '../context/MovementsContext';
import MovementForm from '../components/MovementForm';

export default function New() {
  const navigate = useNavigate();
  const { add } = useMovements();

  const handleSubmit = (values) => {
    add(values);
    navigate('/'); // volver al listado
  };

  return (
    <section>
      <h1>Nuevo movimiento</h1>
      <MovementForm onSubmit={handleSubmit} onCancel={() => navigate('/')} />
    </section>
  );
}

  