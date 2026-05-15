import { readFileSync, writeFileSync } from 'fs';

const URL_BASE = 'https://medadvisor.ru/russia/services/1173-lazernaia-korrektsiia-zreniia';

async function fetchPage(pageNum) {
  const url = `${URL_BASE}?page=${pageNum}`;
  console.log(`Fetching page ${pageNum}: ${url}`);
  const resp = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
    },
  });
  if (!resp.ok) {
    throw new Error(`HTTP ${resp.status} for page ${pageNum}`);
  }
  return resp.text();
}

function extractClinics(html) {
  const clinics = [];
  // Find each :item=" occurrence
  let searchPos = 0;
  while (true) {
    const startIdx = html.indexOf(':item="', searchPos);
    if (startIdx === -1) break;
    
    const jsonStart = startIdx + 7; // after :item="
    // Use brace counter to find matching closing }
    let depth = 0;
    let inString = false;
    let escape = false;
    let jsonEnd = -1;
    
    for (let i = jsonStart; i < html.length; i++) {
      const ch = html[i];
      
      if (escape) {
        escape = false;
        continue;
      }
      
      if (ch === '\\') {
        escape = true;
        continue;
      }
      
      if (ch === '"' && !inString) {
        // Found closing quote of the attribute
        // But wait - the JSON has &quot; for internal strings, not "
        // The closing " of the attribute should be right after the final }
        break;
      }
      
      if (ch === '&') {
        // Check for &quot; — treat as string delimiter
        if (html.substring(i, i + 6) === '&quot;') {
          if (inString) {
            inString = false;
          } else {
            inString = true;
          }
          i += 5; // skip rest of &quot;
          continue;
        }
      }
      
      if (inString) continue;
      
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          jsonEnd = i;
          break;
        }
      }
    }
    
    if (jsonEnd === -1) {
      searchPos = startIdx + 7;
      continue;
    }
    
    try {
      let jsonStr = html.substring(jsonStart, jsonEnd + 1);
      // Unescape HTML entities
      jsonStr = jsonStr.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      
      const data = JSON.parse(jsonStr);
      if (data.nameShort && data.city && data.city.name) {
        clinics.push({
          name: data.nameShort,
          city: data.city.name,
          city_slug: data.city.slug || '',
          address: data.address || '',
          phone: data.phone || '',
          source: 'medadvisor',
        });
      }
    } catch (e) {
      // Skip malformed items
    }
    
    searchPos = jsonEnd + 1;
  }
  return clinics;
}

async function main() {
  let allClinics = [];
  
  for (let page = 1; page <= 10; page++) {
    try {
      const html = await fetchPage(page);
      const clinics = extractClinics(html);
      if (clinics.length === 0) {
        console.log(`  No clinics found on page ${page}, stopping.`);
        break;
      }
      console.log(`  Found ${clinics.length} clinics on page ${page}`);
      allClinics.push(...clinics);
    } catch (e) {
      console.error(`  Error on page ${page}: ${e.message}`);
      break;
    }
  }
  
  // Deduplicate by name + city
  const seen = new Set();
  const unique = [];
  for (const c of allClinics) {
    const key = `${c.name}|${c.city}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(c);
    }
  }
  
  console.log(`\nTotal unique clinics: ${unique.length}`);
  
  // Group by city
  const byCity = {};
  for (const c of unique) {
    if (!byCity[c.city]) byCity[c.city] = [];
    byCity[c.city].push(c.name);
  }
  console.log(`Cities: ${Object.keys(byCity).length}`);
  for (const [city, names] of Object.entries(byCity).sort()) {
    console.log(`  ${city}: ${names.length} clinics`);
  }
  
  writeFileSync('content/kliniki/clinics_db.json', JSON.stringify(unique, null, 2), 'utf-8');
  console.log(`\nSaved to content/kliniki/clinics_db.json`);
}

main().catch(console.error);
