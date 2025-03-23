import FrontPageApp from "./Pages/FrontPage/FrontPageApp.vue";
import BrowsePageApp from "./Pages/BrowsePage/BrowsePageApp.vue"
import { createRouter, createWebHistory } from 'vue-router'
import App from "./RoutingApp.vue";
import {createApp} from "vue";
import ReferencesPageApp from "./Pages/ReferencesPage/ReferencesPageApp.vue";
import SearchPageApp from "./Pages/SearchPage/SearchPageApp.vue";
import LoginPageApp from "./Pages/LoginPage/LoginPageApp.vue";
import RegisterPageApp from "./Pages/RegisterPage/RegisterPageApp.vue";

const routes = [
    { path: '/', component: FrontPageApp },
    { path: '/browse/:query?', component: BrowsePageApp },
    { path: '/references', component: ReferencesPageApp },
    { path: '/search', component: SearchPageApp },
    { path: '/register', component: RegisterPageApp },
    { path: '/login', component: LoginPageApp },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')