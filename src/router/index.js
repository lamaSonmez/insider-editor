import { createRouter, createWebHistory } from 'vue-router'
import pageEditorView from '../views/page-editor/page-editor.view'



const history = createWebHistory()



const router = createRouter({
    history,
    routes: [
        {
            path:'/',
            name:'PageEditor',
            component:pageEditorView
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})





export default router;