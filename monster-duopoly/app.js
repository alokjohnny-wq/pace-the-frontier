'use strict';
const revenue = document.querySelector('#revenue');
const multiple = document.querySelector('#multiple');
function updateValuation() {
  const r=Number(revenue.value), m=Number(multiple.value);
  document.querySelector('#revenue-value').textContent=`$${r.toLocaleString()}B`;
  document.querySelector('#multiple-value').textContent=`${m}×`;
  document.querySelector('#implied-value').textContent=`$${(r*m/1000).toFixed(2)}T`;
  document.querySelector('#required-multiple').textContent=`${(10000/r).toFixed(1)}×`;
  document.querySelector('#valuation-bar').style.width=`${Math.min(r*m/10000*100,100)}%`;
}
revenue.addEventListener('input',updateValuation);
multiple.addEventListener('input',updateValuation);
updateValuation();
document.querySelector('#print').addEventListener('click',()=>window.print());
const tocLinks=[...document.querySelectorAll('.toc a')];
const observer=new IntersectionObserver(entries=>{
  for (const e of entries) if(e.isIntersecting){
    tocLinks.forEach(a=>{
      const on=a.hash===`#${e.target.id}`;
      a.classList.toggle('active',on);
      if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');
    });
  }
},{rootMargin:'-12% 0px -70% 0px'});
document.querySelectorAll('.chapter').forEach(s=>observer.observe(s));
