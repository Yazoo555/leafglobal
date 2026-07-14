<template>
  <section v-scroll-reveal="'fade-in'"    class="section-padding"
    :class="[darkBg ? 'gradient-dark' : 'bg-background', darkBg ? 'pb-0' : '']">
    <div class="container-custom">
      <SectionTitle
        :badge="badge"
        :title="title"
        :subtitle="subtitle"
        alignment="center"
        :gradient="darkBg"
      />

      <div class="mt-16">
        <!-- Desktop Grid -->
        <div v-scroll-reveal.stagger="'slide-up'" class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in visibleTestimonials"
            :key="index"
            class="glass-card p-8 flex flex-col"
            :class="darkBg ? 'bg-white/10 backdrop-blur-sm' : ''"
          >
            <!-- Stars -->
            <div v-if="item.rating" class="flex items-center gap-1 mb-4">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4"
                :class="i <= item.rating ? 'text-yellow-400' : 'text-gray-200'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <Icon name="quote" size="20" class="text-primary/20 mb-3" />
            <p class="text-text-light body-md flex-1 italic">
              "{{ item.text }}"
            </p>
            <div class="flex items-center gap-3 pt-5 mt-5 border-t" :class="darkBg ? 'border-white/10' : 'border-gray-200/50'">
              <!-- Avatar -->
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-white body-md font-bold shrink-0 gradient-blue"
              >
                {{ item.name.charAt(0) }}
              </div>
              <div>
                <div class="body-md font-semibold" :class="darkBg ? 'text-white' : 'text-dark'">
                  {{ item.name }}
                </div>
                <div class="caption text-text-light">{{ item.role }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Carousel -->
        <div class="md:hidden relative">
          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-300 ease-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(item, index) in testimonials"
                :key="index"
                class="w-full shrink-0 px-1"
              >
                <div class="glass-card p-8" :class="darkBg ? 'bg-white/10' : ''">
                  <div v-if="item.rating" class="flex items-center gap-1 mb-4">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= item.rating ? 'text-yellow-400' : 'text-gray-200'" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <Icon name="quote" size="20" class="text-primary/20 mb-3" />
                  <p class="text-text-light body-md italic">"{{ item.text }}"</p>
                  <div class="flex items-center gap-3 pt-5 mt-5 border-t border-gray-200/50">
                    <div class="w-10 h-10 rounded-full gradient-blue flex items-center justify-center text-white body-md font-bold shrink-0">
                      {{ item.name.charAt(0) }}
                    </div>
                    <div>
                      <div class="body-md font-semibold text-dark">{{ item.name }}</div>
                      <div class="caption text-text-light">{{ item.role }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Carousel Dots -->
          <div v-if="testimonials.length > 1" class="flex items-center justify-center gap-2 mt-8">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              class="w-2.5 h-2.5 rounded-full transition-all duration-200"
              :class="index === currentSlide ? 'bg-primary w-6' : 'bg-primary-200 hover:bg-primary-300'"
              @click="currentSlide = index"
              :aria-label="`Go to testimonial ${index + 1}`"
            />
          </div>

          <!-- Nav arrows -->
          <button
            v-if="testimonials.length > 1 && currentSlide > 0"
            class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-glass flex items-center justify-center text-dark hover:text-primary transition-colors duration-200"
            @click="currentSlide--"
            aria-label="Previous testimonial"
          >
            <Icon name="chevron-left" size="18" />
          </button>
          <button
            v-if="testimonials.length > 1 && currentSlide < testimonials.length - 1"
            class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-glass flex items-center justify-center text-dark hover:text-primary transition-colors duration-200"
            @click="currentSlide++"
            aria-label="Next testimonial"
          >
            <Icon name="chevron-right" size="18" />
          </button>
        </div>
      </div>
    </div>

    <!-- Crystal Divider (light variant) — inside dark section for visibility -->
    <div v-if="darkBg" class="crystal-divider crystal-divider-light py-6 lg:py-8">
      <div class="crystal-divider-line"></div>
      <div class="crystal-divider-orb">
        <div class="crystal-divider-orb-inner"></div>
      </div>
      <div class="crystal-divider-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '@/components/global/SectionTitle.vue'
import Icon from '@/components/global/Icon.vue'

const props = defineProps({
  badge: { type: String, default: 'Testimonials' },
  title: { type: String, default: 'What Our Clients Say' },
  subtitle: { type: String, default: '' },
  testimonials: {
    type: Array,
    default: () => [
      {
        text: 'Leaf Global Consulting Group transformed our approach to professional development. Their training programs were tailored, engaging, and delivered real results for our team.',
        name: 'Sarah Johnson',
        role: 'Director of Learning, EduFirst Institute',
        rating: 5,
      },
      {
        text: 'The legal consulting team provided exceptional guidance on regulatory compliance. Their training program brought our entire team up to speed on the latest requirements.',
        name: 'Michael Chen',
        role: 'General Counsel, LegalEdge Partners',
        rating: 5,
      },
      {
        text: 'Their IT consulting helped us navigate a complex digital transformation. The training programs ensured our staff could hit the ground running with new systems.',
        name: 'Emily Rodriguez',
        role: 'CTO, DataFlow Systems',
        rating: 5,
      },
      {
        text: 'The finance consulting team developed a comprehensive risk management framework for us. Their training was practical, insightful, and immediately applicable.',
        name: 'David Park',
        role: 'CFO, FinSecure Partners',
        rating: 5,
      },
      {
        text: 'Partnering with Leaf Global Consulting Group has been transformative. Their multi-discipline expertise across Education, Law, IT, and Finance is truly unique.',
        name: 'Lisa Thompson',
        role: 'CEO, GrowthWorks International',
        rating: 5,
      },
    ],
  },
  darkBg: { type: Boolean, default: false },
  visibleCount: { type: Number, default: 3 },
})

const currentSlide = ref(0)

const visibleTestimonials = computed(() =>
  props.testimonials.slice(0, props.visibleCount)
)
</script>
