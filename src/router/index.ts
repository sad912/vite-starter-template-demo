import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../pages/index'
import Button from '../components/Button'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/Button',
    name: 'Button',
    component: Button
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
