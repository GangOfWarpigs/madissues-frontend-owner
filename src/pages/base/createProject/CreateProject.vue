<script lang="ts" setup>
import { ref, computed } from 'vue';
import FormButton from '../../../components/FormButton.vue';
import Input from '../../../components/Input.vue';
import InputFile from '../../../components/InputFile.vue';
import InputRichText from '../../../components/InputRichText.vue';
import InputColorPicker from '../../../components/InputColorPicker.vue';
import { useRoute, useRouter } from 'vue-router'

const steps = ref(0)
const maxStep = 4
const router = useRouter()


const content = computed({
    get: () => steps.value == (maxStep.value - 1) ? "Finish" : "Next"
})

const prev = () => {
    if(steps.value < 1) router.push('/app/projects/');
    steps.value--
} 

const next = () => {
    if(steps.value < 3)  steps.value++;
   
} 

</script>
<template>
    <div class="grid grid-cols-2 h-[100vh] w-full">
        <div class="w-full h-full flex justify-center items-center p-2">
            <div class="w-full max-w-[550px]">
                <div class="flex flex-col ">
                    <div class="flex items-center gap-3 mb-3 text-gray-500 cursor-pointer" @click="prev()">
                        <vue-icon name="bi-arrow-left"></vue-icon>
                        <h3>
                            Go back
                        </h3>
                    </div>
                </div>
                    <div class="flex flex-col gap-4">
                        <div class="step-1" v-if="steps === 0">
                            <h1 class="text-2xl font-semibold mb-12">
                            Input your organization data
                            </h1>
                            <Input placeholder="Name" label="Name"/>
                            <Input class="mt-3" placeholder="Contact info" label="Contact information"/>
                        </div>
                        <div class="step-1" v-if="steps === 1">
                            <h1 class="text-2xl font-semibold mb-12">
                            Upload the logo of the organization
                            </h1>
                            <InputFile placeholder="Logo" label="logo"/>
                        </div>
                        <div class="step-1" v-if="steps === 2">
                            <h1 class="text-2xl font-semibold mb-12">
                            Create your description
                            </h1>
                            <InputRichText placeholder="Logo" label="logo"/>
                        </div>
                        <div class="step-1" v-if="steps === 3">
                            <h1 class="text-2xl font-semibold mb-12">
                            Pick your colors
                            </h1>
                            <InputColorPicker label="Primary color"></InputColorPicker>
                            <div class="mt-6 mb-3">
                                <InputColorPicker label="Secondary color color"></InputColorPicker>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-3">
                            <FormButton @click="next()" >{{ content }}</FormButton>
                            <div class="flex items-center mt-3 w-full">
                                <div class="w-[35px] h-[35px] bg-gray-100 rounded-lg flex justify-center items-center">
                                    <vue-icon scale="1.1" name="bi-arrow-return-left"></vue-icon>
                                </div>
                                <h1 class="ml-2 font-semibold text-gray-400">
                                    Or press enter to continue
                                </h1>


                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class=" bg-gray-100 h-full p-10 flex justify-center items-center flex-col relative">
            <h1 class="text-4xl font-bold text-gray-600 absolute left-0 top-0 m-8">
                Create your first <br> organization
            </h1>

            <div class="w-full justify-center flex mt-20">
                <div class="bg-white w-full p-10 max-w-[500px] flex items-center justify-center rounded-2xl flex-col">
                    <div class="h-[80px] w-[80px] bg-gray-500 rounded-full">

                    </div>
                    <div class="flex justify-center flex-col items-center mt-5">
                        <h1 class="text-xl font-semibold text-gray-800">
                            DEII
                        </h1>
                        <h2 class="text-md text-gray-500">
                            josericardopenase@gmail.com
                        </h2>
                        <h2 class="text-md text-gray-500">
                            http://deii.adissues.com
                        </h2>
                    </div>

                    <div class="bg-gray-100 p-4 w-full mt-8 text-gray-500 rounded-xl min-h-[130px]">
                        hola soy pepe

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>