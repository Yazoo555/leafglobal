<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Secure. Scale. Succeed."
      titleBreak
      highlight-text="with Leaf Global Consulting"
      badge="Trusted by 100+ Organisations"
      description="We help organisations build capability, ensure compliance, and achieve sustainable growth through expert consulting and training across Education, Law, IT, and Finance."
      :primary-cta="{ text: 'Explore Services', variant: 'secondary' }"
      :secondary-cta="{ text: 'Contact Us', variant: 'outline' }"
      :stats="heroStats"
      @primary-click="scrollToSection('services')"
      @secondary-click="scrollToSection('contact')"
    />

    <!-- Why Choose Us -->
    <WhyChooseUs
      badge="Why Leaf Global Consulting"
      title="Integrated Expertise, Delivered"
      subtitle="We bring together deep consulting knowledge, strategic insight, and a commitment to your success across four key disciplines."
    />

    <!-- Services Overview -->
    <ServicesOverview
      id="services"
      badge="Our Services"
      title="Four Pillars of Expertise"
      subtitle="Specialised consulting and training across Education, Law, IT, and Finance to empower your organisation."
      dark-bg
    />

    <!-- IT Auditing & Cybersecurity Dual Section -->
    <ITAuditCybersecurity
      badge="Core Offerings"
      title="IT Consulting & Training"
      subtitle="Protect your organisation with expert IT consulting, digital transformation, and technical training programs."
    />

    <!-- Impact Stats -->
    <ImpactStats />

    <!-- Testimonials -->
    <Testimonials
      badge="Client Success"
      title="Trusted by Industry Leaders"
      subtitle="Hear from organisations that have partnered with us to transform their capability and performance."
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
import ServicesOverview from '@/components/sections/ServicesOverview.vue'
import ITAuditCybersecurity from '@/components/sections/ITAuditCybersecurity.vue'
import ImpactStats from '@/components/sections/ImpactStats.vue'
import Testimonials from '@/components/sections/Testimonials.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const heroStats = [
  { value: '100+', label: 'Clients Served' },
  { value: '5+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
]

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
