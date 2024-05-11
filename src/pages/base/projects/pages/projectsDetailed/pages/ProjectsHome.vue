<script setup lang="ts">
import BarChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/BarChart.vue";
import {ref} from "vue";
import DoughnutChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/DoughnutChart.vue";
import LineChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/LineChart.vue";
import PageContainer from '@/components/PageContainer.vue';

const courses = ref(["Primer año", "Segundo año", "Tercer año", "Cuarto año"])
const selectedCourse = ref(courses.value[0]);

</script>

<template>
<PageContainer>
  <div class=" w-full flex flex-col gap-4">
    <div>
      <h1 class="text-3xl font-semibold">Home</h1>
    </div>
    <div>
      <select v-model="selectedCourse" class="bg-gray-100 text-gray-700 border-none rounded-md px-3 py-2 focus:outline-none">
        <option v-for="course in courses" :value="course">{{ course }}</option>
      </select>
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-5">
    <div class="flex flex-col bg-gray-100 p-2 rounded-3xl h-full w-full">
      <h1 class="text-center text-gray-500">Issues per subjects</h1>
      <BarChart></BarChart>
    </div>
    <div class="flex flex-col bg-gray-100 p-2 rounded-3xl h-full w-full">
      <h1 class="text-center text-gray-500">Issues durante el curso 2023-2024</h1>
      <DoughnutChart></DoughnutChart>
      </div>
      <div class="flex flex-col bg-gray-100 p-2 rounded-3xl h-full w-full">
        <h1 class="text-center text-gray-500">Issues durante el curso 2023-2024</h1>
        <DoughnutChart></DoughnutChart>
      </div>
      <div class="flex flex-col bg-gray-100 p-2 rounded-3xl h-full w-full">
        <h1 class="text-center text-gray-500">Issues per month</h1>
        <LineChart></LineChart>
      </div>
    </div>
  </div>
</PageContainer>
</template>