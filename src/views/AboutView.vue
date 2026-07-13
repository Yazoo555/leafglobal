<template>
  <div>
    <!-- Hero / Mission -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 gradient-dark opacity-95" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <span class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 text-secondary mb-6 backdrop-blur-sm">
            About Us
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-display font-heading font-bold text-white leading-tight">
            Empowering Organisations<br/>
            <span class="text-gradient inline-block pb-1">Through Expert Consulting</span>
          </h1>
          <p class="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Leaf Global Consulting Group brings together experienced professionals across Education, Law, IT, and Finance to provide expert consulting and training that builds capability and drives results.
          </p>
        </div>
      </div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
    </section>

    <!-- Story & Numbers -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              title="Our Story"
              subtitle="What began as a vision to provide integrated, multi-discipline consulting has grown into a trusted practice serving organisations across Australia and beyond."
              alignment="left"
              :show-line="true"
              size="md"
            />

            <div class="mt-8 space-y-4 text-text-light leading-relaxed">
              <p>
                Our journey began with a simple insight: organisations needed a trusted partner who could provide expert consulting and training across multiple critical disciplines without the complexity of managing separate providers.
              </p>
              <p>
                Today, we serve clients across Education, Law, IT, and Finance sectors, helping them build capability, ensure compliance, and achieve sustainable growth. Our team combines deep domain expertise with practical, real-world experience.
              </p>
              <p>
                We believe in building lasting partnerships grounded in trust, transparency, and a shared commitment to excellence. Every engagement is an opportunity to make a meaningful difference.
              </p>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-6">
            <div v-for="stat in stats" :key="stat.label" class="card-base p-8 text-center">
              <div class="text-3xl sm:text-4xl font-heading font-bold text-primary">{{ stat.value }}</div>
              <div class="text-sm text-text-light mt-2">{{ stat.label }}</div>
              <div class="text-xs text-text-light mt-1">{{ stat.subtext }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <SectionTitle
          badge="Our Values"
          title="What Drives Us"
          subtitle="These core principles guide every engagement and every decision we make."
          alignment="center"
          gradient
        />

        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(value, index) in values" :key="value.title" class="card-base p-8 text-center hover:-translate-y-1 transition-all duration-300">
            <div class="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-6">
              <Icon :name="value.icon" size="28" color="white" />
            </div>
            <h4 class="font-heading font-semibold text-dark mb-2">{{ value.title }}</h4>
            <p class="text-sm text-text-light">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionTitle
          badge="Leadership"
          title="Meet Our Consultants"
          subtitle="A diverse team of experienced professionals dedicated to your success."
          alignment="center"
          gradient
        />

        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(member, index) in team" :key="member.name" class="text-center group">
            <!-- Avatar -->
            <div class="w-32 h-32 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
              <span class="text-4xl font-heading font-bold text-white">{{ member.initials }}</span>
            </div>
            <h4 class="font-heading font-semibold text-dark">{{ member.name }}</h4>
            <p class="text-sm text-primary font-medium">{{ member.role }}</p>
            <p class="text-xs text-text-light mt-1">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline / Milestones -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <SectionTitle
          badge="Milestones"
          title="Our Journey"
          subtitle="Key moments that shaped who we are today."
          alignment="center"
          gradient
        />

        <div class="mt-16 max-w-3xl mx-auto">
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-100" />

            <div v-for="(milestone, index) in milestones" :key="milestone.year" class="relative pl-16 pb-12 last:pb-0">
              <!-- Dot -->
              <div class="absolute left-4 top-1 w-5 h-5 rounded-full border-4 border-primary bg-white" />

              <div class="card-base p-6">
                <span class="text-xs font-bold text-primary uppercase tracking-wider">{{ milestone.year }}</span>
                <h4 class="font-heading font-semibold text-dark mt-1">{{ milestone.title }}</h4>
                <p class="text-sm text-text-light mt-2">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding gradient-dark">
      <div class="container-custom text-center">
        <SectionTitle
          title="Ready to Work With Us?"
          subtitle="Whether you need consulting support, training programs, or ongoing advisory, we'd love to hear from you."
          alignment="center"
          size="md"
        />
        <div class="flex flex-wrap gap-4 justify-center mt-8">
          <Button variant="secondary" size="lg" @click="openContact">
            Get in Touch
          </Button>
          <Button variant="outline" size="lg" class="!border-white !text-white hover:!bg-white/10" @click="openServices">
            View Services
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SectionTitle from '@/components/global/SectionTitle.vue'
import Button from '@/components/global/Button.vue'
import Icon from '@/components/global/Icon.vue'

const router = useRouter()

const stats = [
  { value: '100+', label: 'Organisations Served', subtext: 'Across Education, Law, IT & Finance' },
  { value: '50+', label: 'Expert Consultants', subtext: 'Specialists in their respective fields' },
  { value: '99%', label: 'Client Satisfaction', subtext: 'Based on post-engagement feedback' },
  { value: '4', label: 'Core Disciplines', subtext: 'Integrated multi-sector expertise' },
]

const values = [
  {
    icon: 'star',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards and never compromise on quality in any engagement.',
  },
  {
    icon: 'users',
    title: 'Partnership',
    description: 'We work collaboratively with clients, building trusted relationships that deliver lasting value.',
  },
  {
    icon: 'zap',
    title: 'Practicality',
    description: 'Every program and recommendation is designed for real-world application and measurable impact.',
  },
  {
    icon: 'shield',
    title: 'Integrity',
    description: 'We operate with complete transparency, honesty, and ethical practice in everything we do.',
  },
]

const team = [
  {
    initials: 'JD',
    name: 'James Donovan',
    role: 'Director, Education Consulting',
    description: '15+ years in education leadership, curriculum design, and training program development.',
  },
  {
    initials: 'SK',
    name: 'Sarah Kim',
    role: 'Director, IT Consulting',
    description: 'Expert in digital transformation, IT strategy, and technical training programs.',
  },
  {
    initials: 'MR',
    name: 'Marcus Reed',
    role: 'Director, Legal Advisory',
    description: 'Specialist in legal compliance, regulatory advisory, and policy development training.',
  },
  {
    initials: 'AL',
    name: 'Aisha Lopez',
    role: 'Director, Finance Consulting',
    description: 'Expert in financial planning, risk management, governance, and compliance training.',
  },
]

const milestones = [
  {
    year: '2021',
    title: 'Founded in Hobart',
    description: 'Leaf Global Consulting Group was established in Hobart, Tasmania with a vision to provide integrated consulting and training services across multiple disciplines.',
  },
  {
    year: '2022',
    title: 'First Major Engagements',
    description: 'Completed our first large-scale consulting and training engagements, establishing our reputation for excellence and practical, results-driven approach.',
  },
  {
    year: '2023',
    title: 'Expanded Service Lines',
    description: 'Launched dedicated Education, Law, and Finance consulting divisions to complement our IT practice, offering truly integrated multi-discipline expertise.',
  },
  {
    year: '2024',
    title: 'National Reach',
    description: 'Expanded our client base across Australia, delivering consulting and training programs to organisations in multiple states and sectors.',
  },
  {
    year: '2025',
    title: 'Continued Growth',
    description: 'Surpassed 100 organisations served and continued to grow our team of expert consultants across all four specialisations.',
  },
]

const openContact = () => {
  router.push('/contact')
}

const openServices = () => {
  router.push('/services')
}
</script>
