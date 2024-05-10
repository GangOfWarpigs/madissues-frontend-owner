<script setup lang="ts">
  import CreateForm from "@/pages/base/projects/pages/projectsDetailed/pages/CreateForm.vue";
  import SmallInput from "@/components/SmallInput.vue";
  import InputColorPicker from "@/components/InputColorPicker.vue";
  import InputIconPicker from "@/components/InputIconPicker.vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const id = route.params["id"] as string;
</script>

<template>
  <CreateForm title="Add course" name="Add course" :url="'/organizations/'+id+'/courses/'">
    <SmallInput label="Name" placeholder="Write a name..." name="name" type="text" className="mb-4"/>
    <SmallInput label="Code" placeholder="Write the course's code name..." name="code" type="text" className="mb-4"/>
    <InputIconPicker label="Icon" name="icon"/>
    <InputColorPicker label="Primary color" name="primary_color"/>
    <InputColorPicker label="Secondary color" name="secondary_color"/>
  </CreateForm>
</template>