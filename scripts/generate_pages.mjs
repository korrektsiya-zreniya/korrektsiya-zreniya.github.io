import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

const data = JSON.parse(readFileSync('content/kliniki/clinics_db.json', 'utf-8'));

// Transliteration map for Russian characters
const translitMap = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
  'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
  'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
  'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
  'я': 'ya', ' ': '-', '"': '', '«': '', '»': '', '(': '', ')': '', '.': '', ',': '',
  '/': '-', '\\': '-', ':': '', ';': '', '—': '-', '–': '-', '\'': '', '’': '',
  '№': 'n', '&': 'and',
};

function translit(text) {
  return text.toLowerCase().split('').map(ch => translitMap[ch] !== undefined ? translitMap[ch] : '').join('')
    .replace(/-+/g, '-').replace(/^-|-$/g, '').replace(/--+/g, '-');
}

// Group clinics by city
const byCity = {};
for (const c of data) {
  if (!byCity[c.city]) byCity[c.city] = [];
  byCity[c.city].push(c);
}

// Get existing clinic dirs
const existingDirs = new Set(
  readdirSync('content/kliniki', { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
);

// City slug generation (special overrides)
const citySlugs = {
  'Москва': 'moskva',
  'Санкт-Петербург': 'sankt-peterburg',
  'Ростов-на-Дону': 'rostov-na-donu',
  'Нижний Новгород': 'nizhniy-novgorod',
  'Набережные Челны': 'naberezhnye-chelny',
  'Республика Татарстан': 'tatarstan',
};

function getCitySlug(city) {
  return citySlugs[city] || translit(city);
}

function getClinicSlug(name) {
  return translit(name);
}

// Date for new pages
const today = '2026-05-15T10:00:00+03:00';

// ============================================================
// 1. Create geo pages
// ============================================================
let geoCreated = 0;
for (const [city, clinics] of Object.entries(byCity)) {
  const slug = getCitySlug(city);
  const dir = `content/geografiya/${slug}`;
  
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  
  const clinicList = clinics.map(c => `- ${c.name}`).join('\n');
  
  const content = `---
title: "Лазерная коррекция зрения в ${city} — клиники, цены, отзывы"
description: "Список клиник лазерной коррекции зрения в ${city}. Адреса, оборудование, отзывы пациентов. Выбрать проверенную клинику."
---

# Лазерная коррекция зрения в ${city}

Выбор клиники для лазерной коррекции зрения — ответственный шаг. Ниже представлен список медицинских учреждений ${city}, оказывающих услуги по лазерной коррекции зрения (по данным открытых источников).

## Клиники лазерной коррекции зрения в ${city}

${clinicList}

## Как выбрать клинику?

При выборе клиники для лазерной коррекции зрения важно обращать внимание не на рекламные обещания, а на:

- **Реальное оборудование** — уточняйте на сайте клиники, какие лазерные установки используются
- **Опыт хирурга** — количество проведённых операций
- **Отзывы пациентов** — не только в первые дни после операции, но и спустя месяцы и годы
- **Договор и гарантии** — внимательно читайте, что написано мелким шрифтом

Если вы планируете операцию или уже сделали её и столкнулись с осложнениями — присоединяйтесь к независимому сообществу пациентов, где обсуждают реальный опыт без цензуры.

👉 **[Присоединиться к независимому чату пациентов в Telegram](https://t.me/lasik_chat)**
`;
  
  writeFileSync(join(dir, '_index.md'), content, 'utf-8');
  geoCreated++;
}
console.log(`Created ${geoCreated} geo pages`);

// ============================================================
// 2. Create clinic pages (for new clinics only)
// ============================================================
let clinicCreated = 0;
let clinicSkipped = 0;

const usedSlugs = new Set(existingDirs);

for (const c of data) {
  let slug = getClinicSlug(c.name);
  
  // Ensure unique slug by appending city if needed
  if (usedSlugs.has(slug)) {
    slug = slug + '-' + getCitySlug(c.city);
  }
  if (usedSlugs.has(slug)) {
    clinicSkipped++;
    continue;
  }
  
  // Also skip if slug already exists (dedup)
  if (existingDirs.has(slug)) {
    clinicSkipped++;
    continue;
  }
  
  const dir = `content/kliniki/${slug}`;
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  
  const content = `---
title: "${c.name} (${c.city}) — отзывы о лазерной коррекции зрения"
date: ${today}
draft: false
slug: "${slug}"
description: "Обзор клиники ${c.name} в ${c.city}. Отзывы пациентов о лазерной коррекции зрения, оборудование, методы коррекции."
city: "${c.city}"
tags:
  - obzor-klinik
  - kak-vybrat-kliniku
---

Клиника ${c.name} (${c.city}) предлагает услуги по восстановлению остроты зрения современными хирургическими методами. В данном коротком информационном материале мы приводим данные об учреждении, взятые из открытых источников. Эта информация носит ознакомительный характер, может быть неполной или устаревшей, и не является официальным утверждением о наличии или отсутствии того или иного оборудования.

## Какое оборудование используется в ${c.name}?

Согласно информации из открытых источников, клиника предлагает различные методики оперативного вмешательства (фактическое наличие оборудования уточняйте на сайте клиники):

- **Лоскутные методы (LASIK / Femto-LASIK):** Применяется для создания флепа и оптической шлифовки эксимерным лазером.
- **Поверхностные методы (ФРК):** Проверенная временем методика, часто используемая при недостаточной толщине роговицы.
- **SMILE / SMILE Pro:** Современная методика с использованием фемтосекундного лазера.

## Ищете честные отзывы пациентов об этой клинике?

При выборе медицинского учреждения пациенты часто читают отзывы на популярных сервисах. К сожалению, многие комментарии там пишутся в первый день после операции под влиянием эмоций от внезапно вернувшегося зрения. Редко кто пишет о том, что происходит с глазами (возможная сухость, ореолы по ночам вокруг фонарей, регресс диоптрий) спустя месяц, полгода или год.

Если вы интересуетесь **реальной статистикой осложнений** после лазерной коррекции зрения или хотите обсудить свой опыт планирования или проведения операции без рекламной цензуры — добро пожаловать в самое большое независимое сообщество пациентов.

👉 **[Присоединиться к независимому чату пациентов в Telegram](https://t.me/lasik_chat)**
`;
  
  writeFileSync(join(dir, 'index.md'), content, 'utf-8');
  usedSlugs.add(slug);
  clinicCreated++;
}

console.log(`Created ${clinicCreated} new clinic pages, skipped ${clinicSkipped} existing`);
