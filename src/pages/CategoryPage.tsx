import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Bookmark, Search } from 'lucide-react';
import { useData } from '../context/DataContext';
import IconifyIcon from '../components/IconifyIcon';

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const { categories, resources } = useData();
  const category = categories.find(c => c.id === id);
  const categoryResources = resources.filter(r => r.categoryId === id);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Category not found</h2>
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 mb-6 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${category.colorClass} ${category.iconColorClass} flex items-center justify-center`}>
                         {/* @ts-ignore */}
                        <IconifyIcon icon={category.icon} width={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{category.title}</h1>
                        <p className="text-slate-500 dark:text-slate-400">{category.description}</p>
                    </div>
                </div>

                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                        type="text" 
                        placeholder={`Search in ${category.title}...`}
                        className="pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                    />
                </div>
            </div>
        </div>

        {categoryResources.length > 0 ? (
            // Check if resources have sections
            categoryResources.some(r => r.section) ? (
                <div className="space-y-12">
                    {Array.from(new Set(categoryResources.map(r => r.section).filter(Boolean) as string[])).map(section => (
                        <div key={section}>
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 pl-1 border-l-4 border-indigo-500">{section}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categoryResources.filter(r => r.section === section).map(resource => (
                                    <ResourceCard key={resource.id} resource={resource} />
                                ))}
                            </div>
                        </div>
                    ))}
                    {/* Render resources without section if any */}
                    {categoryResources.some(r => !r.section) && (
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 pl-1 border-l-4 border-indigo-500">Other Tools</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categoryResources.filter(r => !r.section).map(resource => (
                                    <ResourceCard key={resource.id} resource={resource} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryResources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            )
        ) : (
            <div className="py-12 text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Search size={24} />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No resources found</h3>
                <p className="text-slate-500 dark:text-slate-400">We haven't added any resources to this category yet.</p>
            </div>
        )}
    </div>
  );
}

// Helper component for rendering resource cards
function ResourceCard({ resource }: { resource: any }) {
    return (
        <article className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:bg-slate-50 dark:hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl font-bold text-slate-800 dark:text-white shadow-sm overflow-hidden">
                        {resource.iconUrl ? (
                            <img src={resource.iconUrl} alt={resource.title} className="w-6 h-6" />
                        ) : (
                            // @ts-ignore
                            <IconifyIcon icon={resource.iconName || 'solar:file-linear'} width={24} className={resource.categoryId === 'development' ? 'text-blue-500' : 'text-slate-500'} />
                        )}
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{resource.title}</h3>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
                            <span>{resource.subType}</span>
                            <span className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                            <span>{resource.tags[0]}</span>
                        </div>
                    </div>
                </div>
                <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Bookmark size={20} />
                </button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">{resource.description}</p>
            <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">{resource.type}</span>
                    {resource.tags.slice(1, 2).map((tag: string) => (
                            <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">{tag}</span>
                    ))}
                </div>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1">
                    Visit
                    <ArrowRight size={12} />
                </a>
            </div>
        </article>
    );
}
