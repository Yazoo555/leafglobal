<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-white" />
      <div class="absolute inset-0 gradient-subtle opacity-60" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2NDc0ODgiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div class="absolute left-20 bottom-10 w-72 h-72 rounded-full bg-education/5 blur-3xl" />

      <div class="container-custom relative z-10 text-center">
        <span class="inline-block px-4 py-1.5 badge uppercase rounded-full glass text-dark/70 mb-6">
          Get In Touch
        </span>
        <h1 class="text-display-lg lg:text-display-xl font-heading font-bold text-dark max-w-3xl mx-auto">
          Let's Start a<br/>
          <span class="text-gradient-blue">Conversation</span>
        </h1>
        <p class="mt-6 body-lg text-text-light max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear about it. Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding bg-background-secondary">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="glass-card p-8 sm:p-10">
              <h2 class="text-h3 font-heading font-bold text-dark mb-2">Send Us a Message</h2>
              <p class="body-md text-text-light mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block label text-dark mb-1.5">Full Name</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 text-base rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-text placeholder:text-text-light/70 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200"
                      placeholder="John Doe"
                      :class="{ 'border-red-400 focus:ring-red-200 focus:border-red-400': errors.name }"
                    />
                    <p v-if="errors.name" class="caption text-red-500 mt-1">{{ errors.name }}</p>
                  </div>
                  <div>
                    <label for="email" class="block label text-dark mb-1.5">Email Address</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 text-base rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-text placeholder:text-text-light/70 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200"
                      placeholder="john@company.com"
                      :class="{ 'border-red-400 focus:ring-red-200 focus:border-red-400': errors.email }"
                    />
                    <p v-if="errors.email" class="caption text-red-500 mt-1">{{ errors.email }}</p>
                  </div>
                </div>

                <div>
                  <label for="subject" class="block label text-dark mb-1.5">Subject</label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 text-base rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-text focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200"
                  >
                    <option value="" disabled>Select a service</option>
                    <option v-for="option in subjectOptions" :key="option.value" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block label text-dark mb-1.5">Message</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 text-base rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-text placeholder:text-text-light/70 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                    :class="{ 'border-red-400 focus:ring-red-200 focus:border-red-400': errors.message }"
                  />
                  <p v-if="errors.message" class="caption text-red-500 mt-1">{{ errors.message }}</p>
                </div>

                <div class="flex items-center justify-between">
                  <p class="caption text-text-light">We respect your privacy and will never share your information.</p>
                  <Button
                    type="submit"
                    variant="glass-primary"
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
                  <h4 class="font-heading font-semibold text-dark h6">Message Sent Successfully!</h4>
                  <p class="body-md text-text-light mt-1">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              </transition>
            </div>
          </div>

          <!-- Contact Info Sidebar -->
          <div class="flex flex-col h-full gap-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="item in contactMethods" :key="item.title" class="glass-card p-5 flex flex-col items-start">
                <div class="w-10 h-10 rounded-xl icon-blue flex items-center justify-center mb-3 shrink-0">
                  <Icon :name="item.icon" size="20" class="text-primary" />
                </div>
                <h4 class="font-heading font-semibold text-dark body-md mb-0.5">{{ item.title }}</h4>
                <p class="caption text-text-light mb-auto">{{ item.detail }}</p>
                <a v-if="item.action" :href="item.action" target="_blank" rel="noopener noreferrer" class="caption font-medium text-primary hover:text-primary-600 transition-colors duration-200 mt-2 inline-flex items-center">
                  {{ item.actionText }}
                  <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            <!-- Social -->
            <div class="glass-card p-5 mt-auto">
              <h4 class="font-heading font-semibold text-dark body-md mb-3">Follow Us</h4>
              <div class="flex gap-2.5">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-9 h-9 rounded-xl icon-blue flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  :aria-label="social.name"
                >
                  <Icon :name="social.icon" size="16" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions. Can't find what you're looking for? Reach out to us directly."
          alignment="center"
          gradient
        />

        <div class="mt-16 max-w-3xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="glass-card overflow-hidden transition-all duration-300"
            :class="openFaqs.includes(index) ? 'shadow-glass-lg border-primary/10' : 'shadow-glass-sm hover:shadow-glass'"
          >
            <button
              class="w-full px-8 py-6 flex items-center justify-between text-left font-heading font-semibold transition-colors duration-200"
              :class="openFaqs.includes(index) ? 'text-primary' : 'text-dark hover:text-primary'"
              @click="toggleFaq(index)"
            >
              <span class="flex-1 pr-4">{{ faq.question }}</span>
              <Icon
                :name="'chevron-down'"
                size="18"
                class="transition-all duration-300 shrink-0"
                :class="openFaqs.includes(index) ? 'rotate-180 text-primary' : 'text-text-light'"
              />
            </button>
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[999px] opacity-100"
              leave-from-class="max-h-[999px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="openFaqs.includes(index)" class="px-8 pb-8 pt-4">
                <div class="border-l-2 border-primary/20 pl-4">
                  <p class="body-md text-text-light">{{ faq.answer }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Map / Location -->
    <section class="section-padding bg-background-secondary">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              badge="Visit Us"
              title="Our Headquarters"
              subtitle="Visit our headquarters in Hobart to discuss your project in person, or reach out online — we'd love to hear from you."
              alignment="left"
              :show-line="true"
              size="md"
            />
            <div class="mt-8 space-y-4">
              <div v-for="office in offices" :key="office.city" class="flex gap-4">
                <div class="w-10 h-10 rounded-xl icon-blue flex items-center justify-center shrink-0">
                  <Icon name="map-pin" size="20" class="text-primary" />
                </div>
                <div>
                  <h4 class="font-heading font-semibold text-dark body-md">{{ office.city }}</h4>
                  <p class="body-md text-text-light">{{ office.address }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="aspect-[4/3] rounded-[24px] overflow-hidden relative shadow-glass-lg">
            <iframe
              src="https://www.google.com/maps?q=65+Murry+St+Hobart+Australia&output=embed"
              class="absolute inset-0 w-full h-full"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Leaf Global Consulting - 65 Murry St, Hobart"
            ></iframe>
            <a
              :href="'https://maps.google.com/?q=65+Murry+St+Hobart'"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 bg-white text-dark text-sm font-medium rounded-xl shadow-glass hover:bg-gray-50 hover:shadow-glass-lg transition-all duration-200 z-10"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Button from '@/components/global/Button.vue'
import SectionTitle from '@/components/global/SectionTitle.vue'
import Icon from '@/components/global/Icon.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const submitting = ref(false)
const submitted = ref(false)

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'education', label: 'Education Consulting & Training' },
  { value: 'law', label: 'Law Consulting & Training' },
  { value: 'it', label: 'IT Consulting & Training' },
  { value: 'finance', label: 'Finance Consulting & Training' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'careers', label: 'Careers' },
]

