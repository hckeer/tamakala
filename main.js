import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/* ── Lenis smooth scroll ────────────────────────────────── */
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 1,
  infinite: false,
  gestureOrientation: 'vertical',
  normalizeWheel: true,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ═══════════════════════════════════════════════════════════
   HERO ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initHeroAnimations() {
  const video       = document.querySelector('.bg-video');
  const title       = document.querySelector('.hero-title');
  const subtitle    = document.querySelector('.hero-subtitle');
  const ctaGroup    = document.querySelector('.hero-cta-group');
  const textBg      = document.querySelector('.hero-text-bg');
  const heroDetails = document.querySelector('.hero-details');
  const nav         = document.querySelector('.nav');

  // ── Entrance timeline ──────────────────────────────────
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  gsap.set([title, subtitle, ctaGroup], { opacity: 0, y: 40 });
  gsap.set(textBg, { opacity: 0, scale: 0.6 });
  gsap.set(nav, { opacity: 0, y: -100 });

  if (video) {
    gsap.set(video, { opacity: 0, scale: 1.2 });
    tl.to(video, { opacity: 1, scale: 1.05, duration: 2.5, ease: 'power2.out' });
  }

  tl.to(textBg,   { opacity: 1, scale: 1, duration: 1.5 }, '-=1.5')
    .to(title,     { opacity: 1, y: 0, duration: 1.0 }, '-=0.8')
    .to(subtitle,  { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to(ctaGroup,  { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .to(nav,       { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }, '-=0.6');

  // ── Scroll-driven parallax ─────────────────────────────
  if (video) {
    gsap.to(video, {
      scale: 1,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  gsap.to(heroDetails, {
    y: -150,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  gsap.to(textBg, {
    y: -250,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   PRODUCT REVEAL ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initProductRevealAnimations() {
  const watch    = document.querySelector('.product-reveal-watch');
  const title    = document.querySelector('.product-reveal-title');
  const subtitle = document.querySelector('.product-reveal-subtitle');
  const cta      = document.querySelector('.product-reveal-cta-group');
  const textBg   = document.querySelector('.product-reveal-text-bg');
  const details  = document.querySelector('.product-reveal-details');

  if (!watch) return;

  gsap.set([watch, title, subtitle, cta], { opacity: 0 });
  gsap.set(watch, { y: 60, rotation: -5 });
  gsap.set([title, subtitle, cta], { y: 30 });

  // Entrance animation
  ScrollTrigger.create({
    trigger: '.product-reveal',
    start: 'top 60%',
    toggleActions: 'play none none reverse',
    onEnter: () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.to(watch,    { opacity: 1, y: 0, rotation: 0, duration: 1.2 })
        .to(title,    { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .to(subtitle, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .to(cta,      { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');
    },
    onLeaveBack: () => {
      gsap.to([watch, title, subtitle, cta], { opacity: 0, duration: 0.4 });
    },
  });

  // Scroll-driven: watch rotates and scales
  gsap.to(watch, {
    rotation: 18,
    scale: 1.25,
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });

  // Parallax for text and bg text
  gsap.to(details, {
    y: -120,
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  gsap.to(textBg, {
    y: -200,
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   HERITAGE ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initHeritageAnimations() {
  const eyebrow = document.querySelector('.heritage-eyebrow');
  const title   = document.querySelector('.heritage-title');
  const divider = document.querySelector('.heritage-divider');
  const bodies  = document.querySelectorAll('.heritage-body');
  const link    = document.querySelector('.heritage-link');
  const stats   = document.querySelectorAll('.heritage-stat');

  const els = [eyebrow, title, divider, ...bodies, link, ...stats].filter(Boolean);

  gsap.set(els, { opacity: 0, y: 30 });

  ScrollTrigger.create({
    trigger: '.heritage',
    start: 'top 60%',
    toggleActions: 'play none none reverse',
    onEnter: () => {
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      });
    },
    onLeaveBack: () => {
      gsap.to(els, { opacity: 0, y: 30, duration: 0.4, stagger: 0 });
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   ETHOS (COLLECTION) ANIMATIONS + SWITCHER
═══════════════════════════════════════════════════════════ */
function initEthosAnimations() {
  // Background parallax
  gsap.utils.toArray('.ethos-bg-img').forEach((img) => {
    gsap.to(img, {
      yPercent: 10,
      scale: 1.08,
      ease: 'none',
      scrollTrigger: {
        trigger: '.ethos',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Initial entrance for active variant
  const activeText  = document.querySelector('.ethos-main.active .ethos-text-side > *');
  const activeWatch = document.querySelector('.ethos-main.active .ethos-watch-img');

  if (activeWatch) {
    gsap.set(activeWatch, { opacity: 0, x: 80 });
    ScrollTrigger.create({
      trigger: '.ethos',
      start: 'top 65%',
      once: true,
      onEnter: () => {
        gsap.to(activeWatch, { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' });
        gsap.fromTo(
          '.ethos-main.active .ethos-text-side > *',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
      },
    });
  }

  // Variant switcher
  document.querySelectorAll('.ethos-next-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target    = btn.dataset.target; // 'bl' or 'rs'
      const current   = document.querySelector('.ethos-main.active');
      const next      = document.querySelector(`.ethos-main.variant-${target}`);
      const currentBg = document.querySelector('.ethos-bg-img.active');
      const nextBg    = document.querySelector(`.ethos-bg-${target}`);

      if (!next || current === next) return;

      const currentText  = current.querySelectorAll('.ethos-text-side > *');
      const currentWatch = current.querySelector('.ethos-watch-img');
      const nextText     = next.querySelectorAll('.ethos-text-side > *');
      const nextWatch    = next.querySelector('.ethos-watch-img');

      const tl = gsap.timeline();

      // Slide current out to left
      tl.to(currentText,  { opacity: 0, x: -60, duration: 0.4, stagger: 0.05, ease: 'power2.in' })
        .to(currentWatch, { opacity: 0, x: -100, duration: 0.35, ease: 'power2.in' }, '<')

        // Swap active classes mid-transition
        .add(() => {
          current.classList.remove('active');
          next.classList.add('active');
          if (currentBg) currentBg.classList.remove('active');
          if (nextBg) nextBg.classList.add('active');
          // Reset next elements for entrance
          gsap.set(nextText,  { opacity: 0, x: 60 });
          gsap.set(nextWatch, { opacity: 0, x: 100 });
        })

        // Slide next in from right
        .to(nextText,  { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out' })
        .to(nextWatch, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }, '<0.1');
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   CRAFTSMANSHIP — CANVAS SCROLL ANIMATION
═══════════════════════════════════════════════════════════ */
function initDismantleAnimations() {
  const canvas   = document.getElementById('dismantle-canvas');
  const fallback = document.getElementById('dismantle-fallback');
  const header   = document.querySelector('.dismantle-header');
  const TOTAL    = 152;

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width  = 1920;
  canvas.height = 1080;

  const images = [];
  let loadedCount = 0;
  let framesAvailable = false;

  // Preload frames; on first successful load, hide fallback and enable canvas
  for (let i = 1; i <= TOTAL; i++) {
    const img = new Image();
    const num = String(i).padStart(3, '0');
    img.src = `/assets/photo/v3/ezgif-frame-${num}.jpg`;
    img.onload = () => {
      loadedCount++;
      if (!framesAvailable && loadedCount >= 10) {
        framesAvailable = true;
        fallback?.classList.add('hidden');
      }
    };
    images.push(img);
  }

  const state = { frame: 0 };

  function drawFrame(n) {
    const img = images[Math.max(0, Math.min(n, TOTAL - 1))];
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }

  // Scroll-driven frame scrub
  gsap.to(state, {
    frame: TOTAL - 1,
    snap: { snapTo: 1 },
    ease: 'none',
    onUpdate: () => {
      if (framesAvailable) drawFrame(Math.round(state.frame));
    },
    scrollTrigger: {
      trigger: '.dismantle',
      start: 'top 40%',
      end: 'bottom bottom',
      scrub: 0.5,
    },
  });

  // Header slides out as user scrolls into the section
  if (header) {
    gsap.to(header, {
      x: -150,
      opacity: 0,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '.dismantle',
        start: 'top 45%',
        end: 'top 10%',
        scrub: 1,
      },
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   SHOWCASE ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initShowcaseAnimations() {
  const eyebrow  = document.querySelector('.showcase-eyebrow');
  const headline = document.querySelector('.showcase-headline');
  const body     = document.querySelector('.showcase-body');
  const igLink   = document.querySelector('.showcase-ig-link');

  const els = [eyebrow, headline, body, igLink].filter(Boolean);
  gsap.set(els, { opacity: 0, y: 40 });

  ScrollTrigger.create({
    trigger: '.showcase',
    start: 'top 65%',
    toggleActions: 'play none none reverse',
    onEnter: () => {
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: 'power3.out',
      });
    },
    onLeaveBack: () => {
      gsap.to(els, { opacity: 0, y: 40, duration: 0.3, stagger: 0 });
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   NAV HIDE/SHOW ON SCROLL
═══════════════════════════════════════════════════════════ */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  let lastY = 0;

  ScrollTrigger.create({
    start: 'top top',
    end: 'max',
    onUpdate: (self) => {
      const currentY = self.scroll();
      const delta = currentY - lastY;

      if (delta > 5 && currentY > 100) {
        nav.classList.add('hidden');
      } else if (delta < -5) {
        nav.classList.remove('hidden');
      }

      lastY = currentY;
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════════ */
function initModal() {
  const overlay    = document.getElementById('reserve-modal');
  const closeBtn   = document.getElementById('modal-close');
  const openBtns   = document.querySelectorAll('.open-reserve-modal');

  function openModal() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus trap: focus first input
    setTimeout(() => {
      const firstInput = overlay.querySelector('input, select, textarea, button');
      if (firstInput) firstInput.focus();
    }, 400);
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtns.forEach((btn) => btn.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);

  // Click outside modal content
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
  });

  // Smooth-scroll anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -72, duration: 1.4, easing: (x) => 1 - Math.pow(1 - x, 4) });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initProductRevealAnimations();
  initHeritageAnimations();
  initEthosAnimations();
  initDismantleAnimations();
  initShowcaseAnimations();
  initNavScroll();
  initModal();
});
