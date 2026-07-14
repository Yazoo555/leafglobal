<template>
  <section v-scroll-reveal="'fade-in'" :class="['section-padding', darkBg ? 'bg-background-secondary' : 'bg-white']">
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
          class="glass-card p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
          @click="$emit('service-click', service)"
        >
          <!-- Icon — color-coded by category -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0 transition-all duration-300 group-hover:scale-110"
            :class="service.iconBgClass"
          >
            <Icon :name="service.icon" size="24" :color="service.iconColor" />
          </div>

          <!-- Badge — color-coded -->
          <span
            v-if="service.badge"
            class="self-start px-2.5 py-0.5 badge uppercase rounded-full mb-3"
            :class="service.badgeClass"
          >
            {{ service.badge }}
          </span>

          <h3 class="font-heading font-semibold text-dark h5 mb-2 transition-colors duration-200"
            :class="service.titleClass">
            {{ service.title }}
          </h3>

          <p class="text-text-light body-md flex-1">
            {{ service.description }}
          </p>

          <div class="mt-4 pt-4 border-t border-gray-200/50">
            <span class="inline-flex items-center gap-1.5 caption font-medium transition-all duration-200 group-hover:gap-2.5"
              :class="service.linkClass">
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

const props = defineProps({
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
        iconBgClass: 'icon-orange',
        iconColor: '#F97316',
        badgeClass: 'badge-orange',
        titleClass: 'group-hover:text-education',
        linkClass: 'text-education',
      },
      {
        icon: 'shield',
        title: 'Law Consulting & Training',
        description: 'Legal compliance training, policy development, and regulatory advisory services for organisations navigating complex legal landscapes.',
        badge: 'Legal',
        iconBgClass: 'icon-blue',
        iconColor: '#2563EB',
        badgeClass: 'badge-blue',
        titleClass: 'group-hover:text-primary',
        linkClass: 'text-primary',
      },
      {
        icon: 'code',
        title: 'IT Consulting & Training',
        description: 'IT strategy, digital transformation advisory, and technical training programs to build your organisation technological capability.',
        badge: 'Technology',
        iconBgClass: 'icon-blue',
        iconColor: '#2563EB',
        badgeClass: 'badge-blue',
        titleClass: 'group-hover:text-primary',
        linkClass: 'text-primary',
      },
      {
        icon: 'bar-chart',
        title: 'Finance Consulting & Training',
        description: 'Financial planning, risk management training, and compliance audit readiness services for sound financial governance.',
        badge: 'Finance',
        iconBgClass: 'icon-green',
        iconColor: '#10B981',
        badgeClass: 'badge-green',
        titleClass: 'group-hover:text-finance',
        linkClass: 'text-finance',
      },
    ],
  },
  darkBg: { type: Boolean, default: false },
})

defineEmits(['service-click'])
</script>
