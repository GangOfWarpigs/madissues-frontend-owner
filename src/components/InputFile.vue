<script setup lang="ts">
import { ref } from "vue";
import { useField } from "vee-validate";

// Props
const { label, name } = defineProps<{
  label: string;
  name: string;
}>();

// Vee-validate field
const { value, errorMessage, setValue } = useField(() => name);

// Ref to store base64 value (image source)
// Function to handle file change and convert to base64
const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setValue(e.target?.result as string)
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = () => {
  setValue(null)
};
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full">
    <label
        v-if="!value"
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
        >
          <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5A5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span class="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <input
          id="dropzone-file"
          type="file"
          class="hidden"
          accept=".svg,.png,.jpg,.gif"
          @change="handleFileChange"
      />
    </label>

    <!-- Preview Uploaded Image -->
    <div v-else class="flex flex-col items-center relative">
      <img :src="value" alt="Preview" class="max-h-64 mb-4 rounded-lg" />
      <button
          @click="removeImage"
          class="absolute mt-[-20px] mr-[-20px] rounded-full right-0 top-0 bg-red-500 w-[40px] h-[40px] text-white shadow-2xl hover:bg-red-600"
      >
        <vue-icon name="io-close" scale="1"></vue-icon>
      </button>
    </div>

    <!-- Display Error Messages -->
    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
  </div>
</template>
