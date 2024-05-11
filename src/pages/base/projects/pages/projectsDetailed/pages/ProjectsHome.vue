<script setup lang="ts">
import BarChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/BarChart.vue";
import DoughnutChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/DoughnutChart.vue";
import LineChart from "@/pages/base/projects/pages/projectsDetailed/pages/components/LineChart.vue";
import PageContainer from '@/components/PageContainer.vue';
import {useRoute} from "vue-router";
import {useQuery} from "@tanstack/vue-query";
import {getOrganizationById, OrganizationReadModel} from "@/api/organizations.ts";

const route = useRoute()
const id = route.params["id"] as string

const { data, isSuccess } = useQuery<OrganizationReadModel>({
  queryKey: ["organizations", id],
  queryFn: () => getOrganizationById(id),
});
</script>

<template>
<PageContainer>

<div class=" w-full flex flex-col gap-4">
  <div>
    <h1 class="text-3xl font-semibold">Welcome back again</h1>
    <h3 class="text-xl text-gray-500 mt-2 mb-5">This is the summary of your activity</h3>
  </div>
  <div class="bg-red-500/10 p-8 rounded-xl text-white">
    <p class="text-red-500 font-semibold">This is the link to your organization landing page</p>
    <p class="text-red-500 mb-4">Share this link to your students to login into your organizations</p>
    <div class="w-full">
      <div class="relative">
        <label for="npm-install-copy-text" class="sr-only">Label</label>
        <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" :value="'http//localhost:4731/organizations/' + data?.id" disabled readonly>
        <button data-copy-to-clipboard-target="npm-install-copy-text" class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            <span id="default-message" class="inline-flex items-center">
                <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
                <span class="text-xs font-semibold">Copy</span>
            </span>
          <span id="success-message" class="hidden inline-flex items-center">
                <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
            </span>
        </button>
      </div>
    </div>
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