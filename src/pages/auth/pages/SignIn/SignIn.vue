<script setup lang="ts">
import FormButton from '../../../../components/FormButton.vue';
import Input from '../../../../components/Input.vue';

</script>

<template>
  <div class="w-full h-[100vh] grid grid-cols-2">
    <div class="h-[100vh] flex flex-col justify-center items-center ">
      <div class="flex w-full flex-col max-w-[500px] gap-2">
        <div>
          <h1 class="text-3xl font-semibold mb-2">Welcome again</h1>
          <h1 class="text-xl  text-gray-500 mb-5">Use your credentials to continue</h1>
        </div>
        
        <Input placeholder="Email" label="Email"/>
        <Input placeholder="password" label="Password"/>
        <FormButton></FormButton>
      </div>
    </div>
    <div class="w-full h-full bg-red-500 ">

    </div>
  </div>
</template>
