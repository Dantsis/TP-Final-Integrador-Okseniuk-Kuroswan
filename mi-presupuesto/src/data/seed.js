import { uid } from '../utils/format';

export const seedMovements = () => ([
  { id: uid(), description: 'Sueldo', category: 'ingresos', type: 'ingreso', amount: 600000, date: '2025-09-30' },
  { id: uid(), description: 'Supermercado', category: 'alimentación', type: 'gasto', amount: 85000, date: '2025-10-01' },
  { id: uid(), description: 'SUBE', category: 'transporte', type: 'gasto', amount: 12000, date: '2025-10-02' },
  { id: uid(), description: 'Cine', category: 'ocio', type: 'gasto', amount: 18000, date: '2025-10-05' },
  { id: uid(), description: 'Freelance', category: 'ingresos', type: 'ingreso', amount: 220000, date: '2025-10-07' },
]);
