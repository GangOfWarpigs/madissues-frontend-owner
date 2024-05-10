
<template>
  <CreateForm :url="'/organizations/'+id+'/degrees/'" title="Create new degree" name="Create new degree">
    <SmallInput name="name" class-name="" label="Name" placeholder="Name of the degree" type=""></SmallInput>
  </CreateForm>
</template>
<script setup lang="ts">
import CreateForm from "@/pages/base/projects/pages/projectsDetailed/pages/CreateForm.vue";
import SmallInput from "@/components/SmallInput.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const id = route.params["id"] as string
</script>