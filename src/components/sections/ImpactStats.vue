<template>
  <section v-scroll-reveal="'fade-in'" class="section-padding gradient-dark">
    <div class="container-custom">
      <div v-scroll-reveal.stagger="'slide-up'" class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="text-center"
        >
          <!-- Animated number -->
          <div class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-2 tabular-nums">
            <span v-if="stat.prefix">{{ stat.prefix }}</span>
            <span ref="numberRefs" :data-target="stat.value">{{ displayValues[index] }}</span>
            <span v-if="stat.suffix">{{ stat.suffix }}</span>
          </div>
          <p class="text-sm text-gray-400">{{ stat.label }}</p>
          <p v-if="stat.subtext" class="text-xs text-gray-500 mt-1">{{ stat.subtext }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  stats: {
    type: Array,
    default: () => [
      { value: 100, prefix: '', suffix: '+', label: 'Clients Served', subtext: 'Across 15+ industries' },
      { value: 5, prefix: '', suffix: '+', label: 'Years Experience', subtext: 'Since 2020' },
      { value: 200, prefix: '', suffix: '+', label: 'Projects Delivered', subtext: 'On time & on budget' },
      { value: 98, prefix: '', suffix: '%', label: 'Client Retention', subtext: 'Year over year' },
    ],
  },
  /** Whether to animate the counters on mount */
  animate: { type: Boolean, default: true },
  /** Duration of the count animation in ms */
  duration: { type: Number, default: 2000 },
})

const displayValues = ref(props.stats.map(() => 0))
const numberRefs = ref([])
let animationFrame = null
let observer = null

const animateCounters = () => {
  const targets = props.stats.map((s) => s.value)
  const startTime = performance.now()

  const step = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    // Ease-out cubic
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

  // Use IntersectionObserver to trigger animation when visible
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
