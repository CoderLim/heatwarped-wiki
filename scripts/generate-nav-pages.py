#!/usr/bin/env python3
"""Convert extracted miniwars.art page HTML into React page components + routes."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "docs/research/pages"
COMP_DIR = ROOT / "src/components/miniwars/pages"
ROUTES_DIR = ROOT / "src/routes"

PAGES = [
    ("buildings", "buildings", "BuildingsPage"),
    ("strategy", "strategy", "StrategyPage"),
    ("systems", "systems", "SystemsPage"),
    ("tier-list", "tier-list", "TierListPage"),
    ("guides", "guides", "GuidesPage"),
    ("codes", "codes", "CodesPage"),
    ("news", "news", "NewsPage"),
    ("patch-notes", "patch-notes", "PatchNotesPage"),
    ("faq", "faq", "FaqPage"),
    ("search", "search", "SearchPage"),
]

ICON_MAP = {
    "lucide-crosshair": "Crosshair",
    "lucide-search": "Search",
    "lucide-menu": "Menu",
    "lucide-x": "X",
    "lucide-radio": "Radio",
    "lucide-arrow-right": "ArrowRight",
    "lucide-arrow-up-right": "ArrowUpRight",
    "lucide-arrow-left": "ArrowLeft",
    "lucide-building": "Building",
    "lucide-building-2": "Building2",
    "lucide-flag": "Flag",
    "lucide-cpu": "Cpu",
    "lucide-trophy": "Trophy",
    "lucide-scroll-text": "ScrollText",
    "lucide-key-round": "KeyRound",
    "lucide-file-text": "FileText",
    "lucide-circle-help": "CircleHelp",
    "lucide-help-circle": "CircleHelp",
    "lucide-crown": "Crown",
    "lucide-target": "Target",
    "lucide-clock": "Clock",
    "lucide-chevron-down": "ChevronDown",
    "lucide-chevron-right": "ChevronRight",
    "lucide-chevron-up": "ChevronUp",
    "lucide-plus": "Plus",
    "lucide-minus": "Minus",
    "lucide-filter": "Filter",
    "lucide-layers": "Layers",
    "lucide-shield": "Shield",
    "lucide-swords": "Swords",
    "lucide-zap": "Zap",
    "lucide-book-open": "BookOpen",
    "lucide-newspaper": "Newspaper",
    "lucide-external-link": "ExternalLink",
    "lucide-check": "Check",
    "lucide-info": "Info",
    "lucide-alert-triangle": "AlertTriangle",
    "lucide-map": "Map",
    "lucide-users": "Users",
    "lucide-hammer": "Hammer",
    "lucide-factory": "Factory",
    "lucide-home": "Home",
    "lucide-star": "Star",
    "lucide-sparkles": "Sparkles",
    "lucide-list": "List",
    "lucide-layout-grid": "LayoutGrid",
    "lucide-tag": "Tag",
    "lucide-calendar": "Calendar",
    "lucide-copy": "Copy",
    "lucide-link": "LinkIcon",
    "lucide-hash": "Hash",
    "lucide-box": "Box",
    "lucide-boxes": "Boxes",
    "lucide-gauge": "Gauge",
    "lucide-rocket": "Rocket",
    "lucide-landmark": "Landmark",
    "lucide-wallet": "Wallet",
    "lucide-coins": "Coins",
    "lucide-circle": "Circle",
    "lucide-dot": "Dot",
}


def convert_svgs(html: str, icons: set[str]) -> str:
    def repl(m: re.Match[str]) -> str:
        full = m.group(0)
        cls_m = re.search(r'class="([^"]*)"', full)
        class_str = cls_m.group(1) if cls_m else ""
        name = None
        tokens = class_str.split()
        for k, v in ICON_MAP.items():
            if k in tokens:
                name = v
                break
        if not name:
            mm = re.search(r"lucide-([a-z0-9-]+)", class_str)
            if mm:
                parts = mm.group(1).split("-")
                name = "".join(p.title() for p in parts)
                ICON_MAP[f"lucide-{mm.group(1)}"] = name
        if not name:
            # drop unknown decorative svgs as empty span to keep layout
            return '<span className="inline-block" aria-hidden="true" />'
        icons.add(name)
        keep = " ".join(c for c in tokens if not c.startswith("lucide"))
        return f'<{name} className="{keep}" />'

    return re.sub(r"<svg[^>]*>.*?</svg>", repl, html, flags=re.S)


def html_to_jsx(html: str, icons: set[str]) -> str:
    s = convert_svgs(html, icons)
    # strip next.js data attributes / hydration noise
    s = re.sub(r"\sdata-[^ =]+(=\"[^\"]*\")?", "", s)
    s = re.sub(r"\sclass=", " className=", s)
    s = re.sub(r"\sfor=", " htmlFor=", s)
    s = re.sub(r"\s(readonly|disabled|checked|required|autofocus|multiple)(?=[\s>])", r" \1={\\1}", s)
    # fix boolean attrs that became wrong - redo simpler
    for void in ["img", "br", "hr", "input", "meta", "link"]:
        s = re.sub(rf"<{void}([^>]*?)(?<!/)>", rf"<{void}\1 />", s)

    def style_repl(m: re.Match[str]) -> str:
        styles = m.group(1)
        parts = []
        for decl in styles.split(";"):
            if ":" not in decl:
                continue
            k, v = decl.split(":", 1)
            k, v = k.strip(), v.strip()
            ck = re.sub(r"-([a-z])", lambda x: x.group(1).upper(), k)
            parts.append(f"{ck}: '{v}'")
        return " style={{" + ", ".join(parts) + "}}"

    s = re.sub(r' style="([^"]*)"', style_repl, s)
    # HTML comments / next placeholders
    s = re.sub(r"<!--.*?-->", "", s, flags=re.S)
    s = s.replace("{/* */}", "")
    # common entities already fine; escape braces in text rare
    # tabindex
    s = re.sub(r'\stabindex="(\d+)"', r" tabIndex={\1}", s)
    # aria boolean
    s = re.sub(r'\saria-expanded="(true|false)"', r" aria-expanded={\1}", s)
    s = re.sub(r'\saria-hidden="(true|false)"', r" aria-hidden={\1}", s)
    # stroke-width etc on leftover elements
    s = re.sub(r'\sstroke-width="([^"]*)"', r' strokeWidth="\1"', s)
    s = re.sub(r'\sstroke-linecap="([^"]*)"', r' strokeLinecap="\1"', s)
    s = re.sub(r'\sstroke-linejoin="([^"]*)"', r' strokeLinejoin="\1"', s)
    s = re.sub(r'\sfill-rule="([^"]*)"', r' fillRule="\1"', s)
    s = re.sub(r'\sclip-rule="([^"]*)"', r' clipRule="\1"', s)
    # leading fixes like homepage
    s = s.replace("leading-[1.05]", "leading-none")
    s = s.replace(" leading-tight", "")
    s = s.replace("leading-relaxed", "leading-7")
    # Escape raw braces in text so JSX does not treat them as expressions
    def esc_text(m):
        text=m.group(0)
        return text.replace("{", "&#123;").replace("}", "&#125;")
    # Only escape outside of tags / already-JSX expressions is hard; escape all text nodes
    parts=re.split(r"(<[^>]+>)", s)
    out=[]
    for part in parts:
        if part.startswith("<"):
            out.append(part)
        else:
            out.append(part.replace("{", "&#123;").replace("}", "&#125;"))
    return "".join(out)


def to_comp_filename(slug: str) -> str:
    return slug.replace("-", "_") + "_page"


def main() -> None:
    COMP_DIR.mkdir(parents=True, exist_ok=True)
    meta = {}

    for slug, route, export_name in PAGES:
        html_path = PAGES_DIR / f"{slug}.html"
        html = html_path.read_text()
        # unwrap outer <main>...</main> — layout provides main
        inner = html
        m = re.match(r"^<main[^>]*>([\s\S]*)</main>\s*$", html.strip())
        if m:
            inner = m.group(1)

        icons: set[str] = set()
        jsx = html_to_jsx(inner, icons)
        # Fix botched boolean attrs from earlier attempt
        jsx = re.sub(r" (readonly|disabled|checked|required|autofocus|multiple)=\{\\\1\}", r" \1", jsx)
        for b in ["readOnly", "disabled", "checked", "required", "autoFocus", "multiple"]:
            pass
        # convert readonly -> readOnly etc on inputs
        jsx = jsx.replace(" readonly", " readOnly")
        jsx = jsx.replace(" autofocus", " autoFocus")

        imports = ""
        if icons:
            imports = f"import {{ {', '.join(sorted(icons))} }} from 'lucide-react';\n\n"

        comp = f"""{imports}export function {export_name}() {{
  return (
    <>
{jsx}
    </>
  );
}}
"""
        out = COMP_DIR / f"{to_comp_filename(slug)}.tsx"
        out.write_text(comp)

        # title from json if present
        title = f"Mini Wars — {slug}"
        jpath = PAGES_DIR / f"{slug}.json"
        if jpath.exists():
            d = json.loads(jpath.read_text())
            if d.get("title"):
                title = d["title"]
        # tier-list from SSR curl may lack json title
        if slug == "tier-list":
            title = "Mini Wars Tier List (May 2026) — Best Buildings Ranked · Mini Wars Wiki"

        meta[slug] = {
            "route": f"/{route}",
            "export": export_name,
            "file": to_comp_filename(slug),
            "title": title,
        }
        print("wrote", out.name, "icons", len(icons), "chars", len(comp))

    # index exports
    lines = [
        f"export {{ {m['export']} }} from './{m['file']}';" for m in meta.values()
    ]
    (COMP_DIR / "index.ts").write_text("\n".join(lines) + "\n")

    # route files
    for slug, route, export_name in PAGES:
        m = meta[slug]
        # file path: tier-list.tsx for /tier-list
        route_file = ROUTES_DIR / f"{route}.tsx"
        content = f"""import {{ createFileRoute }} from '@tanstack/react-router';

