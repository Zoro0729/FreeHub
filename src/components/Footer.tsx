import { Twitter, Github, Disc } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <svg className="h-6 w-auto" viewBox="0 0 950 300" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="plasma2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00F5FF"></stop>
                                <stop offset="50%" stopColor="#FF00FF"></stop>
                                <stop offset="100%" stopColor="#7B2FF7"></stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(200 150)">
                              <polygon points="0,-100 87,-50 87,50 0,100 -87,50 -87,-50" fill="none" stroke="url(#plasma2)" strokeWidth="3">
                              </polygon>
                              <polygon points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" fill="none" stroke="url(#plasma2)" strokeWidth="2" opacity="0.7">
                              </polygon>
                              <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="none" stroke="url(#plasma2)" strokeWidth="2" opacity="0.5"></polygon>
                              <g>
                                <polygon points="0,-35 55,0 0,35" fill="url(#plasma2)">
                                </polygon>
                              </g>
                              <path d="M -100 -60 Q 0 -140 100 -60" stroke="#00F5FF" strokeWidth="3" fill="none">
                              </path>
                            </g>
                            <g>
                              <text x="360" y="180" fontFamily="Orbitron, Inter, sans-serif" fontSize="100" fontWeight="700" fill="url(#plasma2)">
                                FreeHub
                              </text>
                            </g>
                        </svg>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed mb-4">
                        Curated directory of the best free tools and resources on the internet. Built for the community.
                    </p>
                    <div className="flex gap-3">
                        <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Github size={20} /></a>
                        <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Disc size={20} /></a>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Categories</a></li>
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">New Arrivals</a></li>
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Featured</a></li>
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Collections</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Community</h4>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Discussions</a></li>
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contribute</a></li>
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Leaderboard</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy</a></li>
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms</a></li>
                        <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400 dark:text-slate-500">© 2023 FreeHub Directory. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">All systems operational</span>
                </div>
            </div>
        </div>
    </footer>
  );
}
