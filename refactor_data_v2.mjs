
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Use regex replace to handle logoUrl property removal and iconName update
// Strategy:
// 1. Find blocks with logoUrl
// 2. Extract URL
// 3. Replace iconName value if it exists, or update logic

// Regex to find logoUrl line: property name, optional space, colon, optional space, quote, value, quote, comma?
const logoRegex = /logoUrl:\s*['"]([^'"]*)['"],?\r?\n?/g;

let match;
const logos = new Map(); // Map to store logos if we needed to associate by ID, but simple line processing is harder with multiline regex.

// Let's do line by line again but simpler.
const lines = content.split('\n');
const newLines = [];
let buffer = [];
let insideObject = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Detect object start
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
    let logoUrl = null;
    let logoIndex = -1;

    // Find logoUrl
    for (let j = 0; j < buf.length; j++) {
        const m = buf[j].match(/logoUrl:\s*['"]([^'"]*)['"]/);
        if (m) {
            logoUrl = m[1];
            logoIndex = j;
            break;
        }
    }

    if (logoUrl) {
        // Remove logoUrl line
        buf.splice(logoIndex, 1);

        // Find iconName and update it
        let iconUpdated = false;
        for (let j = 0; j < buf.length; j++) {
            if (buf[j].includes('iconName:')) {
                buf[j] = buf[j].replace(/iconName:\s*['"][^'"]*['"]/, `iconName: '${logoUrl}'`);
                iconUpdated = true;
                break;
            }
        }

        // If iconName wasn't there (shouldn't happen based on file, but possible), we might need to add it?
        // But for now assuming iconName exists as per previous file structure.
    }
    return buf;
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
console.log('Refactoring V2 complete.');
