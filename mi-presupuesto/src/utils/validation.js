import * as yup from 'yup';

// Verifica que la fecha no sea futura
const notFuture = (value) => {
  if (!value) return false;
  const today = new Date();
  const d = new Date(value);
  const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const dateClean = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return dateClean <= todayClean;
};

// Esquema de validación para movimientos
export const movementSchema = yup.object({
  description: yup
    .string()
    .trim()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('La descripción es obligatoria'),

  category: yup
    .string()
    .required('La categoría es obligatoria'),

  type: yup
    .string()
    .oneOf(['ingreso', 'gasto'], 'Debe seleccionar ingreso o gasto')
    .required('El tipo es obligatorio'),

  amount: yup
    .number()
    .typeError('Debe ser un número')
    .positive('Debe ser mayor a 0')
    .required('El monto es obligatorio'),

  date: yup
    .string()
    .required('La fecha es obligatoria')
    .test('not-future', 'La fecha no puede ser futura', notFuture),
});
