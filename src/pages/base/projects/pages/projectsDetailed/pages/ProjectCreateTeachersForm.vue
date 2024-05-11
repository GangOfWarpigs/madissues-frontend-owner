
<template>
  <CreateForm :url="'/organizations/'+id+'/teachers/'" title="Create new teacher" name="Create new teacher" :formSchema="schema">
    <div class="flex flex-col gap-3">
      <div class=" grid-cols-2 grid gap-3">
        <SmallInput name="first_name" class-name="" label="First name" placeholder="First name of the teacher" type=""></SmallInput>
        <SmallInput name="last_name" class-name="" label="Last name" placeholder="Last name of the teacher" type=""></SmallInput>
      </div>
      <SmallInput name="email" class-name="" label="Email" placeholder="teacher email" type=""></SmallInput>
      <SmallInput name="office_link" class-name="" label="Office link" placeholder="office link" type=""></SmallInput>
    </div>
  </CreateForm>
</template>
<script setup lang="ts">
import CreateForm from "@/pages/base/projects/pages/projectsDetailed/pages/CreateForm.vue";
import SmallInput from "@/components/SmallInput.vue";
import {useRoute} from "vue-router";
import * as yup from "yup";

const route = useRoute()
const id = route.params["id"] as string

const schema = yup.object({
  first_name: yup.string().required("First name is required*"),
  last_name: yup.string().required("Last name is required*"),
  email: yup.string().required("Email is required*").email("Invalid email address"),
  office_link: yup.string().required("Office link is required*"),
})

</script>