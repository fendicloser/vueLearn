import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import newValue from './views/newVue.vue'
import goodsSelection from './views/goodsSelection'
import laptop from './components/goods/laptop'
import phone from './components/goods/phone'
import watch from './components/goods/watch'
import shoes from './components/goods/shoes'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/goodSelection',
      name:'goodsSelection',
      component:goodsSelection,
      children:[
        {
          path:'/goodSelection/shoes',
          name:'shoes',
          component:shoes
        },
        {
          path:'/goodSelection/laptop',
          name:'laptop',
          component:laptop,
        },
        {
          path:'/goodSelection/phone',
          name:'phone',
          component:phone
        },
        {
          path:'/goodSelection/watch',
          name:'watch',
          component:watch
        },

      ]
    },
    {
      path:'/new',
      name:'newValue',
      component:newValue
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
