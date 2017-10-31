import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const HOME = () => import('../pages/home.vue')
const LOGIN = () => import('../pages/login.vue')
const USER = () => import('../pages/user.vue')

var router = new vueRouter(
{
 routes: 
 [
{
 path: '/home', 
 component: HOME}, 
{
 path: '/login', 
 component: LOGIN}, 
{
 path: '/user', 
 component: USER}
] 
}
)

export default router