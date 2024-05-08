<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../../../../../components/Input.vue';

const teachers = ref([0, 0, 0, 0, 0, 0]);
</script>
<template>
    <div>
        <h1 class="text-3xl font-semibold">Students</h1>
    </div>
    <div class="mt-10 ">
        <div class="flex justify-between mb-3">
            <input class="bg-gray-100 p-2 px-3 rounded-lg" placeholder="Search by teacher...">
            <button class="p-2 px-3 bg-red-500 rounded-lg text-white  font-semibold">
                Add new teacher
            </button>
        </div>
        <div class="gap-2 flex flex-col">
            <div  v-for="teacher in teachers" class="w-full bg-gray-100 p-5 rounded-xl flex items-center gap-4 hover:bg-gray-200 cursor-pointer transition-all">
                <div class="w-[50px] h-[50px] bg-gray-500 rounded-full">
                </div>
                <div class="font-semibold">
                    <h3 class="font-semibold">Jose R. Peña Seco</h3>
                    <h5 class="text-sm text-gray-500 font-medium">josericardopenase@gmail.com</h5>

                </div>
            </div>
        </div>
    </div>
</template>