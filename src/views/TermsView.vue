<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 gradient-dark opacity-95" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div class="container-custom relative z-10 text-center">
        <span class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 text-secondary mb-6 backdrop-blur-sm">
          Legal
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-display font-heading font-bold text-white max-w-3xl mx-auto">
          Terms of<br/>
          <span class="text-gradient">Service</span>
        </h1>
        <p class="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Please read these terms carefully before engaging our consulting and training services.
        </p>
      </div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
    </section>

    <!-- Content -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <p class="text-text-light text-sm mb-8">Last updated: July 2025</p>

          <div class="space-y-10">
            <div v-for="section in sections" :key="section.title">
              <h2 class="text-2xl font-heading font-bold text-dark mb-4">{{ section.title }}</h2>
              <div class="space-y-3">
                <p v-for="(paragraph, idx) in section.paragraphs" :key="idx" class="text-text-light leading-relaxed">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const sections = [
  {
    title: 'Acceptance of Terms',
    paragraphs: [
      'By accessing our website and engaging our consulting and training services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our services or website.',
      'We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after any modifications indicates your acceptance of the updated terms.',
    ],
  },
  {
    title: 'Services Description',
    paragraphs: [
      'Leaf Global Consulting Group provides consulting and training services across Education, Law, IT, and Finance disciplines. The specific scope, deliverables, timelines, and fees for each engagement will be outlined in a separate service agreement or statement of work.',
      'All services are delivered by qualified professionals with relevant domain expertise. We strive to provide accurate and up-to-date information, but we do not warrant that our advice or training materials are error-free or suitable for every situation.',
    ],
  },
  {
    title: 'Client Responsibilities',
    paragraphs: [
      'Clients agree to provide accurate and complete information necessary for the delivery of services, cooperate fully with our consultants, and make timely decisions to keep engagements on schedule.',
      'Clients are responsible for implementing recommendations and advice provided by Leaf Global Consulting Group at their own discretion. We are not responsible for outcomes resulting from failure to follow our recommendations or incomplete implementation.',
    ],
  },
  {
    title: 'Intellectual Property',
    paragraphs: [
      'All materials, methodologies, frameworks, and deliverables created by Leaf Global Consulting Group remain our intellectual property unless otherwise agreed in writing. Clients receive a non-exclusive, non-transferable license to use deliverables for their internal business purposes.',
      'Clients retain ownership of any proprietary information, data, or materials they provide to us for the purpose of delivering services.',
    ],
  },
  {
    title: 'Confidentiality',
    paragraphs: [
      'Both parties agree to maintain the confidentiality of all proprietary information disclosed during the course of an engagement. This includes business strategies, financial data, client information, and any other non-public information.',
      'Confidentiality obligations remain in effect for a period of three years following the conclusion of the engagement, or indefinitely for trade secrets and similar protected information.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'Leaf Global Consulting Group shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the total fees paid for the specific engagement giving rise to the claim.',
      'We make no warranties, expressed or implied, regarding the results that may be obtained from the use of our services. Each client engagement is unique, and outcomes may vary based on numerous factors beyond our control.',
    ],
  },
  {
    title: 'Contact Information',
    paragraphs: [
      'For questions about these Terms of Service, please contact us at director@leafGlobal.com.au or write to us at 65 Murry St, Hobart, Australia.',
      'These terms are governed by the laws of Tasmania, Australia. Any disputes arising from these terms shall be resolved through good-faith negotiations or, if necessary, in the courts of Tasmania.',
    ],
  },
]
</script>
