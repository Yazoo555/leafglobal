<template>
  <div :class="alignmentClasses">
    <!-- Badge -->
    <span
      v-if="badge"
      class="inline-block px-3 py-1 badge uppercase rounded-full mb-4"
      :class="badgeClasses"
    >
      {{ badge }}
    </span>

    <!-- Title -->
    <h2
      :class="[
        titleSize,
        animated ? 'animate-fade-in' : '',
        gradient ? 'text-gradient-blue' : 'text-dark'
      ]"
      :style="animated ? { animationDelay: '0.1s' } : {}"
    >
      {{ title }}
    </h2>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      class="mt-4 text-text-light max-w-2xl body-md"
      :class="[alignment === 'center' ? 'mx-auto text-center' : 'text-left', animated ? 'animate-fade-in' : '']"
      :style="animated ? { animationDelay: '0.2s' } : {}"
    >
      {{ subtitle }}
    </p>

    <!-- Decorative Line -->
    <div
      v-if="showLine"
      class="mt-6 h-1 rounded-full w-20"
      :class="[alignment === 'center' ? 'mx-auto' : '', lineClasses]"
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
  /** 'blue' | 'green' | 'orange' - category color variant */
  color: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'green', 'orange'].includes(value),
  },
})

const alignmentClasses = computed(() => [
  props.alignment === 'center' ? 'text-center' : 'text-left',
])

const titleSize = computed(() => {
  const sizes = {
    sm: 'text-h4',
    md: 'text-h3',
    lg: 'text-h2',
    xl: 'text-h1',
  }
  return sizes[props.size]
})

const badgeClasses = computed(() => {
  const map = {
    blue: 'badge-blue',
    green: 'badge-green',
    orange: 'badge-orange',
  }
  return map[props.color]
})

const lineClasses = computed(() => {
  const map = {
    blue: 'bg-primary',
    green: 'bg-finance',
    orange: 'bg-education',
  }
  return map[props.color]
})
</script>
