<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Secure. Scale. Succeed."
      titleBreak
      highlight-text="with Leaf Global Consulting"
      badge="Trusted by 100+ Organisations"
      description="We help organisations build capability, ensure compliance, and achieve sustainable growth through expert consulting and training across Education, Law, IT, and Finance."
      :primary-cta="{ text: 'Book a Consultation', variant: 'glass-primary' }"
      :secondary-cta="{ text: 'Explore Our Services' }"
      :trust-indicators="trustIndicators"
      @primary-click="router.push('/contact')"
      @secondary-click="router.push('/services')"
    />

    <!-- 2. Consulting Promotion -->
    <ConsultingPromotion
      @primary-click="router.push('/contact')"
      @secondary-click="router.push('/contact')"
    />

    <!-- 3. Digital Transformation & Technology Solutions -->
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
      card-description="Comprehensive technology services spanning cloud, infrastructure, AI, automation, and strategy — delivered by experienced consultants who understand your business and your goals."
      btn-text="Explore Digital Solutions"
      @cta-click="router.push('/services')"
    />

    <!-- 4. Business Advisory & Financial Consulting -->
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
      card-description="Integrated advisory services combining business strategy, financial expertise, and governance to help your organisation navigate complexity and achieve lasting results."
      btn-text="Explore Business Advisory"
      reversed
      bg-class="bg-background-secondary"
      @cta-click="router.push('/services')"
    />

    <!-- 5. Education, Training & Workforce Development -->
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
      card-description="End-to-end workforce development services combining education consulting, professional certifications, and industry-aligned training to build the skills your organisation needs to thrive."
      btn-text="Explore Workforce Solutions"
      @cta-click="router.push('/services')"
    />

    <!-- 6. Advisory Sales Promotion -->
    <CrystalDivider variant="blue" padding="sm" />

    <AdvisorySalesPromotion @consult-click="router.push('/contact')" />

    <!-- 7. Job Ready Portal -->
    <CrystalDivider variant="neutral" padding="sm" />

    <JobReadyPortal @enroll-click="router.push('/contact')" />

    <!-- 8. IT Audit -->
    <CrystalDivider variant="neutral" padding="sm" />

    <ITAudit
      @audit-click="router.push('/contact')"
      @learn-click="router.push('/services')"
    />

    <!-- 9. Cybersecurity -->
    <CrystalDivider variant="neutral" padding="sm" />

    <Cybersecurity
      @security-click="router.push('/contact')"
      @learn-click="router.push('/services')"
    />

    <!-- 10. Impact Statistics -->
    <CrystalDivider variant="neutral" padding="md" />

    <ImpactStats
      :stats="colorCodedStats"
    />

    <!-- 11. Why Choose Leaf Global -->
    <CrystalDivider variant="neutral" padding="md" />

    <WhyChooseUs
      badge="Why Leaf Global Consulting"
      title="Integrated Expertise, Delivered"
      subtitle="We bring together deep consulting knowledge, strategic insight, and a commitment to your success across four key disciplines."
    />

    <!-- 12. Testimonials -->
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
import WhyChooseUs from '@/components/sections/WhyChooseUs.vue'
import ImpactStats from '@/components/sections/ImpactStats.vue'
import Testimonials from '@/components/sections/Testimonials.vue'

const router = useRouter()

const trustIndicators = [
  { label: '100+ Organisations Served', iconColor: '#2563EB' },
  { label: '99% Client Satisfaction', iconColor: '#10B981' },
  { label: '5+ Years Experience', iconColor: '#F97316' },
]

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

const colorCodedStats = [
  { value: 100, prefix: '', suffix: '+', label: 'Clients Served', subtext: 'Across 15+ industries', color: 'blue' },
  { value: 5, prefix: '', suffix: '+', label: 'Years Experience', subtext: 'Since 2020', color: 'green' },
  { value: 200, prefix: '', suffix: '+', label: 'Projects Delivered', subtext: 'On time & on budget', color: 'orange' },
  { value: 98, prefix: '', suffix: '%', label: 'Client Retention', subtext: 'Year over year', color: 'green' },
]


</script>
