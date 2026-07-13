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
          Privacy<br/>
          <span class="text-gradient">Policy</span>
        </h1>
        <p class="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          We are committed to protecting your privacy and handling your personal information with transparency and care.
        </p>
      </div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
    </section>

    <!-- Content -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto prose prose-sm sm:prose">
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
    title: 'Information We Collect',
    paragraphs: [
      'We collect information you provide directly to us when you fill out contact forms, subscribe to communications, or engage with our services. This may include your name, email address, phone number, organisation name, and any other details you choose to share.',
      'We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and pages you visit. This helps us improve our website and deliver a better user experience.',
    ],
  },
  {
    title: 'How We Use Your Information',
    paragraphs: [
      'We use the information we collect to respond to your inquiries, provide our consulting and training services, send relevant communications about our services, improve our website, and comply with legal obligations.',
      'We will only use your personal information for the purposes for which it was collected, unless we reasonably consider that we need to use it for another reason compatible with the original purpose.',
    ],
  },
  {
    title: 'Information Sharing',
    paragraphs: [
      'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and delivering our services, subject to strict confidentiality agreements.',
      'We may also disclose your information if required by law or to protect our rights, property, or safety, or that of our clients or others.',
    ],
  },
  {
    title: 'Data Security',
    paragraphs: [
      'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls.',
      'While we strive to protect your personal information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but will do our utmost to safeguard your data.',
    ],
  },
  {
    title: 'Your Rights',
    paragraphs: [
      'You have the right to access, correct, update, or delete your personal information at any time. You may also object to processing, request data portability, and withdraw consent where processing is based on consent.',
      'To exercise any of these rights, please contact us at director@leafGlobal.com.au. We will respond to your request within a reasonable timeframe.',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.',
      'We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted) to improve your experience on our site.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      'If you have any questions about this Privacy Policy or our data practices, please contact us at director@leafGlobal.com.au or write to us at 65 Murry St, Hobart, Australia.',
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.',
    ],
  },
]
</script>
