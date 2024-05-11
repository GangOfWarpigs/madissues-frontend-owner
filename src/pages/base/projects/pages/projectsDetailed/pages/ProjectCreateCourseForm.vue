<script setup lang="ts">
  import CreateForm from "@/pages/base/projects/pages/projectsDetailed/pages/CreateForm.vue";
  import SmallInput from "@/components/SmallInput.vue";
  import InputColorPicker from "@/components/InputColorPicker.vue";
  import InputIconPicker from "@/components/InputIconPicker.vue";
  import { useRoute } from "vue-router";
  import * as yup from "yup";

  const route = useRoute();
  const id = route.params["id"] as string;

  const schema = yup.object({
    name: yup.string().required("Name is required*").min(2, 'At least 2 characters').max(60, 'At most 60 characters'),
    code: yup.string().required("Code is required*").min(2, 'At least 2 characters').max(8, 'At most 8 characters'),
    icon: yup.string().required("Icon is required*").max(60),
    primary_color: yup.string().required("Primary color is required*").matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Must be a valid hex color'),
    secondary_color: yup.string().required("Secondary color is required*").matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Must be a valid hex color'),
  })
</script>

<template>
  <CreateForm title="Add course" name="Add course" :url="'/organizations/'+id+'/courses/'" :formSchema="schema">
    <SmallInput label="Name" placeholder="Write a name..." name="name" type="text" className="mb-4"/>
    <SmallInput label="Code" placeholder="Write the course's code name..." name="code" type="text" className="mb-4"/>
    <div class="mt-5">
      <InputIconPicker label="Icon" name="icon"/>
    </div>
    <div class="mt-5">
      <InputColorPicker label="Primary color" name="primary_color"/>
    </div>
    <div class="mt-5">
      <InputColorPicker label="Secondary color" name="secondary_color"/>
    </div>
  </CreateForm>
</template>