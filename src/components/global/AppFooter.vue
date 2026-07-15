<template>
  <footer class="bg-dark text-white">
    <div class="container-custom">
      <!-- Metallic top divider -->
      <div class="metallic-divider" />

      <!-- Main Footer Content: 4 Columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16">
        <!-- Column 1: Logo + Tagline + Social -->
        <div class="sm:col-span-2 lg:col-span-1">
          <router-link to="/" class="inline-flex items-center gap-3 mb-4 text-white">
            <img
              src="/logo.svg"
              alt="Leaf Global Consulting Group"
              class="h-[85px] sm:h-[100px] w-auto object-contain shrink-0"
            />
            <span class="h4 font-bold font-heading leading-tight">
              Leaf Global<br/>Consulting Group
            </span>
          </router-link>
          <p class="text-gray-400 body-md mb-6">
            Empowering organisations with expert consulting and training across Education, Law, IT, and Finance. We help you build capability, ensure compliance, and achieve sustainable growth.
          </p>
          <!-- Social Icons — glass with blue hover -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-[14px] glass-heavy flex items-center justify-center text-gray-400 hover:bg-primary/90 hover:text-white hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" size="18" />
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h4 class="font-heading font-semibold text-white label mb-5">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <router-link
                :to="link.path"
                class="body-sm text-gray-400 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 group"
              >
                <span class="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-2 rounded-full" />
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: Core Services -->
        <div>
          <h4 class="font-heading font-semibold text-white label mb-5">Specialisations</h4>
          <ul class="space-y-3">
            <li v-for="service in coreServices" :key="service.label">
              <router-link
                :to="service.path"
                class="body-sm text-gray-400 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 group"
              >
                <span class="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-2 rounded-full" />
                {{ service.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div>
          <h4 class="font-heading font-semibold text-white label mb-5">Contact Us</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <Icon name="map-pin" size="18" class="mt-0.5 text-finance shrink-0" />
              <div>
                <span class="badge text-gray-500 uppercase font-medium">Office</span>
                <p class="body-sm text-gray-400 mt-0.5">
                  65 Murry St<br/>Hobart, Australia
                </p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <Icon name="phone" size="18" class="text-finance shrink-0" />
              <div>
                <a href="tel:+610403434925" class="body-sm text-gray-400 hover:text-finance transition-colors duration-200">
                  +61 0403 434 925
                </a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <Icon name="mail" size="18" class="text-finance shrink-0" />
              <div>
                <a href="mailto:director@leafGlobal.com.au" class="body-sm text-gray-400 hover:text-finance transition-colors duration-200">
                  director@leafGlobal.com.au
                </a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <Icon name="mail" size="18" class="text-finance shrink-0" />
              <div>
                <a href="mailto:leaf.global@gmail.com" class="body-sm text-gray-400 hover:text-finance transition-colors duration-200">
                  leaf.global@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Second metallic divider -->
      <div class="metallic-divider" />

      <!-- Bottom Bar -->
      <div class="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="body-sm text-gray-500">
          &copy; {{ currentYear }} Leaf Global Consulting Group. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <router-link to="/privacy" class="body-sm text-gray-500 hover:text-primary transition-colors duration-200">
            Privacy Policy
          </router-link>
          <router-link to="/terms" class="body-sm text-gray-500 hover:text-primary transition-colors duration-200">
            Terms of Service
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Icon from '@/components/global/Icon.vue'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
]

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
]

const coreServices = [
  { label: 'Education Consulting & Training', path: '/services#education' },
  { label: 'Law Consulting & Training', path: '/services#law' },
  { label: 'IT Consulting & Training', path: '/services#it-consulting' },
  { label: 'Finance Consulting & Training', path: '/services#finance' },
]
</script>
