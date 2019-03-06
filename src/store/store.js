import Vue from 'vue'
import Vuex from 'vuex'
import { contacts } from './data.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        sidebarStatus: true,
        contacts: contacts,
    },
    getters: {
        getSidebarStatus(state) {
            return state.sidebarStatus
        },
        getContacts(state) {
            return state.contacts;
        }
    },
    mutations: {
        toggleSidebarStatus(state) {
            state.sidebarStatus = !state.sidebarStatus;
        }
    }
});