
import fs from 'fs';
import path from 'path';

const paramMap = {
    'priv-1': 'https://api.iconify.design/simple-icons:protonmail.svg',
    'priv-7': 'https://api.iconify.design/logos:mullvad.svg',
    'priv-8': 'https://api.iconify.design/simple-icons:simplelogin.svg',
    'priv-9': 'https://api.iconify.design/logos:u-block-origin.svg',
    'priv-10': 'https://api.iconify.design/simple-icons:veracrypt.svg',

    'stream-17': 'https://api.iconify.design/logos:musescore.svg',
    'stream-18': 'https://api.iconify.design/simple-icons:lmms.svg',
    'stream-19': 'https://api.iconify.design/simple-icons:tenacity.svg',

    'learn-6': 'https://api.iconify.design/logos:the-odin-project.svg',
    'learn-7': 'https://api.iconify.design/simple-icons:anki.svg',

    'game-6': 'https://api.iconify.design/simple-icons:retroarch.svg',
    'game-7': 'https://api.iconify.design/simple-icons:nexusmods.svg',
    'game-10': 'https://api.iconify.design/logos:lutris.svg',

    'read-1': 'https://api.iconify.design/simple-icons:gutenberg.svg',
    'read-3': 'https://api.iconify.design/simple-icons:calibre.svg',
    'read-8': 'https://api.iconify.design/simple-icons:wattpad.svg',
    'read-9': 'https://api.iconify.design/simple-icons:libby.svg',

    'dl-1': 'https://api.iconify.design/logos:qbittorrent.svg',
    'dl-2': 'https://api.iconify.design/simple-icons:jdownloader.svg',
    'dl-8': 'https://api.iconify.design/logos:transmission.svg',
    'dl-9': 'https://api.iconify.design/simple-icons:mega.svg',

    'ai-2': 'https://api.iconify.design/simple-icons:midjourney.svg',
    'ai-3': 'https://api.iconify.design/logos:anthropic-icon.svg',
    'ai-5': 'https://api.iconify.design/simple-icons:perplexity.svg',
    'ai-6': 'https://api.iconify.design/simple-icons:stabilityai.svg',
    'ai-7': 'https://api.iconify.design/logos:openai-icon.svg',
    'ai-8': 'https://api.iconify.design/simple-icons:jasper.svg',
    'ai-9': 'https://api.iconify.design/logos:copy-ai.svg',
    'ai-11': 'https://api.iconify.design/simple-icons:runway.svg',
    'ai-13': 'https://api.iconify.design/simple-icons:elevenlabs.svg',
    'ai-14': 'https://api.iconify.design/simple-icons:suno.svg',
    'ai-16': 'https://api.iconify.design/simple-icons:characterai.svg',
    'ai-17': 'https://api.iconify.design/simple-icons:descript.svg',
    'ai-18': 'https://api.iconify.design/logos:grammarly-icon.svg',
    'ai-19': 'https://api.iconify.design/simple-icons:quillbot.svg',
    'ai-20': 'https://api.iconify.design/logos:otter-icon.svg',
    'ai-21': 'https://api.iconify.design/simple-icons:gamma.svg',
    'ai-22': 'https://api.iconify.design/simple-icons:beautifulai.svg',
    'ai-23': 'https://api.iconify.design/simple-icons:synthesia.svg',
    'ai-24': 'https://api.iconify.design/logos:tabnine.svg',
    'ai-26': 'https://api.iconify.design/simple-icons:leonardoai.svg',
    'ai-27': 'https://api.iconify.design/logos:notion-icon.svg',
    'ai-28': 'https://api.iconify.design/simple-icons:udio.svg',
    'ai-30': 'https://api.iconify.design/simple-icons:vercel.svg'
};

const filePath = path.resolve('src/data.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');
const newLines = [];
let buffer = [];
let insideObject = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (line.trim().endsWith('{')) {
        if (buffer.length > 0) {
            newLines.push(...processBuffer(buffer));
            buffer = [];
        }
        insideObject = true;
        buffer.push(line);
        continue;
    }

    if (insideObject) {
        buffer.push(line);
        if (line.trim().startsWith('}') || line.trim().endsWith('},')) {
            newLines.push(...processBuffer(buffer));
            buffer = [];
            insideObject = false;
        }
    } else {
        newLines.push(line);
    }
}
if (buffer.length > 0) newLines.push(...buffer);

function processBuffer(buf) {
    let id = null;
    let iconNameIndex = -1;

    // Find ID
    for (let j = 0; j < buf.length; j++) {
        const m = buf[j].match(/id:\s*['"]([^'"]*)['"]/);
        if (m) id = m[1];
        if (buf[j].includes('iconName:')) iconNameIndex = j;
    }

    if (id && paramMap[id]) {
        const newUrl = paramMap[id];
        if (iconNameIndex !== -1) {
            // Update existing
            buf[iconNameIndex] = buf[iconNameIndex].replace(/iconName:\s*['"][^'"]*['"]/, `iconName: '${newUrl}'`);
        } else {
            // Insert new check indentation of 'type:' or 'tags:'
            const insertIndex = buf.findIndex(l => l.includes('type:') || l.includes('tags:'));
            if (insertIndex !== -1) {
                // Get indent
                const indent = buf[insertIndex].match(/^\s*/)[0];
                buf.splice(insertIndex, 0, `${indent}iconName: '${newUrl}',`);
            } else {
                buf.splice(buf.length - 1, 0, `    iconName: '${newUrl}',`);
            }
        }
    }
    return buf;
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
console.log('Restore complete.');
