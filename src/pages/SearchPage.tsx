import { useSearchParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import IconifyIcon from '../components/IconifyIcon';

export default function SearchPage() {
  const { categories, resources } = useData();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const lowerQuery = query.toLowerCase();

  const matchingCategories = categories.filter(category => 
    category.title.toLowerCase().includes(lowerQuery) ||
    category.description.toLowerCase().includes(lowerQuery)
  );

  const matchingResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(lowerQuery) ||
    resource.description.toLowerCase().includes(lowerQuery) ||
    resource.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );

  if (!query) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-12 px-4">
        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 text-slate-400">
           <IconifyIcon icon="solar:magnifer-linear" width="32" />
        </div>
        <h2 className="text-2xl font-medium text-slate-900 dark:text-white mb-2">Search for tools</h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-md">
          Enter a keyword to search through our collection of categories and resources.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-slate-900 dark:text-white mb-2">
          Search results for <span className="text-indigo-600 dark:text-indigo-400">"{query}"</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Found {matchingCategories.length} categories and {matchingResources.length} resources.
        </p>
      </div>

      {matchingCategories.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-medium text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <IconifyIcon icon="solar:folder-with-files-linear" className="text-indigo-500" />
            Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {matchingCategories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.id}`} 
                className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden"
              >
                <div className={`w-10 h-10 rounded-lg ${category.colorClass} ${category.iconColorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconifyIcon icon={category.icon} width="22" />
                </div>
                <h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">{category.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {matchingResources.length > 0 && (
        <section>
          <h2 className="text-xl font-medium text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <IconifyIcon icon="solar:box-minimalistic-linear" className="text-indigo-500" />
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchingResources.map((resource) => (
              <a 
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 group h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl font-bold text-slate-800 dark:text-white shadow-sm overflow-hidden">
                      {resource.iconUrl ? (
                         <img src={resource.iconUrl} alt={resource.title} className="w-6 h-6 object-contain" />
                      ) : (
                         <IconifyIcon icon={resource.iconName || 'solar:link-circle-linear'} width="24" className="text-indigo-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{resource.title}</h3>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
                        <span>{resource.tags[0]}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                        <span>{resource.subType}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100">
                    <IconifyIcon icon="solar:arrow-right-up-linear" width="20" />
                  </div>
                </div>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                  <div className="flex gap-2">
                    <span className={`px-2 py-0.5 rounded-full border text-[10px] font-medium 
                      ${resource.type === 'Free' || resource.type === 'Open Source' 
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'}`}
                    >
                      {resource.type}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Visit
                    <IconifyIcon icon="solar:arrow-right-linear" width="12" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {matchingCategories.length === 0 && matchingResources.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center px-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 text-slate-400">
            <IconifyIcon icon="solar:emoji-funny-circle-linear" width="32" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">No results found</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            We couldn't find any tools matching "{query}". Try different keywords or browse our categories.
          </p>
          <Link to="/" className="mt-6 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors w-full sm:w-auto text-center">
            Go back home
          </Link>
        </div>
      )}
    </div>
  );
}
