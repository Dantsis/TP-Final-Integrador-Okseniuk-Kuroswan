import MovementForm from '../components/MovementForm';

const todayISO = () => new Date().toISOString().slice(0,10);

export default function New() {
  const initialValues = {
    description: '',
    category: '',
    type: '',
    amount: '',
    date: todayISO(),
  };

  return (
    <div className="container mt-16">
      <h2 style={{ marginBottom: 12 }}>Nuevo movimiento</h2>
      <MovementForm initialValues={initialValues} mode="create" />
    </div>
  );
}


  