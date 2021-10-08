<template>
    <div class="row editor" >
                <div class="col-12">
                    <div class="d-flex tools-section justify-content-end">
                        <button class="btn btn-link ms-2" onclick="toggleslide()" >minimize</button>
                        <span class="mr-2"> | </span>
                        <button class="btn btn-link ms-2" @click="render()" >Run</button>
                    </div>
                </div>
               <div class="col-12" id="editor">
                <div class="split" v-if="current_template">
                    <div id="split-0" class="split-section" style="background-color: black;">
                        <div id="htmlArea">
                            <textarea  id="htmlTextarea" v-model="current_template.html" @change="editTemplate()"></textarea>
                        </div>
                    </div>
                    <div id="split-1" class="split-section" style="background-color: white;">
                        <div id="htmlArea">
                            <textarea  id="cssTextarea" v-model="current_template.css"></textarea>
                        </div>
                    </div>
                    <div id="split-2" class="split-section" style="background-color: gray;">
                        <div id="htmlArea">
                            <textarea id="jsTextarea" v-model="current_template.js"> </textarea>
                        </div>
                    </div>
                </div>
               </div>
            </div>
</template>

<script src="./editor.component.js"></script>