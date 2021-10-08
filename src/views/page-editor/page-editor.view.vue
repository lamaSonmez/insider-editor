<template>
  <div class="container-fluid mt-3">
    <div class="col-12">
      <div class="d-flex justify-content-end w-100">
        <div class="select-container ms-3">
          <select class="form-control" id="templatesHistory">
            <option :value="item.id" v-for="item in templates " :key="item.id">{{ item.name }}</option>
          </select>
        </div>
        <button class="btn btn-success ms-3" data-toggle="modal" data-target="#saveTemplate">Save</button>
      </div>
    </div>
    <previewComponent></previewComponent>
    <editorComponent></editorComponent>
  </div>
</template>

<script src="./page-editor.view.js"></script>