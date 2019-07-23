import Vue from 'vue'
import App from './App.vue'
import store from './vuex/index'
import Welcome from './components/Welcome'
import VueRouter from 'vue-router'
import TodoList from "./components/TodoList";
import userProfile from "./components/userProfile";
Vue.config.productionTip = false


Vue.use(VueRouter);
const routes = [
  {path: '/123', name: "123", component: Welcome},
  {path: '/todolist', name: "todolist", component: TodoList},
  {path: '/myprofile', name: "myprofile", component: userProfile}
]


const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
