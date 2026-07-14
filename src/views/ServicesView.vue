<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-white" />
      <div class="absolute inset-0 gradient-subtle opacity-60" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2NDc0ODgiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <!-- Glass decorative elements -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div class="absolute left-10 bottom-10 w-72 h-72 rounded-full bg-finance/5 blur-3xl" />

      <div class="container-custom relative z-10 text-center">
        <span class="inline-block px-4 py-1.5 badge uppercase rounded-full glass text-dark/70 mb-6">
          Our Expertise
        </span>
        <h1 class="text-display-lg lg:text-display-xl font-heading font-bold text-dark max-w-3xl mx-auto">
          Consulting & Training<br/>
          <span class="text-gradient-blue inline-block pb-1">Across Four Disciplines</span>
        </h1>
        <p class="mt-6 body-lg text-text-light max-w-2xl mx-auto">
          Specialised consulting and training services across Education, Law, IT, and Finance — delivered by experienced professionals who understand your sector.
        </p>
      </div>
    </section>

    <!-- Detailed Services — Color-coded by category -->
    <section class="section-padding bg-background-secondary">
      <div class="container-custom">
        <SectionTitle
          badge="Our Specialisations"
          title="Four Pillars of Expertise"
          subtitle="Each discipline is led by domain experts who bring real-world experience and a commitment to your success."
          alignment="center"
          gradient
        />

        <div class="mt-16 space-y-24">
          <div
            v-for="(service, index) in detailedServices"
            :key="service.title"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <!-- Content -->
            <div :class="index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'">
              <span
                class="inline-block px-3 py-1 badge uppercase rounded-full mb-4"
                :class="service.badgeClass"
              >
                {{ service.badge }}
              </span>
              <h2 class="text-h3 font-heading font-bold text-dark mb-4">{{ service.title }}</h2>
              <p class="text-text-light body-lg mb-6">{{ service.description }}</p>

              <ul class="space-y-3 mb-8">
                <li v-for="point in service.points" :key="point" class="flex items-start gap-3">
                  <Icon :name="service.checkIcon" size="18" :class="service.checkClass + ' mt-0.5 shrink-0'" />
                  <span class="body-md text-text-light">{{ point }}</span>
                </li>
              </ul>

              <Button :variant="service.buttonVariant" size="md" @click="openContact">
                Learn More
                <template #icon><Icon name="chevron-right" size="16" /></template>
              </Button>
            </div>

            <!-- Visual — Color-coded gradient -->
            <div :class="index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'">
              <div
                class="aspect-[4/3] rounded-[24px] flex items-center justify-center"
                :class="service.gradientClass"
              >
                <Icon :name="service.icon" size="80" color="white" class="opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionTitle
          badge="How We Work"
          title="Our Engagement Model"
          subtitle="A proven methodology that ensures consistent, high-quality outcomes for every client engagement."
          alignment="center"
          gradient
        />

        <div class="mt-16 relative">
          <div class="hidden lg:block absolute top-24 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-primary-100" />

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(step, index) in process" :key="step.title" class="relative text-center">
              <div class="relative z-10 w-16 h-16 mx-auto rounded-full gradient-blue flex items-center justify-center text-white font-heading font-bold h4 mb-6 shadow-glass">
                {{ index + 1 }}
              </div>
              <h4 class="font-heading font-semibold text-dark h6 mb-2">{{ step.title }}</h4>
              <p class="body-md text-text-light">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Options -->
    <section class="section-padding bg-background-secondary">
      <div class="container-custom">
        <SectionTitle
          badge="Engagement Options"
          title="Flexible Engagement Models"
          subtitle="Choose the engagement model that best fits your organisation needs and budget."
          alignment="center"
          gradient
        />

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            v-for="(plan, index) in pricing"
            :key="plan.name"
            class="glass-card p-8 flex flex-col relative"
            :class="plan.popular ? 'ring-2 ring-primary scale-105 md:scale-110' : ''"
          >
            <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-blue text-white badge font-semibold shadow-glass-sm">
              Most Popular
            </div>

            <div class="text-center pb-6 border-b border-gray-200/50">
              <h3 class="font-heading font-semibold text-dark h4">{{ plan.name }}</h3>
              <div class="mt-4">
                <span class="text-h1 font-heading font-bold text-dark">{{ plan.price }}</span>
                <span v-if="plan.period" class="text-text-light body-md">{{ plan.period }}</span>
              </div>
              <p class="body-md text-text-light mt-2">{{ plan.description }}</p>
            </div>

            <ul class="mt-6 space-y-3 flex-1">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
                <Icon name="check-circle" size="16" class="text-primary mt-0.5 shrink-0" />
                <span class="body-md text-text-light">{{ feature }}</span>
              </li>
            </ul>

            <Button
              :variant="plan.popular ? 'glass-primary' : 'outline'"
              size="md"
              fullWidth
              class="mt-8"
              @click="openContact"
            >
              {{ plan.cta }}
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding gradient-dark">
      <div class="container-custom text-center">
        <SectionTitle
          title="Need a Tailored Program?"
          subtitle="Every organisation is unique. Let's design a consulting or training program that fits your specific needs and objectives."
          alignment="center"
          size="md"
        />
        <Button variant="glass-primary" size="lg" class="mt-8" @click="openContact">
          Get a Custom Proposal
          <template #icon><Icon name="arrow-right" size="20" /></template>
        </Button>
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

