defineOptions({ name: 'EducationSection' })
<template>
  <section id="education" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Formation</h2>
        <div class="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, index) in education"
            :key="index"
            class="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-600 hover:shadow-md transition-shadow duration-300"
          >
            <span class="text-sm font-medium text-indigo-600">{{ item.period }}</span>
            <h3 class="text-xl font-semibold text-gray-800 mt-2">{{ item.degree }}</h3>
            <p class="text-gray-600 font-medium">{{ item.institution }}</p>
            <p class="text-gray-600 mt-3">{{ item.description }}</p>
          </div>
        </div>

        <!-- Certifications -->
        <div class="mt-16">
          <h3 class="text-2xl font-semibold text-gray-800 mb-8 text-center">Certifications</h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(cert, index) in certifications"
              :key="index"
              class="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300 flex items-start"
            >
              <div class="bg-indigo-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ cert.title }}</h4>
                <p class="text-sm text-gray-600 mt-1">{{ cert.issuer }} · {{ cert.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    period: '2022 - 2025',
    degree: 'Licence Sciences de la Vie, parcours Laboratoire (4ème année)',
    institution: 'Université de Lyon',
    description:
      "Spécialisation en biologie moléculaire, biochimie et techniques de laboratoire. Projet de recherche sur l'analyse génétique des micro-organismes.",
  },
  {
    period: '2020 - 2022',
    degree: 'DUT Génie Biologique',
    institution: 'IUT Paris-Saclay',
    description: 'Formation pratique en laboratoire, stages en microbiologie et biotechnologies.',
  },
]

const certifications = [
  {
    title: 'Manipulation avancée en laboratoire',
    issuer: 'Université de Lyon',
    year: '2024',
  },
  {
    title: 'Techniques de PCR et séquençage',
    issuer: 'Institut Pasteur',
    year: '2023',
  },
]
</script>

<style scoped>.section-animate {
  animation: fadeInUp 0.8s;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
