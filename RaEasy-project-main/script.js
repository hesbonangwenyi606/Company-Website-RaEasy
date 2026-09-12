const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.onclick=()=>{const open=nav.classList.toggle('show');menu.setAttribute('aria-expanded',open)};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('show'));
const header=document.querySelector('header');addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40),{passive:true});
document.querySelectorAll('.steps button').forEach(btn=>btn.onclick=()=>{const row=btn.closest('article'),was=row.classList.contains('open');document.querySelectorAll('.steps article').forEach(x=>x.classList.remove('open'));if(!was)row.classList.add('open')});
const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('seen');reveal.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>reveal.observe(x));
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const numberFormat = new Intl.NumberFormat('en-US');
const counter = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  const number = entry.target;
  const target = Number(number.dataset.to);
  const duration = prefersReducedMotion ? 0 : 1600;
  const start = performance.now();
  const count = (time) => {
    const progress = duration === 0 ? 1 : Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    number.textContent = numberFormat.format(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(count);
  };
  requestAnimationFrame(count);
  counter.unobserve(number);
}), { threshold: 0.35 });
document.querySelectorAll('[data-to]').forEach((number) => counter.observe(number));
document.querySelector('#year').textContent = new Date().getFullYear();

const demoForm = document.querySelector('#demo-form');
demoForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(demoForm);
  const subject = `Demo request — ${data.get('company')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Company: ${data.get('company')}`,
    `Phone: ${data.get('phone') || 'Not provided'}`,
    `Service: ${data.get('service')}`,
    '',
    'Project challenge:',
    data.get('message'),
  ].join('\n');
  document.querySelector('#form-note').textContent = 'Opening your email app to send the request…';
  window.location.href = `mailto:talktous@raeasy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
