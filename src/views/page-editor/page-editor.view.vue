<template>
  <div class="container-fluid mt-3">
    <editorFormComponent></editorFormComponent>

    <div class="col-12">
      <div class="d-flex justify-content-end w-100">
        <div class="select-container ms-3">
          <select class="form-select form-select" id="templatesHistory" @change="onTemplateChange($event)">
            <option value="null"></option>
            <option :value="item.id" v-for="item in templates " :key="item.id">{{ item.name }}</option>
          </select>
        </div>
        <button class="btn btn-success ms-3"  @click="openSaveModal()">Save</button>
      </div>
    </div>
    <previewComponent></previewComponent>
    <editorComponent></editorComponent>
  </div>
</template>

<script src="./page-editor.view.js"></script>