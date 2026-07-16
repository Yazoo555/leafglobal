<template>
  <section aria-label="Hero" class="relative min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] flex flex-col justify-start overflow-hidden bg-background">
    <!-- Crystal gradient background -->
    <div class="absolute inset-0 gradient-subtle opacity-90" />
    <div class="absolute inset-0" :style="patternStyle" />

    <!-- Large floating glass/crystal decorative elements -->
    <div class="absolute right-[8%] top-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] animate-float" style="animation-delay: 0s; animation-duration: 8s;" />
    <div class="absolute left-[3%] bottom-[15%] w-[400px] h-[400px] rounded-full bg-finance/[0.04] blur-[80px] animate-float" style="animation-delay: 2.5s; animation-duration: 10s;" />
    <div class="absolute right-[20%] bottom-[25%] w-[300px] h-[300px] rounded-full bg-education/[0.04] blur-[60px] animate-float" style="animation-delay: 5s; animation-duration: 7s;" />

    <!-- Crystal geometric accents -->
    <div class="absolute top-[20%] left-[8%] w-4 h-4 rounded-full border border-chrome-light/30 bg-white/10 animate-float" style="animation-delay: 1s; animation-duration: 6s;" />
    <div class="absolute top-[35%] right-[12%] w-6 h-6 rotate-45 border border-chrome-light/20 bg-white/5 backdrop-blur-sm animate-float" style="animation-delay: 3s; animation-duration: 8s;" />
    <div class="absolute bottom-[30%] left-[15%] w-3 h-3 rounded-full border border-chrome-light/25 bg-white/15 animate-float" style="animation-delay: 4s; animation-duration: 5s;" />

    <!-- Crystal ribbon / metallic shine accents -->
    <div class="absolute top-[30%] left-0 w-[200px] h-[1px] metallic-divider opacity-20" />
    <div class="absolute top-[55%] right-0 w-[300px] h-[1px] metallic-divider opacity-20" />
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[1px] metallic-divider opacity-15" />

    <div class="container-custom relative z-10 pt-20 sm:pt-24 pb-20 sm:pb-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <!-- Left: Content -->
        <div class="max-w-xl">
          <!-- Badge — premium glass -->
          <span
            v-if="badge"
            v-scroll-reveal="{ animation: 'slide-up', delay: 0 }"
            class="inline-block px-4 py-1.5 badge uppercase rounded-full glass-heavy text-dark/70 mb-6"
          >
            {{ badge }}
          </span>

          <!-- Heading -->
          <h1 v-scroll-reveal="{ animation: 'slide-up', delay: 100 }" class="text-display font-heading font-bold text-dark">
            {{ title }}<br v-if="titleBreak" />
            <span v-if="highlightText" class="text-gradient-blue inline-block pb-1">{{ highlightText }}</span>
          </h1>

          <!-- Description -->
          <p v-if="description" v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="mt-3 sm:mt-4 body-lg text-text-light max-w-2xl">
            {{ description }}
          </p>

          <!-- Single CTA -->
          <div v-if="ctaText" v-scroll-reveal="{ animation: 'slide-up', delay: 300 }" class="mt-6 sm:mt-8 flex flex-wrap">
            <router-link
              to="/contact"
              class="btn-base px-6 py-3 btn-lg font-medium rounded-xl bg-primary text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-glass transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
            >
              {{ ctaText }}
            </router-link>
          </div>

          <!-- Stats strip: trust metrics -->
          <div v-scroll-reveal="{ animation: 'slide-up', delay: 400 }" class="mt-10 sm:mt-12">
            <div class="bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 shadow-glass-sm p-5 sm:p-6">
              <div class="flex items-center justify-center gap-6 sm:gap-12">
                <!-- Stat 1: Disciplines -->
                <div class="text-center">
                  <span class="block text-4xl font-bold text-gradient-blue leading-none">7</span>
                  <span class="block text-sm text-text-light mt-1 whitespace-nowrap">Disciplines</span>
                </div>

                <!-- Stat 2: Clients -->
                <div class="text-center">
                  <span class="block text-4xl font-bold text-gradient-blue leading-none">100+</span>
                  <span class="block text-sm text-text-light mt-1 whitespace-nowrap">Clients</span>
                </div>

                <!-- Stat 3: Years -->
                <div class="text-center">
                  <span class="block text-4xl font-bold text-gradient-blue leading-none">10+</span>
                  <span class="block text-sm text-text-light mt-1 whitespace-nowrap">Years</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Right: Advisory Sales Flyer Image -->
        <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="hidden lg:block relative self-start">
          <div class="relative w-full aspect-[3/4]">
            <router-link
              to="/advisory-sales"
              class="glass-card absolute inset-[3%] p-2 overflow-hidden group block animate-float crystal-reflection crystal-reflection--animated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white/10 rounded-xl"
              style="animation-delay: 1s; animation-duration: 7s;"
              aria-label="View Advisory Sales Package — Strategic advisory for Australian businesses"
            >
              <picture>
                <source
                  type="image/avif"
                  srcset="/images/girlone-600.avif 600w, /images/girlone-1200.avif 1200w"
                  sizes="(max-width: 1024px) 50vw, 600px"
                />
                <source
                  type="image/webp"
                  srcset="/images/girlone-600.webp 600w, /images/girlone-1200.webp 1200w"
                  sizes="(max-width: 1024px) 50vw, 600px"
                />
                <source
                  type="image/jpeg"
                  srcset="/images/girlone-600.jpg 600w, /images/girlone-1200.jpg 1200w"
                  sizes="(max-width: 1024px) 50vw, 600px"
                />
                <img
                  src="/images/girlone-600.jpg"
                  alt="Advisory Sales for Australian Businesses — Strategic advisory, lead generation, and business development services tailored for the Australian enterprise market"
                  loading="eager"
                  decoding="async"
                  class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 group-focus:scale-105" style="object-position: center 0%"
                />
              </picture>
              <!-- Hover overlay: single-line CTA -->
              <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/45 via-black/15 to-transparent rounded-b-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="bg-white/70 backdrop-blur-md rounded-lg px-3.5 py-1.5 shadow-glass-sm transition-all duration-300 group-hover:bg-white/90 group-hover:translate-y-[-2px] group-hover:shadow-glass">
                  <span class="text-sm font-medium text-primary">Explore Advisory Sales →</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  title: { type: String, required: true },
  titleBreak: { type: Boolean, default: true },
  highlightText: { type: String, default: '' },
  description: { type: String, default: '' },
  badge: { type: String, default: '' },
  ctaText: { type: String, default: '' },
})

const patternStyle = computed(() => ({
  backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2NDc0ODgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+")`,
  opacity: 0.5,
}))
</script>
