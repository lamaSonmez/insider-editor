import { mapGetters } from 'vuex'
import constants from '@/store/const'

export default {
    name: 'previewComponent',
    computed: {
      ...mapGetters({
          current_template: constants.pageConstants.GET_CURRENT_TEMPLATE,
      })
  },

   
  }