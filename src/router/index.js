import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/communities',
      name: 'communities',
      component: () => import('../views/CommunitiesView.vue'),
    },
    {
      path: '/pixel-strike-force',
      name: 'pixel-strike-force',
      component: () => import('../views/PixelStrikeForceView.vue'),
    },
    {
      path: '/instinct-bits-lab',
      name: 'instinct-bits-lab',
      component: () => import('../views/InstinctBitsLabView.vue'),
    },
  ],
})

const SITE = 'https://instinctbits.com'
const titles = {
  home: 'Instinct Bits–Where Passion Meets Innovation',
  about: 'About | Instinct Bits',
  communities: 'Communities | Instinct Bits',
  'pixel-strike-force': 'Pixel Strike Force | Instinct Bits',
  'instinct-bits-lab': 'Instinct Bits Lab | Instinct Bits',
}

function setAttr(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

router.afterEach((to) => {
  const title = titles[to.name] || titles.home
  const url = SITE + (to.path === '/' ? '/' : to.path)
  document.title = title
  setAttr('link[rel="canonical"]', 'href', url)
  setAttr('meta[property="og:url"]', 'content', url)
  setAttr('meta[property="og:title"]', 'content', title)
  setAttr('meta[name="twitter:title"]', 'content', title)
})

export default router
