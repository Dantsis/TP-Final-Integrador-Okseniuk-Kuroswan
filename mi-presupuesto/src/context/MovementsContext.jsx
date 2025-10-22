import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEY } from '../utils/format';
import { seedMovements } from '../data/seed';

const MovementsContext = createContext();

// Generador simple de id (sin dependencias)
const genId = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

export function MovementsProvider({ children }) {
  const [items, setItems] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    if (!items || items.length === 0) {
      setItems(seedMovements());
    }
  }, []); // intencional: solo al montar

  const api = useMemo(() => ({
    items,
    setItems,

    replaceAll: (arr) => setItems(arr),

    // Alta: garantiza id y amount numérico
    add: (mov) =>
      setItems(prev => [
        {
          id: mov.id ?? genId(),
          ...mov,
          amount: Number(mov.amount),
        },
        ...prev,
      ]),

    // Edición: merge + castea amount si viene en el patch
    update: (id, patch) =>
      setItems(prev =>
        prev.map(x =>
          x.id === id
            ? {
                ...x,
                ...patch,
                ...(patch.amount !== undefined ? { amount: Number(patch.amount) } : {}),
              }
            : x
        )
      ),

    // Baja
    remove: (id) => setItems(prev => prev.filter(x => x.id !== id)),

    // Obtener por id (para /editar/:id)
    getById: (id) => items.find(x => x.id === id) ?? null,
  }), [items, setItems]);

  return (
    <MovementsContext.Provider value={api}>
      {children}
    </MovementsContext.Provider>
  );
}

export const useMovements = () => useContext(MovementsContext);
