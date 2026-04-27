// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Contact form
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const jmeno = form.jmeno.value.trim();
    const zprava = form.zprava.value.trim();

    if (!jmeno || !zprava) {
      formMsg.textContent = 'Vyplňte prosím jméno a zprávu.';
      formMsg.style.color = '#C07040';
      return;
    }

    const tel = form.telefon.value.trim();
    const subject = encodeURIComponent('Dotaz z webu — Li-Vet');
    const body = encodeURIComponent(
      `Jméno: ${jmeno}\nTelefon: ${tel || '—'}\n\nZpráva:\n${zprava}`
    );
    window.location.href = `mailto:info@li-vet.cz?subject=${subject}&body=${body}`;

    formMsg.textContent = 'Děkujeme! Otevíráme váš e-mailový klient...';
    formMsg.style.color = '#7AAE89';
    form.reset();
  });
}

// Intersection Observer for staggered reveal
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .eq-item, .contact-item').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// Smooth scroll polyfill for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
