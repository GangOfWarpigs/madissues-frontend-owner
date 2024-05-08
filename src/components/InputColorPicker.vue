<script setup lang="ts">
const {label, placeholder} = defineProps<{
    label : string,
    placeholder : string
}>();
</script>
<template>
    <label class="font-semibold text-gray-500 ">{{ label }}</label>
    <div class="relative cursor-pointer gap-4 flex justify-start mt-3">
        <div class="w-8 h-8 bg-gray-800 transition-all rounded-full block ring-gray-800 hover:ring-2 ring-2 ring-offset-1 " ></div>
        <div class="w-8 h-8 bg-red-500 transition-all rounded-full block ring-red-500 hover:ring-2 ring-offset-1 " ></div>
        <div class="w-8 h-8 bg-blue-500 transition-all rounded-full block ring-blue-500 hover:ring-2 ring-offset-1 " ></div>
        <div class="w-8 h-8 bg-green-500 transition-all rounded-full block ring-green-500 hover:ring-2 ring-offset-1 " ></div>
        <div class="w-8 h-8  bg-orange-500 transition-all rounded-full block ring-orange-500 hover:ring-2  ring-offset-1 " ></div>
        <div class="w-8 h-8 bg-amber-500 transition-all rounded-full block ring-amber-500 hover:ring-2 ring-offset-1 " ></div>
        <div class="w-8 h-8 bg-yellow-500 transition-all rounded-full block ring-yellow-500 hover:ring-2 ring-offset-1 " ></div>
    </div>
</template>

<style>
  .ck-editor__editable {
    min-height: 250px !important;
   }
</style>