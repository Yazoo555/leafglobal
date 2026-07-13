<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <!-- Loading Spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2"
      :class="spinnerSize"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>

    <!-- Icon Slot -->
    <slot name="icon" />

    <!-- Default Slot -->
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'button',
  },
})

const sizeMap = {
  xs: 'px-3 py-1.5 text-xs gap-1.5',
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2.5',
  xl: 'px-8 py-4 text-lg gap-3',
}

const variantMap = {
  primary:
    'bg-primary text-white hover:bg-primary-600 active:bg-primary-700 focus:ring-primary-300 shadow-sm hover:shadow-md',
  secondary:
    'bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 focus:ring-secondary-300 shadow-sm hover:shadow-md',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-700 focus:ring-primary-300',
  ghost:
    'text-primary hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-200',
  danger:
    'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-300 shadow-sm',
}

const buttonClasses = computed(() => [
  'btn-base',
  sizeMap[props.size],
  variantMap[props.variant],
  props.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:scale-[1.02] active:scale-[0.97]',
  props.fullWidth ? 'w-full' : '',
  props.loading ? 'cursor-wait' : '',
])

const spinnerSize = computed(() => {
  const sizes = { xs: 'h-3 w-3', sm: 'h-4 w-4', md: 'h-4 w-4', lg: 'h-5 w-5', xl: 'h-5 w-5' }
  return sizes[props.size]
})
</script>
