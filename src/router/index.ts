import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../pages/index'
import Test from '../components/VueJsxTestComponent'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
