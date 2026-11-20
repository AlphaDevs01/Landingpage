(() => {
  const root = document.documentElement;
  const menu = document.querySelector('#menu');
  const toggle = document.querySelector('.menu-toggle');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const narrowViewport = window.matchMedia('(max-width: 760px)');
  const hero = document.querySelector('.hero');
  const demo = document.querySelector('[data-demo]');
  const scenes = Array.from(document.querySelectorAll('[data-scene]'));
  const views = Array.from(document.querySelectorAll('[data-view]'));
  const steps = Array.from(document.querySelectorAll('.demo-steps i'));
  let activeScene = 0;
  let scheduled = false;

  root.classList.add('js');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') === 'false'));
  document.querySelector('.header').addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });

  if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });
    document.querySelectorAll('.reveal').forEach((element) => reveal.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  function selectScene(index) {
    if (index === activeScene) return;
    views[activeScene].classList.remove('is-current');
    scenes[activeScene].classList.remove('is-active');
    steps[activeScene].classList.remove('active');
    views[index].classList.add('is-current');
    scenes[index].classList.add('is-active');
    steps[index].classList.add('active');
    activeScene = index;
  }

  function renderScroll() {
    scheduled = false;
    const viewport = window.innerHeight;
    const distance = root.scrollHeight - viewport;
    const scroll = Math.max(window.scrollY, 0);
    root.style.setProperty('--reading', distance > 0 ? Math.min(scroll / distance, 1) : 0);

    if (motion.matches) {
      selectScene(0);
      return;
    }

    if (scroll < hero.offsetHeight + viewport) {
      root.style.setProperty('--hero-shift', Math.min(scroll * 0.12, 72) + 'px');
    }

    const demoBox = demo.getBoundingClientRect();
    const activationLine = narrowViewport.matches
      ? Math.min(viewport * 0.8, Math.max(viewport * 0.55, demoBox.bottom + 90))
      : viewport * 0.5;
    let index = 0;
    for (const scene of scenes) {
      if (scene.getBoundingClientRect().top <= activationLine) index = Number(scene.dataset.scene);
    }
    selectScene(index);
  }

  function scheduleScroll() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(renderScroll);
  }

  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll);
  window.addEventListener('pageshow', scheduleScroll);
  motion.addEventListener('change', scheduleScroll);
  renderScroll();
})();
