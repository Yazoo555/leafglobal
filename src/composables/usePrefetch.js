/**
 * Prefetch route components on hover or visibility.
 * Triggers the lazy import for faster subsequent navigation.
 *
 * Usage in template:
 *   <router-link :to="/services" @mouseenter="prefetch('services')">
 *
 * Or attach to nav items:
 *   v-for="item in navItems" @mouseenter="prefetch(item.routeName)"
 */

import { ref } from 'vue'

// Track which routes have already been prefetched
const prefetched = new Set()

/**
 * Prefetch a route component by name.
 * @param {string} routeName - The named route to prefetch
 */
export function prefetchRoute(routeName) {
  if (prefetched.has(routeName)) return
  prefetched.add(routeName)

  const routeMap = {
    home: () => import('@/views/HomeView.vue'),
    services: () => import('@/views/ServicesView.vue'),
    about: () => import('@/views/AboutView.vue'),
    contact: () => import('@/views/ContactView.vue'),
    privacy: () => import('@/views/PrivacyView.vue'),
    terms: () => import('@/views/TermsView.vue'),
  }

  const loader = routeMap[routeName]
  if (loader) {
    loader().catch(() => {
      prefetched.delete(routeName)
    })
  }
}

