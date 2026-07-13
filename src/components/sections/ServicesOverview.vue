<template>
  <section v-scroll-reveal="'fade-in'" :class="['section-padding', darkBg ? 'bg-background' : 'bg-white']">
    <div class="container-custom">
      <SectionTitle
        :badge="badge"
        :title="title"
        :subtitle="subtitle"
        alignment="center"
        gradient
      />

      <div v-scroll-reveal.stagger="'slide-up'" class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="card-base p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer"
          @click="$emit('service-click', service)"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shrink-0">
            <Icon :name="service.icon" size="24" color="white" />
          </div>

          <!-- Badge -->
          <span
            v-if="service.badge"
            class="self-start px-2.5 py-0.5 text-xs font-medium rounded-full mb-3"
            :class="service.highlight ? 'bg-red-50 text-red-600' : 'bg-primary-50 text-primary'"
          >
            {{ service.badge }}
          </span>

          <h3 class="font-heading font-semibold text-dark text-base mb-2 group-hover:text-primary transition-colors duration-200">
            {{ service.title }}
          </h3>

          <p class="text-text-light text-sm leading-relaxed flex-1">
            {{ service.description }}
          </p>

          <div class="mt-4 pt-4 border-t border-gray-100">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all duration-200">
              Learn More
              <Icon name="arrow-right" size="14" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/global/SectionTitle.vue'
import Icon from '@/components/global/Icon.vue'

defineProps({
  badge: { type: String, default: 'Our Services' },
  title: { type: String, default: 'Comprehensive Solutions' },
  subtitle: { type: String, default: '' },
  services: {
    type: Array,
    default: () => [
      {
        icon: 'star',
        title: 'Education Consulting & Training',
        description: 'Curriculum development, training program design, and education technology integration for schools, universities, and training organisations.',
        badge: 'Education',
        highlight: false,
      },
      {
        icon: 'shield',
        title: 'Law Consulting & Training',
        description: 'Legal compliance training, policy development, and regulatory advisory services for organisations navigating complex legal landscapes.',
        badge: 'Legal',
        highlight: false,
      },
      {
        icon: 'code',
        title: 'IT Consulting & Training',
        description: 'IT strategy, digital transformation advisory, and technical training programs to build your organisation technological capability.',
        badge: 'Technology',
        highlight: true,
      },
      {
        icon: 'bar-chart',
        title: 'Finance Consulting & Training',
        description: 'Financial planning, risk management training, and compliance audit readiness services for sound financial governance.',
        badge: 'Finance',
        highlight: true,
      },
    ],
  },
  darkBg: { type: Boolean, default: false },
})

defineEmits(['service-click'])
</script>
