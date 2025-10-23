import { Link } from 'react-router-dom';
import { currency, formatDate } from '../utils/format';
import { useMovements } from '../context/MovementsContext';

export default function MovementItem({ m }) {
  const { remove } = useMovements();

  const onDelete = () => {
    if (confirm('¿Eliminar este movimiento?')) {
      remove(m.id);
    }
  };

  return (
    <div className="item">
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span className="badge">{m.category}</span>
        <div>
          <div style={{ fontWeight:600 }}>{m.description}</div>
          <div className="meta">{formatDate(m.date)} • {m.type}</div>
        </div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <div className={`amount ${m.type === 'ingreso' ? 'income' : 'expense'}`}>
          {m.type === 'ingreso' ? '+' : '-'}{currency(m.amount)}
        </div>
        <Link className="btn" to={`/editar/${m.id}`}>Editar</Link>
        <button className="btn danger" onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
}

