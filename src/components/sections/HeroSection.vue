<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 gradient-dark opacity-95" />
    <div class="absolute inset-0" :style="patternStyle" />

    <div class="container-custom relative z-10 pt-24 pb-16">
      <div class="max-w-3xl">
        <!-- Badge -->
        <span
          v-if="badge"
          v-scroll-reveal="{ animation: 'slide-up', delay: 0 }"
          class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 text-secondary mb-6 backdrop-blur-sm"
        >
          {{ badge }}
        </span>

        <!-- Heading -->
        <h1 v-scroll-reveal="{ animation: 'slide-up', delay: 100 }" class="text-4xl sm:text-5xl lg:text-hero font-heading font-bold text-white leading-tight">
          {{ title }}<br v-if="titleBreak" />
          <span v-if="highlightText" class="text-gradient inline-block pb-1">{{ highlightText }}</span>
        </h1>

        <!-- Description -->
        <p v-if="description" v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
          {{ description }}
        </p>

        <!-- CTA Buttons -->
        <div v-if="primaryCta || secondaryCta" v-scroll-reveal="{ animation: 'slide-up', delay: 300 }" class="mt-10 flex flex-wrap gap-4">
          <Button
            v-if="primaryCta"
            :variant="primaryCta.variant || 'secondary'"
            size="lg"
            @click="$emit('primary-click')"
          >
            {{ primaryCta.text }}
          </Button>
          <Button
            v-if="secondaryCta"
            :variant="secondaryCta.variant || 'outline'"
            size="lg"
            class="!border-white !text-white hover:!bg-white/10"
            @click="$emit('secondary-click')"
          >
            {{ secondaryCta.text }}
          </Button>
        </div>

        <!-- Stats -->
        <div
          v-if="stats && stats.length"
          v-scroll-reveal.stagger="'fade-in'"
          class="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center sm:text-left"
          >
            <div class="text-3xl sm:text-4xl font-heading font-bold text-white">
              {{ stat.value }}
            </div>
            <div class="text-sm text-gray-400 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative blobs -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
    <div class="absolute right-20 bottom-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Button from '@/components/global/Button.vue'

defineProps({
  title: { type: String, required: true },
  titleBreak: { type: Boolean, default: true },
  highlightText: { type: String, default: '' },
  description: { type: String, default: '' },
  badge: { type: String, default: '' },
  primaryCta: { type: Object, default: null },
  secondaryCta: { type: Object, default: null },
  stats: { type: Array, default: () => [] },
})

defineEmits(['primary-click', 'secondary-click'])

const patternStyle = computed(() => ({
  backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+")`,
  opacity: 0.3,
}))
</script>
