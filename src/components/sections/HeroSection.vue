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

        <!-- Right: Premium Advisory Sales Flyer -->
        <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="hidden lg:block relative">
          <div class="relative w-full aspect-[5/4]">
            <router-link
              to="/advisory-sales"
              class="glass-card absolute top-[3%] left-[3%] right-[3%] p-0 overflow-hidden group block animate-float crystal-reflection crystal-reflection--animated"
              style="animation-delay: 1s; animation-duration: 7s;"
            >
              <!-- Flyer Cover -->
              <div class="gradient-blue px-8 py-10 text-center relative">
                <div class="absolute top-[-20%] right-[-10%] w-[160px] h-[160px] rounded-full bg-white/[0.06] blur-[35px]" />
                <div class="absolute bottom-[-15%] left-[-5%] w-[120px] h-[120px] rounded-full bg-white/[0.04] blur-[25px]" />

                <div class="relative z-10">
                  <!-- Flyer badge -->
                  <span class="inline-block px-3 py-1 badge uppercase rounded-full bg-white/15 text-white/90 mb-5">
                    Enterprise Advisory
                  </span>

                  <!-- Flyer icon -->
                  <div class="w-14 h-14 mx-auto rounded-2xl bg-white/15 flex items-center justify-center mb-4 shadow-glass-sm backdrop-blur-sm">
                    <Icon name="briefcase" size="28" color="white" />
                  </div>

                  <h3 class="text-h3 font-heading font-bold text-white mb-2">
                    Advisory Sales<br />
                    <span class="text-white/80 text-h4">for Australian Businesses</span>
                  </h3>

                  <p class="body-sm text-white/70 max-w-xs mx-auto mb-5">
                    Strategic advisory, lead generation, and business development services tailored for the Australian enterprise market.
                  </p>

                  <div class="flex flex-wrap items-center justify-center gap-3 text-white/60 caption">
                    <span class="flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-white/40" />
                      Local Expertise
                    </span>
                    <span class="flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-white/40" />
                      Enterprise Focus
                    </span>
                    <span class="flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-white/40" />
                      Proven Results
                    </span>
                  </div>
                </div>
              </div>

              <!-- Flyer Body -->
              <div class="p-6">
                <div class="grid grid-cols-3 gap-4 mb-4">
                  <div class="text-center">
                    <div class="text-h4 font-heading font-bold text-primary">100+</div>
                    <p class="caption text-text-light">Enterprise Clients</p>
                  </div>
                  <div class="text-center">
                    <div class="text-h4 font-heading font-bold text-finance">98%</div>
                    <p class="caption text-text-light">Retention Rate</p>
                  </div>
                  <div class="text-center">
                    <div class="text-h4 font-heading font-bold text-education">15+</div>
                    <p class="caption text-text-light">Industries Served</p>
                  </div>
                </div>

                <div class="flex items-center justify-center gap-2 text-primary caption font-medium group-hover:gap-3 transition-all duration-200">
                  View Advisory Sales Package
                  <Icon name="arrow-right" size="14" class="transition-transform duration-200 group-hover:translate-x-1" />
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
