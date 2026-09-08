/* Opening-card decoration only. The reveal sequence is intentionally untouched. */
(function () {
  const start = document.getElementById('start');
  if (!start || start.dataset.weddingDecorated) return;
  start.dataset.weddingDecorated = 'true';
  const ns = 'http://www.w3.org/2000/svg';
  const ornament = 'assets/wedding-ornaments.svg';
  function svgUse(id, viewBox, className) {
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', viewBox);
    svg.setAttribute('class', className);
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS(ns, 'use');
    use.setAttribute('href', ornament + '#' + id);
    svg.appendChild(use);
    return svg;
  }
  const mark = start.querySelector('.intro-mark');
  if (mark) {
    mark.innerHTML = '<svg viewBox="0 0 120 120" role="img" aria-label="Auspicious brass diya with lotus petals"><defs><radialGradient id="w-flame"><stop stop-color="#fffce0"/><stop offset=".55" stop-color="#ffd273"/><stop offset="1" stop-color="#e98a32"/></radialGradient><linearGradient id="w-gold" x2=".8" y2="1"><stop stop-color="#fff0b5"/><stop offset=".5" stop-color="#c78b3b"/><stop offset="1" stop-color="#f4d28a"/></linearGradient></defs><g fill="none" stroke="url(#w-gold)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M60 19C51 31 51 42 60 49C69 42 69 31 60 19Z" fill="url(#w-flame)"/><path d="M60 28C56 36 57 42 60 45C63 41 64 35 60 28Z" fill="#fff8d6" stroke="none"/><path d="M60 52C47 37 34 39 31 47C29 56 43 66 60 73C77 66 91 56 89 47C86 39 73 37 60 52Z"/><path d="M60 73C48 59 30 58 18 63C27 82 41 91 60 91C79 91 93 82 102 63C90 58 72 59 60 73Z"/><path d="M60 73C50 66 44 55 43 47M60 73C70 66 76 55 77 47M22 65C35 67 47 78 60 87C73 78 85 67 98 65"/><path d="M28 93H92M42 99H78"/><path d="M60 14V10M38 22L35 18M82 22L85 18M28 37L23 35M92 37L97 35"/></g></svg>';
  }
  const brand = start.querySelector('.os-mark');
  if (brand) brand.replaceChildren(svgUse('flower', '-14 -14 28 28', 'brand-flower'));
  const flowers = document.createElement('div');
  flowers.className = 'wedding-florals';
  flowers.setAttribute('aria-hidden', 'true');
  const top = document.createElement('img');
  top.src = ornament;
  top.alt = '';
  top.decoding = 'async';
  flowers.appendChild(top);
  start.prepend(flowers);
  const bottom = document.createElement('div');
  bottom.className = 'wedding-bottom';
  bottom.setAttribute('aria-hidden', 'true');
  const left = document.createElement('div');
  left.className = 'wedding-diya';
  left.appendChild(svgUse('diya', '-52 -55 104 92', 'diya-art'));
  const petal = document.createElement('span');
  petal.className = 'wedding-petals';
  petal.textContent = '✿  ❀  ✿';
  bottom.append(left, petal);
  start.appendChild(bottom);
  const flower = document.createElement('div');
  flower.className = 'wedding-corner-flower';
  flower.setAttribute('aria-hidden', 'true');
  flower.appendChild(svgUse('flower', '-14 -14 28 28', 'corner-flower'));
  start.appendChild(flower);
})();