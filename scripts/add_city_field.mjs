import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const cityMap = {
  '3z': 'Москва',
  'cvz': 'Москва',
  'eksimer': 'Москва',
  'ekspert-zrenie': 'Москва',
  'klinika-doktora-shilovoj': 'Москва',
  'klinika-novyj-vzglyad': 'Москва',
  'klinika-ulybnis': 'Москва',
  'kliniki-saratova': 'Саратов',
  'medsi': 'Москва',
  'mntk-fedorova-moskva': 'Москва',
  'mntk-fedorova-spb': 'Санкт-Петербург',
  'mntk-mikrohirurgiya-glaza-orenburg': 'Оренбург',
  'smotri-kirov': 'Киров',
  'spektr': 'Москва',
  'yourmed': 'Москва',
  'yuvt': 'Москва',
  'zrenie-2100': 'Москва',
  'zrenie-novosibirsk': 'Новосибирск',
};

for (const [dir, city] of Object.entries(cityMap)) {
  const file = join('content', 'kliniki', dir, 'index.md');
  const content = readFileSync(file, 'utf-8');
  
  if (content.includes('city:')) {
    console.log(`  Skipping ${dir} (already has city)`);
    continue;
  }
  
  // Add city field after description line
  const updated = content.replace(
    /(description:.*\n)/,
    `$1city: "${city}"\n`
  );
  
  writeFileSync(file, updated, 'utf-8');
  console.log(`  Added city="${city}" to ${dir}`);
}
