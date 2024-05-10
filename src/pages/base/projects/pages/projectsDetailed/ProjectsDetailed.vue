<script lang="ts" setup>

import {useQuery} from "@tanstack/vue-query";
import { getOrganizationById, OrganizationReadModel} from "@/api/organizations.ts";
import {useRoute} from "vue-router";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

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
                <h1 class="font-semibold text-3xl mb-8">
                  {{ data.name }}
                </h1>
                <router-link to="home" active-class="!bg-red-500 !text-white" class="text-gray-400 hover:bg-gray-200 hover:text-gray-600 px-4 py-3 rounded-xl cursor-pointer font-semibold flex gap-3 items-center">
                    <vue-icon name="ri-home-smile-2-fill" scale="1.2"></vue-icon>
                    Home
                </router-link>
                <router-link to="teachers" active-class="!bg-red-500 !text-white " class="px-4 py-3 hover:bg-gray-200 hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="hi-solid-academic-cap" scale="1.2"></vue-icon>
                    Teachers
                </router-link>

                <router-link to="courses" active-class="!bg-red-500 !text-white " class="px-4 py-3 hover:bg-gray-200  hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="hi-solid-book-open" scale="1.2"></vue-icon>
                    Courses
                </router-link>
                <router-link to="students"  active-class="!bg-red-500 !text-white " class="px-4 py-3 hover:bg-gray-200 hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="bi-postcard-fill" scale="1.2"></vue-icon>
                    Degrees
                </router-link>
            </div>
            <div>
                <router-link to="configuration" active-class="!bg-red-500 !text-white "  class="px-4 py-3 hover:bg-gray-200 hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="hi-solid-cog" scale="1.2"></vue-icon>
                    Configuration
                </router-link>

            </div>
        </div>
    </div>
    <div class="ml-[300px] px-20 py-10 text-gray-700">
        <router-view></router-view>
    </div>

</template>