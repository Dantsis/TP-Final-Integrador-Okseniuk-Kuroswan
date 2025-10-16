export default function Filters({ q, setQ, type, setType }) {
    return (
      <div className="card">
        <div className="row cols-3">
          <div>
            <label>Buscar</label>
            <input className="input" placeholder="Descripción..." value={q} onChange={e=>setQ(e.target.value)} />
          </div>
          <div>
            <label>Tipo</label>
            <select className="select" value={type} onChange={e=>setType(e.target.value)}>
              <option value="all">Todos</option>
              <option value="ingreso">Ingresos</option>
              <option value="gasto">Gastos</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  