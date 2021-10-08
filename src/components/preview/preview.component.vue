<template>
 <div class="w-100 preview-container" id="preview">
                <div class="col-12 text-left h-100"  >
                    <p style="text-align:left"> {{current_template.name}}</p>
                    <div class="preview-section" id="previewContent">
                        <iframe id="iFrame" width="100%" class="iframe"></iframe>
                    </div>
                </div>
            </div>
</template>

<script src="./preview.component.js"></script>
