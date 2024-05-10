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
                    <vue-icon name="md-people" scale="1.2"></vue-icon>
                    Students
                </router-link>
            </div>
            <div>
                <div  class="px-4 py-3 hover:bg-gray-200 hover:text-gray-600 rounded-xl cursor-pointer font-semibold flex gap-3 items-center text-gray-400">
                    <vue-icon name="hi-solid-cog" scale="1.2"></vue-icon>
                    Configuration
                </div>
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Options
                    <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account settings</a>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
                      </MenuItem>
                      <form method="POST" action="#">
                        <MenuItem v-slot="{ active }">
                          <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>
                        </MenuItem>
                      </form>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
        </div>
    </div>
    <div class="ml-[300px] px-20 py-10 text-gray-700">
        <router-view></router-view>
    </div>

</template>