// fix_front_matter.js
// This script scans markdown files and ensures required front matter fields are present.
// Missing fields are added with placeholder values.

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const REQUIRED_FIELDS = ['title', 'slug', 'type', 'date', 'description'];

function parseFrontMatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;
    const yaml = match[1];
    const lines = yaml.split('\n');
    const data = {};
    let key = null;
    for (const line of lines) {
        if (/^\s*$/.test(line)) continue;
        const kv = line.match(/^([^:]+):\s*(.*)$/);
        if (kv) {
            key = kv[1].trim();
            const val = kv[2].trim();
            if (val === '' && lines[lines.indexOf(line) + 1]?.trim().startsWith('-')) {
                data[key] = [];
            } else {
                data[key] = val;
            }
        } else if (key && line.trim().startsWith('-')) {
            if (!Array.isArray(data[key])) data[key] = [];
            data[key].push(line.replace(/^\s*-\s*/, '').trim());
        }
    }
    return { data, start: match.index, end: match.index + match[0].length };
}

function generateSlug(filePath) {
    const rel = path.relative(CONTENT_DIR, filePath);
    const withoutExt = rel.replace(/\.md$/, '');
    return withoutExt.replace(/\/index$/, '').replace(/\\/g, '-');
}

function ensureFields(fm) {
    const missing = [];
    for (const f of REQUIRED_FIELDS) {
        if (!(f in fm.data) || fm.data[f] === '') {
            missing.push(f);
        }
    }
    return missing;
}

function fixFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = parseFrontMatter(content);
    if (!fm) {
        console.log(`⚠️  No front matter in ${filePath}`);
        return;
    }
    const missing = ensureFields(fm);
    if (missing.length === 0) return;
    // add missing fields
    const lines = [];
    for (const field of missing) {
        let value = '';
        switch (field) {
            case 'slug':
                value = generateSlug(filePath);
                break;
            case 'type':
                value = 'post';
                break;
            case 'date':
                value = '2025-01-01';
                break;
            case 'description':
                value = 'Описание отсутствует.';
                break;
            case 'title':
                value = path.basename(filePath, '.md');
                break;
        }
        lines.push(`${field}: ${value}`);
    }
    // Insert missing lines after existing front matter start line
    const before = content.slice(0, fm.end - 3); // position before closing ---
    const after = content.slice(fm.end - 3);
    const newFront = before + '\n' + lines.join('\n') + '\n' + after;
    fs.writeFileSync(filePath, newFront, 'utf8');
    console.log(`✅ Fixed ${missing.join(', ')} in ${path.relative(CONTENT_DIR, filePath)}`);
}

function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.isFile() && entry.name.endsWith('.md')) fixFile(full);
    }
}

console.log('Starting front matter fix...');
walk(CONTENT_DIR);
console.log('Done.');
