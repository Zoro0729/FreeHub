
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// We want to add Spotify, Movie Box, Net Mirror to the Streaming category.
// Streaming category ID is 'streaming'.
// The resources array starts at line ~103 (in original file, might have shifted).
// We should find where 'subType: 'Streaming'' or similar entries are, or just find the block for streaming.
// Let's assume we can append them to the end of the streaming section if we can find it, 
// OR just append to the end of the resource list and they will be sorted by category in the app? 
// The app seems to group by category.

// Let's define the new tools.
const newTools = [
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
        url: 'https://moviebox.com', // Placeholder URL
        categoryId: 'streaming',
        iconName: 'solar:clapperboard-play-linear', // Placeholder icon if no logo
        tags: ['Movies', 'Free', 'Streaming'],
        type: 'Free',
        subType: 'Platform'
    }
];

// Determine where to insert. 
// We can look for the end of the array `];` or insert after a known streaming item.
// Let's try to maintain order if possible, but appending is safest.

// Check if these IDs already exist to avoid duplicates
const currentContent = content;
const toolsToAdd = newTools.filter(t => !currentContent.includes(`id: '${t.id}'`));

if (toolsToAdd.length === 0) {
    console.log('Tools already exist.');
} else {
    // Construct string
    const toolsString = toolsToAdd.map(t => `
  {
    id: '${t.id}',
    title: '${t.title}',
    description: '${t.description}',
    url: '${t.url}',
    categoryId: '${t.categoryId}',
    iconName: '${t.iconName}',
    tags: [${t.tags.map(tag => `'${tag}'`).join(', ')}],
    type: '${t.type}',
    subType: '${t.subType}'
  },`).join('');

    // Insert before the last closing bracket of the array
    // The file ends with `];` usually.
    const lastBracketIndex = content.lastIndexOf('];');
    if (lastBracketIndex !== -1) {
        const newContent = content.slice(0, lastBracketIndex) + toolsString + content.slice(lastBracketIndex);
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log('Added missing tools.');
    } else {
        console.error('Could not find end of resources array.');
    }
}
