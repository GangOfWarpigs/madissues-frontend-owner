<script setup lang="ts">
import { useRouter } from 'vue-router';
import FormButton from '../../../../components/FormButton.vue';
import Input from '../../../../components/Input.vue';
import {useMutation, } from "@tanstack/vue-query";
import {useForm} from "vee-validate";
import {signUpFn, SignUpRequest} from "../../../../api/owners.ts";

const router = useRouter()

const {handleSubmit} = useForm<SignUpRequest>()

const {mutate, error} = useMutation(
    {
      mutationFn: async (request : SignUpRequest) =>  await signUpFn(request),
      onSuccess(data) {
        localStorage.setItem("token", data.token)
      },
    },
)

const handle = handleSubmit((values) => mutate(values))

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
          <Input name="first_name" placeholder="First name" label="First name"/>
          <Input name="last_name" placeholder="Last name" label="Last name"/>
        </div>
        <Input name="email" placeholder="Email" label="Email"/>
        <Input name="phone_number" placeholder="Mobile phone" label="phone"/>
        <Input name="password" placeholder="password" label="Password"/>
        <Input name="verify_password" placeholder="verify password" label="Verify password"/>
        <FormButton @click="handle">Create account</FormButton>
        <button @click="router.push('signin')" class="mt-3 w-full bg-gray-100 px-4 py-3 rounded-full font-semibold text-gray-600 hover:bg-gray-200">Login</button>
        <p class="text-red-500">{{ error }}</p>
      </div>
    </div>
  </div>
</template>
