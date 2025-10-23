import { useMemo, useState } from 'react';
import { useMovements } from '../context/MovementsContext';
import Filters from '../components/Filters';
import MovementList from '../components/MovementList';

export default function Home() {
  const { items } = useMovements();
  const [q, setQ] = useState('');
  const [type, setType] = useState('all');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    return items
      .filter(m => m.description.toLowerCase().includes(q.toLowerCase()))
      .filter(m => (type === 'all' ? true : m.type === type))
      .filter(m => (category === 'all' ? true : m.category === category))
      .sort((a,b)=> new Date(b.date) - new Date(a.date));
  }, [items, q, type, category]);

  return (
    <div className="container mt-16">
      <Filters
        q={q} setQ={setQ}
        type={type} setType={setType}
        category={category} setCategory={setCategory}
      />
      <div className="mt-16">
        <h2 style={{margin:'0 0 8px'}}>Movimientos</h2>
        <MovementList items={filtered} />
        {!filtered.length && <div className="meta mt-12">No hay resultados para tu búsqueda.</div>}
      </div>
    </div>
  );
}


