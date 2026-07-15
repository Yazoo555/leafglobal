<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50"
  >
    <nav
      aria-label="Main navigation"
      class="w-full transition-all duration-300"
      :class="[isScrolled ? 'glass-nav-scrolled' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200/50']"
    >
      <div class="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <!-- ========== LOGO (left) ========== -->
        <router-link
          to="/"
          class="flex items-center gap-3 transition-colors duration-200 z-10"
        >
          <img
            src="/logo.png"
            alt="Leaf Global Consulting Group"
            class="h-[70px] sm:h-[85px] w-auto object-contain shrink-0 drop-shadow-sm"
            fetchpriority="high"
          />
          <span class="h5 font-bold font-heading leading-tight text-dark">
            Leaf Global<br/>Consulting Group
          </span>
        </router-link>

        <!-- ========== DESKTOP NAV (center) ========== -->
        <div class="hidden lg:flex items-center gap-1">
          <template v-for="item in navItems" :key="item.label">
            <!-- Simple link -->
            <router-link
              v-if="!item.children"
              :to="item.path"
              :aria-current="route.path === item.path ? 'page' : undefined"
              class="relative px-3 xl:px-4 py-2 nav font-medium rounded-lg transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
              :class="linkClasses(item)"
              @mouseenter="prefetchRoute(item.prefetchName)"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-3 right-3 h-0.5 transform scale-x-0 transition-transform duration-200 rounded-full"                :class="['bg-primary', $route.path === item.path ? 'scale-x-100' : 'group-hover:scale-x-100']" />
            </router-link>

            <!-- Dropdown trigger -->
            <div
              v-else
              class="relative"
              @mouseenter="openDropdown = item.label; prefetchRoute(item.prefetchName)"
              @mouseleave="openDropdown = null"
            >
              <button
                class="relative flex items-center gap-1.5 px-3 xl:px-4 py-2 nav font-medium rounded-lg transition-colors duration-200 group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
                :class="linkClasses(item)"
                :aria-expanded="openDropdown === item.label"
                aria-haspopup="true"
              >
                {{ item.label }}
                <svg
                  class="w-3.5 h-3.5 transition-transform duration-200"
                  :class="openDropdown === item.label ? 'rotate-180' : ''"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Dropdown panel -->
              <transition
                enter-active-class="transition-all duration-200 ease-out"
                leave-active-class="transition-all duration-150 ease-in"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
              >
                <div
                  v-if="openDropdown === item.label"
                  class="absolute top-full left-1/2 -translate-x-1/2"
                >
                  <div class="glass-heavy rounded-[20px] py-3 min-w-[220px] mt-3">
                    <template v-for="child in item.children" :key="child.label">
                      <!-- Divider -->
                      <hr v-if="child.divider" class="my-1 mx-3 border-white/20" />

                      <!-- Sub-dropdown trigger -->
                      <div
                        v-if="child.children"
                        class="relative group/sub"
                        @mouseenter="openSubDropdown = child.label"
                        @mouseleave="openSubDropdown = null"
                      >
                        <button
                          class="flex items-center justify-between w-full px-4 py-2.5 body-md rounded-lg mx-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
                          :class="child.highlight ? 'bg-primary-50 text-primary font-semibold' : 'text-text hover:bg-primary-50'"
                          @click="toggleSubDropdownKeyboard(child.label)"
                          @mouseenter="openSubDropdown = child.label"
                          @keydown.enter.prevent="toggleSubDropdownKeyboard(child.label)"
                          @keydown.space.prevent="toggleSubDropdownKeyboard(child.label)"
                          :aria-expanded="openSubDropdown === child.label"
                          aria-haspopup="true"
                        >
                          <span class="flex items-center gap-2">
                            <span v-if="child.highlight" class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {{ child.label }}
                          </span>
                          <svg class="w-3.5 h-3.5 text-text-light -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <!-- Sub-dropdown panel (flyout to the right) -->
                        <transition
                          enter-active-class="transition-all duration-200 ease-out"
                          leave-active-class="transition-all duration-150 ease-in"
                          enter-from-class="opacity-0 -translate-x-2"
                          enter-to-class="opacity-100 translate-x-0"
                          leave-from-class="opacity-100 translate-x-0"
                          leave-to-class="opacity-0 -translate-x-2"
                        >
                          <div
                            v-if="openSubDropdown === child.label"
                            class="absolute top-0 right-full"
                          >
                            <div class="glass-heavy rounded-[20px] py-2 min-w-[240px] mr-2">
                              <router-link
                                v-for="sub in child.children"
                                :key="sub.label"
                                :to="sub.path"
                                class="block px-4 py-2.5 body-md text-text hover:bg-primary-50 hover:text-primary transition-colors duration-150 mx-1 rounded-lg"
                                @click="openDropdown = null; openSubDropdown = null"
                              >
                                {{ sub.label }}
                              </router-link>
                            </div>
                          </div>
                        </transition>
                      </div>

                      <!-- Standard dropdown link -->
                      <router-link
                        v-else
                        :to="child.path"
                        class="flex items-center gap-2 px-4 py-2.5 body-md rounded-lg mx-1 transition-colors duration-150"
                        :class="child.highlight ? 'bg-primary-50 text-primary font-semibold' : 'text-text hover:bg-primary-50 hover:text-primary'"
                        @click="openDropdown = null"
                      >
                        <span v-if="child.highlight" class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {{ child.label }}
                      </router-link>
                    </template>
                  </div>
                </div>
              </transition>
            </div>
          </template>
        </div>

        <!-- ========== CTA & MOBILE TOGGLE (right) ========== -->
        <div class="flex items-center gap-3">
          <!-- Desktop CTA -->
          <router-link
            to="/contact"
            class="hidden lg:inline-flex btn-base px-5 py-2.5 btn-md font-medium rounded-xl bg-primary text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-glass transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          >
            Get Started
          </router-link>

          <!-- Mobile toggle button -->
          <button
            class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 z-10 hover:bg-primary-50"
            @click="toggleMobileMenu"
            :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          >
            <div class="w-6 h-5 relative flex flex-col justify-between">
              <span
                class="block h-0.5 w-full rounded transition-all duration-300 origin-center bg-dark"
                :style="mobileOpen ? 'transform: rotate(45deg) translate(3px, 3px); width: 24px;' : ''"
              />
              <span
                class="block h-0.5 w-full rounded transition-all duration-300 bg-dark"
                :class="mobileOpen ? 'opacity-0' : ''"
              />
              <span
                class="block h-0.5 w-full rounded transition-all duration-300 origin-center bg-dark"
                :style="mobileOpen ? 'transform: rotate(-45deg) translate(3px, -3px); width: 24px;' : ''"
              />
            </div>
          </button>
        </div>
      </div>
    </nav>

    <!-- ========== MOBILE OVERLAY ========== -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-250 ease-in"
    >        <div
        v-if="mobileOpen"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        class="fixed inset-0 z-40 lg:hidden"
        @click="mobileOpen = false"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-dark/60 backdrop-blur-sm" />

        <!-- Slide-out panel -->
        <div
          class="absolute top-0 right-0 h-full w-[min(85vw,380px)] bg-white shadow-2xl overflow-y-auto"
          @click.stop
        >
          <div class="pt-20 pb-8 px-6">
            <!-- Mobile nav items -->
            <div class="space-y-1">
              <template v-for="(item, idx) in navItems" :key="item.label">
                <!-- Simple link -->
                <router-link
                  v-if="!item.children"
                  :to="item.path"
                  class="block px-4 py-3 rounded-lg nav font-medium transition-colors duration-150"
                  :class="$route.path === item.path ? 'bg-primary-50 text-primary' : 'text-text hover:bg-primary-50 hover:text-primary'"
                  @click="mobileOpen = false"
                >
                  {{ item.label }}
                </router-link>

                <!-- Accordion trigger -->
                <div v-else>
                  <button
                    class="flex items-center justify-between w-full px-4 py-3 rounded-lg nav font-medium transition-colors duration-150"
                    :class="$route.path.startsWith(item.pathPrefix || '') ? 'bg-primary-50 text-primary' : 'text-text hover:bg-primary-50 hover:text-primary'"
                    @click="toggleAccordion(item.label)"
                  >
                    {{ item.label }}
                    <svg
                      class="w-4 h-4 transition-transform duration-200"
                      :class="openAccordion === item.label ? 'rotate-180' : ''"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <!-- Accordion content -->
                  <transition
                    enter-active-class="transition-all duration-250 ease-out"
                    leave-active-class="transition-all duration-200 ease-in"
                    enter-from-class="max-h-0 opacity-0"
                    enter-to-class="max-h-[600px] opacity-100"
                    leave-from-class="max-h-[600px] opacity-100"
                    leave-to-class="max-h-0 opacity-0"
                  >
                    <div v-if="openAccordion === item.label" class="overflow-hidden">
                      <div class="pl-4 pr-2 py-1 space-y-0.5">
                        <template v-for="child in item.children" :key="child.label">
                          <hr v-if="child.divider" class="my-1 border-gray-100" />

                          <!-- Sub-accordion -->
                          <div v-if="child.children">
                            <button
                              class="flex items-center justify-between w-full px-4 py-2.5 body-md transition-colors duration-150"
                              :class="child.highlight ? 'text-primary font-semibold' : 'text-text-light hover:text-primary hover:bg-primary-50'"
                              @click.stop="toggleSubAccordion(child.label)"
                            >
                              <span class="flex items-center gap-2">
                                <span v-if="child.highlight" class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                {{ child.label }}
                              </span>
                              <svg
                                class="w-3.5 h-3.5 transition-transform duration-200"
                                :class="openSubAccordion === child.label ? 'rotate-180' : ''"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
                              >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            <!-- Sub-accordion content -->
                            <transition
                              enter-active-class="transition-all duration-200 ease-out"
                              leave-active-class="transition-all duration-150 ease-in"
                              enter-from-class="max-h-0 opacity-0"
                              enter-to-class="max-h-[400px] opacity-100"
                              leave-from-class="max-h-[400px] opacity-100"
                              leave-to-class="max-h-0 opacity-0"
                            >
                              <div v-if="openSubAccordion === child.label" class="overflow-hidden">
                                <div class="pl-6 pr-2 py-1 space-y-0.5">
                                  <router-link
                                    v-for="sub in child.children"
                                    :key="sub.label"
                                    :to="sub.path"
                                    class="block px-4 py-2.5 body-md rounded-lg text-text-light hover:bg-primary-50 hover:text-primary transition-colors duration-150"
                                    @click="mobileOpen = false"
                                  >
                                    {{ sub.label }}
                                  </router-link>
                                </div>
                              </div>
                            </transition>
                          </div>

                          <!-- Standard link -->
                          <router-link
                            v-else
                            :to="child.path"
                            class="flex items-center gap-2 px-4 py-2.5 body-md transition-colors duration-150"
                            :class="child.highlight ? 'text-primary font-semibold bg-primary-50' : 'text-text-light hover:text-primary hover:bg-primary-50'"
                            @click="mobileOpen = false"
                          >
                            <span v-if="child.highlight" class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {{ child.label }}
                          </router-link>
                        </template>
                      </div>
                    </div>
                  </transition>
                </div>
              </template>
            </div>

            <!-- Mobile CTA -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <router-link
                to="/contact"
                class="flex items-center justify-center w-full px-5 py-3 btn-md font-medium rounded-xl bg-primary text-white hover:bg-primary-700 transition-colors duration-200"
                @click="mobileOpen = false"
              >
                Get Started
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { prefetchRoute } from '@/composables/usePrefetch'

