import LoginView from '../views/login/index.vue'
import HomeView from '../views/home/index.vue'
import NotFoundView from '../views/404/index.vue'
import IndexIcon from '@/components/icons/IndexIcon.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页',
      icon: IndexIcon,
      hidden: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: '登录',
      icon: null,
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*', // 使用 catch-all 路由来匹配所有未定义的路径
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: '404页面',
      icon: null,
      hidden: true,
    },
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('../views/document/index.vue'),
    meta: {
      title: '文档',
      icon: null,
      hidden: false,
    },
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/movie/index.vue'),
    meta: {
      title: '视频',
      icon: null,
      hidden: false,
    },
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/music/index.vue'),
    meta: {
      title: '音乐',
      icon: null,
      hidden: false,
    },
  },
  {
    path: '/picture',
    name: 'picture',
    component: () => import('../views/picture/index.vue'),
    meta: {
      title: '图片',
      icon: null,
      hidden: false,
    },
  },
]

export default routes
