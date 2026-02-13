import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Sun, Moon, Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Check initial theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const { openModal } = useModal();

  const handleContributeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal('CONTRIBUTOR_LOGIN');
  };

  const handleAdminClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal('ADMIN_LOGIN');
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group hover:opacity-80 transition-opacity">
            <svg className="h-10 w-auto" viewBox="0 0 950 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="plasma" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00F5FF"></stop>
                    <stop offset="50%" stopColor="#FF00FF"></stop>
                    <stop offset="100%" stopColor="#7B2FF7"></stop>
                  </linearGradient>
                  <filter id="megaGlow" x="-200%" y="-200%" width="400%" height="400%">
                    <feGaussianBlur stdDeviation="8" result="blur"></feGaussianBlur>
                    <feMerge>
                      <feMergeNode in="blur"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                  <filter id="storm">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3">
                      <animate attributeName="baseFrequency" values="0.02;0.05;0.02" dur="2s" repeatCount="indefinite"></animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
                  </filter>
                </defs>
                <g transform="translate(200 150)">
                  <polygon points="0,-100 87,-50 87,50 0,100 -87,50 -87,-50" fill="none" stroke="url(#plasma)" strokeWidth="3" filter="url(#megaGlow)">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite"></animateTransform>
                  </polygon>
                  <polygon points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" fill="none" stroke="url(#plasma)" strokeWidth="2" opacity="0.7">
                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="18s" repeatCount="indefinite"></animateTransform>
                  </polygon>
                  <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="none" stroke="url(#plasma)" strokeWidth="2" opacity="0.5"></polygon>
                  <g filter="url(#megaGlow)">
                    <polygon points="0,-35 55,0 0,35" fill="url(#plasma)">
                      <animateTransform attributeName="transform" type="rotate" from="0" to="720" dur="4s" fill="freeze"></animateTransform>
                    </polygon>
                  </g>
                  <path d="M -100 -60 Q 0 -140 100 -60" stroke="#00F5FF" strokeWidth="3" fill="none" filter="url(#storm)">
                    <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"></animate>
                  </path>
                </g>
                <g filter="url(#storm)">
                  <text x="360" y="180" fontFamily="Orbitron, Inter, sans-serif" fontSize="100" fontWeight="700" fill="url(#plasma)" filter="url(#megaGlow)">
                    FreeHub
                  </text>
                </g>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#categories" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Categories</Link>
            <button onClick={handleContributeClick} className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Contribute</button>
            <Link to="/community" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Community</Link>
            <button onClick={handleAdminClick} className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Admin</button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="hidden sm:flex items-center relative group">
              <Search className="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="pl-9 pr-12 py-1.5 text-sm bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 w-48 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <div className="absolute right-2 text-[10px] border border-slate-200 dark:border-slate-700 rounded px-1.5 text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800">⌘K</div>
            </div>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20" aria-label="Toggle Theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav absolute w-full px-4 pt-2 pb-6 flex flex-col space-y-4 shadow-lg">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-300 py-2">Home</Link>
          <Link to="/#categories" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-300 py-2">Categories</Link>
          <button onClick={(e) => { setIsMobileMenuOpen(false); handleContributeClick(e); }} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300 py-2">Contribute</button>
          <Link to="/community" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-300 py-2">Community</Link>
          <div className="pt-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-700 dark:text-slate-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