const route = useRoute()

// =============================================
// Navigation Data Structure
// =============================================
const navItems = [
  {
    label: 'Home',
    path: '/',
    prefetchName: 'home',
  },
  {
    label: 'About',
    pathPrefix: '/about',
    prefetchName: 'about',
    children: [
      { label: 'Who We Are', path: '/about#who-we-are' },
      { label: 'Our Mission', path: '/about#mission' },
      { label: 'Why Leaf Global Consulting', path: '/about#why-leaf' },
    ],
  },
  {
    label: 'Services',
    pathPrefix: '/services',
    prefetchName: 'services',
    children: [
      {
        label: 'Education Consulting & Training',
        children: [
          { label: 'Curriculum Development', path: '/services#education' },
          { label: 'Training Program Design', path: '/services#education' },
          { label: 'Education Technology Integration', path: '/services#education' },
        ],
      },
      {
        label: 'Law Consulting & Training',
        children: [
          { label: 'Legal Compliance Training', path: '/services#law' },
          { label: 'Policy Development', path: '/services#law' },
          { label: 'Regulatory Advisory', path: '/services#law' },
        ],
      },
      {
        label: 'IT Consulting & Training',
        children: [
          { label: 'IT Strategy & Advisory', path: '/services#it-consulting' },
          { label: 'Digital Transformation', path: '/services#it-consulting' },
          { label: 'Technical Training Programs', path: '/services#it-consulting' },
        ],
      },
      {
        label: 'Finance Consulting & Training',
        children: [
          { label: 'Financial Planning & Analysis', path: '/services#finance' },
          { label: 'Risk Management Training', path: '/services#finance' },
          { label: 'Compliance & Audit Readiness', path: '/services#finance' },
        ],
      },
    ],
  },
  {
    label: 'Contact Us',
    path: '/contact',
    prefetchName: 'contact',
  },
]

