<script setup lang="ts">
import Header from "@/components/Header.vue";
import {useQuery} from "@tanstack/vue-query";
import {getAllOrganizations, OrganizationReadModel} from "@/api/organizations.ts";
import {baseUrl} from "@/api/client.ts";


const { data, isSuccess } = useQuery<OrganizationReadModel[]>({
  queryKey: ["organizations"],
  queryFn: getAllOrganizations,
});
const calculateGradient =  (color1: string, color2: string) => `background: linear-gradient(90deg, ${color1} 0%, ${color2} 100%);`

</script>
<template>
    <div class="w-full h-[100vh] flex justify-center items-center flex-col">
      <Header></Header>
        <div class="text-3xl mb-16 font-semibold text-gray-700">
            ¿En que organización quieres trabajar?
        </div>
        <div  class="flex w-full max-w-[1400px] justify-center gap-10">
            <router-link v-for="org in data" :to="`/app/projects/${org.id}/home`" class="cursor-pointer group hover:scale-[1.1] transition-all duration-500">
                <img :style="`${calculateGradient(org.primary_color, org.secondary_color)};`" :src="baseUrl + '/media/organizations/' + org.logo" class="h-[180px] w-[180px] bg-blue-500 rounded-lg  "/>
                <div class=" text-gray-500 group-hover:text-gray-700  flex justify-center mt-3 font-semibold text-xl transition-all">
                    {{ org.name }}
                </div>
            </router-link>

            <router-link to="/app/projects/create" class="cursor-pointer">
                <div class="h-[180px] w-[180px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-200 transition-all ">
                    <vue-icon name="bi-plus" class="text-gray-300" scale="4.5"></vue-icon>
                </div>
                <div class="flex justify-center mt-3 font-semibold text-xl">
                </div>
                </router-link>
        </div>
    </div>
</template>