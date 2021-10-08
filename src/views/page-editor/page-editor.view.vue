<template>
  <div class="container-fluid mt-3">
    <div class="col-12">
      <div class="d-flex justify-content-end w-100">
        <div class="select-container mr-3">
          <select class="form-control" id="templatesHistory">
            <option value="1">Template 1</option>
            <option value="2">Template 2</option>
            <option value="3">Template 3</option>
          </select>
        </div>
        <button class="btn btn-success" data-toggle="modal" data-target="#saveTemplate">Save</button>
      </div>
    </div>
    <previewComponent></previewComponent>
    <editorComponent></editorComponent>
  </div>
</template>

<script src="./page-editor.view.js"></script>