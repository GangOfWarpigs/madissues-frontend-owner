<script setup lang="ts">
import Input from '../../../../../../components/Input.vue';
import {useQuery} from "@tanstack/vue-query";
import {DegreesReadModel, getOrganizationDegrees} from "@/api/organizations.ts";
import {useRoute} from "vue-router";
import ProjectCreateDegreeForm from "@/pages/base/projects/pages/projectsDetailed/pages/ProjectCreateDegreeForm.vue";
import PageContainer from '@/components/PageContainer.vue';

const route = useRoute()
const id = route.params["id"] as string

const { data, isSuccess } = useQuery<DegreesReadModel[]>({
  queryKey: ["organization", id, "degrees"],
  queryFn: () => getOrganizationDegrees(id),
});
</script>
<template>
    <PageContainer>
        <div>
            <h1 class="text-3xl font-semibold">Students</h1>
        </div>
        <div class="mt-10 ">
            <div class="flex justify-between mb-3">
                <input class="bg-gray-100 p-2 px-3 rounded-lg" placeholder="Search by teacher...">
                <ProjectCreateDegreeForm></ProjectCreateDegreeForm>
            </div>
            <div v-if="isSuccess" class="gap-2 flex flex-col">
                <div  v-for="degree in data" class="w-full bg-gray-100 p-5 rounded-xl flex items-center gap-4 hover:bg-gray-200 cursor-pointer transition-all">
                    <div class="font-semibold">
                        <h3 class="font-semibold">{{ degree.name }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </PageContainer>
</template>