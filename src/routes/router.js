import Vue from 'vue'
import VueRouter from 'vue-router'
import MainSite from './../components/MainSite.vue'
import Dashboard from './../components/Dashboard.vue'
import CreateContact from './../components/CreateContact.vue'
import Frequent from './../components/Frequent.vue'
import Welcome from './../components/Welcome.vue'
import Trash from './../components/Trash.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainSite,
            children: [
                {
                    path: '/',
                    name: 'welcome',
                    component: Welcome,
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: Dashboard,
                },
                {
                    path: 'create',
                    name: 'create.contact',
                    component: CreateContact,
                },
                {
                    path: 'frequent',
                    name: 'frequent',
                    component: Frequent,
                },
                {
                    path: 'trash',
                    name: 'trash',
                    component: Trash,
                }
            ],
        },
    ]
});