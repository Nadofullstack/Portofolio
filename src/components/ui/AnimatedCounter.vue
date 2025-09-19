<template>
  <span>{{ animatedValue }}</span>
</template>

<script>
export default {
  name: 'AnimatedCounter',
  props: {
    value: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      animatedValue: 0
    }
  },
  mounted() {
    this.animateValue()
  },
  methods: {
    animateValue() {
      let start = 0
      const end = this.value
      const range = end - start
      const increment = end > start ? 1 : -1
      const stepTime = Math.abs(Math.floor(this.duration / range))
      
      const timer = setInterval(() => {
        start += increment
        this.animatedValue = start
        if (start === end) {
          clearInterval(timer)
        }
      }, stepTime)
    }
  }
}
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