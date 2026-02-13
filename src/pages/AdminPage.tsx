import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconifyIcon from '../components/IconifyIcon';
import { useData } from '../context/DataContext';
import { Resource } from '../data';

const AdminPage = () => {
  const navigate = useNavigate();
  const { resources, addResource, removeResource, editResource, categories } = useData();
  const [activeTab, setActiveTab] = useState('resources');
  
  // Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Resource>>({
    title: '',
    description: '',
    url: '',
    categoryId: '',
    tags: [],
    type: 'Free',
    subType: 'Tool'
  });
  const [tagsInput, setTagsInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      url: '',
      categoryId: '',
      tags: [],
      type: 'Free',
      subType: 'Tool'
    });
    setTagsInput('');
    setEditingId(null);
    setShowAddForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

    if (editingId) {
        editResource(editingId, {
            ...formData,
            tags
        });
        alert('Resource updated successfully!');
    } else {
        const newResource: Resource = {
            id: `res-${Date.now()}`,
            title: formData.title || 'Untitled',
            description: formData.description || '',
            url: formData.url || '',
            categoryId: formData.categoryId || 'ai-tools',
            tags: tags,
            type: (formData.type as any) || 'Free',
            subType: formData.subType || 'Tool',
            iconName: 'solar:link-circle-linear'
        };
        addResource(newResource);
        alert('Resource added successfully!');
    }
    
    resetForm();
  };

  const handleEditClick = (resource: Resource) => {
    setFormData({
        title: resource.title,
        description: resource.description,
        url: resource.url,
        categoryId: resource.categoryId,
        tags: resource.tags || [],
        type: resource.type,
        subType: resource.subType
    });
    setTagsInput((resource.tags || []).join(', '));
    setEditingId(resource.id);
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      removeResource(id);
    }
  };

  const toggleForm = () => {
      if (showAddForm) {
          resetForm();
      } else {
          setShowAddForm(true);
      }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Console</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage resources and system settings.</p>
            </div>
            <button 
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
                Exit Console
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-2">
                <button 
                    onClick={() => setActiveTab('resources')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${activeTab === 'resources' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                    <IconifyIcon icon="solar:box-minimalistic-linear" width="20" />
                    Manage Tools
                </button>
                <button 
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                    <IconifyIcon icon="solar:widget-linear" width="20" />
                    Dashboard
                </button>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
                {activeTab === 'resources' && (
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">All Tools ({resources.length})</h2>
                            <button 
                                onClick={toggleForm}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                            >
                                <IconifyIcon icon={showAddForm ? "solar:minus-circle-linear" : "solar:add-circle-linear"} width="18" />
                                {showAddForm ? 'Cancel' : 'Add Tool'}
                            </button>
                        </div>

                        {showAddForm && (
                            <form onSubmit={handleSubmit} className="mb-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-top-4">
                                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">{editingId ? 'Edit Tool' : 'Add New Tool'}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Title</label>
                                        <input required name="title" value={formData.title} onChange={handleInputChange} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" placeholder="Tool Name" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Description</label>
                                        <textarea required name="description" value={formData.description} onChange={handleInputChange} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" rows={2} placeholder="Description" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">URL</label>
                                        <input required name="url" type="url" value={formData.url} onChange={handleInputChange} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" placeholder="https://" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Category</label>
                                        <select required name="categoryId" value={formData.categoryId} onChange={handleInputChange} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm">
                                            <option value="">Select Category</option>
                                            {categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Type</label>
                                        <select name="type" value={formData.type} onChange={handleInputChange} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm">
                                            <option value="Free">Free</option>
                                            <option value="Freemium">Freemium</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Open Source">Open Source</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Sub-Type</label>
                                        <input name="subType" value={formData.subType} onChange={handleInputChange} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" placeholder="e.g. Editor, VPN" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Tags (comma separated)</label>
                                        <input name="tags" value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" placeholder="tag1, tag2, tag3" />
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end gap-3">
                                    <button type="button" onClick={resetForm} className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600">Cancel</button>
                                    <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">{editingId ? 'Update Tool' : 'Save Tool'}</button>
                                </div>
                            </form>
                        )}

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-800">
                                    <tr>
                                        <th className="px-4 py-3">Tool Name</th>
                                        <th className="hidden sm:table-cell px-4 py-3">Category</th>
                                        <th className="hidden md:table-cell px-4 py-3">Type</th>
                                        <th className="hidden lg:table-cell px-4 py-3">URL</th>
                                        <th className="px-4 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    {resources.map((resource) => (
                                        <tr key={resource.id} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                                                {resource.title}
                                            </td>
                                            <td className="hidden sm:table-cell px-4 py-3 text-slate-500 dark:text-slate-400">
                                                {categories.find(c => c.id === resource.categoryId)?.title || resource.categoryId}
                                            </td>
                                            <td className="hidden md:table-cell px-4 py-3 text-slate-500 dark:text-slate-400">
                                                <span className={`px-2 py-0.5 rounded text-xs ${
                                                    resource.type === 'Free' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                                    resource.type === 'Paid' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' :
                                                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                }`}>
                                                    {resource.type}
                                                </span>
                                            </td>
                                            <td className="hidden lg:table-cell px-4 py-3 text-slate-500 dark:text-slate-400 max-w-[200px] truncate">
                                                <a href={resource.url} target="_blank" rel="noreferrer" className="hover:text-indigo-500">{resource.url}</a>
                                            </td>
                                            <td className="px-4 py-3 text-right whitespace-nowrap">
                                                <button 
                                                    onClick={() => handleEditClick(resource)}
                                                    className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-400 font-medium text-xs border border-indigo-200 dark:border-indigo-900/50 px-2 py-1 rounded hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors mr-2"
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(resource.id, resource.title)}
                                                    className="text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 font-medium text-xs border border-rose-200 dark:border-rose-900/50 px-2 py-1 rounded hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                
                {activeTab === 'dashboard' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">Total Resources</div>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white">{resources.length}</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">Total Categories</div>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white">{categories.length}</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">System Status</div>
                            <div className="text-3xl font-bold text-emerald-500">Active</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
