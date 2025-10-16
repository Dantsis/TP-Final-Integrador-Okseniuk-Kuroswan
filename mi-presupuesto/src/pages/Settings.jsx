import { useMovements } from '../context/MovementsContext';
import { useTheme } from '../context/ThemeContext';
import { seedMovements } from '../data/seed';

export default function Settings() {
  const { replaceAll } = useMovements();
  const { theme, toggle } = useTheme();

  return (
    <div className="container mt-16">
      <div className="card" style={{ display:'grid', gap:12 }}>
        <h2>Ajustes</h2>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          <button className="btn" onClick={toggle}>
            Alternar tema (actual: {theme})
          </button>
          <button className="btn danger" onClick={()=>replaceAll([])}>
            Limpiar datos (localStorage)
          </button>
          <button className="btn" onClick={()=>replaceAll(seedMovements())}>
            Rellenar con datos de ejemplo
          </button>
        </div>
        <p className="meta">El tema queda guardado y los datos siguen en el localStorage.</p>
      </div>
    </div>
  );
}
