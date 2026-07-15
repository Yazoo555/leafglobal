<template>
  <div>
    <!-- ============================================= -->
    <!-- 1. Hero -->
    <!-- ============================================= -->
    <section aria-label="Advisory sales hero" class="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      <div class="absolute inset-0 gradient-subtle opacity-90" />
      <div class="absolute inset-0" :style="patternStyle" />
      <div class="absolute right-[5%] top-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px] animate-float" style="animation-delay: 0s; animation-duration: 8s;" />
      <div class="absolute left-[5%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-finance/[0.04] blur-[70px] animate-float" style="animation-delay: 3s; animation-duration: 10s;" />

      <div class="container-custom relative z-10 pt-32 pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Left Content -->
          <div class="max-w-xl">
            <span v-scroll-reveal="{ animation: 'slide-up', delay: 0 }"
              class="inline-block px-4 py-1.5 badge uppercase rounded-full glass-heavy text-dark/70 mb-6">
              Advisory Sales
            </span>

            <h1 v-scroll-reveal="{ animation: 'slide-up', delay: 100 }" class="text-display-lg lg:text-display-xl font-heading font-bold text-dark">
              Grow Your Enterprise<br />
              <span class="text-gradient-blue inline-block pb-1">with Strategic Advisory Sales</span>
            </h1>

            <p v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="mt-6 body-lg text-text-light max-w-2xl">
              Expert advisory sales services designed for Australian businesses. We help you build
              pipeline, win strategic accounts, and scale revenue through proven methodologies
              and deep local market intelligence.
            </p>

            <div v-scroll-reveal="{ animation: 'slide-up', delay: 300 }" class="mt-10 flex flex-wrap gap-4">
              <Button variant="glass-primary" size="lg" @click="scrollToSection('contact')">
                Book a Discovery Call
                <template #icon><Icon name="arrow-right" size="18" /></template>
              </Button>
              <Button variant="glass" size="lg" @click="scrollToSection('overview')">
                Learn More
              </Button>
            </div>
          </div>

          <!-- Right Visual -->
          <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="hidden lg:block">
            <div class="glass-card p-8 lg:p-10 animate-float crystal-reflection crystal-reflection--animated" style="animation-delay: 1s; animation-duration: 7s;">
              <div class="w-16 h-16 mx-auto rounded-2xl gradient-blue flex items-center justify-center mb-6 shadow-glass-sm">
                <Icon name="briefcase" size="32" color="white" />
              </div>
              <h3 class="text-h4 font-heading font-bold text-dark text-center mb-3">Enterprise Advisory Sales</h3>
              <p class="body-md text-text-light text-center mb-6">
                Purpose-built for the Australian market. Backed by decades of combined experience
                in enterprise sales, business development, and strategic advisory.
              </p>
              <div class="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/50">
                <div class="text-center">
                  <div class="text-h4 font-heading font-bold text-primary">100+</div>
                  <p class="caption text-text-light">Engagements</p>
                </div>
                <div class="text-center">
                  <div class="text-h4 font-heading font-bold text-finance">98%</div>
                  <p class="caption text-text-light">Retention</p>
                </div>
                <div class="text-center">
                  <div class="text-h4 font-heading font-bold text-education">15+</div>
                  <p class="caption text-text-light">Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- 2. Overview -->
    <!-- ============================================= -->
    <section id="overview" aria-label="Advisory sales overview" class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div class="lg:col-span-3">
            <span class="badge-blue mb-4 inline-block">Overview</span>
            <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark mb-4">
              What Is<br />
              <span class="text-gradient-blue">Advisory Sales?</span>
            </h2>
            <p class="body-lg text-text-light mb-6">
              Advisory Sales is a strategic approach to business development that positions your
              organisation as a trusted partner rather than a vendor. It combines deep industry
              expertise, consultative selling methodology, and data-driven pipeline management
              to win and grow enterprise accounts.
            </p>
            <p class="body-md text-text-light mb-6">
              For Australian businesses competing in a concentrated market, advisory sales is
              not just a methodology — it is a competitive advantage. It enables organisations to
              build lasting client relationships, shorten sales cycles, and increase deal values
              by solving real business problems rather than pushing products.
            </p>
            <p class="body-md text-text-light">
              Our advisory sales practice brings together senior sales strategists, industry
              specialists, and execution support to deliver measurable revenue growth for
              enterprises across Australia.
            </p>
          </div>
          <div class="lg:col-span-2">
            <div class="glass-card p-8 space-y-6">
              <div v-for="(stat, index) in overviewStats" :key="stat.label"
                class="flex items-start gap-4" :class="index < overviewStats.length - 1 ? 'pb-6 border-b border-gray-200/50' : ''">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" :class="stat.iconBg">
                  <Icon :name="stat.icon" size="18" :color="stat.iconColor" />
                </div>
                <div>
                  <div class="text-h4 font-heading font-bold" :class="stat.colorClass">{{ stat.value }}</div>
                  <p class="body-sm text-text-light">{{ stat.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- 3. Business Challenges -->
    <!-- ============================================= -->
    <section aria-label="Business challenges" class="section-padding bg-background-secondary">
      <div class="container-custom">
        <SectionTitle
          badge="Business Challenges"
          title="Common Sales Challenges"
          subtitle="Australian enterprises face unique obstacles in today's competitive landscape. Our advisory sales approach is designed to address them head-on."
          alignment="center"
          gradient
        />

        <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="challenge in challenges" :key="challenge.title"
            class="glass-card p-6 sm:p-8 group hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
              :class="challenge.iconBg">
              <Icon :name="challenge.icon" size="22" :color="challenge.iconColor" />
            </div>
            <h3 class="font-heading font-semibold text-dark h5 mb-2">{{ challenge.title }}</h3>
            <p class="body-md text-text-light">{{ challenge.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- 4. Our Advisory Sales Solution -->
    <!-- ============================================= -->
    <section aria-label="Our advisory sales solution" class="section-padding bg-white">
      <div class="container-custom">
        <SectionTitle
          badge="Our Solution"
          title="The Leaf Global Approach"
          subtitle="A comprehensive advisory sales framework built for the Australian enterprise landscape."
          alignment="center"
          gradient
        />

        <div class="mt-14 space-y-16">
          <div v-for="(solution, index) in solutions" :key="solution.title"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div :class="index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'">
              <span class="inline-block px-3 py-1 badge uppercase rounded-full mb-4" :class="solution.badgeClass">
                {{ solution.badge }}
              </span>
              <h3 class="text-h3 font-heading font-bold text-dark mb-4">{{ solution.title }}</h3>
              <p class="body-lg text-text-light mb-6">{{ solution.description }}</p>
              <ul class="space-y-3">
                <li v-for="point in solution.points" :key="point" class="flex items-start gap-3">
                  <Icon name="check-circle" size="18" :class="`${solution.checkClass} mt-0.5 shrink-0`" />
                  <span class="body-md text-text-light">{{ point }}</span>
                </li>
              </ul>
            </div>
            <div :class="index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'">
              <div class="aspect-[4/3] rounded-[24px] flex items-center justify-center" :class="solution.gradientClass">
                <Icon :name="solution.icon" size="72" color="white" class="opacity-85" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- 5. Benefits -->
    <!-- ============================================= -->
    <section aria-label="Advisory sales benefits" class="section-padding bg-background-secondary">
      <div class="container-custom">
        <SectionTitle
          badge="Benefits"
          title="Why Partner With Us"
          subtitle="Our advisory sales approach delivers tangible outcomes that transform your business development capability."
          alignment="center"
          gradient
        />

        <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="benefit in benefits" :key="benefit.title"
            class="glass-card p-6 sm:p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
              :class="benefit.iconBg">
              <Icon :name="benefit.icon" size="22" :color="benefit.iconColor" />
            </div>
            <h3 class="font-heading font-semibold text-dark h5 mb-2 transition-colors duration-200"
              :class="benefit.titleClass">{{ benefit.title }}</h3>
            <p class="body-md text-text-light flex-1">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- 6. Industries Served -->
    <!-- ============================================= -->
    <section aria-label="Industries served" class="section-padding bg-white">
      <div class="container-custom">
        <SectionTitle
          badge="Industries Served"
          title="Sectors We Support"
          subtitle="Our advisory sales practice spans a diverse range of industries across the Australian market."
          alignment="center"
          gradient
        />

        <div class="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="industry in industries" :key="industry.name"
            class="glass-card p-5 sm:p-6 text-center group hover:-translate-y-1 transition-all duration-300">
            <div class="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
              :class="industry.iconBg">
              <Icon :name="industry.icon" size="18" :color="industry.iconColor" />
            </div>
            <h4 class="font-heading font-semibold text-dark body-md mb-1">{{ industry.name }}</h4>
            <p class="caption text-text-light">{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- 7. Our Process -->
    <!-- ============================================= -->
    <section aria-label="Our process" class="section-padding bg-background-secondary">
      <div class="container-custom">
        <SectionTitle
          badge="Our Process"
          title="How We Deliver Results"
          subtitle="A proven four-phase methodology that ensures consistent, measurable outcomes."
          alignment="center"
          gradient
        />

        <div class="mt-16 relative">
          <div class="hidden lg:block absolute top-20 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5 bg-primary-100" />

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(step, index) in processSteps" :key="step.title" class="relative text-center">
              <div class="relative z-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-heading font-bold h4 mb-6 shadow-glass"
                :class="step.bgClass">
                {{ index + 1 }}
              </div>
              <h4 class="font-heading font-semibold text-dark h6 mb-2">{{ step.title }}</h4>
              <p class="body-md text-text-light">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- 8. FAQs -->
    <!-- ============================================= -->
    <section aria-label="Frequently asked questions" class="section-padding bg-white">
      <div class="container-custom max-w-4xl mx-auto">
        <SectionTitle
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Common questions about our advisory sales services."
          alignment="center"
          gradient
        />

        <div class="mt-12 space-y-4">
          <div v-for="(faq, index) in faqs" :key="index"
            class="glass-card overflow-hidden transition-all duration-300"
            :class="openFaq === index ? '' : 'cursor-pointer'"
            @click="toggleFaq(index)">
            <button
              class="w-full flex items-center justify-between p-6 sm:p-8 text-left"
              :aria-expanded="openFaq === index"
            >
              <span class="body-md font-semibold text-dark pr-4">{{ faq.question }}</span>
              <Icon name="chevron-down" size="18" class="text-text-light shrink-0 transition-transform duration-200"
                :class="openFaq === index ? 'rotate-180' : ''" />
            </button>
            <transition
              enter-active-class="transition-all duration-250 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[400px] opacity-100"
              leave-from-class="max-h-[400px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="openFaq === index" class="overflow-hidden">
                <div class="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p class="body-md text-text-light">{{ faq.answer }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- 9. Call To Action -->
    <!-- ============================================= -->
    <section id="contact" aria-label="Contact call to action" class="section-padding gradient-dark">
      <div class="container-custom text-center">
        <SectionTitle
          title="Ready to Transform Your Sales?"
          subtitle="Let's discuss how our advisory sales practice can help your enterprise achieve sustainable revenue growth in the Australian market."
          alignment="center"
          size="md"
        />
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="glass-primary" size="xl" @click="router.push('/contact')">
            Book a Discovery Call
            <template #icon><Icon name="arrow-right" size="20" /></template>
          </Button>
          <Button variant="glass-primary" size="xl" class="!bg-white !text-primary hover:!bg-white/90" @click="router.push('/services')">
            Explore Our Services
            <template #icon><Icon name="arrow-right" size="20" /></template>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import SectionTitle from '@/components/global/SectionTitle.vue'
import Button from '@/components/global/Button.vue'
import Icon from '@/components/global/Icon.vue'

const router = useRouter()
const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const patternStyle = computed(() => ({
  backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2NDc0ODgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+")`,
  opacity: 0.5,
}))

const overviewStats = [
  { value: '100+', label: 'Enterprise Engagements Delivered', icon: 'briefcase', iconBg: 'icon-blue', iconColor: '#2563EB', colorClass: 'text-primary' },
  { value: '98%', label: 'Client Retention Rate', icon: 'trending-up', iconBg: 'icon-green', iconColor: '#10B981', colorClass: 'text-finance' },
  { value: '$50M+', label: 'Revenue Generated for Clients', icon: 'bar-chart', iconBg: 'icon-blue', iconColor: '#2563EB', colorClass: 'text-primary' },
]

const challenges = [
  {
    icon: 'trending-up',
    title: 'Long Sales Cycles',
    description: 'Enterprise sales cycles in Australia are lengthening, with multiple stakeholders, complex procurement processes, and increasing competition for every deal.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
  },
  {
    icon: 'users',
    title: 'Talent & Capability Gaps',
    description: 'Finding and retaining experienced sales talent is increasingly difficult. Many organisations lack the internal capability to execute strategic advisory sales.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
  },
  {
    icon: 'target',
    title: 'Market Access & Intelligence',
    description: 'Australian businesses often struggle to gain accurate market intelligence, identify the right decision-makers, and navigate sector-specific entry barriers.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
  },
  {
    icon: 'zap',
    title: 'Scaling Revenue Predictably',
    description: 'Inconsistent pipeline generation, reactive selling, and lack of structured methodology prevent organisations from scaling revenue in a predictable, sustainable way.',
    iconBg: 'icon-orange',
    iconColor: '#F97316',
  },
  {
    icon: 'shield',
    title: 'Regulatory Complexity',
    description: 'Highly regulated industries such as finance, healthcare, and government require specialised knowledge and compliance-aware sales approaches that most teams lack.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
  },
  {
    icon: 'briefcase',
    title: 'Client Retention & Growth',
    description: 'Winning a client is only half the battle. Many organisations struggle to expand existing accounts, reduce churn, and build the trusted advisor status that drives loyalty.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
  },
]

const solutions = [
  {
    icon: 'briefcase',
    title: 'Strategic Account Planning',
    description: 'We develop comprehensive account plans that map stakeholders, identify value drivers, and create clear pathways to win. Every plan is tailored to the Australian enterprise context.',
    badge: 'Strategy',
    badgeClass: 'badge-blue',
    checkIcon: 'check-circle',
    checkClass: 'text-primary',
    gradientClass: 'gradient-blue',
    points: [
      'Stakeholder mapping and influence analysis',
      'Value proposition development and testing',
      'Competitive positioning and differentiation',
      'Revenue forecasting and pipeline modelling',
    ],
  },
  {
    icon: 'users',
    title: 'Sales Capability Building',
    description: 'We upskill your existing sales teams with advisory selling methodologies, negotiation frameworks, and account management best practices tailored to the Australian market.',
    badge: 'Capability',
    badgeClass: 'badge-green',
    checkIcon: 'check-circle',
    checkClass: 'text-finance',
    gradientClass: 'gradient-finance',
    points: [
      'Customised training programs and workshops',
      'Coaching and mentoring for senior sales leaders',
      'Playbook development and sales toolkits',
      'Ongoing performance measurement and optimisation',
    ],
  },
  {
    icon: 'trending-up',
    title: 'Pipeline & Revenue Management',
    description: 'We implement structured pipeline management processes, CRM optimisation, and data-driven revenue tracking to ensure predictable, scalable growth.',
    badge: 'Execution',
    badgeClass: 'badge-orange',
    checkIcon: 'check-circle',
    checkClass: 'text-education',
    gradientClass: 'gradient-education',
    points: [
      'Pipeline review and opportunity qualification',
      'CRM implementation and optimisation',
      'Revenue operations process design',
      'Performance dashboards and reporting',
    ],
  },
]

const benefits = [
  {
    icon: 'trending-up',
    title: 'Accelerated Revenue Growth',
    description: 'Structured advisory sales methodologies that compress sales cycles, increase win rates, and deliver predictable, measurable revenue outcomes.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
  },
  {
    icon: 'target',
    title: 'Deep Market Intelligence',
    description: 'Actionable insights into Australian enterprise markets, competitor landscapes, and buyer behaviour to inform strategy and execution.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
  },
  {
    icon: 'users',
    title: 'World-Class Sales Talent',
    description: 'Access to senior sales strategists, industry specialists, and execution support without the overhead of building an in-house team.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
    titleClass: 'group-hover:text-finance',
  },
  {
    icon: 'briefcase',
    title: 'Proven Methodology',
    description: 'A battle-tested advisory sales framework refined across 100+ Australian enterprise engagements across multiple sectors.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
    titleClass: 'group-hover:text-primary',
  },
  {
    icon: 'shield',
    title: 'Risk Mitigation',
    description: 'Sales strategies that account for regulatory requirements, compliance obligations, and procurement complexities unique to Australian industries.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
    titleClass: 'group-hover:text-finance',
  },
  {
    icon: 'star',
    title: 'Long-Term Partnership',
    description: 'We build lasting relationships focused on continuous improvement, account growth, and shared success — not short-term transactions.',
    iconBg: 'icon-orange',
    iconColor: '#F97316',
    titleClass: 'group-hover:text-education',
  },
]

const industries = [
  { name: 'Financial Services', description: 'Banking, insurance, wealth management', icon: 'bar-chart', iconBg: 'icon-blue', iconColor: '#2563EB' },
  { name: 'Technology & SaaS', description: 'Enterprise software, cloud, cybersecurity', icon: 'code', iconBg: 'icon-blue', iconColor: '#2563EB' },
  { name: 'Healthcare & Life Sciences', description: 'Medical devices, pharma, health tech', icon: 'shield', iconBg: 'icon-green', iconColor: '#10B981' },
  { name: 'Professional Services', description: 'Consulting, legal, accounting, advisory', icon: 'briefcase', iconBg: 'icon-blue', iconColor: '#2563EB' },
  { name: 'Government & Public Sector', description: 'Federal, state, and local government', icon: 'target', iconBg: 'icon-orange', iconColor: '#F97316' },
  { name: 'Education & Training', description: 'Universities, RTOs, edtech providers', icon: 'star', iconBg: 'icon-green', iconColor: '#10B981' },
  { name: 'Manufacturing & Logistics', description: 'Industrial, supply chain, distribution', icon: 'trending-up', iconBg: 'icon-blue', iconColor: '#2563EB' },
  { name: 'Energy & Resources', description: 'Mining, renewables, utilities', icon: 'zap', iconBg: 'icon-orange', iconColor: '#F97316' },
]

const processSteps = [
  {
    title: 'Discovery & Assessment',
    description: 'We analyse your current sales capability, market position, and growth objectives to build a tailored advisory sales strategy.',
    bgClass: 'gradient-blue',
  },
  {
    title: 'Strategy & Planning',
    description: 'We develop a comprehensive sales plan including account targeting, value proposition, stakeholder mapping, and revenue forecasting.',
    bgClass: 'bg-finance',
  },
  {
    title: 'Execution & Enablement',
    description: 'We deploy the strategy through hands-on execution support, sales coaching, and capability building across your team.',
    bgClass: 'bg-education',
  },
  {
    title: 'Measure & Optimise',
    description: 'We track performance metrics, refine approaches, and continuously optimise to ensure sustained revenue growth.',
    bgClass: 'gradient-blue',
  },
]

const faqs = [
  {
    question: 'What is advisory sales and how is it different from traditional selling?',
    answer: 'Advisory sales is a consultative approach that positions your organisation as a trusted partner rather than a vendor. Unlike traditional product-focused selling, it focuses on understanding the client\'s business challenges first, then developing tailored solutions. This approach typically results in larger deal sizes, shorter sales cycles, and stronger long-term client relationships.',
  },
  {
    question: 'How does advisory sales benefit Australian enterprises specifically?',
    answer: 'The Australian market is relationship-driven with concentrated decision-making. Advisory sales aligns perfectly with this environment by building trust, demonstrating deep local expertise, and providing value from the first interaction. It is particularly effective for enterprises navigating complex regulatory environments and multi-stakeholder procurement processes.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a broad range of industries including financial services, technology and SaaS, healthcare and life sciences, professional services, government and public sector, education and training, manufacturing and logistics, and energy and resources. Our team includes specialists with direct industry experience in each of these sectors.',
  },
  {
    question: 'How long does it take to see results from an advisory sales engagement?',
    answer: 'Timelines vary based on your current sales maturity and objectives. Most clients begin seeing measurable pipeline improvements within 60-90 days, with significant revenue impacts typically materialising within 6-12 months as new advisory relationships mature into closed business.',
  },
  {
    question: 'Do you work with in-house sales teams or act as an outsourced sales function?',
    answer: 'Both. We tailor our engagement model to your needs — from building capability within your existing team through coaching and training, to providing dedicated advisory sales resources that operate as an extension of your organisation. Many clients start with one model and evolve to the other as their needs change.',
  },
  {
    question: 'How do you measure the success of an advisory sales engagement?',
    answer: 'We establish clear KPIs at the outset of every engagement. Common metrics include pipeline velocity, win rates, average deal size, sales cycle length, revenue attainment, and client acquisition cost. We provide regular reporting and data-driven insights to track progress and optimise strategy.',
  },
]
</script>
