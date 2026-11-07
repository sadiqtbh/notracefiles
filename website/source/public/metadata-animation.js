(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const cards = [...document.querySelectorAll('.callout')];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let visible = false;
  let start = 0;
  let frame = 0;
  const entries = [];
  cards.forEach((card, group) => {
    card.querySelectorAll('strong, small').forEach((node, row) => {
      const text = node.textContent;
      node.classList.add('metadata-text');
      node.setAttribute('aria-label', text);
      const base = document.createElement('span');
      base.className = 'metadata-original';
      base.textContent = text;
      base.setAttribute('aria-hidden', 'true');
      const layer = document.createElement('span');
      layer.className = 'metadata-scramble';
      layer.setAttribute('aria-hidden', 'true');
      node.replaceChildren(base, layer);
      entries.push({node, text, layer, delay:group * 240 + row * 120});
    });
  });
  function restore() {
    entries.forEach(({node,layer}) => {node.classList.remove('is-decoding'); layer.replaceChildren();});
  }
  function tick(now) {
    if (!visible || motion.matches || document.hidden) {restore(); frame=0; return;}
    const cycle = (now-start) % 9000;
    entries.forEach(({node,text,layer,delay}) => {
      const elapsed = cycle-delay;
      if (elapsed<0 || elapsed>=1450) {node.classList.remove('is-decoding');return;}
      node.classList.add('is-decoding');
      const settled = Math.floor(Math.min(1,elapsed/1150)*text.length);
      const fragment=document.createDocumentFragment();
      for(let i=0;i<text.length;i++){
        const char=document.createElement('span');
        const resolved=i<settled || /\s/.test(text[i]);
        char.textContent=resolved?text[i]:alphabet[Math.floor(Math.random()*alphabet.length)];
        if(!resolved) char.style.color=['#008f8a','#9273bf','#c08b58'][i%3];
        fragment.appendChild(char);
      }
      layer.replaceChildren(fragment);
    });
    frame=requestAnimationFrame(tick);
  }
  function run(){if(visible&&!motion.matches&&!document.hidden&&!frame){start=performance.now();frame=requestAnimationFrame(tick);}}
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;run();},{threshold:.25}).observe(document.querySelector('.phone-scene'));
  motion.addEventListener('change',()=>{restore();run();});
  document.addEventListener('visibilitychange',run);
})();
