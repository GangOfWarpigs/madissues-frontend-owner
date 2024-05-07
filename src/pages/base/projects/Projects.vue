<template>

    <div class="w-full h-[100vh] flex justify-center items-center flex-col">
        <div class="text-3xl mb-16 font-semibold text-gray-700">
            ¿En que organización quieres trabajar?
        </div>
        <div class="flex w-full max-w-[1400px] justify-center gap-10">
            <div class="cursor-pointer group">
                <div class="h-[180px] w-[180px] bg-blue-500 rounded-lg group-hover:border-[#0000006b] transition-all border-4 border-blue-500">
                </div>
                <div class=" text-gray-500 group-hover:text-gray-700  flex justify-center mt-3 font-semibold text-xl transition-all">
                    Deii ULPGC
                </div>
            </div>
            <div class="cursor-pointer">
                <div class="h-[180px] w-[180px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-200 transition-all ">
                    <vue-icon name="bi-plus" class="text-gray-300" scale="4.5"></vue-icon>
                </div>
                <div class="flex justify-center mt-3 font-semibold text-xl">
                </div>
            </div>
        </div>
    </div>

</template>