<script setup lang="ts">
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import {useRouter} from "vue-router";
  import { useQuery } from '@tanstack/vue-query';
  import { getOwner, Owner } from '@/api/owners';

  const router = useRouter()

  function clearStorage(){
    console.log("hello world")
    localStorage.removeItem("token")
    router.push("/auth/signin/")
  }

  const { data:owner } = useQuery<Owner>({
    queryKey: ["owner"],
    queryFn: async () => await getOwner()
  });
</script>

<template>
  <Menu as="div" class=" text-left absolute top-[10px] right-[70px]">
    <div>
      <MenuButton class="bg-gray-100 px-6 py-3 rounded-full  shadow-gray-200 flex items-center gap-2">
        <div>
          <img class="h-[30px] w-[30px] rounded-full mr-2">
        </div>
        <p class="font-semibold text-gray-700 mb-0">
        {{ owner?.first_name }} {{ owner?.last_name }}
        </p>
        <vue-icon name="fa-chevron-down" scale="0.7"/>
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute font-semibold bg-gray-100 right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
            <MenuItem v-slot="{ active }" @click="clearStorage()" >
              <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-200">Sign out</button>
            </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

