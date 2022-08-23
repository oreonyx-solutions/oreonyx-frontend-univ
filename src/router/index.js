import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import HomeView from '../views/HomeView.vue'
import AgendaView from '../views/AgendaView.vue'
import BlogView from '../views/BlogView.vue'
import CommunicationsView from '../views/CommunicationsView.vue'
import FacultiesView from '../views/FacultiesView.vue'
import GroupsView from '../views/GroupsView.vue'
import MembersView from '../views/MembersView.vue'
import SubscriptionView from '../views/SubscriptionView.vue'
import StatisticsView from '../views/StatisticsView.vue'
import SchoolyearView from '../views/SchoolyearView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPasswordView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: AgendaView,
  }
  ,
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
  }
  ,
  {
    path: '/communications',
    name: 'communications',
    component: CommunicationsView,
  },
  {
    path: '/faculties',
    name: 'faculties',
    component: FacultiesView,
  },
  {
    path: '/groups',
    name: 'groups',
    component: GroupsView,
  },
  {
    path: '/members',
    name: 'members',
    component: MembersView,
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: SubscriptionView,
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: StatisticsView,
  },
  {
    path: '/schoolyear',
    name: 'schoolyear',
    component: SchoolyearView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
