import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./routes";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as BiIcons from "oh-vue-icons/icons/bi";
import * as IoIcons from "oh-vue-icons/icons/io";

const icons = Object.values({ ...FaIcons, ...BiIcons, ...IoIcons });
addIcons(...icons);

createApp(App)
    .component("vue-icon", OhVueIcon)
    .use(BootstrapIconsPlugin)
    .use(routes.router)
    .mount('#base')