// =============================================
// State
// =============================================
const isScrolled = ref(false)
const mobileOpen = ref(false)
const openDropdown = ref(null)
const openSubDropdown = ref(null)
const openAccordion = ref(null)
const openSubAccordion = ref(null)

// =============================================
// Methods
// =============================================
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  mobileOpen.value = !mobileOpen.value
  if (!mobileOpen.value) {
    openAccordion.value = null
    openSubAccordion.value = null
  }
}

const toggleAccordion = (label) => {
  openAccordion.value = openAccordion.value === label ? null : label
  openSubAccordion.value = null
}

const toggleSubAccordion = (label) => {
  openSubAccordion.value = openSubAccordion.value === label ? null : label
}

const toggleSubDropdownKeyboard = (label) => {
  openSubDropdown.value = openSubDropdown.value === label ? null : label
}

const linkClasses = (item) => {
  const active = item.path ? route.path === item.path : route.path.startsWith(item.pathPrefix || 'no-match')
  return [
    'text-text hover:text-primary hover:bg-primary-50/60',
    active ? 'text-primary' : '',
  ]
}

watch(() => route.path, () => {
  mobileOpen.value = false
  openDropdown.value = null
  openSubDropdown.value = null
  openAccordion.value = null
  openSubAccordion.value = null
})

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    openDropdown.value = null
    openSubDropdown.value = null
    if (mobileOpen.value) {
      mobileOpen.value = false
    }
  }
}

watch(mobileOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>
