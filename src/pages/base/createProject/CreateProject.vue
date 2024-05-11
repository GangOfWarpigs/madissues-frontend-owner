<script lang="ts" setup>
import {computed, ref} from 'vue';
import FormButton from '../../../components/FormButton.vue';
import Input from '../../../components/Input.vue';
import InputFile from '../../../components/InputFile.vue';
import InputRichText from '../../../components/InputRichText.vue';
import InputColorPicker from '../../../components/InputColorPicker.vue';
import {  useRouter } from 'vue-router'
import {useForm} from "vee-validate";
import {useMutation, useQueryClient} from "@tanstack/vue-query";
import {createOrganization, CreateOrganizationRequest} from "@/api/organizations.ts";
import * as yup from "yup";

const steps = ref(0)
const router = useRouter()
const queryClient = useQueryClient()


const prev = () => {
    if(steps.value < 1) router.push('/app/projects/');
    steps.value--
} 

const next = async () => {
  const isValid = await validate();
  console.log(schemas[steps.value])
  if (isValid.valid) {

    if(steps.value < 3)  steps.value++;
    else handle()
  }
}

const schemas = [
  yup.object({
    name: yup.string().required("Name is required*").max(280),
    contact_info: yup.string().required("Contact info is required*").max(80),
  }),
  yup.object({
    logo: yup.string().required("Logo is required*"),
  }),
  yup.object({
    description: yup.string().required("Description is required*").max(280),
  }),
    yup.object({
      primary_color: yup.string().required("Primary color is required*"),
      secondary_color: yup.string().required("Secondary color is required*"),
    })
]

const currentSchema = computed(() => {
  return schemas[steps.value];
});

const {resetForm, handleSubmit, validate, values} = useForm<CreateOrganizationRequest>({
  validationSchema: currentSchema,
  initialValues: {
    name: "",
    description: "",
    contact_info: "",
    logo: "",
    primary_color: "",
    secondary_color: ""
  },
  keepValuesOnUnmount: true
})

const {mutate} = useMutation(
    {
      mutationFn: async (request : CreateOrganizationRequest) =>  await createOrganization(request),
      onMutate() {
        resetForm()
      },
      onSuccess() {
        queryClient.clear()
        router.push("/app/projects")
      },
    }
)

const handle = handleSubmit((values) => mutate(values))


</script>
<template>
    <div class="grid grid-cols-2 h-[100vh] w-full">
        <div class="w-full h-full flex justify-center items-center p-2">
            <div class="w-full max-w-[550px]">
                <div class="flex flex-col ">
                    <div class="flex items-center gap-3 mb-3 text-gray-500 cursor-pointer hover:translate-x-[-5px] transition-all" @click="prev()">
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
                            <Input name="name" placeholder="Name" label="Name"/>
                            <Input name="contact_info" class="mt-3" placeholder="Contact info" label="Contact information"/>
                        </div>
                        <div class="step-1" v-if="steps === 1">
                            <h1 class="text-2xl font-semibold mb-12">
                            Upload the logo of the organization
                            </h1>
                            <InputFile name="logo" placeholder="Logo" label="logo"/>
                        </div>
                        <div class="step-1" v-if="steps === 2">
                            <h1 class="text-2xl font-semibold mb-12">
                            Create your description
                            </h1>
                            <InputRichText name="description" placeholder="Logo" label=""/>
                        </div>
                        <div class="step-1" v-if="steps === 3">
                            <h1 class="text-2xl font-semibold mb-12">
                            Pick your colors
                            </h1>
                            <InputColorPicker name="primary_color" label="Primary color"></InputColorPicker>
                            <div class="mt-6 mb-3">
                                <InputColorPicker name="secondary_color" label="Secondary color color"></InputColorPicker>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-3">
                            <FormButton @click="next()" >Next</FormButton>
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
                <div class="bg-white w-full p-10 max-w-[500px] flex items-center justify-center rounded-2xl flex-col relative overflow-hidden">
                    <img :src="values.logo" class="h-[80px] w-[80px] bg-gray-500 rounded-full ">

                    <div class="flex justify-center flex-col items-center mt-5">
                        <h1 class="text-xl font-semibold text-gray-800">
                            {{values.name}}
                        </h1>
                        <h2 class="text-md text-gray-500">
                            {{values.contact_info}}
                        </h2>
                        <h2 class="text-md text-gray-500">
                          {{values.name.toLowerCase()}}.madissues.com
                        </h2>
                    </div>

                    <div class="bg-gray-100 p-4 w-full mt-8 text-gray-500 rounded-xl min-h-[130px]">
                      <div v-html="values.description"></div>

                    </div>

                  <div :style="`background: linear-gradient(90deg, ${values.primary_color} 0%, ${values.secondary_color} 100%);`" :class="`w-full h-3 absolute top-0 bg-gradient-to-r`">
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>