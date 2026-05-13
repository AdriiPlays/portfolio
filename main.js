// CURSOR
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  cur.style.left=mx+'px'; cur.style.top=my+'px';
});
(function tick(){ rx+=(mx-rx)*.13; ry+=(my-ry)*.13; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(tick); })();

// THEME
const themeBtn = document.getElementById('themeBtn');
let dark = false;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀️' : '🌙';
});

// TYPING
const phrases = ['Apasionado por Linux & Servidores.','Desarrollador Web en formación.','Curioso, proactivo y autodidacta.','Siempre aprendiendo algo nuevo.'];
let pi=0,ci=0,del=false;
const tt = document.getElementById('typeTarget');
function type() {
  const p = phrases[pi];
  if (!del) { tt.textContent=p.slice(0,++ci); if(ci===p.length){del=true;setTimeout(type,2200);return;} }
  else { tt.textContent=p.slice(0,--ci); if(ci===0){del=false;pi=(pi+1)%phrases.length;} }
  setTimeout(type, del?35:65);
}
setTimeout(type, 1400);

// SCROLL REVEAL
const obs = new IntersectionObserver(en => en.forEach(e => e.isIntersecting && e.target.classList.add('visible')), {threshold:.1});
document.querySelectorAll('.reveal,.exp-card,.skill-card,.edu-card,.proj-card').forEach(el => obs.observe(el));
document.querySelectorAll('.exp-card').forEach((c,i) => c.style.transitionDelay=(i*.07)+'s');
document.querySelectorAll('.skill-card').forEach((c,i) => c.style.transitionDelay=(i*.07)+'s');
document.querySelectorAll('.edu-card').forEach((c,i) => c.style.transitionDelay=(i*.1)+'s');

// FORM
function handleSubmit(b) {
  b.innerHTML='<span>✓ Mensaje enviado</span>';
  b.style.background='var(--accent3)';
  setTimeout(()=>{ b.innerHTML='<span>Enviar mensaje</span><span>→</span>'; b.style.background=''; },3000);
}

// NAV ACTIVE + SHADOW
const secs = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  let current='';
  secs.forEach(s => { if(window.scrollY>=s.offsetTop-100) current=s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href')==='#'+current));
  nav.style.boxShadow = window.scrollY>10 ? '0 1px 24px rgba(10,13,26,.09)' : '';
},{passive:true});
