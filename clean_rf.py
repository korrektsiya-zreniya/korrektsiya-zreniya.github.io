#!/usr/bin/env python3
import os, re, sys

base = sys.argv[1] if len(sys.argv) > 1 else "/home/openclaw/korrektsiya-zreniya.github.io/content/sudebnye-dela"
texts_dir = "/tmp/sudeb_texts"

rf_dirs = [d for d in os.listdir(base) if d.startswith("rf-") and os.path.isdir(os.path.join(base, d))]

for d in sorted(rf_dirs):
    m = re.search(r'(\d+)$', d)
    if not m:
        continue
    
    case_id = m.group(1)
    html_path = os.path.join(texts_dir, f"{case_id}.html")
    md_path = os.path.join(base, d, "index.md")
    
    if not os.path.exists(html_path):
        print(f"SKIP {d}: no HTML")
        continue
    
    # Read HTML
    with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    # AGGRESSIVE strip all script/style/noscript
    for tag in ['script', 'style', 'noscript']:
        html = re.sub(r'<' + tag + r'[^>]*>.*?</' + tag + r'>', '', html, flags=re.DOTALL | re.IGNORECASE)
    
    # Strip CDATA and comments
    html = re.sub(r'<!\[CDATA\[.*?\]\]>', '', html, flags=re.DOTALL)
    html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL)
    
    # Strip ALL HTML tags
    text = re.sub(r'<[^>]+>', ' ', html)
    
    # Decode entities
    for e, c in [('&nbsp;', ' '), ('&quot;', '"'), ('&lt;', '<'), ('&gt;', '>'), ('&amp;', '&')]:
        text = text.replace(e, c)
    
    # Find start of real content - after yandex metrika garbage
    # Look for "Дело №" or "gt Дело №"
    for marker in ['gt Дело №', 'Дело №']:
        idx = text.find(marker)
        if idx > 0:
            text = text[idx + (3 if marker.startswith('gt ') else 0):]
            break
    
    # Collapse whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Truncate
    text = text[:30000]
    
    # Read markdown
    with open(md_path, 'r', encoding='utf-8', errors='ignore') as f:
        md = f.read()
    
    # Find where full text section starts (or where the garbage starts)
    # Split at first occurrence of "Дело №" in the body (after frontmatter)
    fm_end = md.find('---', 4)  # end of frontmatter
    if fm_end < 0:
        continue
    
    header = md[:fm_end+3]  # include closing ---
    
    # Extract summary metadata from the current md body
    body = md[fm_end+3:]
    
    # Find the first summary line (before any "Дело №" or garbage)
    summary_end = len(body)
    for marker in ['\nДело №', '\nПоиск решени', '\n(function', '\ngt Дело']:
        idx = body.find(marker)
        if idx > 0 and idx < summary_end:
            summary_end = idx
    
    summary = body[:summary_end].strip()
    
    # Clean summary: remove "ИСТЕЦ", "ОТВЕТЧИК", "ПРОКУРОР" labels that appear as stray words
    summary = re.sub(r'\b(ИСТЕЦ|ОТВЕТЧИК|ПРОКУРОР|ТРЕТЬЕ ЛИЦО|ПРЕДСТАВИТЕЛЬ|ЗАЯВИТЕЛЬ)\b(?=\s)', '', summary)
    summary = re.sub(r'\s+', ' ', summary).strip()
    
    # Build new file
    new_md = f"{header}\n\n{summary}\n\n---\n\n*Источник: [судебныерешения.рф](https://xn--90afdbaav0bd1afy6eub5d.xn--p1ai/{case_id})*\n\n---\n\n## Полный текст решения суда\n\n{text}\n"
    
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(new_md)
    
    print(f"OK {d}")

print("DONE")
