import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import IconifyIcon from './IconifyIcon';
import { X } from 'lucide-react';

export default function AuthModal() {
  const { isOpen, modalType, closeModal } = useModal();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [error, setError] = useState('');

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setUsername('');
      setPassword('');
      setSecretCode('');
      setError('');
    }
  }, [isOpen, modalType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (modalType === 'ADMIN_LOGIN') {
      if (username === 'Sohel' && password === 'Junaid') {
        closeModal();
        navigate('/admin');
      } else {
        setError('Invalid username or password');
      }
    } else if (modalType === 'CONTRIBUTOR_LOGIN') {
      if (secretCode === 'junaid') {
        closeModal();
        navigate('/submit');
      } else {
        setError('Invalid secret code. Only admins can submit.');
      }
    }
  };

  const title = modalType === 'ADMIN_LOGIN' ? 'Admin Access' : 'Contributor Access';
  const description = modalType === 'ADMIN_LOGIN' ? 'Enter your credentials to access the dashboard.' : 'Enter the secret code to submit a new tool.';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 animate-in zoom-in-95 duration-200">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
            <IconifyIcon icon="solar:lock-keyhole-minimalistic-bold" width="24" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {modalType === 'ADMIN_LOGIN' ? (
            <>
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Enter username"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Enter password"
                />
              </div>
            </>
          ) : (
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Secret Code</label>
              <input 
                type="password" 
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                placeholder="Enter secret code"
                autoFocus
              />
            </div>
          )}

          {error && (
            <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2">
              <IconifyIcon icon="solar:danger-circle-linear" width="16" />
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Access Portal
            <IconifyIcon icon="solar:arrow-right-linear" width="18" />
          </button>
        </form>
      </div>
    </div>
  );
}