const contactMethods = [
  {
    icon: 'mail',
    title: 'Email (Primary)',
    detail: 'director@leafGlobal.com.au',
    action: 'mailto:director@leafGlobal.com.au',
    actionText: 'Send an email',
  },
  {
    icon: 'mail',
    title: 'Email (Secondary)',
    detail: 'leaf.global@gmail.com',
    action: 'mailto:leaf.global@gmail.com',
    actionText: 'Send an email',
  },
  {
    icon: 'phone',
    title: 'Phone',
    detail: '+61 0403 434 925',
    action: 'tel:+610403434925',
    actionText: 'Call us',
  },
  {
    icon: 'map-pin',
    title: 'Office',
    detail: '65 Murry St, Hobart, Australia',
    action: 'https://maps.google.com/?q=65+Murry+St+Hobart',
    actionText: 'Get directions',
  },
]

const offices = [
  { city: 'Hobart (Headquarters)', address: '65 Murry St, Hobart TAS 7000, Australia' },
]

const socialLinks = [
  { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
]

const faqs = [
  {
    question: 'What is the typical project timeline?',
    answer: 'Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while larger digital transformation initiatives may take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes! We offer various support and maintenance plans to ensure your digital assets continue to perform optimally. Our support team is available 24/7 for critical issues.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We serve clients across 15+ industries including technology, healthcare, finance, e-commerce, education, and professional services. Our team has deep domain expertise in each sector.',
  },
  {
    question: 'How do you handle data security and privacy?',
    answer: 'Security is a top priority. We follow industry best practices including encryption, secure authentication, regular audits, and compliance with GDPR, CCPA, and other relevant regulations.',
  },
  {
    question: 'Can you work with our existing technology stack?',
    answer: 'Absolutely. We have experience integrating with a wide range of technologies and platforms. Our team will assess your current stack and recommend the best approach for your project.',
  },
]

const openFaqs = ref([])

const toggleFaq = (index) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter((i) => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

const handleSubmit = () => {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  let valid = true
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    valid = false
  }
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
    valid = false
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required'
    valid = false
  }

  if (!valid) return

  submitting.value = true

  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 1500)
}
</script>
