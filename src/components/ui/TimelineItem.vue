<template>
  <div class="flex">
    <div class="flex flex-col items-center mr-4">
      <div>
        <div
          class="flex items-center justify-center w-10 h-10 border rounded-full bg-indigo-50 text-indigo-600 border-indigo-600"
        >
          <slot name="icon"></slot>
        </div>
      </div>
      <div class="w-px h-full bg-indigo-200"></div>
    </div>
    <div class="pt-1 pb-8">
      <p class="mb-2 text-lg font-bold text-gray-800"><slot name="title"></slot></p>
      <p class="text-gray-600"><slot name="content"></slot></p>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'TimelineItem' })
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
