import { ArrowRight, Star, Bookmark } from 'lucide-react';
import { useData } from '../context/DataContext';
import IconifyIcon from './IconifyIcon';

export default function FeaturedResources() {
    const { resources } = useData();
    const featured = resources.filter(r => r.isFeatured);

    return (
        <section className="py-16 bg-white dark:bg-slate-950/50 border-y border-slate-200 dark:border-slate-800/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                            <Star size={16} />
                            <span className="text-xs font-semibold uppercase tracking-wider">Editor's Choice</span>
                        </div>
                        <h2 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">Featured Resources</h2>
                    </div>

                    {/* Custom Filters */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <button className="px-3 py-1.5 text-xs font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md shadow-sm transition-colors">All</button>
                        <button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md hover:border-slate-300 dark:hover:border-slate-500 transition-colors">Popular</button>
                        <button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md hover:border-slate-300 dark:hover:border-slate-500 transition-colors">Newest</button>
                        <button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md hover:border-slate-300 dark:hover:border-slate-500 transition-colors">Trending</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((resource) => (
                        <article key={resource.id} className="flex flex-col bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 group">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl font-bold text-slate-800 dark:text-white shadow-sm overflow-hidden">
                                        {resource.iconName?.startsWith('http') ? (
                                            <img src={resource.iconName} alt={resource.title} className="w-10 h-10 object-contain p-1" />
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
                                    <span className="px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">{resource.type}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">{resource.subType}</span>
                                </div>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1">
                                    Visit
                                    <ArrowRight size={12} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
