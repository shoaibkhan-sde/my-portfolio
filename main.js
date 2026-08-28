const items = document.querySelectorAll('.tree-item');
const sections = document.querySelectorAll('main section[id]');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

menuToggle?.addEventListener('click', () => sidebar.classList.toggle('open'));

items.forEach(item => {
  item.addEventListener('click', () => {
    if(window.innerWidth <= 760) sidebar.classList.remove('open');
  });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.tree-item[data-target="${id}"]`);
    if(entry.isIntersecting){
      items.forEach(i => i.classList.remove('active'));
      link?.classList.add('active');
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.25 });

sections.forEach(s => io.observe(s));

// Ensure hero animation plays on initial load
document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.classList.add('in');
  }
});
