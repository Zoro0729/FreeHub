
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');
const newLines = [];
let buffer = [];
let insideObject = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Start of resources array or object
    if (line.trim().startsWith('{') || (insideObject && line.trim().endsWith('{'))) {
        if (buffer.length > 0) {
            // Process previous buffer if any (shouldn't happen if logic is correct)
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

// Flush remaining
if (buffer.length > 0) newLines.push(...buffer);

function processBuffer(buf) {
    const joined = buf.join('\n');
    let logoUrl = null;

    // Extract logoUrl
    const logoMatch = joined.match(/logoUrl:\s*'([^']*)'/);
    if (logoMatch) {
        logoUrl = logoMatch[1];
    }

    // Filter out logoUrl lines
    const cleanedBuf = buf.filter(l => !l.includes('logoUrl:'));

    // If we found a logoUrl, update iconName
    if (logoUrl) {
        return cleanedBuf.map(l => {
            if (l.includes('iconName:')) {
                // Keep indentation, replace value
                return l.replace(/iconName:\s*'[^']*'/, `iconName: '${logoUrl}'`);
            }
            return l;
        });
    }

    return cleanedBuf;
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
console.log('Refactoring complete.');
