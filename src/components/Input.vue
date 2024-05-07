<script setup lang="ts">

const {label, placeholder} = defineProps<{
    label : string,
    placeholder : string
}>()

</script>
<template>
    <div>
        <label class="font-semibold text-gray-500 ">{{ label }}</label>
        <input class="bg-gray-100 w-full px-4 py-3 rounded-full" :placeholder="placeholder">
    </div>
</template>