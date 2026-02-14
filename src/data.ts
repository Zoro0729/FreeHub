
export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string; // Iconify icon name
  colorClass: string; // Tailwind color class for icon background
  iconColorClass: string; // Tailwind color class for icon
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  categoryId: string;
  tags: string[];
  iconUrl?: string; // Optional URL for logo (legacy, we now use iconName for both)
  iconName?: string; // Iconify name OR Logo URL
  isFeatured?: boolean;
  isNew?: boolean;
  type: 'Free' | 'Freemium' | 'Paid' | 'Open Source';
  subType: string; // e.g., 'Editor', 'Design', 'Email'
  section?: string; // Optional section for grouping within category
}

export const categories: Category[] = [
  {
    id: 'ai-tools',
    title: 'AI Tools',
    slug: 'ai-tools',
    description: 'Generative art, text assistants, and automation bots.',
    icon: 'solar:magic-stick-3-linear',
    colorClass: 'bg-blue-50 dark:bg-blue-500/10',
    iconColorClass: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'streaming',
    title: 'Streaming',
    slug: 'streaming',
    description: 'Live TV, movie platforms, and audio streaming services.',
    icon: 'solar:play-stream-linear',
    colorClass: 'bg-purple-50 dark:bg-purple-500/10',
    iconColorClass: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 'development',
    title: 'Software & Dev',
    slug: 'development',
    description: 'IDEs, frameworks, libraries, and open source utilities.',
    icon: 'solar:code-circle-linear',
    colorClass: 'bg-emerald-50 dark:bg-emerald-500/10',
    iconColorClass: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    id: 'privacy',
    title: 'Privacy',
    slug: 'privacy',
    description: 'VPNs, encrypted messaging, and ad blockers.',
    icon: 'solar:shield-check-linear',
    colorClass: 'bg-slate-100 dark:bg-slate-800',
    iconColorClass: 'text-slate-600 dark:text-slate-400'
  },
  {
    id: 'learning',
    title: 'Learning',
    slug: 'learning',
    description: 'Courses, ebooks, tutorials, and educational platforms.',
    icon: 'solar:diploma-linear',
    colorClass: 'bg-amber-50 dark:bg-amber-500/10',
    iconColorClass: 'text-amber-600 dark:text-amber-400'
  },
  {
    id: 'gaming',
    title: 'Gaming',
    slug: 'gaming',
    description: 'Free games, emulators, mods, and gaming utilities.',
    icon: 'solar:gamepad-linear',
    colorClass: 'bg-rose-50 dark:bg-rose-500/10',
    iconColorClass: 'text-rose-600 dark:text-rose-400'
  },
  {
    id: 'reading',
    title: 'Reading',
    slug: 'reading',
    description: 'Libraries, manga readers, and news aggregators.',
    icon: 'solar:book-2-linear',
    colorClass: 'bg-teal-50 dark:bg-teal-500/10',
    iconColorClass: 'text-teal-600 dark:text-teal-400'
  },
  {
    id: 'downloading',
    title: 'Downloading',
    slug: 'downloading',
    description: 'Torrents, file hosting, and download managers.',
    icon: 'solar:cloud-download-linear',
    colorClass: 'bg-cyan-50 dark:bg-cyan-500/10',
    iconColorClass: 'text-cyan-600 dark:text-cyan-400'
  }
];

