<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  maxWidth: {
    type: String,
    default: '7xl',
    validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'].includes(value),
  },
  padding: {
    type: Boolean,
    default: true,
  },
  paddingY: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
})

const containerClasses = computed(() => {
  const maxWidthMap = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '3xl': 'max-w-screen-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  }

  return [
    'mx-auto w-full',
    maxWidthMap[props.maxWidth],
    props.padding ? 'px-4 sm:px-6 lg:px-8' : '',
    props.paddingY ? 'py-8 sm:py-12 lg:py-16' : '',
    props.className,
  ]
})
</script>
