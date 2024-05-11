<script lang="ts" setup>
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue";

import {ref} from "vue";
import SmallInput from "@/components/SmallInput.vue";
import {useRoute} from "vue-router";
import {useMutation, useQuery, useQueryClient} from "@tanstack/vue-query";
import {
  getOrganizationById,
  integrateOrganization,
  IntegrateRequest,
  OrganizationReadModel
} from "@/api/organizations.ts";
import {useForm} from "vee-validate";

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

const route = useRoute()
const id = route.params["id"] as string

const query = useQueryClient()

const { mutate, error, isPending } = useMutation(
    {
      mutationFn: (request: IntegrateRequest) => integrateOrganization(request),
      onSuccess: () => {
        closeModal()
        query.refetchQueries({queryKey: ["organizations", id]})
      }
    }
)


const {handleSubmit} = useForm<IntegrateRequest>({
  initialValues: {
    organization_id: id,
    task_manager: "trello",
    api_key: "85f7779bdecb42e00e84225897ca8adf",
    api_token: ""
  }

})

const handle = handleSubmit((values) =>  mutate(values))
</script>
<template>
  <div
      @click="openModal"
      class="bg-gray-100 p-8 rounded-xl py-8 hover:bg-gray-200 transition-all cursor-pointer">
    <div class="h-12 w-12 bg-cyan-500 rounded-full flex justify-center items-center text-white">
      <vue-icon name="fa-trello" scale="1.5"></vue-icon>
    </div>
    <h1 class="text-xl text-gray-700 font-semibold mt-5 ">
      Trello
    </h1>
    <h2 class="text-md text-gray-500">
      Integrate API with trello
    </h2>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
            class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <DialogPanel
                class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                  as="h3"
                  class="text-lg font-semibold leading-6 text-gray-800"
              >
                Integrate with trello
              </DialogTitle>
              <div class="mt-4 mb-6">
                  <p class="font-semibold text-gray-500">How do I obtain my api key?</p>
                  <div class="mt-2 text-gray-500">Click this <a class="!font-semibold text-red-500" href="https://trello.com/1/authorize?expiration=never&scope=read,write,account&response_type=token&key=85f7779bdecb42e00e84225897ca8adf">link</a> and follow the next instructions</div>
                  <img src="../../../../../../../assets/cosas.png">
                  <SmallInput name="api_token" class-name="" label="Api key" placeholder="" type=""></SmallInput>
              </div>

              <div class="mt-4">
                <p class="text-red-500 mb-6">{{ error }}</p>
                <button
                    type="button"
                    class="inline-flex items-center gap-4 justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="handle"

                >
                  <div role="status" v-if="isPending">
                    <svg aria-hidden="true" class="w-5 h-5 text-red-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  Integrate
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>