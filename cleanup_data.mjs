
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');
const newLines = lines.filter(line => !line.trim().startsWith('logoUrl:'));

fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
console.log('Cleanup complete.');
