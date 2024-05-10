
<template>
  <CreateForm title="Create new teacher" name="Create new teacher">
    <div class="flex flex-col gap-3">
      <div class=" grid-cols-2 grid gap-3">
        <SmallInput name="first_name" class-name="" label="First name" placeholder="Name of the degree" type=""></SmallInput>
        <SmallInput name="last_name" class-name="" label="Last name" placeholder="Name of the degree" type=""></SmallInput>
      </div>
      <SmallInput name="email" class-name="" label="Email" placeholder="teacher email" type=""></SmallInput>
      <SmallInput name="office_link" class-name="" label="Office link" placeholder="office link" type=""></SmallInput>
    </div>
  </CreateForm>
</template>
<script setup lang="ts">
import CreateForm from "@/pages/base/projects/pages/projectsDetailed/pages/CreateForm.vue";
import SmallInput from "@/components/SmallInput.vue";
</script>