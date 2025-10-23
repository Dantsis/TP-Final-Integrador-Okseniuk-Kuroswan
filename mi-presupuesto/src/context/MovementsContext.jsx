import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEY } from '../utils/format';
import { seedMovements } from '../data/seed';

const MovementsContext = createContext();

export function MovementsProvider({ children }) {
  const [items, setItems] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    if (!items || items.length === 0) {
      setItems(seedMovements());
    }
    
  }, []);

  const byId = (id) => items.find(x => x.id === id);

  const api = useMemo(() => ({
    items,
    setItems,
    byId,
    replaceAll: (arr) => setItems(arr),
    add: (mov) => setItems(prev => [mov, ...prev]),
    update: (id, patch) => setItems(prev => prev.map(x => x.id === id ? { ...x, ...patch } : x)),
    remove: (id) => setItems(prev => prev.filter(x => x.id !== id)),
  }), [items, setItems]);

  return (
    <MovementsContext.Provider value={api}>
      {children}
    </MovementsContext.Provider>
  );
}

export const useMovements = () => useContext(MovementsContext);
