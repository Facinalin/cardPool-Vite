import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import cardComponent from './components/CardComponent.vue'

createApp(App).mount('#app')

const router = VueRouter.createRouter({
   history: VueRouter.createWebHashHistory(),
   routes:[
      {
         path:'/card',
         name: 'card',
         component:cardComponent
      }
   ]
})

createApp(App).use(router)



