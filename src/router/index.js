import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CaseHome from '@/components/case/CaseHome.vue'
import QuoteHome from '@/components/quote/QuoteHome'
import QuoteDetails from '@/components/quote/Details.vue'
import Details from '@/components/Details'
import Category from '@/components/category/Category'
import CategoryDetails from '@/components/category/Details'
import Inquiry from '@/components/category/Inquiry'
import SelectType from '@/components/SelectType.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/CaseHome',
      name: 'CaseHome',
      component: CaseHome
    },
    {
      path: '/QuoteHome',
      name: 'QuoteHome',
      component: QuoteHome
    },
    {
      path: '/QuoteDetails',
      name: 'QuoteDetails',
      component: QuoteDetails
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/CategoryDetails',
      name: 'CategoryDetails',
      component: CategoryDetails
    },
    {
      path: '/Inquiry',
      name: 'Inquiry',
      component: Inquiry
    },
    {
      path: '/SelectType',
      name: 'SelectType',
      component: SelectType
    }

  ]
})
