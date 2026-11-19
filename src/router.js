import { createRouter, createWebHistory } from 'vue-router'
import { company } from './data/site'

const routes = [
  { path: '/', component: () => import('./views/Home.vue'), meta: { title: '首页' } },
  { path: '/about', component: () => import('./views/About.vue'), meta: { title: '关于我们' } },
  { path: '/services', component: () => import('./views/Services.vue'), meta: { title: '服务领域' } },
  { path: '/services/:id', component: () => import('./views/ServiceDetail.vue'), meta: { dynamic: true } },
  { path: '/insights', component: () => import('./views/Insights.vue'), meta: { title: '行业洞察' } },
  { path: '/insights/:id', component: () => import('./views/InsightDetail.vue'), meta: { dynamic: true } },
  { path: '/contact', component: () => import('./views/Contact.vue'), meta: { title: '联系我们' } },
  { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue'), meta: { title: '页面未找到' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (!to.meta.dynamic) {
    document.title = to.meta.title ? `${to.meta.title} | ${company.short}` : `${company.short} | 企业管理咨询`
  }
})

export default router