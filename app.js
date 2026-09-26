'use strict';
const byId = id => document.getElementById(id);
const value = id => Number(byId(id).value);
const format = n => n.toLocaleString('en-US', {maximumFractionDigits: 0});
function updateCalculators() {
  document.querySelectorAll('input[type="range"]').forEach(input => {
    byId(`${input.id}-out`).textContent = input.value + input.dataset.unit;
  });
  if (!byId('share')) return;
  const fraction = value('share') / 100;
  const remaining = 1 - fraction + fraction / value('speed');
  byId('bottleneck-result').textContent = (1 / remaining).toFixed(2) + '×';
  byId('duration-bar').style.width = (remaining * 100) + '%';
  byId('duration-label').textContent = (remaining * 100).toFixed(1) + '%';
  const revenue = 1000 * value('volume') * value('price') / 100;
  const variableCost = 600 * value('volume') * value('cost') / 100;
  byId('revenue-result').textContent = '$' + format(revenue);
  byId('profit-result').textContent = (revenue < variableCost ? '−$' : '$') + format(Math.abs(revenue - variableCost));
  const change = (revenue / 1000 - 1) * 100;
  byId('revenue-change').textContent = (change > 0 ? '+' : '') + Math.round(change) + '%';
  const capital = value('capital'), years = value('years'), rate = value('return') / 100;
  const recovery = rate === 0 ? capital / years : capital * rate / (1 - (1 + rate) ** -years);
  byId('recovery-result').textContent = '$' + recovery.toFixed(1) + 'bn';
  byId('capital-revenue').textContent = '$' + (recovery / (value('margin') / 100)).toFixed(1) + 'bn';
}
 document.querySelectorAll('input[type="range"]').forEach(input => input.addEventListener('input', updateCalculators));
updateCalculators();
document.querySelectorAll('.video-load').forEach(button => {
  button.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(button.dataset.video)}?start=${Number(button.dataset.start) || 0}&rel=0`;
    iframe.title = button.getAttribute('aria-label').replace('Load video: ', '');
    iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    button.replaceWith(iframe);
  });
});
document.querySelectorAll('.print-button').forEach(button => button.addEventListener('click', () => window.print()));
const progress = document.querySelector('.reading-progress');
let scheduled = false;
function updateProgress() {
  if (progress) {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (distance > 0 ? 100 * window.scrollY / distance : 0) + '%';
  }
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
}, {passive: true});
window.addEventListener('resize', updateProgress);
updateProgress();
const navLinks = [...document.querySelectorAll('.chapter-nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      navLinks.forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin: '-12% 0px -60% 0px'});
  document.querySelectorAll('.chapter').forEach(section => observer.observe(section));
}