const detailedServices = [
  {
    icon: 'star',
    title: 'Education Consulting & Training',
    description: 'Comprehensive consulting and training services for educational institutions, training providers, and organisations investing in learning and development.',
    badge: 'Education',
    badgeClass: 'badge-orange',
    checkIcon: 'check-circle',
    checkClass: 'text-education',
    buttonVariant: 'education',
    gradientClass: 'gradient-education',
    points: [
      'Curriculum development and instructional design',
      'Training program design and delivery',
      'Education technology integration and strategy',
      'Quality assurance and assessment frameworks',
      'Professional development for educators and trainers',
    ],
  },
  {
    icon: 'shield',
    title: 'Law Consulting & Training',
    description: 'Expert legal consulting and training to help organisations navigate complex regulatory environments, develop robust policies, and build legal capability.',
    badge: 'Legal',
    badgeClass: 'badge-blue',
    checkIcon: 'check-circle',
    checkClass: 'text-primary',
    buttonVariant: 'blue',
    gradientClass: 'gradient-blue',
    points: [
      'Legal compliance training and workshops',
      'Policy development and review',
      'Regulatory advisory and risk assessment',
      'Contract management and governance training',
      'Workplace relations and employment law guidance',
    ],
  },
  {
    icon: 'code',
    title: 'IT Consulting & Training',
    description: 'Strategic technology consulting and hands-on training programs designed to build your organisation digital capability, optimise systems, and drive technology-enabled transformation.',
    badge: 'Technology',
    badgeClass: 'badge-blue',
    checkIcon: 'check-circle',
    checkClass: 'text-primary',
    buttonVariant: 'blue',
    gradientClass: 'bg-[#1E3A8A]',
    points: [
      'IT strategy and digital transformation advisory',
      'Technology infrastructure assessment and planning',
      'Custom technical training programs',
      'Cybersecurity awareness and best practices training',
      'Change management and technology adoption support',
    ],
  },
  {
    icon: 'bar-chart',
    title: 'Finance Consulting & Training',
    description: 'Specialist financial consulting and training to strengthen your organisation financial governance, build risk management capability, and ensure compliance with regulatory requirements.',
    badge: 'Finance',
    badgeClass: 'badge-green',
    checkIcon: 'check-circle',
    checkClass: 'text-finance',
    buttonVariant: 'finance',
    gradientClass: 'gradient-finance',
    points: [
      'Financial planning and analysis training',
      'Risk management framework development',
      'Compliance and audit readiness programs',
      'Budgeting and financial reporting best practices',
      'Governance and internal controls consulting',
    ],
  },
]

const process = [
  {
    title: 'Discover',
    description: 'We take time to understand your organisation, challenges, and goals through in-depth consultation and needs analysis.',
  },
  {
    title: 'Design',
    description: 'We craft a tailored program with clear learning objectives, milestones, and measurable success criteria.',
  },
  {
    title: 'Deliver',
    description: 'Our expert consultants deliver engaging, practical programs with transparency and regular progress updates.',
  },
  {
    title: 'Develop',
    description: 'We provide ongoing support, resources, and follow-up to ensure lasting capability and continuous improvement.',
  },
]

const pricing = [
  {
    name: 'Consulting Engagement',
    price: 'Custom',
    period: '',
    description: 'Tailored consulting projects designed to address your specific organisational needs and objectives.',
    popular: false,
    cta: 'Enquire Now',
    features: [
      'Dedicated consultant or team',
      'Needs analysis and scoping',
      'Custom deliverables and roadmap',
      'Regular progress reporting',
      'Flexible timeline and engagement',
      'Post-engagement support',
    ],
  },
  {
    name: 'Training Program',
    price: 'Custom',
    period: '',
    description: 'Structured training programs delivered on-site, online, or in blended format to suit your team.',
    popular: true,
    cta: 'Start a Program',
    features: [
      'Customised curriculum design',
      'Expert facilitators and trainers',
      'Practical, hands-on learning',
      'Assessment and certification',
      'Participant materials and resources',
      'Post-training support and follow-up',
    ],
  },
  {
    name: 'Retained Advisory',
    price: 'Custom',
    period: '',
    description: 'Ongoing advisory partnership for organisations that need continuous access to expert guidance and support.',
    popular: false,
    cta: 'Contact Us',
    features: [
      'Dedicated account manager',
      'Regular strategy sessions',
      'Priority response times',
      'Access to specialist expertise',
      'Annual capability review',
      'Discounted additional engagements',
    ],
  },
]

const openContact = () => {
  router.push('/contact')
}
</script>
