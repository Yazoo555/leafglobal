<template>
  <section aria-label="Advisory sales promotion" class="section-padding bg-background-secondary overflow-hidden relative">
    <!-- Decorative background orbs -->
    <div class="absolute left-[-8%] top-[20%] w-[350px] h-[350px] rounded-full bg-primary/[0.04] blur-[80px] pointer-events-none" />
    <div class="absolute right-[-5%] bottom-[10%] w-[250px] h-[250px] rounded-full bg-finance/[0.04] blur-[60px] pointer-events-none" />

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <!-- Left: Premium Flyer Mockup (3/5 width) -->
        <div v-scroll-reveal="{ animation: 'slide-up', delay: 0 }" class="lg:col-span-3">
          <router-link to="/advisory-sales" class="block group">
            <div class="glass-card overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-premium">
              <!-- Flyer Cover — gradient header -->
              <div class="gradient-blue px-8 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14 text-center relative crystal-reflection crystal-reflection--animated">
                <div class="absolute top-[-20%] right-[-10%] w-[180px] h-[180px] rounded-full bg-white/[0.06] blur-[40px]" />
                <div class="absolute bottom-[-15%] left-[-5%] w-[120px] h-[120px] rounded-full bg-white/[0.04] blur-[30px]" />

                <div class="relative z-10">
                  <!-- Premium badge -->
                  <span class="inline-block px-4 py-1.5 badge uppercase rounded-full bg-white/15 text-white/90 mb-6">
                    Enterprise Advisory
                  </span>

                  <!-- Flyer main icon -->
                  <div class="w-16 h-16 mx-auto rounded-2xl bg-white/15 flex items-center justify-center mb-5 shadow-glass-sm backdrop-blur-sm">
                    <Icon name="briefcase" size="32" color="white" />
                  </div>

                  <h3 class="text-h3 lg:text-h2 font-heading font-bold text-white mb-3">
                    Advisory Sales<br class="hidden sm:inline" />
                    <span class="text-white/80">for Australian Enterprise</span>
                  </h3>

                  <p class="body-md text-white/70 max-w-lg mx-auto">
                    Unlock growth with strategic advisory, lead generation, and business development services tailored to the Australian market.
                  </p>

                  <!-- Flyer meta info -->
                  <div class="mt-6 flex flex-wrap items-center justify-center gap-4 text-white/60 caption">
                    <span class="flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-white/40" />
                      Australian Expertise
                    </span>
                    <span class="flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-white/40" />
                      Enterprise Focus
                    </span>
                    <span class="flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-white/40" />
                      Proven Results
                    </span>
                  </div>
                </div>
              </div>

              <!-- Flyer Body — glass card continuation -->
              <div class="p-8 sm:p-10 lg:p-12">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  <div v-for="feature in flyerFeatures" :key="feature.label" class="text-center">
                    <div class="text-h3 lg:text-h2 font-heading font-bold mb-1" :class="feature.colorClass">
                      {{ feature.stat }}
                    </div>
                    <p class="caption text-text-light font-medium">{{ feature.label }}</p>
                    <p class="caption text-text-light/60 mt-0.5">{{ feature.subtext }}</p>
                  </div>
                </div>

                <div class="mt-6 pt-6 border-t border-gray-200/50 flex items-center justify-center gap-2 text-primary caption font-medium group/link">
                  View Full Advisory Sales Package
                  <Icon name="arrow-right" size="14" class="transition-transform duration-200 group-hover/link:translate-x-1" />
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Right: Content (2/5 width) -->
        <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="lg:col-span-2">
          <span class="badge-blue mb-4 inline-block">Advisory Sales</span>

          <h2 class="text-h3 lg:text-h2 font-heading font-bold text-dark mb-4">
            Drive Growth<br />
            <span class="text-gradient-blue">with Expert Guidance</span>
          </h2>

          <p class="body-lg text-text-light mb-8">
            Our advisory sales practice helps Australian enterprises generate quality leads,
            accelerate business development, and build strategic partnerships that drive
            measurable growth — backed by deep local market insight.
          </p>

          <!-- Benefits List -->
          <ul class="space-y-4 mb-8">
            <li
              v-for="benefit in benefits"
              :key="benefit.title"
              class="flex items-start gap-3"
            >
              <div
                class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                :class="benefit.iconBg"
              >
                <Icon :name="benefit.icon" :size="16" :color="benefit.iconColor" />
              </div>
              <div>
                <span class="body-md font-semibold text-dark">{{ benefit.title }}</span>
                <p class="caption text-text-light mt-0.5">{{ benefit.description }}</p>
              </div>
            </li>
          </ul>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <router-link to="/advisory-sales">
              <Button variant="glass-primary" size="lg">
                Start Your Growth Journey
                <template #icon><Icon name="arrow-right" size="18" /></template>
              </Button>
            </router-link>
            <Button variant="glass" size="lg" @click="$emit('consult-click')">
              Talk to Our Team
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

defineEmits(['consult-click'])

const flyerFeatures = [
  { stat: '100+', label: 'Enterprise Clients', subtext: 'Across Australia', colorClass: 'text-primary' },
  { stat: '98%', label: 'Client Retention', subtext: 'Year over year', colorClass: 'text-finance' },
  { stat: '15+', label: 'Industries Served', subtext: 'Nationwide reach', colorClass: 'text-education' },
]

const benefits = [
  {
    icon: 'trending-up',
    title: 'Australian Market Expertise',
    description: 'Deep understanding of local enterprise landscapes, regulatory environments, and growth opportunities.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
  },
  {
    icon: 'briefcase',
    title: 'Strategic Business Development',
    description: 'End-to-end business development support including partnerships, market entry, and growth planning.',
    iconBg: 'icon-blue',
    iconColor: '#2563EB',
  },
  {
    icon: 'target',
    title: 'Enterprise Advisory Services',
    description: 'Senior-level advisory covering lead generation, client acquisition, and sales strategy for Australian enterprises.',
    iconBg: 'icon-green',
    iconColor: '#10B981',
  },
]
</script>
