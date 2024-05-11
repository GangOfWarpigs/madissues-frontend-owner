<script setup lang="ts">
import ProjectIntegrationCard from './components/ProjectIntegrationCard.vue'
import {useMutation, useQuery} from "@tanstack/vue-query";
import {IntegrateRequest, integrateOrganization, getOrganizationTaskManager} from "@/api/organizations.ts";
import {useForm} from "vee-validate";
import {useRoute} from "vue-router";
import {SelectArrow} from "radix-vue";

const route = useRoute()
const id = route.params["id"]

console.log(id)


const {data, isLoading} = useQuery({
  queryKey: ["organizations", id, "task_manager"],
  queryFn: () => getOrganizationTaskManager(id)
})

console.log(data.value)

</script>

<template>
  <section v-if="data !== null" class="flex justify-center items-center flex-col w-full mt-36">
    <div class="mt-6 text-center" >
      <h1 class="text-gray-800 text-4xl font-semibold">Congrats!</h1>
      <h1 class="text-gray-500 font-semibold text-xl mt-3">You are integrated with Trello</h1>
    </div>
    <div class="max-w-[400px] mt-16 w-full">
      <div class="bg-gray-100 p-8 rounded-xl py-12 hover:bg-gray-200 transition-all cursor-pointer">
        <div class="h-12 w-12 bg-blue-500 rounded-full flex justify-center items-center text-white">
          <vue-icon name="fa-trello" scale="1.5"></vue-icon>
        </div>
        <h1 class="text-xl text-gray-700 font-semibold mt-5 ">
          Trello
        </h1>
        <h2 class="text-md text-gray-500">
          Integrate API with Jira
        </h2>
      </div>
    </div>
    <div class="max-w-[700px] mt-10 text-gray-600">
      <p>The MadIssues app integrates seamlessly with Trello to optimize issue and task management. Here’s what happens when you integrate MadIssues with Trello:</p>
      <ul class="mt-4 flex flex-col gap-4">
        <li><strong>Automatic Issue Creation:</strong> When new issues are detected in MadIssues, they are automatically created as cards on a specific Trello board for the project.</li>
        <li><strong>Real-Time Updates:</strong> As you move cards from one state to another in Trello, the statuses of the issues in MadIssues are automatically updated to reflect these changes.</li>
        <li><strong>Initial Board Setup:</strong> When starting a project, MadIssues automatically sets up a Trello board with the necessary columns and initial settings for the organization.</li>
      </ul>
    </div>
  </section>
  <section v-if="data === null">
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
  </section>
</template>