import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

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
  const eyebrow     = document.querySelector('.hero-eyebrow');
  const title       = document.querySelector('.hero-title');
  const subtitle    = document.querySelector('.hero-subtitle');
  const ctaGroup    = document.querySelector('.hero-cta-group');
  const textBg      = document.querySelector('.hero-text-bg');
  const heroDetails = document.querySelector('.hero-details');
  const nav         = document.querySelector('.nav');

  // Set initial states
  gsap.set([eyebrow, title, subtitle, ctaGroup], { opacity: 0, y: 30 });
  gsap.set(textBg, { opacity: 0, scale: 0.7 });
  gsap.set(nav, { opacity: 0, y: -100 });
  if (video) gsap.set(video, { opacity: 0, scale: 1.2 });

  // Entrance timeline
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  if (video) {
    tl.to(video, { opacity: 1, scale: 1.05, duration: 2.5 });
  }

  tl.to(textBg,    { opacity: 1, scale: 1, duration: 1.4 }, video ? '-=1.4' : 0)
    .to(eyebrow,   { opacity: 1, y: 0, duration: 0.9 }, '-=0.8')
    .to(title,     { opacity: 1, y: 0, duration: 0.9 }, '-=0.65')
    .to(subtitle,  { opacity: 1, y: 0, duration: 0.8 }, '-=0.55')
    .to(ctaGroup,  { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .to(nav,       { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }, '-=0.55');

  // Scroll-driven parallax
  if (video) {
    gsap.to(video, {
      scale: 1,
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  gsap.to(heroDetails, {
    y: -150,
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
  });

  gsap.to(textBg, {
    y: -300,
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
  });

  // Toggle hero visibility when out of view to prevent background video bleeding and save resources
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'bottom top',
    onEnter: () => gsap.set('.hero', { visibility: 'hidden' }),
    onLeaveBack: () => gsap.set('.hero', { visibility: 'visible' }),
  });
}

/* ═══════════════════════════════════════════════════════════
   PRODUCT REVEAL ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initProductRevealAnimations() {
  const product  = document.querySelector('.product-reveal-product');
  const eyebrow  = document.querySelector('.product-reveal-eyebrow');
  const title    = document.querySelector('.product-reveal-title');
  const subtitle = document.querySelector('.product-reveal-subtitle');
  const cta      = document.querySelector('.product-reveal-cta-group');
  const textBg   = document.querySelector('.product-reveal-text-bg');

  if (!product) return;

  gsap.set([product], { opacity: 0, x: -40 });
  gsap.set([eyebrow, title, subtitle, cta], { opacity: 0, y: 25 });

  ScrollTrigger.create({
    trigger: '.product-reveal',
    start: 'top 65%',
    toggleActions: 'play none none reverse',
    onEnter: () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to(product,  { opacity: 1, x: 0, duration: 1.1 })
        .to(eyebrow,  { opacity: 1, y: 0, duration: 0.7 }, '-=0.6')
        .to(title,    { opacity: 1, y: 0, duration: 0.8 }, '-=0.55')
        .to(subtitle, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .to(cta,      { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');
    },
    onLeaveBack: () => {
      gsap.to([product, eyebrow, title, subtitle, cta], { opacity: 0, duration: 0.3 });
    },
  });

  gsap.to(textBg, {
    y: -150,
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   HERITAGE ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initHeritageAnimations() {
  const els = [
    document.querySelector('.heritage-eyebrow'),
    document.querySelector('.heritage-title'),
    document.querySelector('.heritage-divider'),
    ...document.querySelectorAll('.heritage-body'),
    document.querySelector('.heritage-link'),
    ...document.querySelectorAll('.heritage-stat'),
  ].filter(Boolean);

  gsap.set(els, { opacity: 0, y: 40 });

  ScrollTrigger.create({
    trigger: '.heritage',
    start: 'top 60%',
    toggleActions: 'play none none reverse',
    onEnter: () => {
      gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' });
    },
    onLeaveBack: () => {
      gsap.to(els, { opacity: 0, y: 40, duration: 0.3, stagger: 0 });
    },
  });

  // Background parallax
  gsap.to('.heritage-bg-img', {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.heritage',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   LOGISTICS BANNER ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initLogisticsAnimations() {
  const items = document.querySelectorAll('.logistics-item');
  if (!items.length) return;

  gsap.set(items, { opacity: 0, y: 20 });

  ScrollTrigger.create({
    trigger: '.logistics',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
    onEnter: () => {
      gsap.to(items, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' });
    },
    onLeaveBack: () => {
      gsap.to(items, { opacity: 0, y: 20, duration: 0.3, stagger: 0 });
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   COLLECTION ANIMATIONS (3-VARIANT SLIDER)
═══════════════════════════════════════════════════════════ */
function initCollectionAnimations() {
  // Background parallax on all bg images
  document.querySelectorAll('.collection-bg-img').forEach((img) => {
    gsap.to(img, {
      scale: 1.08,
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.collection',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Collection header entrance
  const header = document.querySelector('.collection-header');
  if (header) {
    gsap.set(header, { opacity: 0, y: 20 });
    ScrollTrigger.create({
      trigger: '.collection',
      start: 'top 70%',
      once: true,
      onEnter: () => gsap.to(header, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }),
    });
  }

  // Initial entrance for the active variant
  ScrollTrigger.create({
    trigger: '.collection',
    start: 'top 65%',
    once: true,
    onEnter: () => {
      const activeText  = document.querySelectorAll('.collection-main.active .collection-text-side > *');
      const activeImg   = document.querySelector('.collection-product-img');
      if (activeImg) {
        gsap.fromTo(activeImg, { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' });
      }
      if (activeText.length) {
        gsap.fromTo(activeText, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out' });
      }
    },
  });
}



/* ═══════════════════════════════════════════════════════════
   SHOWCASE ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initShowcaseAnimations() {
  const els = [
    document.querySelector('.showcase-eyebrow'),
    document.querySelector('.showcase-headline'),
    document.querySelector('.showcase-body'),
    document.querySelector('.showcase-actions'),
  ].filter(Boolean);

  gsap.set(els, { opacity: 0, y: 40 });

  ScrollTrigger.create({
    trigger: '.showcase',
    start: 'top 65%',
    toggleActions: 'play none none reverse',
    onEnter: () => {
      gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.14, ease: 'power3.out' });
    },
    onLeaveBack: () => {
      gsap.to(els, { opacity: 0, y: 40, duration: 0.3, stagger: 0 });
    },
  });

  gsap.to('.showcase-bg-img', {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.showcase',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   NAV SCROLL BEHAVIOR
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

      // Add scrolled class for opaque background
      if (currentY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // Hide/show
      if (delta > 5 && currentY > 100) {
        nav.classList.add('hidden');
      } else if (delta < -5) {
        nav.classList.remove('hidden');
      }

      lastY = currentY;
    },
  });

  // Currency selector toggle
  document.querySelectorAll('.currency-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.currency-option').forEach((o) => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   TRACK ORDER
═══════════════════════════════════════════════════════════ */
function initTrackOrder() {
  const submitBtn = document.getElementById('track-submit-btn');
  const result    = document.getElementById('track-result');
  const input     = document.getElementById('track-input');

  if (!submitBtn || !result) return;

  submitBtn.addEventListener('click', () => {
    const val = input?.value?.trim();
    if (!val) {
      input?.focus();
      gsap.fromTo(input, { x: -6 }, { x: 0, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
      return;
    }

    // Show loading state
    submitBtn.textContent = '···';
    submitBtn.disabled = true;

    setTimeout(() => {
      result.removeAttribute('hidden');
      result.style.display = 'block';
      gsap.fromTo(result, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
      submitBtn.textContent = 'Track →';
      submitBtn.disabled = false;
    }, 1200);
  });

  // Enter key support
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitBtn.click();
  });
}

/* ═══════════════════════════════════════════════════════════
   MODAL (ENQUIRY)
═══════════════════════════════════════════════════════════ */
function initModal() {
  const overlay  = document.getElementById('enquiry-modal');
  const closeBtn = document.getElementById('modal-close');
  const openBtns = document.querySelectorAll('.open-enquiry-modal');
  const modalRight = document.querySelector('.modal-right');
  const originalModalHTML = modalRight ? modalRight.innerHTML : '';

  function openModal() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const first = overlay.querySelector('input, select, textarea, button:not(.modal-close)');
      first?.focus();
    }, 420);
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Restore original form content if it was replaced with the success state
    setTimeout(() => {
      const currentModalRight = document.querySelector('.modal-right');
      if (currentModalRight && originalModalHTML) {
        currentModalRight.innerHTML = originalModalHTML;
        bindFormSubmit();
      }
    }, 400);
  }

  function bindFormSubmit() {
    const form = document.getElementById('enquiry-form');
    const submitBtn = document.getElementById('modal-submit-btn');
    if (!form || !submitBtn) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const firstName = document.getElementById('first-name')?.value?.trim();
      const lastName  = document.getElementById('last-name')?.value?.trim();
      const email     = document.getElementById('email')?.value?.trim();

      if (!firstName || !lastName || !email) {
        // Highlight empty required fields
        const required = [
          document.getElementById('first-name'),
          document.getElementById('last-name'),
          document.getElementById('email')
        ];
        required.forEach(el => {
          if (el && !el.value.trim()) {
            el.focus();
            gsap.fromTo(el, { x: -6 }, { x: 0, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
          }
        });
        return;
      }

      // Disable submit button & show loading state
      submitBtn.textContent = 'Sending Enquiry...';
      submitBtn.disabled = true;

      const showSuccessState = () => {
        const currentModalRight = document.querySelector('.modal-right');
        if (currentModalRight) {
          currentModalRight.innerHTML = `
            <div class="modal-success-state" style="display: flex; flex-direction: column; justify-content: center; height: 100%; text-align: center; padding: 3rem 1.5rem; opacity: 0; transform: translateY(15px);">
              <div class="modal-success-icon" style="color: var(--primary-color); font-size: 3.5rem; margin-bottom: 1.5rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" style="width: 72px; height: 72px; margin: 0 auto;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h2 class="modal-title" style="margin-bottom: 1rem;">Enquiry <em>Sent</em></h2>
              <p class="modal-subtitle" style="max-width: 360px; margin: 0 auto 2.5rem; font-size: 0.86rem; line-height: 1.7; color: var(--text-dim);">
                Thank you. Your request for The Monolith Vessel has been received. Our team in Patan, Kathmandu Valley will contact you within 24 hours.
              </p>
              <button class="secondary-btn" id="modal-success-close" style="align-self: center; cursor: pointer; padding: 0.8rem 2.2rem; font-size: 0.72rem; letter-spacing: 0.25em;">Close Window</button>
            </div>
          `;

          // Animate the success state
          const successEl = currentModalRight.querySelector('.modal-success-state');
          gsap.to(successEl, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });

          // Wire up the success close button
          const successCloseBtn = document.getElementById('modal-success-close');
          successCloseBtn?.addEventListener('click', closeModal);
        }
      };

      // If local development, simulate successful submission
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setTimeout(() => {
          showSuccessState();
        }, 1200);
      } else {
        // Production submission to Netlify
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(new FormData(form)).toString(),
        })
          .then(() => {
            showSuccessState();
          })
          .catch((err) => {
            console.error("Form submission failed", err);
            showSuccessState();
          });
      }
    });
  }

  openBtns.forEach((btn) => btn.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay?.classList.contains('active')) closeModal();
  });

  // Bind the initial submission handler
  bindFormSubmit();

  // Anchor smooth-scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, {
          offset: -72,
          duration: 1.4,
          easing: (x) => 1 - Math.pow(1 - x, 4),
        });
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
  initLogisticsAnimations();
  initCollectionAnimations();
  initShowcaseAnimations();
  initNavScroll();
  initTrackOrder();
  initModal();

  // Initialize Agentation
  const agentationContainer = document.createElement('div');
  document.body.appendChild(agentationContainer);
  const root = createRoot(agentationContainer);
  root.render(
    React.createElement(Agentation, {
      endpoint: "http://localhost:4747",
      onSessionCreated: (sessionId) => {
        console.log("Session started:", sessionId);
      }
    })
  );
});
