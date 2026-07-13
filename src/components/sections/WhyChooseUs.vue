<template>
  <section v-scroll-reveal="'fade-in'" :class="['section-padding', darkBg ? 'gradient-dark' : 'bg-white']">
    <div class="container-custom">
      <SectionTitle
        :badge="badge"
        :title="title"
        :subtitle="subtitle"
        alignment="center"
        :gradient="darkBg"
      />

      <div v-scroll-reveal.stagger="'slide-up'" class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in items"
          :key="item.title"
          class="relative group"
        >
          <!-- Card -->
          <div
            :class="[
              'rounded-2xl p-8 transition-all duration-300 h-full',
              darkBg
                ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                : 'card-base hover:-translate-y-1 hover:shadow-xl',
            ]"
          >
            <!-- Icon -->
            <div
              :class="[
                'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300',
                darkBg
                  ? 'bg-white/10 group-hover:bg-secondary/20'
                  : 'bg-primary-50 group-hover:bg-primary-100',
              ]"
            >
              <Icon
                :name="item.icon"
                :size="28"
                :color="darkBg ? '#18B790' : '#006B4C'"
              />
            </div>

            <!-- Number -->
            <div
              v-if="item.number"
              class="text-4xl font-heading font-bold mb-2"
              :class="darkBg ? 'text-white' : 'text-primary'"
            >
              {{ item.number }}
            </div>

            <h4
              class="font-heading font-semibold text-lg mb-2"
              :class="darkBg ? 'text-white' : 'text-dark'"
            >
              {{ item.title }}
            </h4>
            <p
              class="text-sm leading-relaxed"
              :class="darkBg ? 'text-gray-400' : 'text-text-light'"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/global/SectionTitle.vue'
import Icon from '@/components/global/Icon.vue'

defineProps({
  badge: { type: String, default: 'Why Choose Us' },
  title: { type: String, default: 'What Sets Us Apart' },
  subtitle: { type: String, default: '' },
  items: {
    type: Array,
    default: () => [
      {
        icon: 'zap',
        title: 'Multi-Discipline Expertise',
        description: 'We bring together specialists across Education, Law, IT, and Finance to provide holistic consulting and training solutions.',
        number: '01',
      },
      {
        icon: 'users',
        title: 'Tailored Approach',
        description: 'Your organisation is unique. We take time to understand your specific context before designing customised programs.',
        number: '02',
      },
      {
        icon: 'star',
        title: 'Practical, Actionable Outcomes',
        description: 'Every engagement is designed to deliver tangible results that your organisation can apply immediately.',
        number: '03',
      },
      {
        icon: 'trending-up',
        title: 'Proven Track Record',
        description: 'With 100+ successful engagements and a commitment to excellence, our results speak for themselves.',
        number: '04',
      },
    ],
  },
  darkBg: { type: Boolean, default: false },
})
</script>
