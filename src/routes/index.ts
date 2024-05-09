import {auth} from "./auth.ts";
import {base} from "./base.ts";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {

            path : '',
            redirect(to) {
                return "/app/projects/"
            },
            children: [
                ...auth,
                ...base
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");

    // If no token is found, redirect to /auth/signin
    if (!token) {
        if (to.path.startsWith('/app')) {
            next({ path: '/auth/signin' });
        } else {
            next(); // Proceed if the target path isn't within /app
        }
    } else {
        // If a token is found, redirect to /app/projects if the target path is under /auth
        if (to.path.startsWith('/auth')) {
            next({ path: '/app/projects' });
        } else {
            next(); // Proceed to target if already authenticated
        }
    }
});



export default {
    router
}