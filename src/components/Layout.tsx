import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen mesh-bg text-slate-600 dark:text-slate-400 antialiased selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-300 transition-colors duration-300 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
