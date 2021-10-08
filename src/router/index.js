import { createRouter, createWebHistory } from 'vue-router'
import PageEditor from '@/views/page-editor/page-editor.view.vue'



const history = createWebHistory()



const router = createRouter({
    history,
    routes: [
        {
            path:'/',
            name:'PageEditor',
            component:PageEditor
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})





export default router;