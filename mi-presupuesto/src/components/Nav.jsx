import { NavLink } from 'react-router-dom';

const active = ({ isActive }) => ' ' + (isActive ? 'active' : '');

export default function Nav() {
  return (
    <nav className="container mt-16">
      <div className="nav">
        <NavLink to="/" className={({isActive})=> 'link' + active({isActive})}>Listado</NavLink>
        <NavLink to="/nuevo" className={({isActive})=> 'link' + active({isActive})}>Nuevo</NavLink>
        <NavLink to="/resumen" className={({isActive})=> 'link' + active({isActive})}>Resumen</NavLink>
        <NavLink to="/ajustes" className={({isActive})=> 'link' + active({isActive})}>Ajustes</NavLink>
      </div>
    </nav>
  );
}
