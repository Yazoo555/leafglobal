<template>
  <section aria-label="IT Audit" class="section-padding bg-white overflow-hidden relative">
    <!-- Decorative elements -->
    <div class="absolute right-[-8%] top-[5%] w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[70px] pointer-events-none" />
    <div class="absolute left-[-5%] bottom-[40%] w-[200px] h-[200px] rounded-full bg-finance/[0.03] blur-[50px] pointer-events-none" />

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 0 }" class="text-center max-w-3xl mx-auto mb-14">
        <span class="badge-blue mb-4 inline-block">IT Audit</span>
        <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark">
          Understanding<br class="sm:hidden" />
          <span class="text-gradient-blue">IT Audit & Assurance</span>
        </h2>
        <p class="mt-4 body-lg text-text-light">
          An IT Audit is a systematic evaluation of an organisation's technology infrastructure,
          policies, and operations. It assesses whether systems are secure, compliant,
          efficient, and aligned with business objectives — providing assurance that
          your technology landscape is under control.
        </p>
      </div>

      <!-- Two-column: What vs Why -->
      <div v-scroll-reveal.stagger.100="'slide-up'" class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        <!-- What is an IT Audit -->
        <div class="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
          <div class="gradient-blue px-8 py-10 text-center">
            <div class="w-14 h-14 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4">
              <Icon name="shield" size="28" color="white" />
            </div>
            <h3 class="text-h4 font-heading font-bold text-white">What Is an IT Audit?</h3>
            <p class="text-white/70 body-md mt-2">A comprehensive health check for your technology</p>
          </div>
          <div class="p-8">
            <p class="body-md text-text-light mb-5">
              An IT Audit examines your organisation's technology systems, processes, and controls
              to identify risks, ensure compliance, and uncover opportunities for improvement.
              It provides a clear picture of where your technology stands and what needs attention.
            </p>
            <ul class="space-y-3">
              <li v-for="point in whatPoints" :key="point" class="flex items-start gap-3">
                <Icon name="check-circle" size="16" class="text-primary mt-0.5 shrink-0" />
                <span class="body-sm text-text-light">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Why Businesses Need IT Audits -->
        <div class="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
          <div class="gradient-finance px-8 py-10 text-center">
            <div class="w-14 h-14 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4">
              <Icon name="bar-chart" size="28" color="white" />
            </div>
            <h3 class="text-h4 font-heading font-bold text-white">Why Your Business Needs One</h3>
            <p class="text-white/70 body-md mt-2">Protect, optimise, and future-proof your operations</p>
          </div>
          <div class="p-8">
            <p class="body-md text-text-light mb-5">
              In today's regulatory environment, IT Audits are no longer optional. They protect
              your organisation from security breaches, compliance penalties, operational downtime,
              and strategic misalignment — while building trust with stakeholders and clients.
            </p>
            <ul class="space-y-3">
              <li v-for="point in whyPoints" :key="point" class="flex items-start gap-3">
                <Icon name="check-circle" size="16" class="text-finance mt-0.5 shrink-0" />
                <span class="body-sm text-text-light">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Audit Pillars -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="mb-14">
        <h3 class="text-h4 font-heading font-semibold text-dark text-center mb-10">
          Key Pillars of an IT Audit
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            class="glass-card p-6 sm:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
              :class="pillar.iconBg"
            >
              <Icon :name="pillar.icon" :size="22" :color="pillar.iconColor" />
            </div>

            <h4 class="font-heading font-semibold text-dark h6 mb-2 transition-colors duration-200"
              :class="pillar.titleClass">
              {{ pillar.title }}
            </h4>
            <p class="body-sm text-text-light flex-1">{{ pillar.description }}</p>
          </div>
        </div>
      </div>

      <!-- Concluding CTA: Leaf Global's IT Audit Services -->
      <div v-scroll-reveal="{ animation: 'slide-up', delay: 300 }" class="text-center max-w-3xl mx-auto">
        <div class="glass-card p-8 sm:p-10 lg:p-12 crystal-reflection crystal-reflection--light-bg">
          <div class="w-14 h-14 mx-auto rounded-2xl gradient-blue flex items-center justify-center mb-5 shadow-glass-sm">
            <Icon name="shield" size="28" color="white" />
          </div>

          <h3 class="text-h4 font-heading font-semibold text-dark mb-3">
            Leaf Global IT Audit Services
          </h3>

          <p class="body-md text-text-light mb-6">
            Our certified IT audit professionals deliver thorough, independent assessments
            of your technology environment. We provide actionable recommendations that
            strengthen security, ensure compliance, improve efficiency, and support
            business continuity — giving you the confidence to focus on growth.
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <Button variant="glass-primary" size="lg" @click="$emit('audit-click')">
              Schedule an IT Audit
              <template #icon><Icon name="arrow-right" size="18" /></template>
            </Button>
            <Button variant="glass" size="lg" @click="$emit('learn-click')">
              Learn More About Audits
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from '@/components/global/Icon.vue'
import Button from '@/components/global/Button.vue'

defineEmits(['audit-click', 'learn-click'])

const whatPoints = [
  'Evaluates IT governance, security controls, and compliance posture',
  'Reviews system architecture, data management, and access controls',
  'Assesses disaster recovery planning and business continuity readiness',
  'Identifies operational inefficiencies and technology gaps',
]

const whyPoints = [
  'Regulatory compliance requirements are increasingly stringent',
  'Cyber threats are evolving — proactive assessment reduces risk',
  'Audit findings directly improve operational efficiency and cost management',
  'Stakeholders and insurers increasingly demand independent assurance',
]

const pillars = [
  {
    icon: 'shield',
    title: 'Technology Governance',
    description: 'Evaluating the policies, procedures, and oversight structures that guide technology decision-making and ensure alignment with business objectives.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
  },
  {
    icon: 'briefcase',
    title: 'Compliance',
    description: 'Assessing adherence to regulatory requirements, industry standards, and contractual obligations to avoid penalties and protect your operating licence.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
  },
  {
    icon: 'target',
    title: 'Risk Assessment',
    description: 'Identifying, analysing, and prioritising technology risks — from cybersecurity threats to data privacy exposures — and recommending mitigation strategies.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
    titleClass: 'group-hover:text-finance',
  },
  {
    icon: 'zap',
    title: 'Operational Efficiency',
    description: 'Analysing system performance, workflow automation, and resource utilisation to uncover opportunities for optimisation and cost reduction.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
    titleClass: 'group-hover:text-finance',
  },
  {
    icon: 'clock',
    title: 'Business Continuity',
    description: 'Reviewing disaster recovery plans, backup strategies, and incident response capabilities to ensure your organisation can withstand and recover from disruptions.',
    iconBg: 'icon-orange',
    iconColor: '#F97316',
    titleClass: 'group-hover:text-education',
  },
]
</script>
