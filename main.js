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

  // Typewriter effect sequence
  const cmdText = "whoami";
  const roleText = "SDE Aspirant — MERN Stack & DSA";
  
  const typeCmd = document.getElementById('type-cmd');
  const caretCmd = document.getElementById('caret-cmd');
  const outName = document.getElementById('out-name');
  const outRole = document.getElementById('out-role');
  const typeRole = document.getElementById('typewriter');
  
  let iCmd = 0;
  let iRole = 0;

  function typeWriterCmd() {
    if (iCmd < cmdText.length) {
      typeCmd.textContent += cmdText.charAt(iCmd);
      iCmd++;
      setTimeout(typeWriterCmd, 120);
    } else {
      setTimeout(() => {
        caretCmd.style.display = 'none';
        outName.style.display = 'block';
        setTimeout(() => {
          outRole.style.display = 'block';
          typeWriterRole();
        }, 400);
      }, 300);
    }
  }

  function typeWriterRole() {
    if (iRole < roleText.length) {
      typeRole.textContent += roleText.charAt(iRole);
      iRole++;
      setTimeout(typeWriterRole, 50);
    }
  }
  
  // Start typing slightly after the hero section fades in
  setTimeout(typeWriterCmd, 600);
});
