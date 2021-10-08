import Split from 'split.js'
import Highlight from 'highlight.js';
import { mapGetters  } from 'vuex'
import constants from '@/store/const'

export default  {
    name: 'editorComponent',
    data() {
        return {
            isHidden:false
        }
    },
    computed: {
        ...mapGetters({
            templates:constants.pageConstants.GET_TEMPLATES,
            current_template: constants.pageConstants.GET_CURRENT_TEMPLATE,
        })
},
    methods:{
        render(){
            const getEl = id => document.getElementById(id)
            const iFrame = getEl('iFrame').contentWindow.document;

            if(iFrame){
                iFrame.open()
                iFrame.writeln(
                    this.current_template.html +
                    '<style>' +
                    this.current_template.css +
                    '</style>' +
                    '<script>' +
                    this.current_template.js +
                    '</script>'
                )
                iFrame.close()
            }
           
        },
        initializeEditors(){
            let htmlDiv = document.getElementById("htmlTextarea")  
            let cssDiv = document.getElementById("cssTextarea")  
            let jsDiv = document.getElementById("jsTextarea")  
                     
            Highlight.highlightBlock(htmlDiv,{language: 'html'})
            Highlight.highlightBlock(cssDiv,{language: 'css'})
            Highlight.highlightBlock(jsDiv,{language: 'jsavascript'})
        },
        editTemplate(){
            this.$store.dispatch(constants.pageConstants.STORE_TEMPLATE,this.current_template);
        },
        toggleEditor(){
            const editor = document.getElementById("editor");
            const preview = document.getElementById("preview");
            editor.classList.toggle('hide');
            if(!this.isHidden){
                preview.style.height="96vh";
            }
            else{
                preview.style.height="calc(100% - 300px)"
            }
            this.isHidden = !this.isHidden;
        }
        
    },
    watch:{
        current_template:function(newVal){
            if(newVal){
              this.render();
            }
        }
    },
    mounted(){
        Split(['#split-0', '#split-1', '#split-2']);
        if(this.current_template){
            this.render();
            this.initializeEditors();
        }
    }
   
}