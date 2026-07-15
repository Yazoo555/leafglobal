<template>
  <div
    class="crystal-divider"
    :class="[paddingClasses, variant === 'light' ? 'crystal-divider-light' : '']"
  >
    <div class="crystal-divider-line"></div>
    <div
      class="crystal-divider-orb"
      :class="orbVariantClass"
    >
      <div class="crystal-divider-orb-inner"></div>
    </div>
    <div class="crystal-divider-line"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /**
   * Color variant for the orb
   * 'neutral' (default) — standard chrome/silver
   * 'blue'    — blue-tinted (Technology)
   * 'green'   — green-tinted (Finance)
   * 'orange'  — orange-tinted (Education)
   * 'light'   — light variant for dark backgrounds
   */
  variant: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'blue', 'green', 'orange', 'light'].includes(value),
  },
  /**
   * Padding size
   * 'sm' — py-4 lg:py-6 (after service sections)
   * 'md' — py-6 lg:py-8 (after ImpactStats, WhyChooseUs, etc.)
   */
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md'].includes(value),
  },
})

const paddingClasses = computed(() => {
  return props.padding === 'sm' ? 'py-4 lg:py-6' : 'py-6 lg:py-8'
})

const orbVariantClass = computed(() => {
  if (props.variant === 'neutral' || props.variant === 'light') return ''
  return `crystal-divider-orb--${props.variant}`
})
</script>
