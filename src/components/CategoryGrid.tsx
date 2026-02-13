import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import IconifyIcon from './IconifyIcon';

export default function CategoryGrid() {
  const { categories } = useData();
  
  return (
    <section id="categories" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
            <div>
                <h2 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">Browse by Category</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Find exactly what you need for your next project.</p>
            </div>
            <Link to="/categories" className="hidden sm:flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                View all
                <ArrowUpRight size={16} />
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
                <Link 
                    key={category.id} 
                    to={`/category/${category.id}`} 
                    className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden"
                >
                    <div className={`w-10 h-10 rounded-lg ${category.colorClass} ${category.iconColorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {/* @ts-ignore */}
                        <IconifyIcon icon={category.icon} width={22} />
                    </div>
                    <h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">{category.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{category.description}</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
                        <ArrowUpRight size={18} />
                    </div>
                </Link>
            ))}
        </div>
    </section>
  );
}
