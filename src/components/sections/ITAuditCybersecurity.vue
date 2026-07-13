<template>
  <section v-scroll-reveal="'fade-in'" class="section-padding bg-background">
    <div class="container-custom">
      <SectionTitle
        :badge="badge"
        :title="title"
        :subtitle="subtitle"
        alignment="center"
        gradient
      />

      <div v-scroll-reveal.stagger.100="'slide-up'" class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- IT Auditing Card -->
        <div class="card-base overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div class="gradient-primary px-8 py-10 text-center">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4">
              <Icon name="shield" size="32" color="white" />
            </div>
            <h3 class="text-2xl font-heading font-bold text-white">IT Consulting</h3>
            <p class="text-white/80 text-sm mt-2">Strategy. Transformation. Optimisation.</p>
          </div>
          <div class="p-8">
            <ul class="space-y-4">
            <li v-for="point in auditPoints" :key="point.text" class="flex gap-3">
              <Icon name="check-circle" size="18" class="text-secondary mt-0.5 shrink-0" />
              <div>
                <span class="text-sm font-medium text-dark">{{ point.label }}</span>
                <p class="text-xs text-text-light mt-0.5">{{ point.text }}</p>
              </div>
            </li>
          </ul>
            <Button variant="primary" size="md" class="mt-8 w-full" @click="$emit('audit-click')">
              Schedule a Consultation
            </Button>
          </div>
        </div>

        <!-- Cybersecurity Card -->
        <div class="card-base overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div class="gradient-dark px-8 py-10 text-center">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4">
              <Icon name="shield" size="32" color="white" />
            </div>
            <h3 class="text-2xl font-heading font-bold text-white">IT Training</h3>
            <p class="text-white/80 text-sm mt-2">Build skills. Develop capability. Succeed.</p>
          </div>
          <div class="p-8">
            <ul class="space-y-4">
            <li v-for="point in securityPoints" :key="point.text" class="flex gap-3">
              <Icon name="check-circle" size="18" class="text-secondary mt-0.5 shrink-0" />
              <div>
                <span class="text-sm font-medium text-dark">{{ point.label }}</span>
                <p class="text-xs text-text-light mt-0.5">{{ point.text }}</p>
              </div>
            </li>
          </ul>
            <Button variant="primary" size="md" class="mt-8 w-full" @click="$emit('security-click')">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/global/SectionTitle.vue'
import Button from '@/components/global/Button.vue'
import Icon from '@/components/global/Icon.vue'

defineProps({
  badge: { type: String, default: 'IT Consulting' },
  title: { type: String, default: 'Technology Consulting & Training' },
  subtitle: { type: String, default: '' },
  auditPoints: {
    type: Array,
    default: () => [
      { label: 'IT Strategy & Advisory', text: 'Strategic technology roadmaps aligned with your organisational goals and objectives.' },
      { label: 'Digital Transformation', text: 'Guide your organisation through technology modernisation and process improvement initiatives.' },
      { label: 'Infrastructure Assessment', text: 'Evaluate your current IT environment and identify opportunities for optimisation.' },
      { label: 'Technology Procurement', text: 'Expert guidance on selecting and implementing the right technology solutions.' },
    ],
  },
  securityPoints: {
    type: Array,
    default: () => [
      { label: 'Technical Training Programs', text: 'Hands-on training designed to build practical skills in your technology teams.' },
      { label: 'Change Management', text: 'Structured approaches to help your team adopt new technologies and processes.' },
      { label: 'Capability Development', text: 'Custom programs to develop the technical competencies your organisation needs.' },
      { label: 'Ongoing Support', text: 'Continuous guidance and mentoring to ensure lasting technology capability.' },
    ],
  },
})

defineEmits(['audit-click', 'security-click'])
</script>