export const resources: Resource[] = [
  // --- Development ---
  {
    id: 'dev-1',
    title: 'VS Code',
    description: 'A powerful, lightweight code editor with built-in support for JavaScript, TypeScript and Node.js.',
    url: 'https://code.visualstudio.com',
    categoryId: 'development',
    tags: ['Editor', 'Microsoft', 'Dev Tool'],
    isFeatured: true,
    type: 'Free',
    subType: 'Editor'
  },
  {
    id: 'dev-2',
    title: 'Figma',
    description: 'The leading collaborative interface design tool. Build better products as a team.',
    url: 'https://www.figma.com',
    categoryId: 'development',
    tags: ['Design', 'Web', 'UI/UX'],
    iconName: 'solar:figma-file-linear',
    isFeatured: true,
    type: 'Freemium',
    subType: 'UI/UX'
  },
  {
    id: 'dev-3',
    title: 'GitHub',
    description: 'The world’s largest platform for software development and version control.',
    url: 'https://github.com',
    categoryId: 'development',
    tags: ['Git', 'Repo', 'Collaboration'],
    type: 'Freemium',
    subType: 'Platform'
  },
  {
    id: 'dev-4',
    title: 'Docker',
    description: 'Accelerate how you build, share, and run applications.',
    url: 'https://www.docker.com',
    categoryId: 'development',
    tags: ['DevOps', 'Container', 'Tool'],
    type: 'Freemium',
    subType: 'DevOps'
  },
  {
    id: 'dev-5',
    title: 'Postman',
    description: 'The world’s leading API platform for building and using APIs.',
    url: 'https://www.postman.com',
    categoryId: 'development',
    tags: ['API', 'Testing', 'Dev Tool'],
    type: 'Freemium',
    subType: 'API'
  },
  {
    id: 'dev-6',
    title: 'Stack Overflow',
    description: 'A public platform building the definitive collection of coding questions & answers.',
    url: 'https://stackoverflow.com',
    categoryId: 'development',
    tags: ['Community', 'Help', 'Q&A'],
    type: 'Free',
    subType: 'Community'
  },
  {
    id: 'dev-7',
    title: 'Vercel',
    description: 'Develop. Preview. Ship. The frontend cloud for frameworks.',
    url: 'https://vercel.com',
    categoryId: 'development',
    tags: ['Hosting', 'Frontend', 'Cloud'],
    type: 'Freemium',
    subType: 'Hosting'
  },
  {
    id: 'dev-8',
    title: 'Supabase',
    description: 'The open source Firebase alternative. Instantly add a backend to your app.',
    url: 'https://supabase.com',
    categoryId: 'development',
    tags: ['Backend', 'Database', 'Open Source'],
    type: 'Freemium',
    subType: 'Backend'
  },
  {
    id: 'dev-9',
    title: 'CodePen',
    description: 'The best place to build, test, and discover front-end code.',
    url: 'https://codepen.io',
    categoryId: 'development',
    tags: ['Frontend', 'Editor', 'Community'],
    type: 'Freemium',
    subType: 'Playground'
  },
  {
    id: 'dev-10',
    title: 'Git',
    description: 'Free and open source distributed version control system.',
    url: 'https://git-scm.com',
    categoryId: 'development',
    tags: ['VCS', 'CLI', 'Tool'],
    type: 'Open Source',
    subType: 'Tool'
  },

  // --- Privacy ---
  {
    id: 'priv-1',
    title: 'ProtonMail',
    description: 'Secure email based in Switzerland. Encrypted to keep your communications private.',
    url: 'https://proton.me/mail',
    categoryId: 'privacy',
    iconName: 'https://api.iconify.design/simple-icons:protonmail.svg',
    tags: ['Privacy', 'Email', 'Secure'],
    isFeatured: true,
    type: 'Free',
    subType: 'Secure'
  },
  {
    id: 'priv-2',
    title: 'Tor Browser',
    description: 'Defend yourself against tracking and surveillance. Circumvent censorship.',
    url: 'https://www.torproject.org',
    categoryId: 'privacy',
    tags: ['Browser', 'Anonymity', 'Security'],
    type: 'Open Source',
    subType: 'Browser'
  },
  {
    id: 'priv-3',
    title: 'Signal',
    description: 'Say "hello" to a different messaging experience. Unexpectedly secure.',
    url: 'https://signal.org',
    categoryId: 'privacy',
    tags: ['Messaging', 'Encrypted', 'Mobile'],
    type: 'Free',
    subType: 'Messaging'
  },
  {
    id: 'priv-4',
    title: 'Bitwarden',
    description: 'A secure and free password manager for all of your devices.',
    url: 'https://bitwarden.com',
    categoryId: 'privacy',
    tags: ['Passwords', 'Security', 'Manager'],
    type: 'Freemium',
    subType: 'Security'
  },
  {
    id: 'priv-5',
    title: 'DuckDuckGo',
    description: 'The Internet privacy company that empowers you to seamlessly take control of your personal information.',
    url: 'https://duckduckgo.com',
    categoryId: 'privacy',
    tags: ['Search', 'Privacy', 'Engine'],
    type: 'Free',
    subType: 'Search'
  },
  {
    id: 'priv-6',
    title: 'Brave Browser',
    description: 'A fast, private and secure web browser for PC, Mac and mobile.',
    url: 'https://brave.com',
    categoryId: 'privacy',
    tags: ['Browser', 'Adblock', 'Crypto'],
    type: 'Free',
    subType: 'Browser'
  },
  {
    id: 'priv-7',
    title: 'Mullvad VPN',
    description: 'The VPN service that helps keep your online activity, identity, and location private.',
    url: 'https://mullvad.net',
    categoryId: 'privacy',
    tags: ['VPN', 'Network', 'Security'],
    iconName: 'https://api.iconify.design/logos:mullvad.svg',
    type: 'Paid',
    subType: 'VPN'
  },
  {
    id: 'priv-8',
    title: 'SimpleLogin',
    description: 'Protect your email address with email aliases.',
    url: 'https://simplelogin.io',
    categoryId: 'privacy',
    iconName: 'https://api.iconify.design/simple-icons:simplelogin.svg',
    tags: ['Email', 'Alias', 'Security'],
    type: 'Freemium',
    subType: 'Email'
  },
  {
    id: 'priv-9',
    title: 'uBlock Origin',
    description: 'An efficient blocker for Chromium and Firefox. Fast and lean.',
    url: 'https://github.com/gorhill/uBlock',
    categoryId: 'privacy',
    tags: ['Extension', 'Adblock', 'Open Source'],
    iconName: 'https://api.iconify.design/logos:u-block-origin.svg',
    type: 'Open Source',
    subType: 'Extension'
  },
  {
    id: 'priv-10',
    title: 'Veracrypt',
    description: 'Free open source disk encryption software for Windows, Mac OSX and Linux.',
    url: 'https://www.veracrypt.fr',
    categoryId: 'privacy',
    tags: ['Encryption', 'Security', 'Disk'],
    iconName: 'https://api.iconify.design/simple-icons:veracrypt.svg',
    type: 'Open Source',
    subType: 'Encryption'
  },

  // --- Streaming ---
  // Video Section
  {
    id: 'stream-video-1',
    title: 'Net Mirror',
    description: 'Access various streaming mirrors and content sources efficiently.',
    url: 'https://netmirror.app',
    categoryId: 'streaming',
    tags: ['Streaming', 'Mirrors', 'Movies'],
    iconName: 'solar:monitor-play-linear',
    type: 'Free',
    subType: 'Platform',
    section: 'Video',
    isNew: true,
    isFeatured: true
  },
  {
    id: 'stream-video-2',
    title: 'Movie Box',
    description: 'A popular destination for streaming movies and TV shows for free.',
    url: 'https://movie-web.app',
    categoryId: 'streaming',
    tags: ['Movies', 'TV', 'Streaming'],
    iconName: 'solar:clapperboard-play-linear',
    type: 'Free',
    subType: 'Platform',
    section: 'Video',
    isNew: true,
    isFeatured: true
  },
  {
    id: 'stream-video-3',
    title: 'Hi Anime',
    description: 'The best site to watch anime online for free with high quality.',
    url: 'https://hianime.to',
    categoryId: 'streaming',
    tags: ['Anime', 'Streaming', 'Subbed'],
    iconName: 'solar:play-circle-linear',
    type: 'Free',
    subType: 'Anime',
    section: 'Video',
    isNew: true,
    isFeatured: true
  },
  {
    id: 'stream-video-4',
    title: 'Kayoanime',
    description: 'Download anime in high quality for free. Extensive library.',
    url: 'https://kayoanime.com',
    categoryId: 'streaming',
    tags: ['Anime', 'Download', 'Library'],
    iconName: 'solar:download-square-linear',
    type: 'Free',
    subType: 'Anime',
    section: 'Video',
    isNew: true,
    isFeatured: true
  },

  // Audio Section
  {
    id: 'stream-5',
    title: 'Spotify',
    description: 'Digital music service that gives you access to millions of songs.',
    url: 'https://open.spotify.com',
    categoryId: 'streaming',
    tags: ['Music', 'Audio', 'Podcast'],
    type: 'Freemium',
    subType: 'Music',
    section: 'Audio'
  },
  {
    id: 'stream-9',
    title: 'Audacity',
    description: 'Free, open source, cross-platform audio software.',
    url: 'https://www.audacityteam.org',
    categoryId: 'streaming',
    tags: ['Audio', 'Editor', 'Recording'],
    type: 'Open Source',
    subType: 'Tool',
    section: 'Audio'
  },
  {
    id: 'stream-15',
    title: 'SoundCloud',
    description: 'Discover and play over 320 million music tracks. Join the world’s largest music community.',
    url: 'https://soundcloud.com',
    categoryId: 'streaming',
    tags: ['Music', 'Community', 'Streaming'],
    type: 'Freemium',
    subType: 'Platform',
    section: 'Audio'
  },
  {
    id: 'stream-16',
    title: 'Deezer',
    description: 'You bring the passion, we bring the music. Access millions of tracks.',
    url: 'https://www.deezer.com',
    categoryId: 'streaming',
    tags: ['Music', 'Streaming', 'Songs'],
    type: 'Freemium',
    subType: 'Music',
    section: 'Audio'
  },
  {
    id: 'stream-17',
    title: 'MuseScore',
    description: 'Create, play back, and print sheet music for free.',
    url: 'https://musescore.org',
    categoryId: 'streaming',
    tags: ['Music', 'Notation', 'Sheet'],
    iconName: 'https://api.iconify.design/logos:musescore.svg',
    type: 'Open Source',
    subType: 'Software',
    section: 'Audio'
  },
  {
    id: 'stream-18',
    title: 'LMMS',
    description: 'Cross-platform music production software. Produce music with your computer.',
    url: 'https://lmms.io',
    categoryId: 'streaming',
    iconName: 'https://api.iconify.design/simple-icons:lmms.svg',
    tags: ['DAW', 'Music', 'Production'],
    type: 'Open Source',
    subType: 'Software',
    section: 'Audio'
  },
  {
    id: 'stream-19',
    title: 'Tenacity',
    description: 'An easy-to-use, cross-platform multi-track audio editor/recorder.',
    url: 'https://tenacityaudio.org',
    categoryId: 'streaming',
    tags: ['Audio', 'Editor', 'Open Source'],
    iconName: 'https://api.iconify.design/simple-icons:tenacity.svg',
    type: 'Open Source',
    subType: 'Software',
    section: 'Audio'
  },

  // --- Learning ---
  {
    id: 'learn-1',
    title: 'Khan Academy',
    description: 'A non-profit educational organization created to create a set of online tools that help educate students.',
    url: 'https://www.khanacademy.org',
    categoryId: 'learning',
    tags: ['Education', 'Courses', 'Free'],
    type: 'Free',
    subType: 'Platform'
  },
  {
    id: 'learn-2',
    title: 'freeCodeCamp',
    description: 'Learn to code for free. Build projects. Earn certifications.',
    url: 'https://www.freecodecamp.org',
    categoryId: 'learning',
    tags: ['Coding', 'Web Dev', 'Certifications'],
    type: 'Free',
    subType: 'Coding'
  },
  {
    id: 'learn-3',
    title: 'Coursera',
    description: 'Build skills with courses, certificates, and degrees online from world-class universities.',
    url: 'https://www.coursera.org',
    categoryId: 'learning',
    tags: ['University', 'Courses', 'Certificates'],
    type: 'Freemium',
    subType: 'Platform'
  },
  {
    id: 'learn-4',
    title: 'Duolingo',
    description: 'The world\'s best way to learn a language.',
    url: 'https://www.duolingo.com',
    categoryId: 'learning',
    tags: ['Languages', 'Gamified', 'Mobile'],
    type: 'Free',
    subType: 'Language'
  },
  {
    id: 'learn-5',
    title: 'edX',
    description: 'Access 2000+ free online courses from 140 leading institutions worldwide.',
    url: 'https://www.edx.org',
    categoryId: 'learning',
    tags: ['University', 'Higher Ed', 'Courses'],
    type: 'Freemium',
    subType: 'Platform'
  },
  {
    id: 'learn-6',
    title: 'The Odin Project',
    description: 'Your career in web development starts here. Full stack curriculum.',
    url: 'https://www.theodinproject.com',
    categoryId: 'learning',
    tags: ['Web Dev', 'Curriculum', 'Open Source'],
    iconName: 'https://api.iconify.design/logos:the-odin-project.svg',
    type: 'Free',
    subType: 'Coding'
  },
  {
    id: 'learn-7',
    title: 'Anki',
    description: 'Powerful, intelligent flash cards. Remembering things just became much easier.',
    url: 'https://apps.ankiweb.net',
    categoryId: 'learning',
    iconName: 'https://api.iconify.design/simple-icons:anki.svg',
    tags: ['Memory', 'Flashcards', 'Study'],
    type: 'Open Source',
    subType: 'Tool'
  },
  {
    id: 'learn-8',
    title: 'Codecademy',
    description: 'Learn the technical skills you need for the job you want.',
    url: 'https://www.codecademy.com',
    categoryId: 'learning',
    tags: ['Interactive', 'Coding', 'Skills'],
    type: 'Freemium',
    subType: 'Coding'
  },
  {
    id: 'learn-9',
    title: 'Ted Talks',
    description: 'Influential videos from expert speakers on education, business, science, tech and creativity.',
    url: 'https://www.ted.com',
    categoryId: 'learning',
    tags: ['Inspiration', 'Video', 'Lectures'],
    type: 'Free',
    subType: 'Media'
  },
  {
    id: 'learn-10',
    title: 'MDN Web Docs',
    description: 'Resources for developers, by developers. Documenting web technologies.',
    url: 'https://developer.mozilla.org',
    categoryId: 'learning',
    tags: ['Documentation', 'Web', 'Reference'],
    type: 'Free',
    subType: 'Reference'
  },

  // --- Gaming ---
  {
    id: 'game-1',
    title: 'Steam',
    description: 'The ultimate destination for playing, discussing, and creating games.',
    url: 'https://store.steampowered.com',
    categoryId: 'gaming',
    tags: ['Store', 'Community', 'PC'],
    type: 'Free',
    subType: 'Platform'
  },
  {
    id: 'game-2',
    title: 'Epic Games',
    description: 'A video game digital distribution service and storefront.',
    url: 'https://store.epicgames.com',
    categoryId: 'gaming',
    tags: ['Store', 'Free Games', 'PC'],
    type: 'Free',
    subType: 'Platform'
  },
  {
    id: 'game-3',
    title: 'Discord',
    description: 'The easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close.',
    url: 'https://discord.com',
    categoryId: 'gaming',
    tags: ['Chat', 'VoIP', 'Community'],
    type: 'Free',
    subType: 'Social'
  },
  {
    id: 'game-4',
    title: 'Itch.io',
    description: 'A simple way to find and share indie games online for free.',
    url: 'https://itch.io',
    categoryId: 'gaming',
    tags: ['Indie', 'Store', 'Hosting'],
    type: 'Free',
    subType: 'Platform'
  },
  {
    id: 'game-5',
    title: 'GOG Galaxy',
    description: 'All your games and friends in one place. DRM-free games.',
    url: 'https://www.gog.com/galaxy',
    categoryId: 'gaming',
    tags: ['Launcher', 'DRM-free', 'Store'],
    type: 'Free',
    subType: 'Launcher'
  },
  {
    id: 'game-6',
    title: 'RetroArch',
    description: 'Frontend for emulators, game engines and media players.',
    url: 'https://www.retroarch.com',
    categoryId: 'gaming',
    iconName: 'https://api.iconify.design/simple-icons:retroarch.svg',
    tags: ['Emulation', 'Retro', 'All-in-one'],
    type: 'Open Source',
    subType: 'Emulation'
  },
  {
    id: 'game-7',
    title: 'Nexus Mods',
    description: 'We host 500,000+ mods for 2,500+ games from Warhammer 40,000 to The Witcher.',
    url: 'https://www.nexusmods.com',
    categoryId: 'gaming',
    iconName: 'https://api.iconify.design/simple-icons:nexusmods.svg',
    tags: ['Mods', 'Community', 'Tools'],
    type: 'Free',
    subType: 'Mods'
  },
  {
    id: 'game-8',
    title: 'GeForce Now',
    description: 'Cloud gaming service that transforms your device into a powerful PC gaming rig.',
    url: 'https://www.nvidia.com/en-us/geforce-now',
    categoryId: 'gaming',
    tags: ['Cloud', 'Streaming', 'Nvidia'],
    type: 'Freemium',
    subType: 'Cloud'
  },
  {
    id: 'game-9',
    title: 'Roblox',
    description: 'A global platform where millions of people gather together to imagine, create, and share experiences.',
    url: 'https://www.roblox.com',
    categoryId: 'gaming',
    tags: ['Social', 'Sandbox', 'Creation'],
    type: 'Freemium',
    subType: 'Platform'
  },
  {
    id: 'game-10',
    title: 'Lutris',
    description: 'Open Source gaming platform for Linux. Installs and launches games.',
    url: 'https://lutris.net',
    categoryId: 'gaming',
    tags: ['Linux', 'Launcher', 'Manager'],
    iconName: 'https://api.iconify.design/logos:lutris.svg',
    type: 'Open Source',
    subType: 'Launcher'
  },

  // --- Reading ---
  {
    id: 'read-1',
    title: 'Project Gutenberg',
    description: 'A library of over 70,000 free eBooks. Choose among free epub and Kindle eBooks.',
    url: 'https://www.gutenberg.org',
    categoryId: 'reading',
    iconName: 'https://api.iconify.design/simple-icons:gutenberg.svg',
    tags: ['Ebooks', 'Public Domain', 'Library'],
    type: 'Free',
    subType: 'Library'
  },
  {
    id: 'read-2',
    title: 'Goodreads',
    description: 'Meet your next favorite book. Review, track, and discover new reads.',
    url: 'https://www.goodreads.com',
    categoryId: 'reading',
    tags: ['Social', 'Reviews', 'Tracking'],
    type: 'Free',
    subType: 'Community'
  },
  {
    id: 'read-3',
    title: 'Calibre',
    description: 'The one stop solution for all your e-book needs. Comprehensive e-book manager.',
    url: 'https://calibre-ebook.com',
    categoryId: 'reading',
    tags: ['Manager', 'Converter', 'Reader'],
    iconName: 'https://api.iconify.design/simple-icons:calibre.svg',
    type: 'Open Source',
    subType: 'Software'
  },
  {
    id: 'read-4',
    title: 'Audible',
    description: 'Unmatched selection of audiobooks, original audio shows, and podcasts.',
    url: 'https://www.audible.com',
    categoryId: 'reading',
    tags: ['Audiobooks', 'Amazon', 'Listen'],
    type: 'Paid',
    subType: 'Audio'
  },
  {
    id: 'read-5',
    title: 'Archive.org',
    description: 'Non-profit library of millions of free books, movies, software, music, and websites.',
    url: 'https://archive.org',
    categoryId: 'reading',
    tags: ['History', 'Library', 'Preservation'],
    type: 'Free',
    subType: 'Archive'
  },
  {
    id: 'read-6',
    title: 'Feedly',
    description: 'Keep up with the topics and trends you care about, without the overwhelm.',
    url: 'https://feedly.com',
    categoryId: 'reading',
    tags: ['RSS', 'News', 'Aggregator'],
    type: 'Freemium',
    subType: 'RSS'
  },
  {
    id: 'read-7',
    title: 'Pocket',
    description: 'Save interesting stories and articles to read later.',
    url: 'https://getpocket.com',
    categoryId: 'reading',
    tags: ['Bookmarks', 'Read Later', 'Offline'],
    type: 'Freemium',
    subType: 'Tool'
  },
  {
    id: 'read-8',
    title: 'Wattpad',
    description: 'The world\'s most loved social storytelling platform.',
    url: 'https://www.wattpad.com',
    categoryId: 'reading',
    iconName: 'https://api.iconify.design/simple-icons:wattpad.svg',
    tags: ['Stories', 'Writing', 'Community'],
    type: 'Free',
    subType: 'Platform'
  },
  {
    id: 'read-9',
    title: 'Libby',
    description: 'Borrow ebooks, audiobooks, magazines, and more from your local library for free.',
    url: 'https://libbyapp.com',
    categoryId: 'reading',
    tags: ['Library', 'App', 'Free'],
    iconName: 'https://api.iconify.design/simple-icons:libby.svg',
    type: 'Free',
    subType: 'App'
  },
  {
    id: 'read-10',
    title: 'Medium',
    description: 'Where good ideas find you. Read and share new perspectives on just about any topic.',
    url: 'https://medium.com',
    categoryId: 'reading',
    tags: ['Articles', 'Blog', 'Writing'],
    type: 'Freemium',
    subType: 'Platform'
  },

  // --- Downloading ---
  {
    id: 'dl-1',
    title: 'qBittorrent',
    description: 'A free and reliable P2P BitTorrent client. An open-source alternative to µTorrent.',
    url: 'https://www.qbittorrent.org',
    categoryId: 'downloading',
    tags: ['Torrent', 'P2P', 'Client'],
    iconName: 'https://api.iconify.design/logos:qbittorrent.svg',
    type: 'Open Source',
    subType: 'Client'
  },
  {
    id: 'dl-2',
    title: 'JDownloader 2',
    description: 'Free, open-source download management tool with a huge community.',
    url: 'https://jdownloader.org',
    categoryId: 'downloading',
    tags: ['Manager', 'Automated', 'Java'],
    iconName: 'https://api.iconify.design/simple-icons:jdownloader.svg',
    type: 'Open Source',
    subType: 'Manager'
  },
  {
    id: 'dl-3',
    title: 'Internet Download Manager',
    description: 'Tool to increase download speeds by up to 5 times, resume and schedule downloads.',
    url: 'https://www.internetdownloadmanager.com',
    categoryId: 'downloading',
    tags: ['Accelerator', 'Manager', 'Windows'],
    iconName: 'solar:rocket-2-linear',
    type: 'Paid',
    subType: 'Manager'
  },
  {
    id: 'dl-4',
    title: 'WeTransfer',
    description: 'The simplest way to send your files around the world.',
    url: 'https://wetransfer.com',
    categoryId: 'downloading',
    tags: ['File Sharing', 'Transfer', 'Cloud'],
    type: 'Freemium',
    subType: 'Transfer'
  },
  {
    id: 'dl-5',
    title: 'Google Drive',
    description: 'Store, share, and collaborate on files and folders from any mobile device, tablet, or computer.',
    url: 'https://www.google.com/drive',
    categoryId: 'downloading',
    tags: ['Storage', 'Cloud', 'Google'],
    type: 'Freemium',
    subType: 'Storage'
  },
  {
    id: 'dl-6',
    title: 'Dropbox',
    description: 'A modern workspace designed to reduce busywork-so you can focus on the things that matter.',
    url: 'https://www.dropbox.com',
    categoryId: 'downloading',
    tags: ['Storage', 'Sync', 'Cloud'],
    type: 'Freemium',
    subType: 'Storage'
  },
  {
    id: 'dl-7',
    title: '4K Video Downloader',
    description: 'Download video and audio from YouTube and other video sites.',
    url: 'https://www.4kdownload.com',
    categoryId: 'downloading',
    tags: ['Video', 'YouTube', 'Tool'],
    iconName: 'solar:videocamera-record-linear',
    type: 'Freemium',
    subType: 'Tool'
  },
  {
    id: 'dl-8',
    title: 'Transmission',
    description: 'A Fast, Easy, and Free BitTorrent Client.',
    url: 'https://transmissionbt.com',
    categoryId: 'downloading',
    tags: ['Torrent', 'Lightweight', 'Mac'],
    iconName: 'https://api.iconify.design/logos:transmission.svg',
    type: 'Open Source',
    subType: 'Client'
  },
  {
    id: 'dl-9',
    title: 'Mega',
    description: 'Reliable storage and fast transfers. We provide end-to-end encrypted cloud storage.',
    url: 'https://mega.io',
    categoryId: 'downloading',
    iconName: 'https://api.iconify.design/simple-icons:mega.svg',
    tags: ['Storage', 'Encrypted', 'Cloud'],
    type: 'Freemium',
    subType: 'Storage'
  },
  {
    id: 'dl-10',
    title: 'Free Download Manager',
    description: 'A powerful modern download accelerator and organizer.',
    url: 'https://www.freedownloadmanager.org',
    categoryId: 'downloading',
    tags: ['Accelerator', 'Video', 'Torrent'],
    iconName: 'solar:download-twice-linear',
    type: 'Free',
    subType: 'Manager'
  },

  // --- AI Tools ---
  {
    id: 'ai-1',
    title: 'ChatGPT',
    description: 'A conversational AI model capable of generating human-like text based on prompts.',
    url: 'https://chat.openai.com',
    categoryId: 'ai-tools',
    tags: ['AI', 'Chatbot', 'OpenAI'],
    isNew: true,
    isFeatured: true,
    type: 'Freemium',
    subType: 'Assistant'
  },
  {
    id: 'ai-2',
    title: 'Midjourney',
    description: 'Generative artificial intelligence program and service that creates images from natural language descriptions.',
    url: 'https://www.midjourney.com',
    categoryId: 'ai-tools',
    tags: ['AI', 'Art', 'Image Gen'],
    iconName: 'https://api.iconify.design/simple-icons:midjourney.svg',
    type: 'Paid',
    subType: 'Art'
  },
  {
    id: 'ai-3',
    title: 'Claude',
    description: 'A next-generation AI assistant built for work and trained to be safe, accurate, and secure.',
    url: 'https://claude.ai',
    categoryId: 'ai-tools',
    iconName: 'https://api.iconify.design/logos:anthropic-icon.svg',
    tags: ['AI', 'Chatbot', 'Anthropic'],
    type: 'Freemium',
    subType: 'Assistant'
  },
  {
    id: 'ai-4',
    title: 'Google Gemini',
    description: 'Google’s most capable AI model, built to be multimodal from the ground up.',
    url: 'https://gemini.google.com',
    categoryId: 'ai-tools',
    tags: ['AI', 'Google', 'Multimodal'],
    type: 'Free',
    subType: 'Assistant'
  },
  {
    id: 'ai-5',
    title: 'Perplexity AI',
    description: 'An AI-powered answer engine that answers queries using natural language predictive text.',
    url: 'https://www.perplexity.ai',
    categoryId: 'ai-tools',
    iconName: 'https://api.iconify.design/simple-icons:perplexity.svg',
    tags: ['AI', 'Search', 'Research'],
    isFeatured: true,
    type: 'Freemium',
    subType: 'Search'
  },
  {
    id: 'ai-6',
    title: 'Stable Diffusion',
    description: 'A latent text-to-image diffusion model capable of generating photo-realistic images given any text input.',
    url: 'https://stability.ai',
    categoryId: 'ai-tools',
    tags: ['AI', 'Art', 'Open Source'],
    iconName: 'https://api.iconify.design/simple-icons:stabilityai.svg',
    type: 'Open Source',
    subType: 'Art'
  },
  {
    id: 'ai-7',
    title: 'DALL-E 3',
    description: 'AI system that can create realistic images and art from a description in natural language.',
    url: 'https://openai.com/dall-e-3',
    categoryId: 'ai-tools',
    iconName: 'https://api.iconify.design/logos:openai-icon.svg',
    tags: ['AI', 'Art', 'OpenAI'],
    type: 'Paid',
    subType: 'Art'
  },
  {
    id: 'ai-8',
    title: 'Jasper',
    description: 'AI copywriter and content generator for teams to create high-quality content faster.',
    url: 'https://www.jasper.ai',
    categoryId: 'ai-tools',
    tags: ['AI', 'Writing', 'Marketing'],
    iconName: 'https://api.iconify.design/simple-icons:jasper.svg',
    type: 'Paid',
    subType: 'Writing'
  },
  {
    id: 'ai-9',
    title: 'Copy.ai',
    description: 'AI-powered copywriter that generates high-quality copy for your business.',
    url: 'https://www.copy.ai',
    categoryId: 'ai-tools',
    tags: ['AI', 'Writing', 'Marketing'],
    iconName: 'https://api.iconify.design/logos:copy-ai.svg',
    type: 'Freemium',
    subType: 'Writing'
  },
  {
    id: 'ai-10',
    title: 'GitHub Copilot',
    description: 'Your AI pair programmer that helps you write code faster and with less work.',
    url: 'https://github.com/features/copilot',
    categoryId: 'ai-tools',
    tags: ['AI', 'Coding', 'Dev'],
    isFeatured: true,
    type: 'Paid',
    subType: 'Coding'
  },
  {
    id: 'ai-11',
    title: 'Runway',
    description: 'Applied AI research company building the next generation of creativity tools.',
    url: 'https://runwayml.com',
    categoryId: 'ai-tools',
    tags: ['AI', 'Video', 'Editing'],
    iconName: 'https://api.iconify.design/simple-icons:runway.svg',
    type: 'Freemium',
    subType: 'Video'
  },
  {
    id: 'ai-12',
    title: 'Hugging Face',
    description: 'The AI community building the future. Build, train and deploy state of the art models.',
    url: 'https://huggingface.co',
    categoryId: 'ai-tools',
    tags: ['AI', 'Dev', 'Models'],
    type: 'Open Source',
    subType: 'Platform'
  },
  {
    id: 'ai-13',
    title: 'ElevenLabs',
    description: 'The most realistic and versatile AI speech software. Premier AI text to speech.',
    url: 'https://elevenlabs.io',
    categoryId: 'ai-tools',
    iconName: 'https://api.iconify.design/simple-icons:elevenlabs.svg',
    tags: ['AI', 'Audio', 'TTS'],
    type: 'Freemium',
    subType: 'Audio'
  },
  {
    id: 'ai-14',
    title: 'Suno',
    description: 'Building a future where anyone can make great music.',
    url: 'https://suno.com',
    categoryId: 'ai-tools',
    iconName: 'https://api.iconify.design/simple-icons:suno.svg',
    tags: ['AI', 'Music', 'Audio'],
    isNew: true,
    type: 'Freemium',
    subType: 'Music'
  },
  {
    id: 'ai-15',
    title: 'Luma Dream Machine',
    description: 'An AI model that makes high quality, realistic videos from text and images.',
    url: 'https://lumalabs.ai/dream-machine',
    categoryId: 'ai-tools',
    tags: ['AI', 'Video', 'Gen AI'],
    iconName: 'solar:clapperboard-edit-linear',
    isNew: true,
    type: 'Freemium',
    subType: 'Video'
  },
  {
    id: 'ai-16',
    title: 'Character.ai',
    description: 'Chat with open-ended conversational applications where you can create characters.',
    url: 'https://character.ai',
    categoryId: 'ai-tools',
    tags: ['AI', 'Chat', 'Entertainment'],
    iconName: 'https://api.iconify.design/simple-icons:characterai.svg',
    type: 'Free',
    subType: 'Chat'
  },
  {
    id: 'ai-17',
    title: 'Descript',
    description: 'There’s a new way to make video and podcasts. A good way.',
    url: 'https://www.descript.com',
    categoryId: 'ai-tools',
    tags: ['AI', 'Video', 'Podcasting'],
    iconName: 'https://api.iconify.design/simple-icons:descript.svg',
    type: 'Freemium',
    subType: 'Editing'
  },
  {
    id: 'ai-18',
    title: 'Grammarly',
    description: 'AI writing assistance that helps you write clearly and effectively.',
    url: 'https://www.grammarly.com',
    categoryId: 'ai-tools',
    iconName: 'https://api.iconify.design/logos:grammarly-icon.svg',
    tags: ['AI', 'Writing', 'Productivity'],
    type: 'Freemium',
    subType: 'Writing'
  },
  {
    id: 'ai-19',
    title: 'QuillBot',
    description: 'AI-powered paraphrasing tool that helps you enhance your writing.',
    url: 'https://quillbot.com',
    categoryId: 'ai-tools',
    tags: ['AI', 'Writing', 'Student'],
    iconName: 'https://api.iconify.design/simple-icons:quillbot.svg',
    type: 'Freemium',
    subType: 'Writing'
  },
  {
    id: 'ai-20',
    title: 'Otter.ai',
    description: 'Get an AI meeting assistant that records audio, writes notes, and generates summaries.',
    url: 'https://otter.ai',
    categoryId: 'ai-tools',
    tags: ['AI', 'Productivity', 'Meetings'],
    iconName: 'https://api.iconify.design/logos:otter-icon.svg',
    type: 'Freemium',
    subType: 'Productivity'
  },
  {
    id: 'ai-21',
    title: 'Gamma',
    description: 'A new medium for presenting ideas. Powered by AI.',
    url: 'https://gamma.app',
    categoryId: 'ai-tools',
    tags: ['AI', 'Presentation', 'Design'],
    iconName: 'https://api.iconify.design/simple-icons:gamma.svg',
    type: 'Freemium',
    subType: 'Presentation'
  },
  {
    id: 'ai-22',
    title: 'Beautiful.ai',
    description: 'Presentation software that designs for you.',
    url: 'https://www.beautiful.ai',
    categoryId: 'ai-tools',
    tags: ['AI', 'Presentation', 'Design'],
    iconName: 'https://api.iconify.design/simple-icons:beautifulai.svg',
    type: 'Paid',
    subType: 'Presentation'
  },
  {
    id: 'ai-23',
    title: 'Synthesia',
    description: 'Create professional AI videos from text in 120+ languages.',
    url: 'https://www.synthesia.io',
    categoryId: 'ai-tools',
    tags: ['AI', 'Video', 'Avatar'],
    iconName: 'https://api.iconify.design/simple-icons:synthesia.svg',
    type: 'Paid',
    subType: 'Video'
  },
  {
    id: 'ai-24',
    title: 'Tabnine',
    description: 'AI assistant for software developers. Code faster with whole-line & full-function code completions.',
    url: 'https://www.tabnine.com',
    categoryId: 'ai-tools',
    tags: ['AI', 'Coding', 'Dev'],
    iconName: 'https://api.iconify.design/logos:tabnine.svg',
    type: 'Freemium',
    subType: 'Coding'
  },
  {
    id: 'ai-25',
    title: 'Pika',
    description: 'An idea-to-video platform that brings your creativity to motion.',
    url: 'https://pika.art',
    categoryId: 'ai-tools',
    tags: ['AI', 'Video', 'Creative'],
    iconName: 'solar:filmstrip-linear',
    type: 'Freemium',
    subType: 'Video'
  },
  {
    id: 'ai-26',
    title: 'Leonardo.Ai',
    description: 'Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.',
    url: 'https://leonardo.ai',
    categoryId: 'ai-tools',
    tags: ['AI', 'Art', 'Design'],
    iconName: 'https://api.iconify.design/simple-icons:leonardoai.svg',
    type: 'Freemium',
    subType: 'Art'
  },
  {
    id: 'ai-27',
    title: 'Notion AI',
    description: 'Access the limitless power of AI, right inside Notion.',
    url: 'https://www.notion.so/product/ai',
    categoryId: 'ai-tools',
    iconName: 'https://api.iconify.design/logos:notion-icon.svg',
    tags: ['AI', 'Productivity', 'Writing'],
    type: 'Paid',
    subType: 'Productivity'
  },
  {
    id: 'ai-28',
    title: 'Udio',
    description: 'Create music from simple text prompts.',
    url: 'https://www.udio.com',
    categoryId: 'ai-tools',
    tags: ['AI', 'Music', 'Audio'],
    iconName: 'https://api.iconify.design/simple-icons:udio.svg',
    isNew: true,
    type: 'Freemium',
    subType: 'Music'
  },
  {
    id: 'ai-29',
    title: 'Claude 3.5 Sonnet',
    description: 'Anthropic’s latest model, setting new industry benchmarks for coding, nuance, and reasoning.',
    url: 'https://claude.ai',
    categoryId: 'ai-tools',
    tags: ['AI', 'Chatbot', 'Dev'],
    iconName: 'solar:cpu-bolt-linear',
    isNew: true,
    type: 'Freemium',
    subType: 'Assistant'
  },
  {
    id: 'ai-30',
    title: 'V0',
    description: 'Generate UI with simple text prompts. Copy, paste, ship.',
    url: 'https://v0.dev',
    categoryId: 'ai-tools',
    iconName: 'https://api.iconify.design/simple-icons:vercel.svg',
    tags: ['AI', 'Web Dev', 'UI'],
    type: 'Freemium',
    subType: 'Coding'
  },

  {
    id: 'stream-spotify',
    title: 'Spotify',
    description: 'Digital music service that gives you access to millions of songs.',
    url: 'https://www.spotify.com',
    categoryId: 'streaming',
    iconName: 'https://api.iconify.design/logos:spotify-icon.svg',
    tags: ['Music', 'Audio', 'Streaming'],
    type: 'Freemium',
    subType: 'Audio'
  },
  {
    id: 'stream-netflix',
    title: 'Netflix',
    description: 'Watch Netflix movies & TV shows online or stream right to your smart TV.',
    url: 'https://www.netflix.com',
    categoryId: 'streaming',
    iconName: 'https://api.iconify.design/logos:netflix-icon.svg',
    tags: ['Movies', 'TV', 'Originals'],
    type: 'Paid',
    subType: 'Video'
  },
  {
    id: 'stream-moviebox',
    title: 'Movie Box',
    description: 'A popular destination for streaming movies and TV shows for free.',
    url: 'https://moviebox.com',
    categoryId: 'streaming',
    iconName: 'solar:clapperboard-play-linear',
    tags: ['Movies', 'Free', 'Streaming'],
    type: 'Free',
    subType: 'Platform'
  },];
