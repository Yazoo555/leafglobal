import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

/**
 * Composable for mobile menu state management.
 *
 * @returns {{ isOpen: Ref<boolean>, toggle: Function, open: Function, close: Function, isMobile: Ref<boolean> }}
 */
export function useMobileMenu() {
  const isOpen = ref(false)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  // Close on escape key
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && isOpen.value) {
      close()
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })

  return {
    isOpen,
    toggle,
    open,
    close,
  }
}

/**
 * Composable for responsive breakpoint detection.
 *
 * @param {number} breakpoint - Pixel width breakpoint (default: 1024)
 * @returns {{ isMobile: Ref<boolean>, windowWidth: Ref<number> }}
 */
export function useBreakpoint(breakpoint = 1024) {
  const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : breakpoint + 1
  )

  const isMobile = computed(() => windowWidth.value < breakpoint)

  let resizeTimer = null

  const handleResize = () => {
    // Debounce resize events
    if (resizeTimer) clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      windowWidth.value = window.innerWidth
    }, 100)
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (resizeTimer) clearTimeout(resizeTimer)
  })

  return {
    isMobile,
    windowWidth,
  }
}

/**
 * Composable for locking body scroll (useful for modals, mobile menus).
 *
 * @param {import('vue').Ref<boolean>} isOpenRef - Ref that controls lock state
 */
export function useBodyLock(isOpenRef) {
  const originalOverflow = ref('')

  watch(isOpenRef, (val) => {
    if (val) {
      originalOverflow.value = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow.value || ''
    }
  })

  // Cleanup on unmount
  onUnmounted(() => {
    document.body.style.overflow = originalOverflow.value || ''
  })
}
