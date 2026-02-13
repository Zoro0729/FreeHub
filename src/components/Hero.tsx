import { ArrowRight, PlusCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { openModal } = useModal();

  const handleSubmitClick = () => {
    openModal('CONTRIBUTOR_LOGIN');
  };

  return (
    <main className="pt-16 pb-16 lg:pt-24 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl -z-10 opacity-40 dark:opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur-sm text-slate-600 dark:text-slate-300 text-xs font-medium mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New resources added daily
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
            Discover the best <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">curated online tools.</span>
        </h1>

        <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            FreeHub is a community-driven directory connecting students, developers, and creatives with high-quality, free and open-source resources.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#categories" className="w-full sm:w-auto px-8 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg shadow-slate-900/20 dark:shadow-white/5 flex items-center justify-center gap-2 group">
                Explore Categories
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button onClick={handleSubmitClick} className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm flex items-center justify-center gap-2">
                <PlusCircle size={18} />
                Submit Tool
            </button>
        </div>
    </main>
  );
}
