
<template>
  <section id="experience" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mon expérience</h2>
        <div class="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>

          <!-- Timeline items -->
          <div v-for="(item, index) in experiences" :key="index" class="mb-12 relative">
            <div class="flex flex-col md:flex-row items-center">
              <div
                :class="[
                  'md:w-1/2',
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2',
                ]"
              >
                <div class="bg-white p-6 rounded-lg shadow-md">
                  <span class="text-sm font-medium text-indigo-600">{{ item.period }}</span>
                  <h3 class="text-xl font-semibold text-gray-800 mt-2">{{ item.position }}</h3>
                  <p class="text-gray-600 font-medium">{{ item.company }}</p>
                  <p class="text-gray-600 mt-3">{{ item.description }}</p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span
                      v-for="(tech, techIndex) in item.technologies"
                      :key="techIndex"
                      class="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Timeline dot -->
              <div
                :class="[
                  'absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow',
                  index % 2 === 0 ? 'md:left-1/2' : 'md:left-1/2',
                ]"
              ></div>

              <div :class="['md:w-1/2', index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:order-1']"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({ name: 'ExperienceSection' })
const experiences = [
  {
    period: '2024 - Présent',
    position: 'Stagiaire en laboratoire de biologie moléculaire',
    company: 'Laboratoire GenBio, Université de Lyon',
    description:
      "Réalisation d'expériences sur la PCR, extraction d'ADN, analyse de séquences génétiques. Participation à la rédaction d'un article scientifique.",
    technologies: ['PCR', 'Electrophorèse', 'Spectrophotomètre', 'Bioinformatics', 'Excel'],
  },
  {
    period: '2023',
    position: 'Projet tutoré : Analyse de la résistance bactérienne',
    company: 'IUT Paris-Saclay',
    description:
      "Mise en place d'un protocole expérimental, culture de souches bactériennes, tests d'antibiogramme et rapport de résultats.",
    technologies: ['Microbiologie', 'Antibiogramme', 'Statistiques', 'R'],
  },
  {
    period: '2022',
    position: 'Assistant technique de laboratoire',
    company: "Laboratoire BioTech, stage d'été",
    description:
      'Préparation de solutions, gestion du matériel, observation au microscope et participation à des manipulations de routine.',
    technologies: ['Microscopie', 'Préparation de solutions', 'Gestion de stocks'],
  },
]
</script>

<style scoped>
@media (min-width: 768px) {
  .md\\:order-1 {
    order: 1;
  }
  .md\\:order-2 {
    order: 2;
  }
}

.section-animate {
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
