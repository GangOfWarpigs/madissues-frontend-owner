<script lang="ts" setup>
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue";

import {ref} from "vue";
import SmallInput from "@/components/SmallInput.vue";
import {useRoute} from "vue-router";
import {useQuery} from "@tanstack/vue-query";
import {getOrganizationById, OrganizationReadModel} from "@/api/organizations.ts";

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}


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
                  <SmallInput name="api_key" class-name="" label="Api key" placeholder="" type=""></SmallInput>
              </div>

              <div class="mt-4">
                <p class="text-red-500 mb-6">{{ error }}</p>
                <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="submit"
                >
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