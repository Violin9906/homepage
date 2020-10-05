import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/astronomy',
      name: 'astronomy',
      component: () => import(/* webpackChunkName: "astronomy" */ './views/Astronomy.vue')
    },
    {
      path: '/lab',
      name: 'lab',
      component: () => import(/* webpackChunkName: "lab" */ './views/Lab.vue')
    },
    {
      path: '/ta',
      name: 'ta',
      component: () => import(/* webpackChunkName: "ta" */ './views/TA/TA.vue'),
      children: [
        {
          path: 'c',
          component: () => import(/* webpackChunkName: "c" */ './views/TA/C.vue')
        },
        {
          path: 'actuator',
          component: () => import(/* webpackChunkName: "Actuator" */ './views/TA/Actuator.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
