/**
 * v-scroll-reveal Directive
 *
 * Usage:
 *   <div v-scroll-reveal>          → fades in with default 'animate-fade-in'
 *   <div v-scroll-reveal="'slide-up'">  → uses 'animate-slide-up'
 *   <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }">  → custom options
 *
 * Stagger children:
 *   <div v-scroll-reveal.stagger>  → applies staggered delays to direct children
 *   <div v-scroll-reveal.stagger.3> → stagger with 3 children per row (optional hint)
 */

import { watch } from 'vue'

const defaultOptions = {
  animation: 'animate-fade-in',
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px',
  delay: 0,
  duration: 0,
}

// Shared observer pool — reuse observers for performance
const observerMap = new Map()

function getObserver(options) {
  const key = `${options.threshold}|${options.rootMargin}`
  if (observerMap.has(key)) return observerMap.get(key)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const anim = el.dataset.revealAnimation || 'animate-fade-in'
          const delay = parseInt(el.dataset.revealDelay || '0', 10)
          const duration = parseInt(el.dataset.revealDuration || '0', 10)

          // Apply animation
          el.style.opacity = '0' // initially hidden
          el.classList.add(anim)
          if (delay > 0) el.style.animationDelay = `${delay}ms`
          if (duration > 0) el.style.animationDuration = `${duration}ms`
          el.style.animationFillMode = 'forwards'

          // Unobserve after triggering
          observer.unobserve(el)
        }
      })
    },
    { threshold: options.threshold, rootMargin: options.rootMargin }
  )

  observerMap.set(key, observer)
  return observer
}

export default {
  mounted(el, binding) {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const options = parseBinding(binding)

    // Set data attributes for the observer callback to read
    el.dataset.revealAnimation = options.animation
    el.dataset.revealDelay = String(options.delay)
    el.dataset.revealDuration = String(options.duration)

    // Stagger children
    if (binding.modifiers && binding.modifiers.stagger) {
      const children = Array.from(el.children)
      // Read stagger delay from modifiers: v-scroll-reveal.stagger.200 → picks up 200
      const staggerModifier = Object.keys(binding.modifiers).find(m => m !== 'stagger' && !isNaN(Number(m)))
      const staggerDelay = staggerModifier ? Number(staggerModifier) : 100
      children.forEach((child, index) => {
        child.dataset.revealAnimation = options.animation
        child.dataset.revealDelay = String(options.delay + index * staggerDelay)
        child.dataset.revealDuration = String(options.duration)
        child.style.opacity = '0'
        getObserver(options).observe(child)
      })
      // Don't observe the parent itself if staggering children
      el.style.opacity = '1'
      return
    }

    // Set initial opacity to 0 so element is hidden until revealed
    el.style.opacity = '0'
    getObserver(options).observe(el)
  },

  unmounted(el) {
    // Clean up any running animations
    el.style.animation = 'none'
    el.style.opacity = ''
  },
}

function parseBinding(binding) {
  const opts = { ...defaultOptions }

  if (typeof binding.value === 'string') {
    opts.animation = `animate-${binding.value}`
  } else if (typeof binding.value === 'object' && binding.value !== null) {
    opts.animation = binding.value.animation
      ? (binding.value.animation.startsWith('animate-') ? binding.value.animation : `animate-${binding.value.animation}`)
      : opts.animation
    opts.threshold = binding.value.threshold ?? opts.threshold
    opts.rootMargin = binding.value.rootMargin ?? opts.rootMargin
    opts.delay = binding.value.delay ?? opts.delay
    opts.duration = binding.value.duration ?? opts.duration
  }

  return opts
}
