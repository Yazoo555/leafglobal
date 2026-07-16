<template>
  <section aria-label="Consulting promotion" class="section-padding bg-white overflow-hidden relative">
    <!-- Subtle decorative gradient orbs -->
    <div class="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[80px] pointer-events-none" />
    <div class="absolute left-[-5%] bottom-[30%] w-[300px] h-[300px] rounded-full bg-finance/[0.03] blur-[60px] pointer-events-none" />

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 0 }" class="text-center max-w-3xl mx-auto mb-14">
        <span class="badge-blue mb-4 inline-block">Professional Consulting</span>
        <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark">
          Expert Guidance.<br />
          <span class="text-gradient-blue">Tangible Results.</span>
        </h2>
        <p class="mt-4 body-lg text-text-light">
          Practical consulting designed to help your organisation navigate complexity,
          build capability, and achieve measurable outcomes — delivered by experienced
          consultants who understand your business.
        </p>
      </div>

      <!-- Benefits Grid: 3 columns x 2 rows -->
      <div v-scroll-reveal.stagger.100="'slide-up'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          class="glass-card p-6 sm:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Icon container -->
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
            :class="benefit.iconBg"
          >
            <Icon :name="benefit.icon" :size="24" :color="benefit.iconColor" />
          </div>

          <h3 class="font-heading font-semibold text-dark h5 mb-2 transition-colors duration-200"
            :class="benefit.titleClass">
            {{ benefit.title }}
          </h3>
          <p class="body-md text-text-light flex-1">{{ benefit.description }}</p>

          <div class="mt-4 pt-4 border-t border-gray-200/50">
            <span class="inline-flex items-center gap-1.5 caption font-medium transition-all duration-200 group-hover:gap-2.5"
              :class="benefit.linkClass">
              Learn More
              <Icon name="arrow-right" size="14" />
            </span>
          </div>
        </div>
      </div>

      <!-- Engagement Options -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="mt-14">
        <div class="relative overflow-hidden rounded-[24px] gradient-blue px-8 sm:px-12 lg:px-16 py-10 sm:py-12 lg:py-14 text-center crystal-reflection crystal-reflection--animated">
          <!-- Decorative glass elements -->
          <div class="absolute top-[-30%] right-[-10%] w-[200px] h-[200px] rounded-full bg-white/[0.06] blur-[40px]" />
          <div class="absolute bottom-[-20%] left-[-5%] w-[150px] h-[150px] rounded-full bg-white/[0.04] blur-[30px]" />

          <div class="relative z-10">
            <span class="inline-block px-4 py-1.5 badge uppercase rounded-full bg-white/15 text-white/90 mb-5">
              Flexible Consulting Packages
            </span>

            <p class="text-h4 lg:text-h3 font-heading font-semibold text-white mb-2">
              Starting from just
              <span class="text-[2rem] lg:text-[2.5rem] font-bold tracking-tight">$1/day</span>
              <span class="text-white/60 text-h5 lg:text-h4 align-top">*</span>
            </p>

            <p class="body-md text-white/70 max-w-xl mx-auto mb-2">
              Enterprise expertise without enterprise overhead. Whether you require a single
              consultation, project-based advisory, or ongoing strategic support, we'll tailor
              a consulting package that aligns with your business objectives.
            </p>

            <p class="body-sm text-white/50 max-w-lg mx-auto mb-8">
              *Custom pricing applies depending on project scope, engagement model, and consulting requirements.
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap justify-center gap-4">
              <Button
                variant="glass-primary"
                size="lg"
                class="!bg-white !text-primary hover:!bg-white/90"
                @click="$emit('primary-click')"
              >
                Get Started Today
                <template #icon><Icon name="arrow-right" size="18" /></template>
              </Button>
              <Button
                variant="glass-primary"
                size="lg"
                class="!bg-white !text-primary hover:!bg-white/90"
                @click="$emit('secondary-click')"
              >
                Contact Us for a Quote
                <template #icon><Icon name="arrow-right" size="18" /></template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from '@/components/global/Icon.vue'
import Button from '@/components/global/Button.vue'

defineEmits(['primary-click', 'secondary-click'])

const benefits = [
  {
    icon: 'clock',
    title: 'Affordable Daily Consulting',
    description: 'Expert consulting at a predictable daily rate — no retainers, no surprises.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
    linkClass: 'text-primary',
  },
  {
    icon: 'zap',
    title: 'Digital Transformation',
    description: 'Practical technology roadmaps and modernisation that deliver measurable outcomes for your organisation.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
    linkClass: 'text-primary',
  },
  {
    icon: 'code',
    title: 'Technology Consulting',
    description: 'Expert IT advisory covering infrastructure, cloud, integration, and procurement to optimise operations.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
    linkClass: 'text-primary',
  },
  {
    icon: 'briefcase',
    title: 'Business Advisory',
    description: 'Strategic business guidance covering planning, improvement, design, and growth — built for lasting results.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
    titleClass: 'group-hover:text-finance',
    linkClass: 'text-finance',
  },
  {
    icon: 'users',
    title: 'SME Support',
    description: 'Tailored consulting for SMEs — practical expertise to scale operations and build for growth.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
    titleClass: 'group-hover:text-finance',
    linkClass: 'text-finance',
  },
  {
    icon: 'shield',
    title: 'Compliance Consulting',
    description: 'Navigate complex regulatory requirements with expert guidance on compliance, audit readiness, and risk management.',
    iconBg: 'icon-orange',
    iconColor: '#F97316',
    titleClass: 'group-hover:text-education',
    linkClass: 'text-education',
  },
]
</script>
