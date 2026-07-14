<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-background">
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

        <!-- Right: Large Floating Crystal Cards -->
        <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="hidden lg:block relative">
          <div class="relative w-full aspect-[5/4]">
            <!-- Main large glass card - Technology -->
            <div class="glass-card absolute top-[3%] left-[3%] right-[3%] p-8 animate-float crystal-reflection crystal-reflection--animated" style="animation-delay: 1s; animation-duration: 7s;">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-2xl gradient-blue flex items-center justify-center shadow-glass-sm">
                  <Icon name="briefcase" size="24" color="white" />
                </div>
                <div>
                  <p class="body-md font-semibold text-dark">Global Technology Consulting</p>
                  <p class="caption text-text-light">Digital transformation & IT strategy</p>
                </div>
              </div>
              <div class="metallic-divider my-4" />
              <p class="body-sm text-text-light">Driving innovation through expert technology advisory and digital solutions across industries worldwide.</p>
              <div class="mt-4 pt-4 border-t border-white/30 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span class="caption text-primary font-medium">Active engagement</span>
              </div>
            </div>

            <!-- Finance card - elevated -->
            <div class="glass-card absolute bottom-[5%] left-[-5%] w-[48%] p-6 animate-float crystal-reflection crystal-reflection--animated" style="animation-delay: 2.5s; animation-duration: 8s;">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl gradient-finance flex items-center justify-center shadow-glass-sm">
                  <Icon name="bar-chart" size="20" color="white" />
                </div>
                <div>
                  <p class="body-md font-semibold text-dark">Audit & Finance</p>
                  <p class="caption text-text-light">Financial integrity & compliance</p>
                </div>
              </div>
              <div class="mt-3 flex items-center gap-2">
                <span class="caption text-finance font-medium">98% client retention</span>
              </div>
            </div>

            <!-- Education card - elevated -->
            <div class="glass-card absolute bottom-[5%] right-[-5%] w-[48%] p-6 animate-float crystal-reflection crystal-reflection--animated" style="animation-delay: 4s; animation-duration: 6s;">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl gradient-education flex items-center justify-center shadow-glass-sm">
                  <Icon name="star" size="20" color="white" />
                </div>
                <div>
                  <p class="body-md font-semibold text-dark">Education & Training</p>
                  <p class="caption text-text-light">Learning & professional development</p>
                </div>
              </div>
              <div class="mt-3 flex items-center gap-2">
                <span class="caption text-education font-medium">200+ programs delivered</span>
              </div>
            </div>
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
