<script setup lang="ts">
import { useField } from 'vee-validate';


const {label, placeholder, name, type, className} = defineProps<{
    label : string,
    placeholder : string
    name: string,
    className : string | null,
  type: string
}>()

const { value, errorMessage } = useField(() => name);

</script>
<template>
    <div>
        <label class="font-semibold text-gray-500 ">{{ label }}</label>
        <input :type="type" v-model="value" class="bg-gray-100 w-full px-4 py-3 rounded-full" :class="className" :placeholder="placeholder">
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>