<script setup lang="ts">
import { useField } from 'vee-validate';

// Define props
const { label, name } = defineProps<{
  label: string;
  name: string
}>();

// Color options
const colors = ['#ef4444', '#f97316', '#10b981', '#0284c7', '#9d1cff', '#ff219b'];

// Field setup with vee-validate
const { value, errorMessage, setTouched } = useField(name, (value: string) => {
  if (!value || !colors.includes(value)) {
    return 'Please select a valid color';
  }
  return true;
});

// Function to set the selected color
const selectColor = (color: string) => {
  value.value = color;
  setTouched(true);
};
</script>

<template>
  <label class="font-semibold text-gray-500 ">{{ label }}</label>
  <div class="relative cursor-pointer gap-4 flex justify-start mt-3">
    <div  v-for="color in colors" class="relative cursor-pointer gap-4 flex justify-start mt-3 group">
      <div
          :key="color"
          @click="selectColor(color)"
          :class="[
          'w-8 h-8 text-gray-600 transition-all rounded-full block',
          value === color ? 'scale-[1]' : 'scale-50 group-hover:scale-[0.8]'
        ]"
          :style="`background-color: ${color}`"
      ></div>
    </div>
  </div>
  <!-- Error message display -->
  <span v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</span>
</template>

<style>
.ck-editor__editable {
  min-height: 250px !important;
}
</style>
