import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for tracking scroll position and triggering animations on scroll.
 *
 * @param {Object} options
 * @param {number} options.threshold - Scroll threshold in px to consider "scrolled"
 * @returns {{ scrollY: Ref<number>, isScrolled: Ref<boolean>, scrollToTop: Function, scrollToElement: Function }}
 */
export function useScroll(threshold = 100) {
  const scrollY = ref(0)
  const isScrolled = ref(false)

  let ticking = false

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        scrollY.value = window.scrollY
        isScrolled.value = window.scrollY > threshold
        ticking = false
      })
      ticking = true
    }
  }

  const scrollToTop = (behavior = 'smooth') => {
    window.scrollTo({ top: 0, behavior })
  }

  const scrollToElement = (selector, offset = 0, behavior = 'smooth') => {
    const el = document.querySelector(selector)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior })
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    isScrolled,
    scrollToTop,
    scrollToElement,
  }
}

/**
 * Composable for Intersection Observer - triggers a ref when elements come into view.
 *
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Intersection observer root margin
 * @returns {{ createObserver: Function, disconnectObserver: Function }}
 */
export function useIntersectionObserver(threshold = 0.1, rootMargin = '0px 0px -50px 0px') {
  let observer = null

  const createObserver = (elements, callback) => {
    // Disconnect any previous observer
    if (observer) {
      observer.disconnect()
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    const nodes = Array.isArray(elements) ? elements : [elements]
    nodes.forEach((el) => {
      if (el) observer.observe(el)
    })
  }

  const disconnectObserver = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  // Auto-cleanup on unmount via onUnmounted
  onUnmounted(() => {
    disconnectObserver()
  })

  return {
    createObserver,
    disconnectObserver,
  }
}
