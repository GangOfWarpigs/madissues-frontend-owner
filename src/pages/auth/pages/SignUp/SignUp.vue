<script setup lang="ts">
import FormButton from '../../../../components/FormButton.vue';
import Input from '../../../../components/Input.vue';

</script>

<template>
  <div class="w-full h-[100vh] grid grid-cols-3">
    <div class="w-full h-full bg-red-500 col-span-1">

    </div>
    <div class="h-[100vh] flex flex-col justify-center items-center  col-span-2">
      <div class="flex w-full flex-col max-w-[600px] gap-2">
        <div>
          <h1 class="text-3xl font-semibold mb-2">Its time to create your account</h1>
          <h1 class="text-xl  text-gray-500 mb-5">Use your credentials to continue</h1>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <Input placeholder="First name" label="First name"/>
          <Input placeholder="Last name" label="Last name"/>
        </div>
        <Input placeholder="Email" label="Email"/>
        <Input placeholder="Mobile phone" label="phone"/>
        <Input placeholder="password" label="Password"/>
        <FormButton></FormButton>
      </div>
    </div>
  </div>
</template>
