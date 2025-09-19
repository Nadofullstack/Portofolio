<template>
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">À propos de moi</h2>
        <div class="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center">
          <div class="relative">
            <div class="absolute -inset-4 bg-indigo-100 rounded-2xl blur-lg opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
              alt="About"
              class="relative rounded-2xl shadow-xl w-full max-w-xs"
            />
          </div>
        </div>

        <div class="md:w-2/3 md:pl-12">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">
            Développeur passionné avec 5 ans d'expérience
          </h3>

          <p class="text-gray-600 mb-6">
            Je suis un développeur full stack passionné par la création d'applications web élégantes
            et performantes. Avec une solide expérience en JavaScript, Vue.js, React et Node.js, je
            transforme des idées en réalité numérique.
          </p>

          <p class="text-gray-600 mb-8">
            Mon approche combine une attention aux détails du design avec une expertise technique
            robuste pour créer des expériences utilisateur exceptionnelles qui répondent aux
            objectifs business.
          </p>

          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p class="text-gray-700 font-medium">
                <span class="text-indigo-600 mr-2">■</span> Nom: Alexandre Martin
              </p>
              <p class="text-gray-700 font-medium">
                <span class="text-indigo-600 mr-2">■</span> Email: alexandre@example.com
              </p>
            </div>
            <div>
              <p class="text-gray-700 font-medium">
                <span class="text-indigo-600 mr-2">■</span> Téléphone: +33 6 12 34 56 78
              </p>
              <p class="text-gray-700 font-medium">
                <span class="text-indigo-600 mr-2">■</span> Localisation: Paris, France
              </p>
            </div>
          </div>

          <a
            href="#"
            class="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({ name: 'AboutSection' })
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
