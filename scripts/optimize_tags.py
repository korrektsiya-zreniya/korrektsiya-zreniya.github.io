#!/usr/bin/env python3
"""
Script to optimize tags in Hugo markdown files.
Maps old tags to new SEO-optimized tags based on semantic core.
Uses regex instead of yaml to avoid dependency.
"""
import os
import re

# Mapping of old tags/keywords to new SEO tags
TAG_MAPPING = {
    # осложнения
    'Осложнения': 'осложнения',
    'осложнения': 'осложнения',
    'ЗОСТ': 'осложнения',
    'отслойка сетчатки': 'осложнения',
    'индуцированный астигматизм': 'осложнения',
    'Индуцированный астигматизм': 'осложнения',
    'мушки': 'осложнения',
    'сетчатка': 'осложнения',
    'катаракта': 'осложнения',
    'ИОЛ': 'осложнения',
    'расчет хрусталика': 'осложнения',
    'ранняя катаракта': 'осложнения',
    'стероиды': 'осложнения',
    'глаукома': 'осложнения',
    'зрительный нерв': 'осложнения',
    'внутриглазное давление': 'осложнения',
    'вакуумное кольцо': 'осложнения',
    'Побочные эффекты': 'осложнения',
    'побочные эффекты': 'осложнения',
    'Диагностика': 'осложнения',
    
    # риски
    'Риски': 'риски',
    'риски': 'риски',
    'неудачная операция': 'риски',
    'мифы': 'риски',
    'острота зрения': 'риски',
    'Правда о ЛКЗ': 'риски',
    
    # сухой глаз
    'Сухой глаз': 'сухой глаз',
    'сухой глаз': 'сухой глаз',
    'сухость': 'сухой глаз',
    
    # ночное зрение
    'Ночное зрение': 'ночное зрение',
    'ночное зрение': 'ночное зрение',
    'гало': 'ночное зрение',
    'starburst': 'ночное зрение',
    'ореолы': 'ночное зрение',
    'звездочки': 'ночное зрение',
    '1.0': 'ночное зрение',
    'контрастная чувствительность': 'ночное зрение',
    
    # отзывы
    'Отзывы': 'отзывы',
    'отзывы': 'отзывы',
    'истории пациентов': 'отзывы',
    'Испортило зрение': 'отзывы',
    'Фильмы': 'отзывы',
    
    # последствия
    'Последствия': 'последствия',
    'последствия': 'последствия',
    'минусы': 'последствия',
    'анизометропия': 'последствия',
    'бинокулярное зрение': 'последствия',
    'головокружение': 'последствия',
    'головная боль': 'последствия',
    'разное зрение': 'последствия',
    'Ухудшение зрения': 'последствия',
    'ухудшение зрения': 'последствия',
    
    # эктазия
    'Эктазия': 'эктазия',
    'эктазия': 'эктазия',
    'кератоконус': 'эктазия',
    'биомеханика': 'эктазия',
    'тонкая роговица': 'эктазия',
    
    # боль 
    'хроническая боль': 'боль',
    'невропатия': 'боль',
    'невралгия': 'боль',
    'Невралгия': 'боль',
    'нервы роговицы': 'боль',
    'конфокальная микроскопия': 'боль',
    'роговичная невропатия': 'боль',
    
    # депрессия
    'депрессия': 'депрессия',
    'суицид': 'депрессия',
    'Суицид': 'депрессия',
    'ушли из жизни': 'депрессия',
    'Джессика Старр': 'депрессия',
    'неестественная смерть': 'депрессия',
    'ослепли от лазерной коррекции': 'депрессия',
    
    # лоскут
    'Лоскут': 'лоскут',
    'лоскут': 'лоскут',
    'flap': 'лоскут',
    'смещение лоскута': 'лоскут',
    
    # smile
    'SMILE': 'smile',
    'ReLEx SMILE': 'smile',
    'SMILE PRO': 'smile pro',
    'smile pro': 'smile pro',
    'лентикула': 'smile',
    
    # исследования
    'Исследования': 'исследования',
    'исследования': 'исследования',
    'Статистика': 'исследования',
    'статистика': 'исследования',
    'FDA': 'исследования',
    'PubMed': 'исследования',
    'Архив': 'исследования',
    
    # ограничения
    'ограничения': 'ограничения',
    'реабилитация': 'ограничения',
    'что нельзя': 'ограничения',
    
    # после 40
    'после 40': 'после 40 лет',
    'после 45': 'после 40 лет',
    'пресбиопия': 'после 40 лет',
    
    # зрение вблизи
    'зрение вблизи': 'зрение вблизи',
    'близорукость': 'зрение вблизи',
    
    # альтернативы
    'ППЛК': 'альтернативы',
    'коагуляция': 'альтернативы',
    'различия': 'альтернативы',
}

