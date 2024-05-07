import {auth} from "./auth.ts";
import {base} from "./base.ts";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : '',
            children: [
                ...auth,
                ...base
            ]
        }
    ]
})

export default {
    router
}