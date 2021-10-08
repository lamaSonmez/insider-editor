import editorComponent from "@/components/editor/editor.component.vue"
import previewComponent from "@/components/preview/preview.component.vue"
import editorFormComponent from "@/components/editor-form/editor-form.component.vue"
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
        previewComponent,
        editorFormComponent
    },

    computed: {
        ...mapGetters({
            templates:constants.pageConstants.GET_TEMPLATES,
            current_template: constants.pageConstants.GET_CURRENT_TEMPLATE,
        })
       
    },
      methods:{
      ...mapActions({
          getTemplates:constants.pageConstants.FETCH_TEMPLATES,
          fetchTemplate:constants.pageConstants.FETCH_TEMPLATE
      }),
      openSaveModal(){
        window.jQuery('#EditorForm').modal('show');
      },
      onTemplateChange(event){
          console.log('change event',event);
          this.fetchTemplate(event.target.value);
      }
    },
    mounted(){
        this.getTemplates();
    },

 
}