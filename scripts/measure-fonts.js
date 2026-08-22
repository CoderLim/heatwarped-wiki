JSON.stringify(
  (() => {
    function domWidth(text, fontCss, letterSpacing) {
      const el = document.createElement('span');
      el.textContent = text;
      el.style.cssText = `position:absolute;left:-9999px;top:0;white-space:nowrap;font:${fontCss};letter-spacing:${letterSpacing || 'normal'};`;
      document.body.appendChild(el);
      const w = el.getBoundingClientRect().width;
      el.remove();
      return Math.round(w * 100) / 100;
    }
    const h1 = document.querySelector('main h1');
    const cs = getComputedStyle(h1);
    const ls = cs.letterSpacing;
    const col = h1.parentElement?.getBoundingClientRect();
    return {
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
      letterSpacing: ls,
      parentWidth: col ? Math.round(col.width) : null,
      widths: {
        BUILD: domWidth(
          'BUILD A COUNTRY.',
          `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`,
          ls
        ),
        CRUSH: domWidth(
          'CRUSH YOUR NEIGHBORS.',
          `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`,
          ls
        ),
        logo: domWidth('MINI WAR', `400 20px ${cs.fontFamily}`, '4px'),
      },
      h1Height: Math.round(h1.getBoundingClientRect().height),
      h1Width: Math.round(h1.getBoundingClientRect().width),
      fontsOk: document.fonts.check(`72px ${cs.fontFamily.split(',')[0]}`),
    };
  })()
);
