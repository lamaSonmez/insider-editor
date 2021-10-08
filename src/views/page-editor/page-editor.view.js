import editorComponent from "@/components/editor/editor.component.vue"
import previewComponent from "@/components/preview/preview.component.vue"
import { mapGetters, mapActions } from 'vuex'
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
            current_template: constants.pageConstants.GET__CURRENT_TEMPLATE,
        })
       
    },
      methods:{
      ...mapActions({
          getTemplates:constants.pageConstants.FETCH_TEMPLATES
      })
    },
    mounted(){
        this.getTemplates();
    },

 
}