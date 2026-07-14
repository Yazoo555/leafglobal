<template>
  <div class="min-h-dvh flex flex-col bg-background">
    <!-- App Header -->
    <AppHeader />

    <!-- Main Content Area -->
    <main class="flex-1">
      <transition name="layout-page" mode="out-in">
        <!-- Loading State -->
        <div v-if="showLoading" key="loading" class="flex items-center justify-center min-h-[60vh]">
          <div class="text-center">
            <div class="relative w-14 h-14 mx-auto mb-5">
              <div class="absolute inset-0 rounded-full border-4 border-primary-100" />
              <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
            </div>
            <p class="text-text-light body-md font-medium animate-pulse">Loading...</p>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="loadError" key="error" class="flex items-center justify-center min-h-[60vh]">
          <div class="text-center max-w-md px-6">
            <div class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-50 flex items-center justify-center">
              <svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="h5 font-heading font-semibold text-dark mb-2">Something went wrong</h3>
            <p class="body-md text-text-light mb-6">{{ loadError }}</p>
            <button
              class="btn-base px-5 py-2.5 btn-md font-medium rounded-xl bg-primary text-white hover:bg-primary-700 transition-colors duration-200 shadow-sm"
              @click="retryLoad"
            >
              Try Again
            </button>
          </div>
        </div>

        <!-- Page Content -->
        <div v-else :key="$route.path" class="min-h-[60vh]">
          <slot />
        </div>
      </transition>
    </main>

    <!-- App Footer -->
    <AppFooter />

    <!-- Back to Top Button -->
    <BackToTop v-if="showBackToTop" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '@/components/global/AppHeader.vue'
import AppFooter from '@/components/global/AppFooter.vue'
import BackToTop from '@/components/global/BackToTop.vue'

const route = useRoute()
const router = useRouter()

const showBackToTop = ref(false)
const showLoading = ref(false)
const loadError = ref(null)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

let beforeResolveGuard = null
let afterEachGuard = null
let removeErrorHandler = null

removeErrorHandler = router.onError((err) => {
  if (err.message?.includes('Loading chunk') || err.name === 'ChunkLoadError') {
    loadError.value = 'The page could not be loaded. Please check your connection and try again.'
    showLoading.value = false
  }
})

beforeResolveGuard = router.beforeResolve((to, from) => {
  if (to.path !== from.path) {
    loadError.value = null
    showLoading.value = true
  }
})

afterEachGuard = router.afterEach(() => {
  showLoading.value = false
})

const retryLoad = () => {
  loadError.value = null
  window.location.href = route.path
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  showLoading.value = false
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  beforeResolveGuard?.()
  afterEachGuard?.()
  removeErrorHandler?.()
})
</script>

<style>
.layout-page-enter-active,
.layout-page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.layout-page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.layout-page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
