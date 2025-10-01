<template>
  <section
    id="home"
    class="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-br from-indigo-50 to-blue-100"
  >
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Bonjour, je suis <span class="text-indigo-600">Nadège</span>
          </h1>
          <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
            Étudiante en laboratoire (4ème année)
          </h2>
          <p class="text-gray-600 mb-10 max-w-lg mx-auto md:mx-0">
            Passionnée par la biologie moléculaire, la biochimie et la recherche scientifique. Je
            réalise des projets en laboratoire, des analyses génétiques et des manipulations
            avancées.
          </p>
          <div
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
          >
            <a
              href="#portfolio"
              class="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300 text-center font-medium"
            >
              Voir mes projets scientifiques
            </a>
            <a
              href="#contact"
              class="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300 text-center font-medium"
            >
              Me contacter
            </a>
          </div>
        </div>
        <div class="md:w-1/2 mt-10 md:mt-0">
          <div class="relative mx-auto max-w-xs md:max-w-md">
            <div class="absolute -inset-4 bg-indigo-100 rounded-full blur-lg opacity-50"></div>
            <div class="relative rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Profile"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique JS ici, juste le template
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
