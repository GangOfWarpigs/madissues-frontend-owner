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