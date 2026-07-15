<template>
  <section aria-label="Job Ready Portal" class="section-padding bg-white overflow-hidden relative">
    <!-- Subtle background decoration -->
    <div class="absolute right-[-5%] top-[15%] w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[70px] pointer-events-none" />
    <div class="absolute left-[-3%] bottom-[20%] w-[200px] h-[200px] rounded-full bg-finance/[0.03] blur-[50px] pointer-events-none" />

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 0 }" class="text-center max-w-3xl mx-auto mb-14">
        <span class="badge-blue mb-4 inline-block">Job Ready Portal</span>
        <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark">
          Your Pathway to<br />
          <span class="text-gradient-blue">Career Success</span>
        </h2>
        <p class="mt-4 body-lg text-text-light">
          A structured employment readiness program designed to equip you with the skills,
          confidence, and industry connections needed to secure meaningful employment
          and build a lasting career.
        </p>
      </div>

      <!-- Program Cards Grid -->
      <div v-scroll-reveal.stagger.100="'slide-up'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          v-for="program in programs"
          :key="program.title"
          class="glass-card p-5 sm:p-6 flex flex-col group hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Icon -->
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
            :class="program.iconBg"
          >
            <Icon :name="program.icon" :size="20" :color="program.iconColor" />
          </div>

          <h3 class="font-heading font-semibold text-dark h6 mb-1.5 transition-colors duration-200"
            :class="program.titleClass">
            {{ program.title }}
          </h3>

          <p class="body-sm text-text-light flex-1">{{ program.description }}</p>

          <div class="mt-3 pt-3 border-t border-gray-200/50">
            <span class="inline-flex items-center gap-1 caption font-medium transition-all duration-200 group-hover:gap-2"
              :class="program.linkClass">
              Get Started
              <Icon name="arrow-right" size="12" />
            </span>
          </div>
        </div>
      </div>

      <!-- Pathway Steps -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="mt-14">
        <div class="glass-card p-8 sm:p-10 lg:p-12">
          <h3 class="text-h4 font-heading font-semibold text-dark text-center mb-10">
            Your Employment Pathway
          </h3>

          <div class="relative">
            <!-- Desktop connecting line -->
            <div class="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-primary-100" />

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              <div
                v-for="(step, index) in pathway"
                :key="step.label"
                class="relative text-center"
              >
                <!-- Step number -->
                <div class="relative z-10 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-heading font-bold body-md mb-4 shadow-glass-sm"
                  :class="step.bgClass">
                  {{ index + 1 }}
                </div>

                <h4 class="font-heading font-semibold text-dark h6 mb-1.5">{{ step.label }}</h4>
                <p class="body-sm text-text-light">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 300 }" class="mt-10 text-center">
        <Button variant="glass-primary" size="xl" @click="$emit('enroll-click')">
          Enrol Now
          <template #icon><Icon name="arrow-right" size="20" /></template>
        </Button>

      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from '@/components/global/Icon.vue'
import Button from '@/components/global/Button.vue'

defineEmits(['enroll-click'])

const programs = [
  {
    icon: 'target',
    title: 'Career Readiness',
    description: 'Build foundational skills and career awareness to confidently navigate the job market and identify your ideal career pathway.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
    linkClass: 'text-primary',
  },
  {
    icon: 'star',
    title: 'Professional Training',
    description: 'Industry-aligned training programs designed to build practical, job-ready skills that employers are actively seeking.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
    linkClass: 'text-primary',
  },
  {
    icon: 'trending-up',
    title: 'Employment Pathways',
    description: 'Structured progression routes that connect training directly to employment opportunities with partner organisations.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
    titleClass: 'group-hover:text-finance',
    linkClass: 'text-finance',
  },
  {
    icon: 'briefcase',
    title: 'Resume Preparation',
    description: 'Expert guidance to craft compelling resumes, cover letters, and professional profiles that get noticed by employers.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
    linkClass: 'text-primary',
  },
  {
    icon: 'users',
    title: 'Interview Skills',
    description: 'Practical interview preparation including mock interviews, feedback sessions, and confidence-building techniques.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
    titleClass: 'group-hover:text-finance',
    linkClass: 'text-finance',
  },
  {
    icon: 'shield',
    title: 'Industry Readiness',
    description: 'Sector-specific preparation covering workplace expectations, industry standards, and professional conduct.',
    iconBg: 'icon-orange',
    iconColor: '#F97316',
    titleClass: 'group-hover:text-education',
    linkClass: 'text-education',
  },
  {
    icon: 'zap',
    title: 'Workforce Development',
    description: 'Ongoing support and development programs to help you advance, upskill, and grow throughout your career journey.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
    linkClass: 'text-primary',
  },
]

const pathway = [
  {
    label: 'Skills Assessment',
    description: 'Evaluate your current capabilities and identify development areas to create a personalised training plan.',
    bgClass: 'gradient-blue',
  },
  {
    label: 'Training & Development',
    description: 'Build job-ready skills through structured programs, professional training, and practical workshops.',
    bgClass: 'bg-finance',
  },
  {
    label: 'Career Coaching',
    description: 'One-on-one coaching covering resume writing, interview preparation, and job search strategies.',
    bgClass: 'bg-education',
  },
  {
    label: 'Employment Placement',
    description: 'Connect with partner employers, access job opportunities, and receive ongoing support for your first 90 days.',
    bgClass: 'gradient-blue',
  },
]
</script>
