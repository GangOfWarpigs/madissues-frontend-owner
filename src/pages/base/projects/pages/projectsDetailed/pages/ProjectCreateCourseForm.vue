<script setup lang="ts">
  import CreateForm from "@/pages/base/projects/pages/projectsDetailed/pages/CreateForm.vue";
  import SmallInput from "@/components/SmallInput.vue";
  import InputColorPicker from "@/components/InputColorPicker.vue";
  import InputIconPicker from "@/components/InputIconPicker.vue";
</script>

<template>
  <CreateForm title="Add course" name="Add course">
    <SmallInput label="Name" placeholder="Write a name..." name="courseName" type="text" className="mb-4"/>
    <SmallInput label="Code" placeholder="Write the course's code name..." name="courseCode" type="text" className="mb-4"/>
    <InputIconPicker label="Icon" name="courseIcon"/>
    <InputColorPicker label="Primary color" name="courseColor"/>
    <InputColorPicker label="Secondary color" name="courseColor"/>
  </CreateForm>
</template>