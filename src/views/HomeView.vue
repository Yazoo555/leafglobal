<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Technology. Security. Advisory. Workforce."
      titleBreak
      highlight-text="Seven Disciplines, One Integrated Partner"
      badge="Multi-Discipline Enterprise Consulting"
      description="Integrated consulting across technology, cybersecurity, business advisory and workforce development. We help enterprises modernise systems, strengthen security, achieve compliance and build lasting capability — through a single trusted partner."
      cta-text="Get Started"
    />

    <!-- 2. Job Ready Portal -->
    <CrystalDivider variant="neutral" padding="sm" />

    <JobReadyPortal @enroll-click="router.push('/contact')" />

    <!-- 3. IT Audit -->
    <CrystalDivider variant="neutral" padding="sm" />

    <ITAudit
      @audit-click="router.push('/contact')"
      @learn-click="router.push('/services')"
    />

    <!-- 4. Cybersecurity -->
    <CrystalDivider variant="neutral" padding="sm" />

    <Cybersecurity
      @security-click="router.push('/contact')"
      @learn-click="router.push('/services')"
    />

    <!-- 5. Consulting Promotion -->
    <CrystalDivider variant="neutral" padding="sm" />

    <ConsultingPromotion
      @primary-click="router.push('/contact')"
      @secondary-click="router.push('/contact')"
    />

    <!-- 6. Digital Transformation & Technology Solutions -->
    <CrystalDivider variant="blue" padding="sm" />

    <ServiceSection
      color="blue"
      badge="Digital Transformation"
      title="Digital Transformation & Technology Solutions"
      description="End-to-end technology consulting that helps your organisation modernise systems, adopt emerging technologies, and build lasting digital capability. From cloud migration and AI readiness to managed services and automation, we deliver practical guidance every step of the way."
      :points="techPoints"
      :services="techServices"
      icon="code"
      card-title="Full-Spectrum Digital Solutions"
      card-description="Comprehensive technology services spanning cloud, infrastructure, AI, and strategy — delivered by consultants who understand your business."
      btn-text="Explore Digital Solutions"
      @cta-click="router.push('/services')"
    />

    <!-- 7. Business Advisory & Financial Consulting -->
    <CrystalDivider variant="green" padding="sm" />

    <ServiceSection
      color="green"
      badge="Business Advisory"
      title="Business Advisory & Financial Consulting"
      description="Strategic business and financial consulting that strengthens governance, drives operational excellence, and ensures compliance. We help organisations build robust frameworks, manage risk effectively, and achieve sustainable performance improvement."
      :points="financePoints"
      :services="financeServices"
      icon="bar-chart"
      card-title="Strategic Business Advisory"
      card-description="Integrated advisory combining business strategy, financial expertise, and governance to help your organisation achieve lasting results."
      btn-text="Explore Business Advisory"
      reversed
      bg-class="bg-background-secondary"
      @cta-click="router.push('/services')"
    />

    <!-- 8. Education, Training & Workforce Development -->
    <CrystalDivider variant="orange" padding="sm" />

    <ServiceSection
      color="orange"
      badge="Workforce Development"
      title="Education, Training & Workforce Development"
      description="Comprehensive workforce development solutions that build organisational capability through professional development, corporate training, and industry-aligned programs. We help individuals and organisations prepare for the future of work."
      :points="educationPoints"
      :services="educationServices"
      icon="star"
      card-title="Workforce Capability Solutions"
      card-description="End-to-end workforce development combining education consulting, professional certifications, and industry-aligned training to build the skills your organisation needs."
      btn-text="Explore Workforce Solutions"
      @cta-click="router.push('/services')"
    />

    <!-- 9. Advisory Sales Promotion -->
    <CrystalDivider variant="blue" padding="sm" />

    <AdvisorySalesPromotion @consult-click="router.push('/contact')" />

    <!-- 10. Testimonials -->
    <CrystalDivider variant="neutral" padding="md" />

    <Testimonials
      badge="Client Success"
      title="Trusted by Industry Leaders"
      subtitle="Hear from organisations that have partnered with us to transform their capability and performance."
      dark-bg
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeroSection from '@/components/sections/HeroSection.vue'
import ConsultingPromotion from '@/components/sections/ConsultingPromotion.vue'
import AdvisorySalesPromotion from '@/components/sections/AdvisorySalesPromotion.vue'
import JobReadyPortal from '@/components/sections/JobReadyPortal.vue'
import ITAudit from '@/components/sections/ITAudit.vue'
import Cybersecurity from '@/components/sections/Cybersecurity.vue'
import ServiceSection from '@/components/sections/ServiceSection.vue'
import CrystalDivider from '@/components/sections/CrystalDivider.vue'
import Testimonials from '@/components/sections/Testimonials.vue'

const router = useRouter()

const techPoints = [
  'Digital strategy and end-to-end transformation roadmaps',
  'Cloud solutions, managed services, and infrastructure modernisation',
  'AI readiness, automation, and intelligent business systems',
  'Technology strategy, architecture, and capability building',
]

const techServices = [
  'Digital Transformation', 'Cloud Solutions',
  'Infrastructure', 'Business Systems',
  'AI Readiness', 'Automation',
  'Technology Strategy', 'Managed Services',
]

const financePoints = [
  'Business strategy development and execution planning',
  'Governance frameworks and operational excellence',
  'Financial advisory, risk management, and compliance',
  'Performance improvement and organisational transformation',
]

const financeServices = [
  'Business Strategy', 'Governance',
  'Financial Advisory', 'Compliance',
  'Operational Excellence', 'Risk Management',
  'Performance Improvement',
]

const educationPoints = [
  'Professional development and corporate training programs',
  'Workforce readiness and career pathway design',
  'Industry skills development and education consulting',
  'Professional certifications and capability building',
]

const educationServices = [
  'Professional Development', 'Corporate Training',
  'Workforce Readiness', 'Career Pathways',
  'Industry Skills', 'Education Consulting',
  'Professional Certifications',
]

</script>
