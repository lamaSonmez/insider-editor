import { mapGetters } from 'vuex'
import constants from '@/store/const'

export default {
    name:'editorFormComponent',
    computed: {
        ...mapGetters({
            templates:constants.pageConstants.GET_TEMPLATES,
            current_template: constants.pageConstants.GET_CURRENT_TEMPLATE,
        })
    },
    methods:{
        saveTemplate(){
            this.$store.dispatch(constants.pageConstants.STORE_TEMPLATE,this.current_template);
            window.jQuery('#EditorForm').modal('hide');

        }
    }
    
}