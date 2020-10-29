import Vue from 'vue'
import VueRouter from 'vue-router'
import { customRoutes } from './routes';

Vue.use(VueRouter)

const routes = customRoutes;

const router = new VueRouter({
  routes
})

export default router
