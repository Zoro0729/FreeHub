import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { categories as initialCategories, Category, Resource } from '../data';
import { supabase } from '../lib/supabase';

interface DataContextType {
  categories: Category[];
  resources: Resource[];
  addResource: (resource: Resource) => Promise<void>;
  removeResource: (id: string) => Promise<void>;
  editResource: (id: string, updatedResource: Partial<Resource>) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [categories] = useState<Category[]>(initialCategories);
  const [resources, setResources] = useState<Resource[]>([]);

  // ✅ Fetch resources from Supabase
  const fetchResources = async () => {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      const formatted = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        url: item.url,
        categoryId: item.categoryid,
        tags: item.tags,
        type: item.type,
        subType: item.subtype,
        iconName: item.iconname,
        created_at: item.created_at
      }));

      setResources(formatted);
    } else {
      console.error('Error fetching resources:', error);
    }
  };

  // 🔥 Load on first render
  useEffect(() => {
    fetchResources();
  }, []);

  // ✅ Add Resource
  const addResource = async (resource: Resource) => {
    const { error } = await supabase.from('resources').insert([
      {
        title: resource.title,
        description: resource.description,
        url: resource.url,
        categoryid: resource.categoryId,
        tags: resource.tags,
        type: resource.type,
        subtype: resource.subType,
        iconname: resource.iconName
      }
    ]);

    if (!error) {
      await fetchResources();
    } else {
      console.error('Error adding resource:', error);
    }
  };

  // ✅ Remove Resource
  const removeResource = async (id: string) => {
    const { error } = await supabase
      .from('resources')
      .delete()
      .eq('id', id);

    if (!error) {
      await fetchResources();
    } else {
      console.error('Error deleting resource:', error);
    }
  };

  // ✅ Edit Resource
  const editResource = async (id: string, updatedResource: Partial<Resource>) => {
    const { error } = await supabase
      .from('resources')
      .update({
        title: updatedResource.title,
        description: updatedResource.description,
        url: updatedResource.url,
        categoryid: updatedResource.categoryId,
        tags: updatedResource.tags,
        type: updatedResource.type,
        subtype: updatedResource.subType,
        iconname: updatedResource.iconName
      })
      .eq('id', id);

    if (!error) {
      await fetchResources();
    } else {
      console.error('Error updating resource:', error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        categories,
        resources,
        addResource,
        removeResource,
        editResource
      }}
    >
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