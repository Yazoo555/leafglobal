<template>
  <section aria-label="Cybersecurity" class="section-padding bg-background-secondary overflow-hidden relative">
    <!-- Decorative elements -->
    <div class="absolute left-[-8%] top-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.04] blur-[80px] pointer-events-none" />
    <div class="absolute right-[-5%] bottom-[20%] w-[250px] h-[250px] rounded-full bg-education/[0.03] blur-[60px] pointer-events-none" />

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 0 }" class="mb-14 lg:mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <!-- Header Text -->
          <div>
            <span class="badge-blue mb-4 inline-block">Cybersecurity</span>
            <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark">
              Protecting Your<br />
              <span class="text-gradient-blue">Digital Future</span>
            </h2>
            <p class="mt-4 body-lg text-text-light">
              Comprehensive cybersecurity services designed to protect your organisation from
              evolving threats. While an IT Audit identifies gaps and risks, our cybersecurity
              practice implements the controls, monitoring, and response capabilities needed
              to close those gaps and keep your business secure.
            </p>
          </div>

          <!-- Header Image -->
          <div class="order-first lg:order-last">
            <div class="glass-card overflow-hidden p-2">
              <img
                src="/images/cybersecurity.jpg"
                alt="Cybersecurity threat monitoring and network protection interface"
                loading="lazy"
                class="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-glass-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- IT Audit + Cybersecurity Complement -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 100 }" class="glass-card p-8 sm:p-10 mb-14 crystal-reflection crystal-reflection--light-bg">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div class="lg:col-span-2">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-2xl gradient-blue flex items-center justify-center shrink-0 shadow-glass-sm">
                <Icon name="shield" size="22" color="white" />
              </div>
              <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                <Icon name="arrow-right" size="16" class="text-primary" />
              </div>
              <div class="w-12 h-12 rounded-2xl gradient-finance flex items-center justify-center shrink-0 shadow-glass-sm">
                <Icon name="zap" size="22" color="white" />
              </div>
            </div>
            <h3 class="text-h4 font-heading font-semibold text-dark mb-2">
              From Audit to Action
            </h3>
            <p class="body-md text-text-light">
              IT Audit identifies where you stand. Cybersecurity implements the
              protections you need. Together, they form a complete approach to
              technology risk management — from assessment through to active defence.
            </p>
          </div>

          <div class="lg:col-span-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="point in complementPoints" :key="point.label" class="flex items-start gap-3 p-4 rounded-xl bg-background-secondary/70">
                <Icon :name="point.icon" size="16" class="text-primary mt-0.5 shrink-0" />
                <div>
                  <span class="body-sm font-semibold text-dark">{{ point.label }}</span>
                  <p class="caption text-text-light mt-0.5">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cybersecurity Services Grid -->
      <div v-scroll-reveal.stagger.100="'slide-up'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
        <div
          v-for="service in services"
          :key="service.title"
          class="glass-card p-5 sm:p-6 flex flex-col group hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <Icon :name="service.icon" :size="20" :color="service.iconColor" />
          </div>

          <h3 class="font-heading font-semibold text-dark h6 mb-1.5 transition-colors duration-200"
            :class="service.titleClass">
            {{ service.title }}
          </h3>
          <p class="body-sm text-text-light flex-1">{{ service.description }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 300 }" class="text-center max-w-2xl mx-auto">
        <h3 class="text-h4 font-heading font-semibold text-dark mb-3">
          Ready to Strengthen Your Defences?
        </h3>
        <p class="body-md text-text-light mb-8">
          Whether you need a full security assessment, targeted protection for a specific
          area, or an ongoing managed security partnership — our team is ready to help.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button variant="glass-primary" size="lg" @click="$emit('security-click')">
            Request a Security Review
            <template #icon><Icon name="arrow-right" size="18" /></template>
          </Button>
          <Button variant="glass" size="lg" @click="$emit('learn-click')">
            Explore Cyber Services
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from '@/components/global/Icon.vue'
import Button from '@/components/global/Button.vue'

defineEmits(['security-click', 'learn-click'])

const complementPoints = [
  {
    icon: 'check-circle',
    label: 'Audit Identifies Risks',
    description: 'Uncovers vulnerabilities, compliance gaps, and control weaknesses across your environment.',
  },
  {
    icon: 'zap',
    label: 'Security Implements Controls',
    description: 'Deploys the technical and procedural controls to address each identified risk.',
  },
  {
    icon: 'trending-up',
    label: 'Continuous Monitoring',
    description: 'Ongoing threat detection ensures your defences remain effective as new risks emerge.',
  },
  {
    icon: 'shield',
    label: 'Complete Protection',
    description: 'Together, they create a complete risk management lifecycle that protects your business.',
  },
]

const services = [
  {
    icon: 'shield',
    title: 'Threat Protection',
    description: 'Advanced detection and prevention systems that neutralise threats before they impact your business.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
  },
  {
    icon: 'code',
    title: 'Cloud Security',
    description: 'Robust security controls tailored to protect your cloud infrastructure, applications, and data.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
  },
  {
    icon: 'target',
    title: 'Network Security',
    description: 'Secure your network with firewalls, intrusion detection, and continuous vulnerability management.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
  },
  {
    icon: 'zap',
    title: 'Incident Response',
    description: 'Structured incident response to quickly contain, investigate, and recover from breaches.',
    iconBg: 'icon-orange',
    iconColor: '#F97316',
    titleClass: 'group-hover:text-education',
  },
]
</script>
