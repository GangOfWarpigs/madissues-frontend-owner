<script lang="ts" setup>
import {useForm} from "vee-validate";
import InputRichText from "@/components/InputRichText.vue";
import Input from "@/components/Input.vue";

const {} = useForm()

</script>
<template>
  <img class="w-[100px] h-[100px] rounded-full bg-gray-100">
  <h1 class="font-semibold text-3xl mt-5">Delegación de estudiantes ULPGC</h1>
  <div class="mt-5 p-8 bg-gray-100 rounded-2xl">
    <h1 class="text-lg font-semibold mb-5">Configura tu cuenta</h1>
    <Input name="name" className="bg-white !p-3 !mb-2" label="name"></Input>
    <Input name="contact_info" className="bg-white !p-3" label="contact information"></Input>
  </div>
  <div class="mt-5 p-8 bg-gray-100 rounded-2xl">
    <h1 class="text-lg font-semibold mb-5">Configura tu página</h1>
    <InputRichText label="" name="description"></InputRichText>
  </div>
  <div class="flex justify-between mt-3">
    <button class="bg-blue-500 p-2 hover:bg-blue-600 cursor-pointer px-12 text-white rounded-xl font-semibold">Guardar</button>

  </div>
</template>