<template>
  <section v-scroll-reveal="'fade-in'" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <span class="badge-blue mb-4 inline-block">Company Achievements</span>
        <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark">Our Impact by the Numbers</h2>
        <p class="text-text-light body-md mt-3 max-w-2xl mx-auto">Measurable results that reflect our commitment to excellence across every engagement.</p>
      </div>

      <div v-scroll-reveal.stagger="'slide-up'" class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="glass-card p-6 md:p-8 text-center"
          :style="statBorderStyle(stat)"
        >
          <!-- Animated number with color-coded value -->
          <div class="stat-primary font-heading font-bold mb-2 tabular-nums"
            :class="statColorClass(stat)">
            <span v-if="stat.prefix">{{ stat.prefix }}</span>
            <span ref="numberRefs" :data-target="stat.value">{{ displayValues[index] }}</span>
            <span v-if="stat.suffix">{{ stat.suffix }}</span>
          </div>
          <p class="body-md text-text-light">{{ stat.label }}</p>
          <p v-if="stat.subtext" class="caption text-text-light/60 mt-1">{{ stat.subtext }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  stats: {
    type: Array,
    default: () => [
      { value: 100, prefix: '', suffix: '+', label: 'Clients Served', subtext: 'Across 15+ industries', color: 'blue' },
      { value: 5, prefix: '', suffix: '+', label: 'Years Experience', subtext: 'Since 2020', color: 'green' },
      { value: 200, prefix: '', suffix: '+', label: 'Projects Delivered', subtext: 'On time & on budget', color: 'orange' },
      { value: 98, prefix: '', suffix: '%', label: 'Client Retention', subtext: 'Year over year', color: 'green' },
    ],
  },
  animate: { type: Boolean, default: true },
  duration: { type: Number, default: 2000 },
})

const displayValues = ref(props.stats.map(() => 0))
const numberRefs = ref([])
let animationFrame = null
let observer = null

const statColorClass = (stat) => {
  const map = {
    blue: 'text-primary',
    green: 'text-finance',
    orange: 'text-education',
  }
  return map[stat.color] || 'text-primary'
}

const statBorderStyle = (stat) => ({
  borderTop: `2px solid ${
    stat.color === 'green' ? '#10B981' :
    stat.color === 'orange' ? '#F97316' :
    '#2563EB'
  }`
})

const animateCounters = () => {
  const targets = props.stats.map((s) => s.value)
  const startTime = performance.now()

  const step = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)

    displayValues.value = targets.map((target) =>
      Math.floor(eased * target)
    )

    if (progress < 1) {
      animationFrame = requestAnimationFrame(step)
    } else {
      displayValues.value = targets
    }
  }

  animationFrame = requestAnimationFrame(step)
}

onMounted(() => {
  if (!props.animate) {
    displayValues.value = props.stats.map((s) => s.value)
    return
  }

  if (numberRefs.value.length > 0) {
    const el = numberRefs.value[0]?.$el || numberRefs.value[0]
    if (el && el.parentElement) {
      const parent = el.closest('section') || el.parentElement
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounters()
              observer.disconnect()
            }
          })
        },
        { threshold: 0.3 }
      )
      observer.observe(parent)
    }
  }
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  if (observer) observer.disconnect()
})
</script>
