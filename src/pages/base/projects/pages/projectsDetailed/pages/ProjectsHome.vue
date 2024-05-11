<script setup lang="ts">
import BarChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/BarChart.vue";
import {ref} from "vue";
import DoughnutChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/DoughnutChart.vue";
import LineChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/LineChart.vue";
import PageContainer from '@/components/PageContainer.vue';

const courses = ref(["Primer año", "Segundo año", "Tercer año", "Cuarto año"])
</script>

<template>
<PageContainer>

<div class=" w-full flex flex-col gap-4">
  <div>
    <h1 class="text-3xl font-semibold">Welcome back again</h1>
    <h3 class="text-xl text-gray-500 mt-2 mb-5">This is the summary of your activity</h3>
  </div>
  <div class="grid grid-cols-2 grid-rows-2 gap-5">
  <div class="flex flex-col bg-gray-100 p-9 rounded-3xl h-full w-full">
    <h1 class="text-left text-gray-800 font-semibold">Issues per subjects</h1>
    <BarChart></BarChart>
  </div>
  <div class="flex flex-col bg-gray-100 p-9 rounded-3xl h-full w-full">
    <h1 class="text-left text-gray-800 font-semibold">Issues course 2023-2024</h1>
    <DoughnutChart></DoughnutChart>
    </div>
    <div class="flex flex-col bg-gray-100 p-9 rounded-3xl h-full w-full">
      <h1 class="text-left text-gray-800 font-semibold">Issues durante el curso 2023-2024</h1>
      <DoughnutChart></DoughnutChart>
    </div>
    <div class="flex flex-col bg-gray-100 p-9 rounded-3xl h-full w-full">
      <h1 class="text-left text-gray-800 font-semibold">Issues per month</h1>
      <LineChart></LineChart>
    </div>
  </div>
</div>
</PageContainer>
</template>