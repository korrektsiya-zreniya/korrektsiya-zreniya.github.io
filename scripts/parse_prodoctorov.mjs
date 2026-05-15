import { readFileSync, writeFileSync } from 'fs';

// City data from Prodoctorov main page
const CITIES = [
  { name: 'Архангельск', slug: 'arhangelsk' },
  { name: 'Балашиха', slug: 'balashiha' },
  { name: 'Барнаул', slug: 'barnaul' },
  { name: 'Брянск', slug: 'bryansk' },
  { name: 'Владивосток', slug: 'vladivostok' },
  { name: 'Волгоград', slug: 'volgograd' },
  { name: 'Вологда', slug: 'vologda' },
  { name: 'Воронеж', slug: 'voronezh' },
  { name: 'Екатеринбург', slug: 'ekaterinburg' },
  { name: 'Иваново', slug: 'ivanovo' },
  { name: 'Ижевск', slug: 'izhevsk' },
  { name: 'Казань', slug: 'kazan' },
  { name: 'Кемерово', slug: 'kemerovo' },
  { name: 'Краснодар', slug: 'krasnodar' },
  { name: 'Красноярск', slug: 'krasnoyarsk' },
  { name: 'Курган', slug: 'kurgan' },
  { name: 'Махачкала', slug: 'mahachkala' },
  { name: 'Москва', slug: 'moskva' },
  { name: 'Набережные Челны', slug: 'naberezhnye-chelny' },
  { name: 'Нижний Новгород', slug: 'nnovgorod' },
  { name: 'Новокузнецк', slug: 'novokuzneck' },
  { name: 'Новосибирск', slug: 'novosibirsk' },
  { name: 'Омск', slug: 'omsk' },
  { name: 'Оренбург', slug: 'orenburg' },
  { name: 'Пенза', slug: 'penza' },
  { name: 'Пермь', slug: 'perm' },
  { name: 'Ростов-на-Дону', slug: 'rostov-na-donu' },
  { name: 'Рязань', slug: 'ryazan' },
  { name: 'Самара', slug: 'samara' },
  { name: 'Санкт-Петербург', slug: 'spb' },
  { name: 'Саратов', slug: 'saratov' },
  { name: 'Севастополь', slug: 'sevastopol' },
  { name: 'Симферополь', slug: 'simferopol' },
  { name: 'Смоленск', slug: 'smolensk' },
  { name: 'Ставрополь', slug: 'stavropol' },
  { name: 'Тверь', slug: 'tver' },
  { name: 'Тольятти', slug: 'tolyatti' },
  { name: 'Томск', slug: 'tomsk' },
  { name: 'Тюмень', slug: 'tyumen' },
  { name: 'Ульяновск', slug: 'ulyanovsk' },
  { name: 'Уфа', slug: 'ufa' },
  { name: 'Чебоксары', slug: 'cheboksary' },
  { name: 'Челябинск', slug: 'chelyabinsk' },
  { name: 'Череповец', slug: 'cherepovec' },
  { name: 'Чита', slug: 'chita' },
  { name: 'Ярославль', slug: 'yaroslavl' },
];

async function fetchCity(city) {
  const url = `https://prodoctorov.ru/${city.slug}/uslugi/lechenie-glaz/lazernaya-korrekciya-zreniya/`;
  console.log(`  Fetching ${city.name}...`);
  const resp = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
    },
  });
  if (!resp.ok) {
    console.log(`    HTTP ${resp.status} for ${city.name}, skipping`);
    return [];
  }
  const html = await resp.text();
  
  const clinics = [];
  const regex = /lpu_card_heading_lpu_name">\s*([^<]+)<\/span>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const name = match[1].trim();
    if (name) {
      clinics.push({
        name,
        city: city.name,
        city_slug: city.slug,
        source: 'prodoctorov',
      });
    }
  }
  
  console.log(`    Found ${clinics.length} clinics`);
  return clinics;
}

async function main() {
  const allClinics = [];
  
  // Process 5 cities at a time to be nice to the server
  const batchSize = 5;
  for (let i = 0; i < CITIES.length; i += batchSize) {
    const batch = CITIES.slice(i, i + batchSize);
    const results = await Promise.allSettled(batch.map(fetchCity));
    for (const r of results) {
      if (r.status === 'fulfilled') {
        allClinics.push(...r.value);
      }
    }
    // Small delay between batches
    if (i + batchSize < CITIES.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  
  // Read existing MedAdvisor data
  let medadvisorData = [];
  try {
    medadvisorData = JSON.parse(readFileSync('content/kliniki/clinics_db.json', 'utf-8'));
  } catch (e) {
    console.log('No existing MedAdvisor data found, creating fresh file');
  }
  
  // Merge and deduplicate
  const seen = new Set();
  const merged = [];
  
  // Add MedAdvisor data first (has more fields)
  for (const c of medadvisorData) {
    const key = `${c.name.toLowerCase().trim()}|${c.city.toLowerCase().trim()}`;
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(c);
    }
  }
  
  // Add Prodoctorov data
  for (const c of allClinics) {
    const key = `${c.name.toLowerCase().trim()}|${c.city.toLowerCase().trim()}`;
    if (!seen.has(key)) {
      seen.add(key);
      // Add minimal record (medadvisor format)
      merged.push({
        name: c.name,
        city: c.city,
        city_slug: c.city_slug,
        address: '',
        phone: '',
        source: 'prodoctorov',
      });
    }
  }
  
  console.log(`\nTotal MedAdvisor clinics: ${medadvisorData.length}`);
  console.log(`New from Prodoctorov: ${allClinics.length}`);
  console.log(`Merged unique total: ${merged.length}`);
  
  writeFileSync('content/kliniki/clinics_db.json', JSON.stringify(merged, null, 2), 'utf-8');
  console.log(`Saved to content/kliniki/clinics_db.json`);
}

main().catch(console.error);