ALLOWED_TAGS = {
    'осложнения', 'риски', 'сухой глаз', 'ночное зрение', 'отзывы',
    'ограничения', 'после 40 лет', 'последствия', 'эктазия', 'боль',
    'депрессия', 'лоскут', 'smile', 'smile pro', 'исследования', 'альтернативы',
    'зрение вблизи'
}

def process_tags(old_tags):
    """Convert old tags to new SEO-optimized tags."""
    if not old_tags:
        return []
    
    new_tags = set()
    for tag in old_tags:
        tag_str = tag.strip().strip('"').strip("'")
        if tag_str in TAG_MAPPING:
            new_tags.add(TAG_MAPPING[tag_str])
        elif tag_str.lower() in [t.lower() for t in ALLOWED_TAGS]:
            for allowed in ALLOWED_TAGS:
                if tag_str.lower() == allowed.lower():
                    new_tags.add(allowed)
                    break
        else:
            matched = False
            for key, value in TAG_MAPPING.items():
                if key.lower() in tag_str.lower():
                    new_tags.add(value)
                    matched = True
                    break
            if not matched:
                print(f"  WARNING: Unmapped tag '{tag_str}' - dropping")
    
    return sorted(list(new_tags))

def extract_tags(content):
    """Extract tags from frontmatter using regex."""
    # Match tags: ["tag1", "tag2"] or tags:\n  - tag1\n  - tag2
    
    # Try inline format first: tags: ["tag1", "tag2"]
    inline_match = re.search(r'^tags:\s*\[([^\]]+)\]', content, re.MULTILINE)
    if inline_match:
        tags_str = inline_match.group(1)
        tags = re.findall(r'"([^"]+)"|\'([^\']+)\'|([^,\s]+)', tags_str)
        return [t[0] or t[1] or t[2] for t in tags if any(t)]
    
    # Try list format: tags:\n  - tag1
    list_match = re.search(r'^tags:\s*\n((?:\s+-\s+.+\n?)+)', content, re.MULTILINE)
    if list_match:
        tags_block = list_match.group(1)
        tags = re.findall(r'^\s+-\s+(.+)$', tags_block, re.MULTILINE)
        return [t.strip().strip('"').strip("'") for t in tags]
    
    return []

def replace_tags(content, new_tags):
    """Replace tags in frontmatter."""
    if not new_tags:
        return content
    
    # Format new tags
    new_tags_str = 'tags:\n' + '\n'.join(f'  - {tag}' for tag in new_tags)
    
    # Try to replace inline format
    content, n1 = re.subn(r'^tags:\s*\[[^\]]+\]', new_tags_str, content, flags=re.MULTILINE)
    if n1 > 0:
        return content
    
    # Try to replace list format
    content, n2 = re.subn(r'^tags:\s*\n(?:\s+-\s+.+\n?)+', new_tags_str + '\n', content, flags=re.MULTILINE)
    return content

def process_file(filepath):
    """Process a single markdown file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if not content.startswith('---'):
        return False
    
    # Extract frontmatter
    parts = content.split('---', 2)
    if len(parts) < 3:
        return False
    
    frontmatter = parts[1]
    old_tags = extract_tags(frontmatter)
    
    if not old_tags:
        return False
    
    new_tags = process_tags(old_tags)
    
    if sorted(new_tags) == sorted([t.lower() for t in old_tags]):
        return False
    
    dirname = os.path.basename(os.path.dirname(filepath))
    print(f"  {dirname}: {old_tags} -> {new_tags}")
    
    # Replace tags
    new_frontmatter = replace_tags(frontmatter, new_tags)
    new_content = f"---{new_frontmatter}---{parts[2]}"
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    content_dir = '/Users/egor/Documents/GitHub/korrektsiya-zreniya.github.io/content'
    updated_count = 0
    
    for root, dirs, files in os.walk(content_dir):
        for file in files:
            if file == 'index.md':
                filepath = os.path.join(root, file)
                if process_file(filepath):
                    updated_count += 1
    
    print(f"\nUpdated {updated_count} files.")

if __name__ == '__main__':
    main()