import {{ envConfigs }} from '@/config';
import {{ getLocale, locales, localizeUrl }} from '@/paraglide/runtime.js';
import {{ {export_name} }} from '@/components/miniwars/pages';
import {{ MiniWarsPageShell }} from '@/components/miniwars/page-shell';

function Page() {{
  return (
    <MiniWarsPageShell>
      <{export_name} />
    </MiniWarsPageShell>
  );
}}

export const Route = createFileRoute('/{route}')({{
  loader: () => {{
    const locale = getLocale();
    return {{ locale }};
  }},
  head: ({{ loaderData }}) => {{
    const locale = loaderData?.locale ?? 'en';
    const urlFor = (loc: string) =>
      localizeUrl(`${{envConfigs.app_url}}/{route}`, {{ locale: loc as 'en' | 'zh' }}).href;
    return {{
      meta: [
        {{ title: {json.dumps(m['title'])} }},
      ],
      links: [
        {{ rel: 'canonical', href: urlFor(locale) }},
        ...locales.map((loc) => ({{
          rel: 'alternate',
          hrefLang: loc,
          href: urlFor(loc),
        }})),
      ],
    }};
  }},
  component: Page,
}});
"""
        route_file.write_text(content)
        print("route", route_file)

    print("DONE", len(PAGES), "pages")


if __name__ == "__main__":
    main()
