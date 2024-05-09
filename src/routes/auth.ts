import {RouteRecordRaw} from "vue-router";
import Auth from "../pages/auth/Auth.vue";
import SignIn from "../pages/auth/pages/SignIn/SignIn.vue";
import SignUp from "../pages/auth/pages/SignUp/SignUp.vue";


export const auth : RouteRecordRaw[] =
    [{
        path: 'auth',
        component: Auth,
        children: [
            {
                path : "signin",
                component: SignIn,
                name: "SignIn"
            },
            {
                path : "signup",
                component: SignUp,
                name: "SignUp"
            }
        ]
    }]
