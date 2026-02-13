import { createContext, useContext, useState, ReactNode } from 'react';
import { categories as initialCategories, resources as initialResources, Category, Resource } from '../data';

interface DataContextType {
  categories: Category[];
  resources: Resource[];
  addResource: (resource: Resource) => void;
  removeResource: (id: string) => void;
  editResource: (id: string, updatedResource: Partial<Resource>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [categories] = useState<Category[]>(initialCategories);
  const [resources, setResources] = useState<Resource[]>(initialResources);

  const addResource = (resource: Resource) => {
    setResources(prev => [resource, ...prev]);
  };

  const removeResource = (id: string) => {
    setResources(prev => prev.filter(r => r.id !== id));
  };

  const editResource = (id: string, updatedResource: Partial<Resource>) => {
    setResources(prev => prev.map(r => (r.id === id ? { ...r, ...updatedResource } : r)));
  };

  return (
    <DataContext.Provider value={{ categories, resources, addResource, removeResource, editResource }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
