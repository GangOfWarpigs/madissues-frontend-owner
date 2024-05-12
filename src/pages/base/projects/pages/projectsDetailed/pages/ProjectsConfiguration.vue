<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  
  const currentRoute: string = useRoute().fullPath;
  const splittedRoute: string[] = currentRoute.split('/');
  splittedRoute.pop();
</script>
<template>
  <div class="w-full min-h-screen flex pl-[300px]">
    <div class="w-[320px] border-r-2 py-10 px-5 h-screen fixed">
      <nav class="w-full flex flex-col">
        <ul class="w-full flex flex-col space-y-5 text-md">
          <h1 class="text-lg font-semibold text-gray-700">Configuration</h1>
          <li class="flex">
            <router-link 
              :to="{ name: 'organization_settings'}" 
              active-class="!bg-gray-100" 
              class="px-3 py-2 w-full hover:bg-gray-200 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-600"
              replace>
              Organization Settings
            </router-link>
          </li>
          <li class="flex">
            <router-link 
              :to="{ name: 'integrations'}" 
              active-class="!bg-gray-100" 
              class="px-3 py-2 w-full hover:bg-gray-200 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-600"
              replace>
              Integrations
            </router-link>
          </li>
          <li class="flex">
            <router-link 
              to="/app/projects/"
              class="px-3 py-2 w-full hover:bg-gray-200 rounded-xl cursor-pointer font-semibold flex gap-3 items-center !bg-red-500/10 text-red-500"
              replace>
              Change Project
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-full flex flex-col py-10 px-20 box-border ml-[320px]">
      <router-view></router-view>
    </div>
  </div>  
</template>