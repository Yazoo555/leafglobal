<template>
  <section :aria-label="ariaLabel || badge" class="section-padding" :class="bgClass">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content Side -->
        <div :class="reversed ? 'lg:order-2' : 'lg:order-1'">
          <!-- Badge -->
          <span class="inline-block mb-4" :class="badgeClass">
            {{ badge }}
          </span>

          <!-- Heading -->
          <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark mb-4">
            {{ title }}
          </h2>

          <!-- Description -->
          <p class="text-text-light body-lg mb-6">{{ description }}</p>

          <!-- Bullet Points -->
          <ul class="space-y-3 mb-8">
            <li
              v-for="(point, index) in points"
              :key="index"
              class="flex items-start gap-3"
            >
              <Icon name="check-circle" size="18" :class="`${iconColorClass} mt-0.5 shrink-0`" />
              <span class="body-md text-text-light">{{ point }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <Button
            :variant="btnVariant || defaultBtnVariant"
            size="md"
            @click="$emit('cta-click')"
          >
            {{ btnText }}
            <template #icon><Icon name="arrow-right" size="16" /></template>
          </Button>
        </div>

        <!-- Glass Card Side -->
        <div
          class="glass-card p-8 lg:p-10 crystal-reflection crystal-reflection--light-bg overflow-hidden"
          :class="reversed ? 'lg:order-1' : 'lg:order-2'"
        >
          <!-- Optional Image -->
          <img
            v-if="image"
            :src="image"
            :alt="imageAlt"
            loading="lazy"
            class="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl mb-6 shadow-glass-sm"
          />

          <!-- Icon Container -->
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            :class="gradientClass"
          >
            <Icon :name="icon" size="32" color="white" />
          </div>

          <!-- Card Title -->
          <h3 class="text-h4 font-heading font-semibold text-dark mb-3">{{ cardTitle }}</h3>

          <!-- Card Description -->
          <p class="body-md text-text-light mb-4">{{ cardDescription }}</p>

          <!-- Service Grid -->
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="flex items-center gap-2 body-md text-text-light"
            >
              <span class="w-1.5 h-1.5 rounded-full shrink-0" :class="dotClass" />
              {{ service }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Icon from '@/components/global/Icon.vue'
import Button from '@/components/global/Button.vue'

const props = defineProps({
  /** Color variant: 'blue' | 'green' | 'orange' */
  color: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'green', 'orange'].includes(value),
  },
  /** Badge text (e.g. 'Technology', 'Finance & Audit') */
  badge: {
    type: String,
    required: true,
  },
  /** Section heading */
  title: {
    type: String,
    required: true,
  },
  /** Section description paragraph */
  description: {
    type: String,
    default: '',
  },
  /** Array of bullet point strings */
  points: {
    type: Array,
    default: () => [],
  },
  /** Array of service names for the 2-column grid inside the glass card */
  services: {
    type: Array,
    default: () => [],
  },
  /** Icon name for the glass card's icon container */
  icon: {
    type: String,
    default: 'code',
  },
  /** Title inside the glass card */
  cardTitle: {
    type: String,
    default: '',
  },
  /** Description inside the glass card */
  cardDescription: {
    type: String,
    default: '',
  },
  /** CTA button text */
  btnText: {
    type: String,
    default: 'Learn More',
  },
  /** Button variant. If omitted, derived from 'color' prop. */
  btnVariant: {
    type: String,
    default: null,
  },
  /** Whether to reverse the 2-column order (content on right, card on left) */
  reversed: {
    type: Boolean,
    default: false,
  },
  /** Background class for the section. Default is 'bg-white'. */
  bgClass: {
    type: String,
    default: 'bg-white',
  },
  /** Accessible label for the section landmark. Falls back to 'badge' prop if not provided. */
  ariaLabel: {
    type: String,
    default: '',
  },
  /** Optional image URL to display in the glass card area */
  image: {
    type: String,
    default: '',
  },
  /** Alt text for the optional image */
  imageAlt: {
    type: String,
    default: '',
  },
})

defineEmits(['cta-click'])

/* ── Color-derived computed classes ── */

const defaultBtnVariant = computed(() => {
  const map = { blue: 'blue', green: 'finance', orange: 'education' }
  return map[props.color]
})

const badgeClass = computed(() => {
  const map = { blue: 'badge-blue', green: 'badge-green', orange: 'badge-orange' }
  return map[props.color]
})

const iconColorClass = computed(() => {
  const map = { blue: 'text-primary', green: 'text-finance', orange: 'text-education' }
  return map[props.color]
})

const dotClass = computed(() => {
  const map = { blue: 'bg-primary', green: 'bg-finance', orange: 'bg-education' }
  return map[props.color]
})

const gradientClass = computed(() => {
  const map = { blue: 'gradient-blue', green: 'gradient-finance', orange: 'gradient-education' }
  return map[props.color]
})
</script>
