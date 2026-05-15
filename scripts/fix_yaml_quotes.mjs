import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const klinikiDir = 'content/kliniki';
const dirs = readdirSync(klinikiDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

let fixed = 0;

for (const dir of dirs) {
  const file = join(klinikiDir, dir, 'index.md');
  let content = readFileSync(file, 'utf-8');
  
  // Extract front matter
  const fmStart = content.indexOf('---\n');
  if (fmStart !== 0) continue;
  
  const fmEnd = content.indexOf('\n---\n', 4);
  if (fmEnd === -1) continue;
  
  const fmContent = content.substring(4, fmEnd);
  const lines = fmContent.split('\n');
  const newLines = [];
  let fileModified = false;
  
  for (const line of lines) {
    // Check for unescaped quotes in string values: key: "value with "inner" quotes"
    const m = line.match(/^(\w[\w-]*):\s*"(.*)"$/);
    if (m) {
      const key = m[1];
      const val = m[2];
      // If value contains ", it's broken YAML - replace inner " with «»
      if (val.includes('"')) {
        let inGuillemet = false;
        let fixedVal = '';
        for (let i = 0; i < val.length; i++) {
          if (val[i] === '"' && val[i+1] !== '"') {
            fixedVal += inGuillemet ? '»' : '«';
            inGuillemet = !inGuillemet;
          } else {
            fixedVal += val[i];
          }
        }
        newLines.push(`${key}: "${fixedVal}"`);
        fileModified = true;
        continue;
      }
    }
    newLines.push(line);
  }
  
  if (fileModified) {
    content = '---\n' + newLines.join('\n') + content.substring(fmEnd);
    writeFileSync(file, content, 'utf-8');
    console.log(`  Fixed: ${file}`);
    fixed++;
  }
}

console.log(`\nFixed ${fixed} files`);
