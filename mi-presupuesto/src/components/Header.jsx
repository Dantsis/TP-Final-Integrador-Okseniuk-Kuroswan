import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" style={{ fontWeight: 800 }}>
          Mi Presupuesto
        </Link>
        <div style={{ display:'flex', gap:8 }}>
          <Link className="btn" to="/nuevo">+ Nuevo</Link>
          <button className="btn ghost" onClick={toggle} aria-label="Cambiar tema">
            {theme === 'dark' ? '🌙 Oscuro' : '☀️ Claro'}
          </button>
        </div>
      </div>
    </header>
  );
}
