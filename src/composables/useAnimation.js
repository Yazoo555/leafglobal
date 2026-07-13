import { ref, onMounted, onUnmounted, nextTick } from 'vue'

/**
 * Composable for scroll-triggered reveal animations using IntersectionObserver.
 * Adds an animation class when elements come into view.
 *
 * @param {Object} options
 * @param {string} options.animationClass - CSS class to add when element is visible (default: 'animate-fade-in')
 * @param {number} options.threshold - Intersection threshold (0-1, default: 0.1)
 * @param {string} options.rootMargin - Observer root margin (default: '0px 0px -50px 0px')
 * @param {boolean} options.once - Whether to un-observe after first trigger (default: true)
 * @returns {{ observe: Function, unobserve: Function, visibleElements: Set }}
 */
export function useScrollReveal(options = {}) {
  const {
    animationClass = 'animate-fade-in',
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
  } = options

  let observer = null
  const visibleElements = new Set()

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        target.classList.add(animationClass)
        visibleElements.add(target)

        if (once) {
          observer.unobserve(target)
        }
      } else if (!once) {
        const target = entry.target
        target.classList.remove(animationClass)
        visibleElements.delete(target)
      }
    })
  }

  const observe = (elements) => {
    if (!observer) {
      observer = new IntersectionObserver(handleIntersect, {
        threshold,
        rootMargin,
      })
    }

    const nodes = Array.isArray(elements) ? elements : [elements]
    nodes.forEach((el) => {
      if (el) observer.observe(el)
    })
  }

  const unobserve = (elements) => {
    const nodes = Array.isArray(elements) ? elements : [elements]
    nodes.forEach((el) => {
      if (el) {
        observer?.unobserve(el)
        visibleElements.delete(el)
      }
    })
  }

  const disconnect = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    visibleElements.clear()
  }

  onUnmounted(() => {
    disconnect()
  })

  return {
    observe,
    unobserve,
    visibleElements,
    disconnect,
  }
}

/**
 * Creates staggered animation delays for lists of elements.
 *
 * @param {number} baseDelay - Base delay in ms (default: 100)
 * @param {number} increment - Increment per item in ms (default: 100)
 * @returns {Function} getDelay(index) - Returns delay string for nth element
 */
export function useStaggerAnimation(baseDelay = 100, increment = 100) {
  const getDelay = (index) => `${baseDelay + index * increment}ms`

  const getStyle = (index) => ({
    animationDelay: getDelay(index),
    animationFillMode: 'forwards',
  })

  return {
    getDelay,
    getStyle,
  }
}

/**
 * Simple in-viewport detection without IntersectionObserver (fallback).
 *
 * @param {Element} el - DOM element to check
 * @param {number} offset - Offset in px
 * @returns {boolean}
 */
export function isInViewport(el, offset = 0) {
  if (!el) return false

  const rect = el.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top <= windowHeight + offset &&
    rect.bottom >= -offset
  )
}
