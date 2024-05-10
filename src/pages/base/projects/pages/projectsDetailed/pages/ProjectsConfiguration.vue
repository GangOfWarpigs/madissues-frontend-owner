<script lang="ts" setup>
  import { useRoute } from 'vue-router';

  const currentRoute: string = useRoute().fullPath;
  const splittedRoute: string[] = currentRoute.split('/');
  splittedRoute.pop();
  const baseRoute: string = splittedRoute.join('/');
</script>
<template>
  <div class="w-full min-h-screen flex pl-[300px]">
    <div class="w-[320px] border-r-2 py-10 px-5 h-screen fixed">
      <nav class="w-full flex flex-col">
        <ul class="w-full flex flex-col space-y-5">
          <li class="flex">
            <router-link 
              :to="baseRoute + '/general'" 
              active-class="!bg-gray-100" 
              class="px-4 py-3 w-full hover:bg-gray-200 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-600"
              replace>
              General Settings
            </router-link>
          </li>
          <li class="flex">
            <router-link 
              :to="baseRoute + '/organization'" 
              active-class="!bg-gray-100" 
              class="px-4 py-3 w-full hover:bg-gray-200 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-600"
              replace>
              Organization Settings
            </router-link>
          </li>
          <li class="flex">
            <router-link 
              :to="baseRoute + '/integrations'" 
              active-class="!bg-gray-100" 
              class="px-4 py-3 w-full hover:bg-gray-200 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-600"
              replace>
              Integrations
            </router-link>
          </li>
          <li class="flex">
            <router-link 
              to="/app/projects/"
              active-class="!bg-gray-100" 
              class="px-4 py-3 w-full hover:bg-gray-200 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-600"
              replace>
              Change Project
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-full flex flex-col px-20 py-10 box-border ml-[400px]">
      <router-view></router-view>
    </div>
  </div>  
</template>