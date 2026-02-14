
import https from 'https';
import fs from 'fs';

const tools = [
    { id: 'priv-1', name: 'ProtonMail', url: 'https://api.iconify.design/simple-icons:protonmail.svg' },
    { id: 'priv-7', name: 'Mullvad VPN', url: 'https://api.iconify.design/logos:mullvad.svg' },
    { id: 'priv-8', name: 'SimpleLogin', url: 'https://api.iconify.design/simple-icons:simplelogin.svg' },
    { id: 'priv-9', name: 'uBlock Origin', url: 'https://api.iconify.design/logos:u-block-origin.svg' },
    { id: 'priv-10', name: 'Veracrypt', url: 'https://api.iconify.design/simple-icons:veracrypt.svg' },

    { id: 'stream-17', name: 'MuseScore', url: 'https://api.iconify.design/logos:musescore.svg' },
    { id: 'stream-18', name: 'LMMS', url: 'https://api.iconify.design/simple-icons:lmms.svg' },
    { id: 'stream-19', name: 'Tenacity', url: 'https://api.iconify.design/simple-icons:tenacity.svg' },

    { id: 'learn-6', name: 'The Odin Project', url: 'https://api.iconify.design/logos:the-odin-project.svg' },
    { id: 'learn-7', name: 'Anki', url: 'https://api.iconify.design/simple-icons:anki.svg' },

    { id: 'game-6', name: 'RetroArch', url: 'https://api.iconify.design/simple-icons:retroarch.svg' },
    { id: 'game-7', name: 'Nexus Mods', url: 'https://api.iconify.design/simple-icons:nexusmods.svg' },
    { id: 'game-10', name: 'Lutris', url: 'https://api.iconify.design/logos:lutris.svg' },

    { id: 'read-1', name: 'Project Gutenberg', url: 'https://api.iconify.design/simple-icons:gutenberg.svg' },
    { id: 'read-3', name: 'Calibre', url: 'https://api.iconify.design/simple-icons:calibre.svg' },
    { id: 'read-8', name: 'Wattpad', url: 'https://api.iconify.design/simple-icons:wattpad.svg' },
    { id: 'read-9', name: 'Libby', url: 'https://api.iconify.design/simple-icons:libby.svg' },

    { id: 'dl-1', name: 'qBittorrent', url: 'https://api.iconify.design/logos:qbittorrent.svg' },
    { id: 'dl-2', name: 'JDownloader 2', url: 'https://api.iconify.design/simple-icons:jdownloader.svg' },
    { id: 'dl-8', name: 'Transmission', url: 'https://api.iconify.design/logos:transmission.svg' },
    { id: 'dl-9', name: 'Mega', url: 'https://api.iconify.design/simple-icons:mega.svg' },

    { id: 'ai-2', name: 'Midjourney', url: 'https://api.iconify.design/simple-icons:midjourney.svg' },
    { id: 'ai-3', name: 'Claude', url: 'https://api.iconify.design/logos:anthropic-icon.svg' },
    { id: 'ai-5', name: 'Perplexity', url: 'https://api.iconify.design/simple-icons:perplexity.svg' },
    { id: 'ai-6', name: 'Stable Diffusion', url: 'https://api.iconify.design/simple-icons:stabilityai.svg' },
    { id: 'ai-7', name: 'DALL-E 3', url: 'https://api.iconify.design/logos:openai-icon.svg' },
    { id: 'ai-8', name: 'Jasper', url: 'https://api.iconify.design/simple-icons:jasper.svg' },
    { id: 'ai-9', name: 'Copy.ai', url: 'https://api.iconify.design/logos:copy-ai.svg' },
    { id: 'ai-11', name: 'Runway', url: 'https://api.iconify.design/simple-icons:runway.svg' },
    { id: 'ai-13', name: 'ElevenLabs', url: 'https://api.iconify.design/simple-icons:elevenlabs.svg' },
    { id: 'ai-14', name: 'Suno', url: 'https://api.iconify.design/simple-icons:suno.svg' },
    { id: 'ai-16', name: 'Character.ai', url: 'https://api.iconify.design/simple-icons:characterai.svg' },
    { id: 'ai-17', name: 'Descript', url: 'https://api.iconify.design/simple-icons:descript.svg' },
    { id: 'ai-18', name: 'Grammarly', url: 'https://api.iconify.design/logos:grammarly-icon.svg' },
    { id: 'ai-19', name: 'QuillBot', url: 'https://api.iconify.design/simple-icons:quillbot.svg' },
    { id: 'ai-20', name: 'Otter.ai', url: 'https://api.iconify.design/logos:otter-icon.svg' },
    { id: 'ai-21', name: 'Gamma', url: 'https://api.iconify.design/simple-icons:gamma.svg' },
    { id: 'ai-22', name: 'Beautiful.ai', url: 'https://api.iconify.design/simple-icons:beautifulai.svg' },
    { id: 'ai-23', name: 'Synthesia', url: 'https://api.iconify.design/simple-icons:synthesia.svg' },
    { id: 'ai-24', name: 'Tabnine', url: 'https://api.iconify.design/logos:tabnine.svg' },
    { id: 'ai-26', name: 'Leonardo.Ai', url: 'https://api.iconify.design/simple-icons:leonardoai.svg' },
    { id: 'ai-27', name: 'Notion AI', url: 'https://api.iconify.design/logos:notion-icon.svg' },
    { id: 'ai-28', name: 'Udio', url: 'https://api.iconify.design/simple-icons:udio.svg' },
    { id: 'ai-30', name: 'V0', url: 'https://api.iconify.design/simple-icons:vercel.svg' },
];

const checkUrl = (item) => {
    return new Promise((resolve) => {
        https.get(item.url, (res) => {
            resolve({ ...item, status: res.statusCode });
        }).on('error', () => {
            resolve({ ...item, status: 500 });
        });
    });
};

(async () => {
    const results = await Promise.all(tools.map(checkUrl));
    const valid = results.filter(r => r.status === 200);
    const invalid = results.filter(r => r.status !== 200);

    let output = '--- Valid URLs ---\n';
    valid.forEach(v => output += `${v.id}: ${v.url}\n`);

    output += '\n--- Invalid URLs ---\n';
    invalid.forEach(v => output += `${v.id} (${v.name}): ${v.url} (${v.status})\n`);

    fs.writeFileSync('logos_result.txt', output, 'utf8');
})();
