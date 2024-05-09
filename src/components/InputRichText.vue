<template>
  <label class="font-semibold text-gray-500 ">{{ label }}</label>
  <ckeditor
      :editor="editor"
      v-model="value"
      :config="editorConfig"
      @input="$emit('input', value)"
  ></ckeditor>
  <span v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useField } from 'vee-validate';

const { name, label } = defineProps<{
  name: string;
  label: string;
}>();

const editor = ClassicEditor;

const editorConfig = {
  // Editor configuration can be added here
 
  height: 500
};

const { value, errorMessage } = useField(name);
</script>

<style>
.ck-editor__editable {
  min-height: 250px !important;
}
</style>
