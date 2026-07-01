import './styles/main.css'
import confetti from 'canvas-confetti'
import { initParticles } from './particles.js'
import { initEnvelope } from './envelope.js'
import { initCarousel } from './carousel.js'
import { initGiftBox, initCertificateActions } from './gift-box.js'

function initHeroCounter() {
  const el = document.querySelector('.hero__age-number')
  if (!el) return

  const target = Number(el.dataset.target) || 23
  const duration = 1800
  const start = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

function initScrollButtons() {
  document.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sel = btn.getAttribute('data-scroll')
      const target = sel ? document.querySelector(sel) : null
      target?.scrollIntoView({ behavior: 'smooth' })
    })
  })
}

function initSectionAnimations() {
  const titles = document.querySelectorAll('.section-title, .section-subtitle')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.3 },
  )
  titles.forEach((el) => observer.observe(el))
}

function fireWelcomeConfetti() {
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.35 },
      colors: ['#5BA4D9', '#E8F4FC', '#E8A87C', '#FFFFFF'],
    })
  }, 600)
}

initParticles()
initHeroCounter()
initScrollButtons()
initSectionAnimations()
initEnvelope()
initGiftBox()
initCertificateActions()
initCarousel()
fireWelcomeConfetti()
