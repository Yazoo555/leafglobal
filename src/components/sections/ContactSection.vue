<template>
  <section id="contact" v-scroll-reveal="'fade-in'" class="pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 lg:pb-16" :class="darkBg ? 'gradient-dark' : 'bg-white'">
    <div class="container-custom">
      <div class="max-w-6xl mx-auto">
        <SectionTitle
          v-if="badge || title"
          :badge="badge"
          :title="title"
          :subtitle="subtitle"
          alignment="center"
          :gradient="darkBg"
        />

        <div class="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <!-- Form (3/5 width) -->
          <div v-scroll-reveal="{ animation: 'slide-up', delay: 0 }" class="lg:col-span-3">
            <div class="card-base p-8 sm:p-10" :class="darkBg ? 'bg-white' : ''">
              <h3 class="text-xl font-heading font-semibold text-dark mb-6">{{ formTitle }}</h3>

              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="cs-name" class="block text-sm font-medium text-dark mb-1.5">Full Name</label>
                    <input
                      id="cs-name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200 text-sm"
                      placeholder="Your name"
                      :class="{ 'border-red-400': errors.name }"
                    />
                    <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
                  </div>
                  <div>
                    <label for="cs-email" class="block text-sm font-medium text-dark mb-1.5">Email Address</label>
                    <input
                      id="cs-email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200 text-sm"
                      placeholder="you@company.com"
                      :class="{ 'border-red-400': errors.email }"
                    />
                    <p v-if="errors.email" class="text-xs text-red-500 mt-1">{{ errors.email }}</p>
                  </div>
                </div>

                <div>
                  <label for="cs-subject" class="block text-sm font-medium text-dark mb-1.5">Subject</label>
                  <select
                    id="cs-subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200 text-sm"
                  >
                    <option value="" disabled>Select a service</option>
                    <option v-for="opt in subjectOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
                  </select>
                </div>

                <div>
                  <label for="cs-message" class="block text-sm font-medium text-dark mb-1.5">Message</label>
                  <textarea
                    id="cs-message"
                    v-model="form.message"
                    required
                    rows="4"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200 text-sm resize-none"
                    placeholder="Tell us about your project..."
                    :class="{ 'border-red-400': errors.message }"
                  />
                  <p v-if="errors.message" class="text-xs text-red-500 mt-1">{{ errors.message }}</p>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <p class="text-xs text-text-light">We respect your privacy.</p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    :loading="submitting"
                  >
                    Send Message
                    <template #icon><Icon name="arrow-right" size="18" /></template>
                  </Button>
                </div>
              </form>

              <!-- Success Message -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <div v-if="submitted" class="mt-8 p-6 rounded-xl bg-primary-50 border border-primary-100 text-center">
                  <Icon name="check-circle" size="40" class="text-primary mx-auto mb-3" />
                  <h4 class="font-heading font-semibold text-dark">Message Sent Successfully!</h4>
                  <p class="text-sm text-text-light mt-1">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              </transition>
            </div>
          </div>

          <!-- Info Panel (2/5 width) -->
          <div v-scroll-reveal="{ animation: 'slide-up', delay: 200 }" class="lg:col-span-2 flex flex-col h-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 content-start">
              <div v-for="item in contactInfo" :key="item.title" class="card-base card-hover p-5 flex flex-col" :class="darkBg ? 'bg-white' : ''">
                <div class="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3 shrink-0">
                  <Icon :name="item.icon" size="20" class="text-primary" />
                </div>
                <h4 class="font-heading font-semibold text-dark text-sm mb-0.5">{{ item.title }}</h4>
                <p class="text-xs text-text-light mb-auto">{{ item.detail }}</p>
                <a v-if="item.action" :href="item.action" target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-primary hover:text-primary-600 transition-colors duration-200 mt-2 inline-flex items-center">
                  {{ item.actionText }}
                  <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import SectionTitle from '@/components/global/SectionTitle.vue'
import Button from '@/components/global/Button.vue'
import Icon from '@/components/global/Icon.vue'

defineProps({
  badge: { type: String, default: 'Get In Touch' },
  title: { type: String, default: 'Ready to Start Your Project?' },
  subtitle: { type: String, default: '' },
  formTitle: { type: String, default: 'Send Us a Message' },
  darkBg: { type: Boolean, default: false },
})

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'education', label: 'Education Consulting & Training' },
  { value: 'law', label: 'Law Consulting & Training' },
  { value: 'it', label: 'IT Consulting & Training' },
  { value: 'finance', label: 'Finance Consulting & Training' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'careers', label: 'Careers' },
]

const contactInfo = [
  { icon: 'mail', title: 'Email', detail: 'director@leafGlobal.com.au', action: 'mailto:director@leafGlobal.com.au', actionText: 'Send an email' },
  { icon: 'mail', title: 'Email', detail: 'leaf.global@gmail.com', action: 'mailto:leaf.global@gmail.com', actionText: 'Send an email' },
  { icon: 'phone', title: 'Phone', detail: '+61 0403 434 925', action: 'tel:+610403434925', actionText: 'Call us' },
  { icon: 'map-pin', title: 'Address', detail: '65 Murry St, Hobart, Australia', action: 'https://maps.google.com/?q=65+Murry+St+Hobart', actionText: 'Get directions' },
]

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

const handleSubmit = () => {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  let valid = true
  if (!form.name.trim()) { errors.name = 'Name is required'; valid = false }
  if (!form.email.trim()) { errors.email = 'Email is required'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Invalid email'; valid = false }
  if (!form.message.trim()) { errors.message = 'Message is required'; valid = false }
  if (!valid) return

  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    form.name = ''; form.email = ''; form.subject = ''; form.message = ''
    setTimeout(() => { submitted.value = false }, 5000)
  }, 1500)
}
</script>
