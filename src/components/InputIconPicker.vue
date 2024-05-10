<script setup lang="ts">
    import { useField } from 'vee-validate';

    const { label, name } = defineProps<{
        label: string;
        name: string;
    }>();

    const icons = ['la-atom-solid', 'md-calculate', 'md-balance', 'io-language', 'fa-book', 'ri-code-box-fill', 'io-hardware-chip'];

    const { value, errorMessage, setTouched } = useField(name, (value: string) => {
        if (!value || !icons.includes(value)) {
            return "Please select a valid icon";
        }
        return true;
    });

    const selectIcon = (icon: string) => {
        value.value = icon;
        setTouched(true);
    };
</script>

<template>
    <label class="font-semibold text-gray-500">{{ label }}</label>
    <div class="relative cursor-pointer gap-5 flex justify-start my-4 items-center ">
        <vue-icon 
            v-for="icon in icons"
            :key="icon"
            @click="selectIcon(icon)"
            :class="[
                'w-7 h-7 text-gray-500 transition-all rounded-full block',
                value === icon ? 'scale-[1.3]' : 'scale-100 hover:scale-[1.3]'
            ]"
            :name="icon"
        />
    </div>
    <span v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</span>
</template>