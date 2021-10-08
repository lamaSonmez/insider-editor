<template>
<div class="modal"  id="EditorForm" v-if="current_template">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Save Template</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <div class="conteainer">
                <div class="row">
                    <div class="col-12">
                       <div class="mb-3">
                            <label for="template" class="form-label">Template Name</label>
                            <input type="text" class="form-control" id="template" placeholder="enter name" v-model="current_template.name" >
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="saveTemplate()">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script src="./editor-form.component.js"></script>