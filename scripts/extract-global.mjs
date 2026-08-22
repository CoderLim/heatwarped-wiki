// Paste into agent-browser eval — extracts global design tokens
(() => {
  const body = getComputedStyle(document.body);
  const cssVars = {};
  for (const sheet of [...document.styleSheets]) {
    try {
      for (const rule of [...sheet.cssRules]) {
        const sel = rule.selectorText || '';
        if (sel.includes(':root') || sel === 'html') {
          for (const prop of [...rule.style]) {
            if (prop.startsWith('--')) {
              cssVars[prop] = rule.style.getPropertyValue(prop).trim();
            }
          }
        }
      }
    } catch (_) {}
  }
  const fontLinks = [...document.querySelectorAll('link')].map((l) => ({
    rel: l.rel,
    href: l.href,
    as: l.as,
  }));
  const sampleEls = [
    ...document.querySelectorAll('h1,h2,h3,p,a,button,nav,span,label,div'),
  ].slice(0, 150);
  const fonts = [
    ...new Set(sampleEls.map((el) => getComputedStyle(el).fontFamily)),
  ];
  const colors = [
    ...new Set(
      sampleEls.flatMap((el) => {
        const cs = getComputedStyle(el);
        return [cs.color, cs.backgroundColor].filter(
          (c) => c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent'
        );
      })
    ),
  ].slice(0, 80);
  const favicons = [
    ...document.querySelectorAll(
      'link[rel*=icon], link[rel=manifest], meta[property^="og:"], meta[name="theme-color"]'
    ),
  ].map((el) => ({
    tag: el.tagName,
    rel: el.rel || null,
    href: el.href || el.content || null,
    property: el.getAttribute('property'),
    name: el.getAttribute('name'),
    sizes: el.sizes?.toString?.() || null,
  }));
  const mainChildren = [...(document.querySelector('main')?.children || [])];
  const sections = mainChildren.map((el, i) => ({
    i,
    tag: el.tagName.toLowerCase(),
    id: el.id || null,
    classes: String(el.className || '').slice(0, 180),
    top: Math.round(el.getBoundingClientRect().top + window.scrollY),
    height: Math.round(el.getBoundingClientRect().height),
    heading: (el.querySelector('h1,h2,h3')?.innerText || '').slice(0, 80),
    textPreview: (el.innerText || '').slice(0, 120).replace(/\n/g, ' | '),
  }));
  const header = document.querySelector('header, nav, [role="banner"]');
  const footer = document.querySelector('footer');
  return JSON.stringify(
    {
      viewport: {
        w: innerWidth,
        h: innerHeight,
        scrollH: document.documentElement.scrollHeight,
      },
      bodyBg: body.backgroundColor,
      bodyFont: body.fontFamily,
      bodyColor: body.color,
      cssVars,
      fontLinks: fontLinks.filter((l) =>
        /font|stylesheet|icon|manifest|preload/i.test(
          `${l.rel} ${l.href} ${l.as || ''}`
        )
      ),
      fonts,
      colors,
      favicons,
      lenis: !!document.querySelector('.lenis, .locomotive-scroll'),
      headerClasses: header
        ? String(header.className || '').slice(0, 200)
        : null,
      footerClasses: footer
        ? String(footer.className || '').slice(0, 200)
        : null,
      sections,
    },
    null,
    2
  );
})();
