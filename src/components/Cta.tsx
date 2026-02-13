import { Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Cta() {
  const { openModal } = useModal();

  const handleSubmitClick = () => {
    openModal('CONTRIBUTOR_LOGIN');
  };

  return (
    <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-indigo-900/40 dark:to-slate-900/80 border border-transparent dark:border-white/10 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                    <Zap size={24} className="text-yellow-300" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-white">Have a tool we should list?</h2>
                <p className="text-slate-300 mb-8 max-w-lg mx-auto font-light">Join our community of contributors and help others discover great resources.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                    <button onClick={handleSubmitClick} className="px-6 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors shadow-lg">Submit Resource</button>
                    <button className="px-6 py-2.5 rounded-lg border border-slate-600 dark:border-slate-500 text-white text-sm font-medium hover:border-slate-500 hover:bg-slate-800/50 transition-colors">Join Discord</button>
                </div>
            </div>
        </div>
    </section>
  );
}
