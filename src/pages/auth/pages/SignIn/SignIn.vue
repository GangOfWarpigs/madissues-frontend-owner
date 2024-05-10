<script setup lang="ts">
import { useRouter } from 'vue-router';
import FormButton from '../../../../components/FormButton.vue';
import Input from '../../../../components/Input.vue';
import {useMutation, } from "@tanstack/vue-query";
import {useForm} from "vee-validate";
import {signInFn} from "../../../../api/owners.ts";
import * as yup from "yup";

const router = useRouter()


const {mutate, error} = useMutation(
    {
      mutationFn: async (request : {email : string, password: string}) =>  await signInFn(request),
      onMutate() {
          resetForm()
      },
      onSuccess(data) {
          localStorage.setItem("token", data.token)
        router.push("/app/projects/")
      },
    }
)

const schema = yup.object({
  email: yup.string().required("Email is required*").email("Invalid email address"),
  password : yup
      .string()
      .required("Password is required*")
      .matches(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
          'Password must contain at least one uppercase letter, one number and must be at least 8 characters'
      ),
})

const {resetForm, handleSubmit} = useForm<{email : string, password : string}>({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  }
})

const handle = handleSubmit((values) => mutate(values))

</script>

<template>
  <div class="w-full h-[100vh] grid grid-cols-2">
    <div class="h-[100vh] flex flex-col justify-center items-center ">
      <div class="flex w-full flex-col max-w-[500px] gap-2">
        <div>
          <h1 class="text-3xl font-semibold mb-2">Welcome again</h1>
          <h1 class="text-xl  text-gray-500 mb-5">Use your credentials to continue</h1>
        </div>

        <Input name="email" placeholder="Email" label="Email"/>
        <Input type="password" name="password" placeholder="password" label="Password"/>
        <FormButton @click="handle">SignIn</FormButton>
        <button @click="router.replace('/auth/signup')" class="mt-3 w-full bg-gray-100 px-4 py-3 rounded-full font-semibold text-gray-600 hover:bg-gray-200">Create an account</button>
        <p class="text-red-500">{{ error }}</p>
      </div>
    </div>
    <div class="w-full h-full bg-red-500 ">

    </div>
  </div>
</template>
