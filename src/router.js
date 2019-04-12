import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: () => import('./views/WebSite/Home.vue'),
      children: [
        {
          path: '',
          name: 'content',
          component: () => import('./views/WebSite/Content.vue'),
          default: true
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('./views/WebSite/About.vue')
        },
        {
          path: 'property',
          name: 'property',
          component: () => import('./components/shared/properties/DetailsPropertyHome.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin/Dashboard.vue'),
      children: [
        {
          path: 'customers',
          name: 'customers',
          component: () => import('./views/Admin/Customers.vue'),
          default: true
        },
        {
          path: 'properties',
          name: 'properties',
          component: () => import('./views/Admin/Properties.vue')
        }
      ]
    },
  ]
})
