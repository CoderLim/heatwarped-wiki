#!/usr/bin/env bash
set -euo pipefail
export PATH="/Users/coderlim/.nvm/versions/node/v22.16.0/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
cd /Users/coderlim/Projects/miniwars.art-shipany-tanstack-template
mkdir -p docs/research/pages docs/design-references/pages

AB="$(which agent-browser)"
PY="$(which python3)"
echo "Using AB=$AB PY=$PY"

for path in buildings strategy systems tier-list guides codes news patch-notes faq search; do
  echo "=== EXTRACT /$path ==="
  "$AB" set viewport 1440 900
  "$AB" open "https://miniwars.art/$path"
  "$AB" wait --load networkidle
  "$AB" wait 700
  "$AB" screenshot "docs/design-references/pages/${path}-desktop.png"
  "$AB" eval 'JSON.stringify((()=>{
    const main=document.querySelector("main");
    return {
      title: document.title,
      url: location.pathname,
      h1: document.querySelector("main h1")?.innerText?.slice(0,160) || null,
      mainHTML: main?main.outerHTML:null,
      allNav: [...document.querySelectorAll("header nav a")].map(a=>({href:a.getAttribute("href"),cls:a.className,color:getComputedStyle(a).color,text:a.innerText.trim()}))
    };
  })())' > "docs/research/pages/${path}.raw.json"
  "$PY" -c "
import json
path='$path'
raw=open(f'docs/research/pages/{path}.raw.json').read()
d=json.loads(raw)
if isinstance(d,str): d=json.loads(d)
html=d.pop('mainHTML') or ''
open(f'docs/research/pages/{path}.html','w').write(html)
json.dump(d, open(f'docs/research/pages/{path}.json','w'), indent=2)
print(path, 'h1=', repr((d.get('h1') or '')[:60]), 'bytes=', len(html))
"
done
echo ALL_DONE
ls docs/research/pages/*.html | wc -l
