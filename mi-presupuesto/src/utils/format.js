export const currency = (n) =>
  new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(Number(n) || 0);

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('es-AR');

export const uid = () => crypto?.randomUUID?.() ?? `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;

export const STORAGE_KEY = 'mi-presupuesto.movimientos.v1';
export const THEME_KEY = 'mi-presupuesto.theme';
