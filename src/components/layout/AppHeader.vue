defineOptions({ name: 'AppHeader' })
<template>
  <header
    class="fixed w-full z-50 bg-white/90 backdrop-blur-sm transition-all duration-300"
    :class="{ 'shadow-md': scrolled }"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-indigo-600 cursor-pointer">Portfolio</div>

        <nav class="hidden md:flex space-x-10">
          <button
            v-for="(item, index) in navItems"
            :key="index"
            @click="scrollToSection(item.target)"
            class="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium bg-transparent border-none outline-none cursor-pointer"
            type="button"
          >
            <span v-html="item.icon"></span>
            <span>{{ item.name }}</span>
          </button>
        </nav>

        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="!menuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
        <button
          v-for="(item, index) in navItems"
          :key="index"
          @click="scrollToSection(item.target);toggleMenu()"
         
          
          
          class="flex items-center block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer"
          type="button"
        >
          <span v-html="item.icon"></span>
          <span>{{ item.name }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const navItems = [
  { name: 'Accueil', target: 'home', icon: `<svg class='w-5 h-5 mr-2' ...></svg>` },
  { name: 'À propos', target: 'about', icon: `<svg class='w-5 h-5 mr-2' ...></svg>` },
  { name: 'Compétences', target: 'skills', icon: `<svg class='w-5 h-5 mr-2' ...></svg>` },
  { name: 'Expérience', target: 'experience', icon: `<svg class='w-5 h-5 mr-2' ...></svg>` },
  { name: 'Projets', target: 'portfolio', icon: `<svg class='w-5 h-5 mr-2' ...></svg>` },
  { name: 'Témoignages', target: 'testimonials', icon: `<svg class='w-5 h-5 mr-2' ...></svg>` },
  { name: 'Contact', target: 'contact', icon: `<svg class='w-5 h-5 mr-2' ...></svg>` },
]

function scrollToSection(target) {
  const el = document.getElementById(target)
  if (el) {
    el.classList.add('section-animate')
    el.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      el.classList.remove('section-animate')
    }, 1000)
  }
}

function handleScroll() {
  scrolled.value = window.scrollY > 40
}
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
