<template>
  <div :class="alignmentClasses">
    <!-- Badge -->
    <span
      v-if="badge"
      class="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary-50 text-primary mb-4"
    >
      {{ badge }}
    </span>

    <!-- Title -->
    <h2
      :class="[
        titleSize,
        animated ? 'animate-fade-in' : '',
        gradient ? 'leading-relaxed text-gradient pb-1' : 'text-dark'
      ]"
      :style="animated ? { animationDelay: '0.1s' } : {}"
    >
      {{ title }}
    </h2>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      class="mt-4 text-text-light max-w-2xl"
      :class="[alignment === 'center' ? 'mx-auto text-center' : 'text-left', animated ? 'animate-fade-in' : '']"
      :style="animated ? { animationDelay: '0.2s' } : {}"
    >
      {{ subtitle }}
    </p>

    <!-- Decorative Line -->
    <div
      v-if="showLine"
      class="mt-6 h-1 rounded-full w-20"
      :class="[alignment === 'center' ? 'mx-auto' : '', gradient ? 'gradient-primary' : 'bg-primary']"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  badge: {
    type: String,
    default: '',
  },
  alignment: {
    type: String,
    default: 'center',
    validator: (value) => ['center', 'left'].includes(value),
  },
  gradient: {
    type: Boolean,
    default: false,
  },
  showLine: {
    type: Boolean,
    default: true,
  },
  animated: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
})

const alignmentClasses = computed(() => [
  props.alignment === 'center' ? 'text-center' : 'text-left',
])

const titleSize = computed(() => {
  const sizes = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-3xl sm:text-4xl lg:text-5xl',
    xl: 'text-4xl sm:text-5xl lg:text-6xl',
  }
  return sizes[props.size]
})
</script>
