import { useMemo, useState } from 'react';
import { useMovements } from '../context/MovementsContext';
import Filters from '../components/Filters';
import MovementList from '../components/MovementList';
import { Link } from 'react-router-dom';

export default function Home() {
  const { items, remove } = useMovements(); // agregamos remove para eliminar
  const [q, setQ] = useState('');
  const [type, setType] = useState('all');
  const [category, setCategory] = useState('all'); // nuevo filtro por categoría

  const filtered = useMemo(() => {
    return items
      .filter((m) => {
        const okText = m.description.toLowerCase().includes(q.toLowerCase());
        const okType = type === 'all' ? true : m.type === type;
        const okCategory = category === 'all' ? true : m.category === category;
        return okText && okType && okCategory;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [items, q, type, category]);

  return (
    <div className="container mt-16">
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <h1 style={{ margin: 0 }}>Movimientos</h1>
        <Link to="/new" className="btn">+ Nuevo</Link>
      </header>

      {/* Filtros */}
      <Filters q={q} setQ={setQ} type={type} setType={setType} category={category} setCategory={setCategory} />

      <div className="mt-16">
        <MovementList
          items={filtered}
          onDelete={(id) => {
            if (confirm('¿Eliminar este registro?')) remove(id);
          }}
        />
        {!filtered.length && (
          <div className="meta mt-12">No hay resultados para tu búsqueda.</div>
        )}
      </div>
    </div>
  );
}


