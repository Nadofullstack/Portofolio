<template>
  <section id="contact" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
        <div class="w-20 h-1 bg-indigo-600 mx-auto"></div>
        <p class="text-gray-400 mt-6 max-w-2xl mx-auto">
          Vous souhaitez collaborer, poser une question sur mes travaux ou en savoir plus sur mon
          parcours scientifique&nbsp;? N’hésitez pas à me contacter via ce formulaire, je vous
          répondrai avec plaisir.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors duration-300"
                  placeholder="Nom"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors duration-300"
                  placeholder="email@exemple.com"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2"
                >Sujet (collaboration, stage, question scientifique...)</label
              >
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors duration-300"
                placeholder="Sujet (ex: collaboration, stage, question scientifique...)"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors duration-300"
                placeholder="Décrivez votre projet, votre question ou votre intérêt scientifique..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
              :class="{ 'opacity-75 cursor-not-allowed': loading }"
            >
              <span v-if="!loading">Envoyer le message</span>
              <span v-else class="flex items-center">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Envoi en cours...
              </span>
            </button>

            <div
              v-if="successMessage"
              class="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
            >
              {{ successMessage }}
            </div>

            <div
              v-if="errorMessage"
              class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
            >
              {{ errorMessage }}
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="lg:pl-12">
          <div class="bg-gray-800 p-8 rounded-lg">
            <h3 class="text-2xl font-semibold mb-6">Coordonnées</h3>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-indigo-600 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-300">Téléphone</h4>
                  <p class="text-gray-400">+33 6 12 34 56 78</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-indigo-600 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-300">Email</h4>
                  <p class="text-gray-400">alexandre@example.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-indigo-600 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-300">Adresse</h4>
                  <p class="text-gray-400">123 Avenue de la République, 75011 Paris, France</p>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-gray-700">
              <h4 class="font-medium text-gray-300 mb-4">Suivez-moi</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

async function submitForm() {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''
  try {
    // Simulation d'envoi de formulaire
    await new Promise((resolve) => setTimeout(resolve, 2000))
    successMessage.value =
      'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    errorMessage.value = "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
  } finally {
    loading.value = false
  }
}
</script>
<style scoped>
/* Styles spécifiques au formulaire de contact */   
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
