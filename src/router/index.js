import { createRouter, createWebHistory } from 'vue-router'

import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HeroSection },
    { path: '/about', name: 'about', component: AboutSection },
    { path: '/skills', name: 'skills', component: SkillsSection },
    { path: '/experience', name: 'experience', component: ExperienceSection },
    { path: '/education', name: 'education', component: EducationSection },
    { path: '/portfolio', name: 'portfolio', component: PortfolioSection },
    { path: '/testimonials', name: 'testimonials', component: TestimonialsSection },
    { path: '/contact', name: 'contact', component: ContactSection },
  ],
})

export default router
