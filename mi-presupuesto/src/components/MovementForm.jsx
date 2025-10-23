import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CATEGORIES } from '../constants/categories';
import { uid } from '../utils/format';
import { useMovements } from '../context/MovementsContext';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object({
  description: Yup.string().min(3, 'Mínimo 3 caracteres').required('Requerido'),
  category: Yup.string().oneOf(CATEGORIES, 'Categoría inválida').required('Requerido'),
  type: Yup.string().oneOf(['ingreso', 'gasto'], 'Tipo inválido').required('Requerido'),
  amount: Yup.number().typeError('Debe ser número').positive('Debe ser > 0').required('Requerido'),
  date: Yup.date().max(new Date(), 'No puede ser futura').required('Requerido')
});

export default function MovementForm({ initialValues, mode = 'create', id }) {
  const { add, update, remove } = useMovements();
  const nav = useNavigate();

  const onSubmit = (values) => {
    if (mode === 'create') {
      add({ id: uid(), ...values });
    } else {
      update(id, values);
    }
    nav('/');
  };

  const handleDelete = () => {
    if (mode === 'edit' && confirm('¿Eliminar este movimiento?')) {
      remove(id);
      nav('/');
    }
  };

  return (
    <div className="card" style={{ display:'grid', gap:12 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnBlur
      >
        {({ isSubmitting }) => (
          <Form className="row">
            <div className="row cols-2">
              <div>
                <label>Descripción</label>
                <Field name="description" className="input" placeholder="Ej: Supermercado" />
                <div className="meta"><ErrorMessage name="description" /></div>
              </div>
              <div>
                <label>Categoría</label>
                <Field as="select" name="category" className="select">
                  <option value="">Seleccionar...</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </Field>
                <div className="meta"><ErrorMessage name="category" /></div>
              </div>
            </div>

            <div className="row cols-3">
              <div>
                <label>Tipo</label>
                <Field as="select" name="type" className="select">
                  <option value="">Seleccionar...</option>
                  <option value="ingreso">Ingreso</option>
                  <option value="gasto">Gasto</option>
                </Field>
                <div className="meta"><ErrorMessage name="type" /></div>
              </div>

              <div>
                <label>Monto</label>
                <Field name="amount" className="input" placeholder="Ej: 12000" />
                <div className="meta"><ErrorMessage name="amount" /></div>
              </div>

              <div>
                <label>Fecha</label>
                <Field type="date" name="date" className="input" />
                <div className="meta"><ErrorMessage name="date" /></div>
              </div>
            </div>

            <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
              <button type="submit" className="btn primary" disabled={isSubmitting}>
                {mode === 'create' ? 'Guardar' : 'Guardar cambios'}
              </button>
              <button type="button" className="btn" onClick={()=>nav('/')}>Cancelar</button>
              {mode === 'edit' && (
                <button type="button" className="btn danger" onClick={handleDelete}>
                  Eliminar
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
      <p className="meta">
        Validaciones: descripción ≥ 3, categoría requerida, tipo ingreso/gasto, monto numérico positivo, fecha no futura.
      </p>
    </div>
  );
}

