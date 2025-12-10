// check_articles.js
// This script scans all markdown files under the content directory
// and validates that each file has required front matter fields.
// It also reports any lines containing TODO or FIXME placeholders.

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const REQUIRED_FIELDS = ['title', 'slug', 'type', 'date', 'description'];

function parseFrontMatter(content) {
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) return null;
    const yaml = fmMatch[1];
    const lines = yaml.split('\n');
    const data = {};
    let currentKey = null;
    for (const line of lines) {
        if (/^\s*$/.test(line)) continue;
        const keyVal = line.match(/^([^:]+):\s*(.*)$/);
        if (keyVal) {
            currentKey = keyVal[1].trim();
            const val = keyVal[2].trim();
            // handle list start
            if (val === '' && lines[lines.indexOf(line) + 1]?.trim().startsWith('-')) {
                data[currentKey] = [];
            } else {
                data[currentKey] = val;
            }
        } else if (currentKey && line.trim().startsWith('-')) {
            if (!Array.isArray(data[currentKey])) data[currentKey] = [];
            data[currentKey].push(line.replace(/^\s*-\s*/, '').trim());
        }
    }
    return data;
}

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = parseFrontMatter(content);
    const relPath = path.relative(CONTENT_DIR, filePath);
    if (!fm) {
        console.log(`⚠️  Missing front matter: ${relPath}`);
        return;
    }
    const missing = REQUIRED_FIELDS.filter(f => !(f in fm) || fm[f] === '');
    if (missing.length) {
        console.log(`⚠️  Missing fields [${missing.join(', ')}] in ${relPath}`);
    }
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
        if (/TODO|FIXME/.test(line)) {
            console.log(`🔎  Placeholder in ${relPath}:${idx + 1} -> ${line.trim()}`);
        }
    });
}

function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            checkFile(fullPath);
        }
    }
}

console.log(`Scanning markdown files in ${CONTENT_DIR}...`);
walk(CONTENT_DIR);
