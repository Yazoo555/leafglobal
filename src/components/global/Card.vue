<template>
  <div
    :class="[
      'card-base overflow-hidden group',
      hoverable ? 'hover:-translate-y-1 cursor-pointer' : '',
      animated ? 'opacity-0 animate-slide-up' : '',
    ]"
    :style="animated ? { animationDelay: `${delay}ms`, animationFillMode: 'forwards' } : {}"
    v-bind="$attrs"
  >
    <!-- Image -->
    <div v-if="$slots.image || image" class="relative overflow-hidden aspect-video rounded-t-[20px]">
      <slot name="image">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </slot>
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <!-- Content -->
    <div :class="['p-6 sm:p-8', !image && !$slots.image ? 'pt-6 sm:pt-8' : '']">
      <!-- Badge -->
      <span
        v-if="badge"
        class="inline-block px-2.5 py-0.5 badge uppercase rounded-full mb-3"
        :class="badgeClasses"
      >
        {{ badge }}
      </span>

      <!-- Title -->
      <h3 class="font-heading font-semibold text-dark h5 mb-2 group-hover:text-primary transition-colors duration-200">
        <slot name="title">{{ title }}</slot>
      </h3>

      <!-- Description -->
      <p v-if="description || $slots.default" class="text-text-light body-md">
        <slot>{{ description }}</slot>
      </p>

      <!-- Footer / Link -->
      <div v-if="$slots.footer || to" class="mt-4 pt-4 border-t border-gray-200/50">
        <slot name="footer">
          <router-link
            v-if="to"
            :to="to"
            class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-600 transition-colors duration-200 group/link"
          >
            Learn More
            <svg class="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  badge: {
    type: String,
    default: '',
  },
  badgeVariant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'finance', 'education'].includes(value),
  },
  to: {
    type: [String, Object],
    default: null,
  },
  hoverable: {
    type: Boolean,
    default: true,
  },
  animated: {
    type: Boolean,
    default: false,
  },
  delay: {
    type: Number,
    default: 0,
  },
})

const badgeClasses = computed(() => {
  const map = {
    primary: 'bg-primary-50 text-primary',
    finance: 'bg-finance-50 text-finance',
    education: 'bg-education-50 text-education',
  }
  return map[props.badgeVariant]
})
</script>
