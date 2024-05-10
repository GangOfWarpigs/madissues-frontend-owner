<script setup lang="ts">
import Input from '../../../../../../components/Input.vue';
import {useQuery} from "@tanstack/vue-query";
import {CourseReadModel, getOrganizationCourses} from "@/api/organizations.ts";
import {useRoute} from "vue-router";
import ProjectCreateCourseForm from "@/pages/base/projects/pages/projectsDetailed/pages/ProjectCreateCourseForm.vue";


const route = useRoute()
const id = route.params["id"] as string


const { data, isSuccess } = useQuery<CourseReadModel[]>({
  queryKey: ["organization", id, "courses"],
  queryFn: () => getOrganizationCourses(id),
});
</script>
<template>
    <div>
        <h1 class="text-3xl font-semibold">Courses</h1>
    </div>
    <div class="mt-10 ">
        <div class="flex justify-between mb-3">
            <input class="bg-gray-100 p-2 px-3 rounded-lg" placeholder="Search by teacher...">
            <ProjectCreateCourseForm/>

        </div>
        <div class="gap-2 grid-cols-4 grid">
            <div v-if="isSuccess"  v-for="course in data" class="w-full flex-col py-10 justify-start items-start bg-gray-100 p-5 rounded-xl flex  px-10 gap-4 hover:bg-gray-200 cursor-pointer transition-all">
                <div class="w-[50px] h-[50px] bg-gray-500 rounded-full">
                </div>
                <div class="font-semibold">
                    <h3 class="font-semibold">{{ course.name }}</h3>
                    <h5 class="text-sm text-gray-500 font-medium">{{ course.code }}</h5>

                </div>
            </div>
        </div>
    </div>
</template>