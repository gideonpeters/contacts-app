import Vue from 'vue'
import VueRouter from 'vue-router'
import MainSite from './../components/MainSite.vue'
import Dashboard from './../components/Dashboard.vue'
import Frequent from './../components/Frequent.vue'

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
                    component: Dashboard,
                },
                {
                    path: 'frequent',
                    component: Frequent,
                }
            ],
        },
    ]
});