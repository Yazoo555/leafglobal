<template>
  <section aria-label="Hero" class="relative min-h-screen flex items-center overflow-hidden bg-background">
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

    <div class="container-custom relative z-10 pt-24 pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
          <h1 v-scroll-reveal="{ animation: 'slide-up', delay: 100 }" class="text-display-lg lg:text-display-xl font-heading font-bold text-dark">
            {{ title }}<br v-if="titleBreak" />
            <span v-if="highlightText" class="text-gradient-blue inline-block pb-1">{{ highlightText }}</span>
          </h1>

          <!-- Description -->
          <p v-if="description" v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="mt-6 body-lg text-text-light max-w-2xl">
            {{ description }}
          </p>

          <!-- CTA Buttons -->
          <div v-if="primaryCta || secondaryCta" v-scroll-reveal="{ animation: 'slide-up', delay: 300 }" class="mt-10 flex flex-wrap gap-4">
            <Button
              v-if="primaryCta"
              :variant="primaryCta.variant || 'glass-primary'"
              size="lg"
              @click="$emit('primary-click')"
            >
              {{ primaryCta.text }}
            </Button>
            <Button
              v-if="secondaryCta"
              variant="glass"
              size="lg"
              @click="$emit('secondary-click')"
            >
              {{ secondaryCta.text }}
            </Button>
          </div>

          <!-- Trust indicators -->
          <div v-if="trustIndicators && trustIndicators.length" class="mt-10 flex flex-wrap gap-6">
            <div v-for="item in trustIndicators" :key="item.label" class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full flex items-center justify-center" :class="item.iconBg || 'icon-blue'">
                <Icon :name="item.icon || 'check-circle'" :size="14" :color="item.iconColor || '#2563EB'" />
              </div>
              <span class="body-md text-text-light">{{ item.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Advisory Sales Flyer Image -->
        <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="hidden lg:block relative self-start">
          <div class="relative w-full aspect-[5/4]">
            <router-link
              to="/advisory-sales"
              class="glass-card absolute top-[3%] left-[3%] right-[3%] p-2 overflow-hidden group block animate-float crystal-reflection crystal-reflection--animated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white/10 rounded-xl"
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
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              <!-- Bottom CTA label -->
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-primary text-sm font-medium px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-glass-sm">
                View Advisory Sales Package →
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
import Button from '@/components/global/Button.vue'
import Icon from '@/components/global/Icon.vue'

defineProps({
  title: { type: String, required: true },
  titleBreak: { type: Boolean, default: true },
  highlightText: { type: String, default: '' },
  description: { type: String, default: '' },
  badge: { type: String, default: '' },
  primaryCta: { type: Object, default: null },
  secondaryCta: { type: Object, default: null },
  trustIndicators: { type: Array, default: () => [] },
})

defineEmits(['primary-click', 'secondary-click'])

const patternStyle = computed(() => ({
  backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2NDc0ODgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+")`,
  opacity: 0.5,
}))
</script>
