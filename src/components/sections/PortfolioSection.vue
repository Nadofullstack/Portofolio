<template>
  <section id="portfolio" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mes projets</h2>
        <div class="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center mb-12 gap-3">
        <button
          v-for="(category, index) in categories"
          :key="index"
          @click="filterProjects(category)"
          :class="[
            activeCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-indigo-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div class="flex space-x-4">
                <button
                  @click="openModal(project)"
                  class="p-2 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors duration-300"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2 15.5v-11a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </button>
                <a
                  :href="project.link"
                  target="_blank"
                  class="p-2 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors duration-300"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tech, techIndex) in project.technologies"
                :key="techIndex"
                class="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Modal -->
      <Modal :show="showModal" @close="showModal = false" :project="selectedProject" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Modal from '@/components/ui/Modal.vue'

const categories = ['Tous', 'Génétique', 'Biochimie', 'Microbiologie']
const activeCategory = ref('Tous')
const showModal = ref(false)
const selectedProject = ref(null)
const projects = [
  {
    title: 'Analyse génétique de bactéries',
    description: 'Projet de recherche sur la résistance bactérienne par PCR et séquençage.',
    image:
      'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=400&q=80',
    technologies: ['PCR', 'Séquençage', 'Bioinformatique'],
    category: 'Génétique',
    link: '#',
    details:
      "Extraction d'ADN, amplification par PCR, analyse des séquences et interprétation des résultats.",
  },
  {
    title: 'Dosage enzymatique en biochimie',
    description:
      "Mise en place d'un protocole de dosage enzymatique et analyse spectrophotométrique.",
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    technologies: ['Spectrophotomètre', 'Dosage enzymatique', 'Excel'],
    category: 'Biochimie',
    link: '#',
    details:
      "Préparation des solutions, réalisation du dosage, traitement des données et rédaction d'un rapport scientifique.",
  },
  {
    title: 'Culture de souches bactériennes',
    description: "Projet tutoré sur la culture et l'identification de souches en laboratoire.",
    image:
      'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=400&q=80',
    technologies: ['Microbiologie', 'Antibiogramme', 'Statistiques'],
    category: 'Microbiologie',
    link: '#',
    details:
      "Culture sur milieux sélectifs, réalisation d'antibiogrammes, analyse statistique des résultats.",
  },
  {
    title: 'Culture cellulaire et analyse de viabilité',
    description: 'Développement de lignées cellulaires pour des tests pharmacologiques.',
    image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    technologies: ['Culture cellulaire', 'Microscopie', 'Viabilité cellulaire'],
    category: 'Biochimie',
    link: '#',
    details:
      'Maintenance de cultures cellulaires, traitement avec des composés, et évaluation de la viabilité par des tests colorimétriques et la microscopie à fluorescence.',
  },
  {
    title: 'Purification de protéines par chromatographie',
    description: 'Isolation et purification de protéines recombinantes pour analyse structurale.',
    image:
      'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=400&q=80',
    technologies: ['Chromatographie', 'Electrophorèse', 'Protéines'],
    category: 'Biochimie',
    link: '#',
    details:
      "Utilisation de techniques de chromatographie d'affinité et d'exclusion stérique pour purifier des protéines. Analyse de la pureté par électrophorèse sur gel.",
  },
  {
    title: 'Analyse transcriptomique (RNA-Seq)',
    description: "Analyse de l'expression des gènes dans des cellules traitées.",
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    technologies: ['RNA-Seq', 'Bioinformatique', 'R'],
    category: 'Génétique',
    link: '#',
    details:
      "Extraction de l'ARN, préparation des banques pour le séquençage à haut débit, et analyse des données bioinformatiques pour identifier les gènes différentiellement exprimés.",
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Tous') return projects
  return projects.filter((project) => project.category === activeCategory.value)
})

function filterProjects(category) {
  activeCategory.value = category
}
function openModal(project) {
  selectedProject.value = project
  showModal.value = true
}
</script>

<style scoped>
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
