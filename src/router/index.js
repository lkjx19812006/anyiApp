import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const HOME = () => import('../pages/home.vue')
const LOGIN = () => import('../pages/login.vue')

var router = new vueRouter(
{
 routes: 
 [
{
 path: '/', 
 redirect: '/login'}, 
{
 path: '/home', 
 component: HOME}, 
{
 path: '/login', 
 component: LOGIN}
] 
}
)

export default router