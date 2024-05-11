<script setup lang="ts">
import ProjectIntegrationCard from './components/ProjectIntegrationCard.vue'

</script>

<template>
  <div >
    <h1 class="text-gray-800 text-2xl w-full justify-center font-semibold mt-10">
    Integrate your organization
    </h1>
    <h3 class="text-gray-500 mt-3">
      Do you want a task manager service such us Trello, Jira etc. to syncronize with your organization?<br> Easy
      Just click in your service put your api key and start rocking.
    </h3>

  </div>
  <div class="grid grid-cols-3 mt-10 gap-4">
    <ProjectIntegrationCard></ProjectIntegrationCard>
    <div class="bg-gray-100 p-8 rounded-xl py-8 hover:bg-gray-200 transition-all cursor-pointer">
      <div class="h-12 w-12 bg-blue-500 rounded-full flex justify-center items-center text-white">
        <vue-icon name="fa-jira" scale="1.5"></vue-icon>
      </div>
      <h1 class="text-xl text-gray-700 font-semibold mt-5 ">
        Jira
      </h1>
      <h2 class="text-md text-gray-500">
        Integrate API with Jira
      </h2>
    </div>
    <div class="bg-gray-100 p-8 rounded-xl py-8 hover:bg-gray-200 transition-all cursor-pointer">
      <div class="h-12 w-12 bg-gray-800 rounded-full flex justify-center items-center text-white">
        <vue-icon name="co-notion" scale="1.5" class="text-white"></vue-icon>
      </div>
      <h1 class="text-xl text-gray-700 font-semibold mt-5 ">
        Notion
      </h1>
      <h2 class="text-md text-gray-500">
        Integrate API with trello
      </h2>
    </div>
    <div class="bg-gray-100 p-8 rounded-xl py-8 hover:bg-gray-200 transition-all cursor-pointer">
      <div class="h-12 w-12 bg-red-500 rounded-full flex justify-center items-center text-white">
        <vue-icon name="co-asana" scale="1.5" class="text-white"></vue-icon>
      </div>
      <h1 class="text-xl text-gray-700 font-semibold mt-5 ">
        Asana
      </h1>
      <h2 class="text-md text-gray-500">
        Integrate API with trello
      </h2>
    </div>
  </div>
</template>