<script lang="ts" setup>

import {useQuery} from "@tanstack/vue-query";
import { getOrganizationById, OrganizationReadModel} from "@/api/organizations.ts";
import {useRoute} from "vue-router";
import {baseUrl} from "@/api/client.ts";

const route = useRoute()
const id = route.params["id"] as string

const { data, isSuccess } = useQuery<OrganizationReadModel>({
  queryKey: ["organizations", id],
  queryFn: () => getOrganizationById(id),
});

</script>
<template>
    <div v-if="isSuccess" class="bg-gray-100 h-[100vh] w-[300px] fixed p-4">
        <div class="flex flex-col justify-between h-full">
            <div class="flex flex-col gap-3 ">
              <div class="flex items-center mb-8 gap-5">
                <img  width="42" :src="baseUrl + '/' + data.logo" class="rounded-full">
                <h1 class="font-semibold text-2xl">
                  {{ data.name }}
                </h1>
              </div>
                <router-link :to="{name: 'home'}" active-class="!bg-red-500 !text-white" class="text-gray-400 hover:bg-gray-200 hover:text-gray-600 px-4 py-3 rounded-xl cursor-pointer font-semibold flex gap-3 items-center">
                    <vue-icon name="ri-home-smile-2-fill" scale="1.2"></vue-icon>
                    Home
                </router-link>
                <router-link :to="{name: 'teachers'}" active-class="!bg-red-500 !text-white " class="px-4 py-3 hover:bg-gray-200 hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="hi-solid-academic-cap" scale="1.2"></vue-icon>
                    Teachers
                </router-link>

                <router-link :to="{name: 'courses'}" active-class="!bg-red-500 !text-white " class="px-4 py-3 hover:bg-gray-200  hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="hi-solid-book-open" scale="1.2"></vue-icon>
                    Courses
                </router-link>
                <router-link :to="{name: 'degrees'}"  active-class="!bg-red-500 !text-white " class="px-4 py-3 hover:bg-gray-200 hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="bi-postcard-fill" scale="1.2"></vue-icon>
                    Degrees
                </router-link>
            </div>
            <div>
                <router-link to="configuration/organization" active-class="!bg-red-500 !text-white "  class="px-4 py-3 hover:bg-gray-200 hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="hi-solid-cog" scale="1.2"></vue-icon>
                    Configuration
                </router-link>

            </div>
        </div>
    </div>
    <router-view></router-view>
</template>