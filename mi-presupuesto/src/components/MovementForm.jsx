import { Formik, Form, Field, ErrorMessage } from "formik";
import { movementSchema } from "../utils/validation";

const CATEGORIES = [
  "alimentación", "transporte", "ocio", "salud", "educación",
  "servicios", "vivienda", "trabajo", "otros",
];

export default function MovementForm({ initial, onSubmit, onCancel }) {
  const initialValues = initial || {
    description: "",
    category: "",
    type: "gasto",
    amount: "",
    date: "",
  };

  return (
    <Formik initialValues={initialValues} validationSchema={movementSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className="form" noValidate>
          <div className="field">
            <label>Descripción</label>
            <Field name="description" placeholder="Ej. Supermercado" />
            <ErrorMessage name="description" component="small" className="error" />
          </div>

          <div className="field">
            <label>Categoría</label>
            <Field as="select" name="category">
              <option value="">Seleccioná una categoría</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </Field>
            <ErrorMessage name="category" component="small" className="error" />
          </div>

          <div className="field">
            <label>Tipo</label>
            <div className="row">
              <label>
                <Field type="radio" name="type" value="ingreso" /> Ingreso
              </label>
              <label>
                <Field type="radio" name="type" value="gasto" /> Gasto
              </label>
            </div>
            <ErrorMessage name="type" component="small" className="error" />
          </div>

          <div className="field">
            <label>Monto</label>
            <Field name="amount" type="number" step="0.01" placeholder="Ej. 45000" />
            <ErrorMessage name="amount" component="small" className="error" />
          </div>

          <div className="field">
            <label>Fecha</label>
            <Field name="date" type="date" />
            <ErrorMessage name="date" component="small" className="error" />
          </div>

          <div className="actions">
            <button type="submit" disabled={isSubmitting}>Guardar</button>
            {onCancel && (
              <button type="button" className="secondary" onClick={onCancel}>
                Cancelar
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}
