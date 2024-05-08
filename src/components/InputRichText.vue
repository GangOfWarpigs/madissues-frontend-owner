<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                    height: 500
                }
            };
        }
    }
</script>
<template>
    <ckeditor height="500px" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
</template>

<style>
  .ck-editor__editable {
    min-height: 250px !important;
   }
</style>