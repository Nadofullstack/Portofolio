
<template>
  <section id="skills" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mes compétences</h2>
        <div class="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Compétences de laboratoire -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg
              class="w-6 h-6 text-indigo-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8" />
            </svg>
            Compétences de laboratoire
          </h3>
          <div class="space-y-6">
            <div v-for="(skill, index) in labSkills" :key="index" class="skill-item">
              <div class="flex justify-between mb-2">
                <span class="text-gray-700 font-medium">{{ skill.name }}</span>
                <span class="text-gray-500">{{ skill.percentage }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                  :style="{ width: skill.percentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Compétences d'analyse de données -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg
              class="w-6 h-6 text-indigo-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16v-4m4 4V8m4 8v-2"
              />
            </svg>
            Analyse de données & bioinformatique
          </h3>
          <div class="space-y-6">
            <div v-for="(skill, index) in dataSkills" :key="index" class="skill-item">
              <div class="flex justify-between mb-2">
                <span class="text-gray-700 font-medium">{{ skill.name }}</span>
                <span class="text-gray-500">{{ skill.percentage }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                  :style="{ width: skill.percentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools & Technologies -->
      <div class="mt-16">
        <h3 class="text-xl font-semibold text-gray-800 mb-8 text-center">Outils & Technologies</h3>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            v-for="(tool, index) in tools"
            :key="index"
            class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
          >
            <div class="text-3xl mb-2 text-indigo-600">{{ tool.icon }}</div>
            <span class="text-gray-700 text-sm font-medium">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const labSkills = [
  { name: 'Biologie moléculaire', percentage: 95 },
  { name: 'Biochimie', percentage: 90 },
  { name: 'Microbiologie', percentage: 88 },
  { name: 'Techniques de PCR', percentage: 85 },
  { name: 'Culture cellulaire', percentage: 80 },
]

const dataSkills = [
  { name: 'Analyse de données', percentage: 90 },
  { name: 'Statistiques', percentage: 85 },
  { name: 'Bioinformatique', percentage: 80 },
  { name: 'Excel/Sheets', percentage: 88 },
  { name: 'R', percentage: 75 },
]

const tools = [
  { name: 'Microscope', icon: '🔬' },
  { name: 'Spectrophotomètre', icon: '📊' },
  { name: 'Centrifugeuse', icon: '�' },
  { name: 'Pipettes', icon: '�' },
  { name: 'Logiciel R', icon: '�' },
  { name: 'Excel', icon: '📋' },
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
