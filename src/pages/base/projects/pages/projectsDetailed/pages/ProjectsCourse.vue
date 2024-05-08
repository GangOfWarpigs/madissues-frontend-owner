<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../../../../../components/Input.vue';

const teachers = ref([0, 0, 0, 0, 0, 0]);
</script>
<template>
    <div>
        <h1 class="text-3xl font-semibold">Courses</h1>
    </div>
    <div class="mt-10 ">
        <div class="flex justify-between mb-3">
            <input class="bg-gray-100 p-2 px-3 rounded-lg" placeholder="Search by teacher...">
            <button class="p-2 px-3 bg-red-500 rounded-lg text-white  font-semibold">
                Add new teacher
            </button>
        </div>
        <div class="gap-2 grid-cols-4 grid">
            <div  v-for="teacher in teachers" class="w-full flex-col py-10 justify-start items-start bg-gray-100 p-5 rounded-xl flex  px-10 gap-4 hover:bg-gray-200 cursor-pointer transition-all">
                <div class="w-[50px] h-[50px] bg-gray-500 rounded-full">
                </div>
                <div class="font-semibold">
                    <h3 class="font-semibold">Mátematicas para Computadores</h3>
                    <h5 class="text-sm text-gray-500 font-medium">MC</h5>

                </div>
            </div>
        </div>
    </div>
</template>