<script setup lang="ts">
import { ref, defineProps } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import {useForm} from "vee-validate";
import {useMutation, useQueryClient} from "@tanstack/vue-query";
import api, {apiCall} from "@/api/client.ts";
import {useRoute} from "vue-router";

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

const {title, url, name} = defineProps<{name:string, title: string, url : string}>();

const route = useRoute()
const id = route.params["id"] as string

const { handleSubmit} = useForm<any>({
  initialValues: {
    organization_id: id
  }
})
const queryClient = useQueryClient()

const createFn = async function (request: any ) {
  const response = await api.post<apiCall<any>>(url, {
    ...request
  });
  if (response.data.error) {
    throw Error(response.data.error.error_message);
  }
  return response.data.success
};

const {mutate, error} = useMutation({
      mutationFn: createFn,
      onSuccess() {
        queryClient.refetchQueries({queryKey: ["organization", id]})
        closeModal()
      },
    }
)

const submit = handleSubmit((values) => mutate(values))

</script>
<template>
  <div >
    <button
        type="button"
        @click="openModal"
        class="font-semibold rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      {{ name }}
    </button>
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
                class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
              >
                {{ title }}
              </DialogTitle>
              <div class="mt-4 mb-6">
                <slot></slot>
              </div>

              <div class="mt-4">
                <p class="text-red-500 mb-6">{{ error }}</p>
                <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="submit"
                >
                  Create
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

