<template>
  <transition name="modal">
    <div
      v-if="show"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          @click="$emit('close')"
        ></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 class="text-2xl leading-6 font-medium text-gray-900 mb-2" id="modal-title">
                  {{ project.title }}
                </h3>

                <div class="mt-4 mb-6">
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div class="mb-6">
                  <h4 class="text-lg font-medium text-gray-800 mb-2">Description</h4>
                  <p class="text-gray-600">{{ project.details }}</p>
                </div>

                <div class="mb-6">
                  <h4 class="text-lg font-medium text-gray-800 mb-2">Technologies utilisées</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(tech, index) in project.technologies"
                      :key="index"
                      class="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="flex justify-between items-center mt-8">
                  <a
                    :href="project.link"
                    target="_blank"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    Voir le projet
                  </a>

                  <button
                    type="button"
                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                    @click="$emit('close')"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineOptions({ name: 'Modal' })
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object,
    default: () => ({}),
  },
})
const emit = defineEmits(['close'])
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
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
