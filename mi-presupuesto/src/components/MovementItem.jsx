import { Link } from 'react-router-dom';
import { currency, formatDate } from '../utils/format';

export default function MovementItem({ m }) {
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
      </div>
    </div>
  );
}
