(() => {
 const section=document.querySelector('.privacy-parallax');
 if(!section)return;
 const cards=[...section.querySelectorAll('.parallax-card')];
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('text-visible',entry.isIntersecting)),{threshold:.15});
 cards.forEach(card=>observer.observe(card));
 const stage=section.querySelector('.parallax-stage');
 const rows=[...section.querySelectorAll('.parallax-row')];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,target=0,frame=0;
 function render(){
   current+=(target-current)*.085;
   const enter=Math.min(1,current/.3);
   stage.style.transform='translateY('+(-60+enter*80)+'px) rotateX('+(12*(1-enter))+'deg) rotateZ('+(8*(1-enter))+'deg)';
   stage.style.opacity=.55+.45*enter;
   rows.forEach((row,i)=>row.style.transform='translateX('+((i===1?-1:1)*current*420-170)+'px)');
   if(Math.abs(target-current)>.0005) frame=requestAnimationFrame(render);else frame=0;
 }
 function update(){
   if(reduced.matches){stage.style.transform='none';stage.style.opacity=1;rows.forEach(row=>row.style.transform='none');return;}
   const rect=section.getBoundingClientRect();
   target=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));
   if(!frame)frame=requestAnimationFrame(render);
 }
 addEventListener('scroll',update,{passive:true});addEventListener('resize',update);reduced.addEventListener('change',update);update();
})();
