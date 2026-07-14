<template>
  <div>
    <!-- Hero Section — Neutral Crystal -->
    <HeroSection
      title="Secure. Scale. Succeed."
      titleBreak
      highlight-text="with Leaf Global Consulting"
      badge="Trusted by 100+ Organisations"
      description="We help organisations build capability, ensure compliance, and achieve sustainable growth through expert consulting and training across Education, Law, IT, and Finance."
      :primary-cta="{ text: 'Explore Services', variant: 'glass-primary' }"
      :secondary-cta="{ text: 'Contact Us' }"
      :trust-indicators="trustIndicators"
      @primary-click="scrollToSection('technology')"
      @secondary-click="scrollToSection('contact')"
    />

    <!-- Technology Services (Blue) -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="badge-blue mb-4 inline-block">Technology</span>
            <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark mb-4">IT & Technology Consulting</h2>
            <p class="text-text-light body-lg mb-6">Strategic technology advisory, digital transformation, cybersecurity, and IT training to help your organisation leverage technology for competitive advantage.</p>
            <ul class="space-y-3 mb-8">
              <li v-for="point in techPoints" :key="point" class="flex items-start gap-3">
                <Icon name="check-circle" size="18" class="text-primary mt-0.5 shrink-0" />
                <span class="body-md text-text-light">{{ point }}</span>
              </li>
            </ul>
            <Button variant="blue" size="md" @click="scrollToSection('services')">
              Explore Technology Services
              <template #icon><Icon name="arrow-right" size="16" /></template>
            </Button>
          </div>
          <div class="glass-card p-8 lg:p-10 crystal-reflection crystal-reflection--light-bg">
            <div class="w-16 h-16 rounded-2xl gradient-blue flex items-center justify-center mb-6">
              <Icon name="code" size="32" color="white" />
            </div>
            <h3 class="text-h4 font-heading font-semibold text-dark mb-3">Full-Spectrum IT Services</h3>
            <p class="body-md text-text-light mb-4">From strategic consulting to hands-on training, our technology practice covers every aspect of digital excellence.</p>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="service in techServices" :key="service" class="flex items-center gap-2 body-md text-text-light">
                <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {{ service }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crystal Divider (blue tint — after Technology section) -->
    <div class="crystal-divider py-4 lg:py-6">
      <div class="crystal-divider-line"></div>
      <div class="crystal-divider-orb crystal-divider-orb--blue">
        <div class="crystal-divider-orb-inner"></div>
      </div>
      <div class="crystal-divider-line"></div>
    </div>

    <!-- Finance & Audit (Green) -->
    <section class="section-padding bg-background-secondary">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="lg:order-2">
            <span class="badge-green mb-4 inline-block">Finance & Audit</span>
            <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark mb-4">Audit, Finance & Compliance</h2>
            <p class="text-text-light body-lg mb-6">Expert financial consulting, audit readiness, risk management, and compliance training to strengthen your organisation's financial governance and integrity.</p>
            <ul class="space-y-3 mb-8">
              <li v-for="point in financePoints" :key="point" class="flex items-start gap-3">
                <Icon name="check-circle" size="18" class="text-finance mt-0.5 shrink-0" />
                <span class="body-md text-text-light">{{ point }}</span>
              </li>
            </ul>
            <Button variant="finance" size="md" @click="scrollToSection('services')">
              Explore Finance Services
              <template #icon><Icon name="arrow-right" size="16" /></template>
            </Button>
          </div>
          <div class="glass-card p-8 lg:p-10 lg:order-1 crystal-reflection crystal-reflection--light-bg">
            <div class="w-16 h-16 rounded-2xl gradient-finance flex items-center justify-center mb-6">
              <Icon name="bar-chart" size="32" color="white" />
            </div>
            <h3 class="text-h4 font-heading font-semibold text-dark mb-3">Financial Integrity</h3>
            <p class="body-md text-text-light mb-4">Building trust through transparent financial practices, robust controls, and expert guidance.</p>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="service in financeServices" :key="service" class="flex items-center gap-2 body-md text-text-light">
                <span class="w-1.5 h-1.5 rounded-full bg-finance shrink-0" />
                {{ service }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crystal Divider (green tint — after Finance section) -->
    <div class="crystal-divider py-4 lg:py-6">
      <div class="crystal-divider-line"></div>
      <div class="crystal-divider-orb crystal-divider-orb--green">
        <div class="crystal-divider-orb-inner"></div>
      </div>
      <div class="crystal-divider-line"></div>
    </div>

    <!-- Education & Training (Orange) -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="badge-orange mb-4 inline-block">Education & Training</span>
            <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark mb-4">Learning & Professional Development</h2>
            <p class="text-text-light body-lg mb-6">Comprehensive education consulting, curriculum development, training programs, and professional development designed to build lasting capability.</p>
            <ul class="space-y-3 mb-8">
              <li v-for="point in educationPoints" :key="point" class="flex items-start gap-3">
                <Icon name="check-circle" size="18" class="text-education mt-0.5 shrink-0" />
                <span class="body-md text-text-light">{{ point }}</span>
              </li>
            </ul>
            <Button variant="education" size="md" @click="scrollToSection('services')">
              Explore Education Services
              <template #icon><Icon name="arrow-right" size="16" /></template>
            </Button>
          </div>
          <div class="glass-card p-8 lg:p-10 crystal-reflection crystal-reflection--light-bg">
            <div class="w-16 h-16 rounded-2xl gradient-education flex items-center justify-center mb-6">
              <Icon name="star" size="32" color="white" />
            </div>
            <h3 class="text-h4 font-heading font-semibold text-dark mb-3">Building Capability</h3>
            <p class="body-md text-text-light mb-4">Empowering individuals and organisations through tailored learning experiences.</p>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="service in educationServices" :key="service" class="flex items-center gap-2 body-md text-text-light">
                <span class="w-1.5 h-1.5 rounded-full bg-education shrink-0" />
                {{ service }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crystal Divider (orange tint — after Education section) -->
    <div class="crystal-divider py-4 lg:py-6">
      <div class="crystal-divider-line"></div>
      <div class="crystal-divider-orb crystal-divider-orb--orange">
        <div class="crystal-divider-orb-inner"></div>
      </div>
      <div class="crystal-divider-line"></div>
    </div>

    <!-- Impact Stats — Color-coded on neutral background -->
    <ImpactStats
      :stats="colorCodedStats"
    />

    <!-- Crystal Divider -->
    <div class="crystal-divider py-6 lg:py-8">
      <div class="crystal-divider-line"></div>
      <div class="crystal-divider-orb">
        <div class="crystal-divider-orb-inner"></div>
      </div>
      <div class="crystal-divider-line"></div>
    </div>

    <!-- Why Choose Us — Neutral -->
    <WhyChooseUs
      badge="Why Leaf Global Consulting"
      title="Integrated Expertise, Delivered"
      subtitle="We bring together deep consulting knowledge, strategic insight, and a commitment to your success across four key disciplines."
    />

    <!-- Crystal Divider -->
    <div class="crystal-divider py-6 lg:py-8">
      <div class="crystal-divider-line"></div>
      <div class="crystal-divider-orb">
        <div class="crystal-divider-orb-inner"></div>
      </div>
      <div class="crystal-divider-line"></div>
    </div>

    <!-- Testimonials — Neutral Glass -->
    <Testimonials
      badge="Client Success"
      title="Trusted by Industry Leaders"
      subtitle="Hear from organisations that have partnered with us to transform their capability and performance."
      dark-bg
    />

    <!-- Contact Section -->
    <ContactSection
      id="contact"
      badge="Get In Touch"
      title="Ready to Get Started?"
      subtitle="Let's discuss how Leaf Global Consulting Group can help empower your organisation."
    />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import WhyChooseUs from '@/components/sections/WhyChooseUs.vue'
import ImpactStats from '@/components/sections/ImpactStats.vue'
import Testimonials from '@/components/sections/Testimonials.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Icon from '@/components/global/Icon.vue'
import Button from '@/components/global/Button.vue'

const trustIndicators = [
  { label: '100+ Organisations Served', iconColor: '#2563EB' },
  { label: '99% Client Satisfaction', iconColor: '#10B981' },
  { label: '5+ Years Experience', iconColor: '#F97316' },
]

const techPoints = [
  'IT strategy and digital transformation advisory',
  'Cybersecurity and infrastructure assessment',
  'Cloud services and technology procurement',
  'Custom technical training and capability building',
]

const techServices = [
  'IT Strategy', 'Digital Transformation',
  'Cyber Security', 'Cloud Services',
  'Infrastructure', 'Tech Training',
]

const financePoints = [
  'Financial planning and analysis',
  'Risk management framework development',
  'Compliance and audit readiness',
  'Governance and internal controls',
]

const financeServices = [
  'Audit Readiness', 'Risk Management',
  'Financial Planning', 'Compliance',
  'Governance', 'Internal Controls',
]

const educationPoints = [
  'Curriculum development and instructional design',
  'Training program design and delivery',
  'Professional development for educators',
  'Quality assurance and assessment',
]

const educationServices = [
  'Curriculum Design', 'Training Programs',
  'Professional Dev', 'Workshops',
  'Certifications', 'Quality Assurance',
]

const colorCodedStats = [
  { value: 100, prefix: '', suffix: '+', label: 'Clients Served', subtext: 'Across 15+ industries', color: 'blue' },
  { value: 5, prefix: '', suffix: '+', label: 'Years Experience', subtext: 'Since 2020', color: 'green' },
  { value: 200, prefix: '', suffix: '+', label: 'Projects Delivered', subtext: 'On time & on budget', color: 'orange' },
  { value: 98, prefix: '', suffix: '%', label: 'Client Retention', subtext: 'Year over year', color: 'green' },
]

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
