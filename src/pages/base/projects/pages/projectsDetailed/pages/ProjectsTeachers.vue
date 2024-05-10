<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../../../../../components/Input.vue';
import {useRoute} from "vue-router";
import {useQuery} from "@tanstack/vue-query";
import {TeacherReadModel, getOrganizationTeachers} from "@/api/organizations.ts";
import ProjectCreateTeachersForm
  from "@/pages/base/projects/pages/projectsDetailed/pages/ProjectCreateTeachersForm.vue";
import PageContainer from '@/components/PageContainer.vue';

const route = useRoute()
const id = route.params["id"] as string


const { data, isSuccess } = useQuery<TeacherReadModel[]>({
  queryKey: ["organization", id, "courses"],
  queryFn: () => getOrganizationTeachers(id),
});
</script>
<template>
    <PageContainer>
        <div>
            <h1 class="text-3xl font-semibold">Teachers</h1>
        </div>
        <div class="mt-10 ">
            <div class="flex justify-between mb-3">
                <input class="bg-gray-100 p-2 px-3 rounded-lg" placeholder="Search by teacher...">
                <ProjectCreateTeachersForm></ProjectCreateTeachersForm>
            </div>
            <div v-if="isSuccess" class="gap-2 flex flex-col">
                <div  v-for="teacher in data" class="w-full bg-gray-100 p-5 rounded-xl flex items-center gap-4 hover:bg-gray-200 cursor-pointer transition-all">
                    <div class="w-[50px] h-[50px] bg-gray-500 rounded-full">
                    </div>
                    <div class="font-semibold">
                        <h3 class="font-semibold">{{ teacher.first_name }} {{ teacher.last_name}}</h3>
                        <h5 class="text-sm text-gray-500 font-medium">{{ teacher.email }}</h5>

                    </div>
                </div>
            </div>
        </div>
    </PageContainer>
</template>