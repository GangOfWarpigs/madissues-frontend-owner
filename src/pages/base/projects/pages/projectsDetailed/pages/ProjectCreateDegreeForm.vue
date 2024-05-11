
<template>
  <CreateForm :url="'/organizations/'+id+'/degrees/'" title="Create new degree" name="Create new degree" :formSchema="schema">
    <SmallInput name="name" class-name="" label="Name" placeholder="Name of the degree" type=""></SmallInput>
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
  name: yup.string().required("Name is required*"),
})
</script>