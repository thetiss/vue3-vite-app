import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import JS from '../components/JS.vue'
import Animation from '../components/Animation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/js',
    name: 'JS',
    component: JS,
  },
  {
    path: '/animation',
    name: 'Animation',
    component: Animation,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router