<script setup>
import { onMounted } from 'vue'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
onMounted(() => {
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 4000,
    hoverpause: true,
    gap: 20,
    breakpoints: {
      768: { perView: 1 },
    },
  }).mount()
})
const testimonials = [
  {
    name: 'Dr. Marie Dupont',
    position: 'Maître de conférences',
    company: 'Université de Lyon',
    rating: 5,
    text: "Nadège s'est distinguée par sa rigueur et sa passion pour la recherche en laboratoire. Son implication dans les projets de génétique a été remarquable.",
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=1887&q=80',
  },
  {
    name: 'Thomas Leroy',
    position: 'Encadrant de stage',
    company: 'Laboratoire GenBio',
    rating: 5,
    text: "Excellente stagiaire, Nadège a su mener à bien des manipulations complexes et a montré une grande autonomie dans l'analyse des résultats.",
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1887&q=80',
  },
  {
    name: 'Sophie Martin',
    position: 'Collègue de laboratoire',
    company: 'Université de Lyon',
    rating: 5,
    text: 'Travailler avec Nadège est un vrai plaisir. Elle est toujours prête à aider et partage volontiers ses connaissances en biochimie et microbiologie.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1770&q=80',
  },
  {
    name: 'Prof. Jean Morel',
    position: 'Professeur de biochimie',
    company: 'Université de Lyon',
    rating: 5,
    text: 'Nadège a réalisé un excellent travail lors de son projet de dosage enzymatique. Sa curiosité et sa précision sont exemplaires.',
    avatar:
      'https://images.unsplash.com/photo-1519340333755-c8e1f1a3a7e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Julie Bernard',
    position: 'Doctorante',
    company: 'Laboratoire BioTech',
    rating: 5,
    text: 'Toujours souriante et motivée, Nadège apporte une belle énergie au laboratoire. Son aide sur les manipulations de PCR a été précieuse.',
    avatar:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Alain Petit',
    position: 'Chercheur associé',
    company: 'Institut Pasteur',
    rating: 5,
    text: "J'ai été impressionné par la capacité de Nadège à analyser des données complexes et à présenter ses résultats de façon claire et professionnelle.",
    avatar:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
  },
]
</script>

<template>
  <section id="testimonials" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10 text-indigo-700">Témoignages</h2>
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li v-for="(testimonial, index) in testimonials" :key="index" class="glide__slide">
              <div class="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                <img
                  :src="testimonial.avatar"
                  alt="Photo de {{testimonial.name}}"
                  class="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <h3 class="text-xl font-semibold text-indigo-600">{{ testimonial.name }}</h3>
                <p class="text-sm text-gray-500 mb-2">
                  {{ testimonial.position }} — {{ testimonial.company }}
                </p>
                <div class="flex items-center justify-center mb-2">
                  <span
                    v-for="star in testimonial.rating"
                    :key="star"
                    class="text-yellow-400 text-lg"
                    >★</span
                  >
                </div>
                <p class="text-gray-700 italic">"{{ testimonial.text }}"</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex justify-center mt-6 space-x-4">
          <button
            class="glide__arrow glide__arrow--left bg-white p-3 rounded-full shadow-md hover:bg-indigo-50 transition-colors duration-300"
            data-glide-dir="<"
          >
            <svg
              class="w-5 h-5 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            class="glide__arrow glide__arrow--right bg-white p-3 rounded-full shadow-md hover:bg-indigo-50 transition-colors duration-300"
            data-glide-dir=">"
          >
            <svg
              class="w-5 h-5 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="glide__bullets flex justify-center mt-6 space-x-2"
          data-glide-el="controls[nav]"
        >
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="glide__bullet w-2 h-2 rounded-full bg-gray-300"
            :data-glide-dir="`=${index}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

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
