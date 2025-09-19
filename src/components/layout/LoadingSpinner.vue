<template>
  <div v-if="visible" class="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-300">
    <div class="flex flex-col items-center">
      <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 border-t-indigo-600 animate-spin"></div>
      <p class="text-gray-600">Chargement...</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})
</script>


<style scoped>
.loader {
  border-top-color: #4f46e5;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>