import editorComponent from "@/components/editor/editor.component.vue"
import previewComponent from "@/components/preview/preview.component.vue"
import { mapGetters } from 'vuex'
import constants from '@/store/const'


export default {
    name:'PageEditor',
    data() {
        return {
           
        }
    },
    components:{
        editorComponent,
        previewComponent
    },

    computed: {
        ...mapGetters({
            templates:constants.pageConstants.GET_TEMPLATES,
            current_template: constants.pageConstants.GET_CURRENT_TEMPLATE,
        })
       
    },
      methods:{
      
    },
    mounted(){
    },

 
}