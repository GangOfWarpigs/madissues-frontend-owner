import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./routes";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as BiIcons from "oh-vue-icons/icons/bi";
import * as IoIcons from "oh-vue-icons/icons/io";
import * as RiIcons from "oh-vue-icons/icons/ri";
import * as HiIcons from "oh-vue-icons/icons/hi";
import * as MdIcons from "oh-vue-icons/icons/md";
import { VueQueryPlugin } from '@tanstack/vue-query'
import CKEditor from '@ckeditor/ckeditor5-vue';

const icons = Object.values({ ...FaIcons, ...BiIcons, ...IoIcons, ...RiIcons, ...HiIcons, ...MdIcons });
addIcons(...icons);

createApp(App)
    .component("vue-icon", OhVueIcon)
    .use(CKEditor)
    .use(VueQueryPlugin)
    .use(BootstrapIconsPlugin)
    .use(routes.router)
    .mount('#base')
