import MovementItem from './MovementItem';

export default function MovementList({ items }) {
  if (!items.length) {
    return <div className="card">No hay movimientos aún.</div>;
  }
  return (
    <div className="list">
      {items.map(m => <MovementItem key={m.id} m={m} />)}
    </div>
  );
}
