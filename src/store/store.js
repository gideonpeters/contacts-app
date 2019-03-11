import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import { contacts } from './data.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // plugins: [createPersistedState()],
    state: {
        sidebarStatus: true,
        searchInput: '',
        contacts: contacts,
        selection: false,
        selectedContacts: [],
        deletedContacts: [],
        showModal: true,
    },
    getters: {
        getSidebarStatus(state) {
            return state.sidebarStatus;
        },
        getShowModalStatus(state) {
            return state.showModal;
        },
        getContacts(state) {
            return state.contacts;
        },
        getSelectedContactByName: (state) => (payload) => {
            return state.contacts.find(contact => {
                return contact.name == payload
            })
        },
        getSearchedContacts: (state) => {
            var contacts;
            var matchedContacts = [];

            (!state.searchInput) ? contacts = state.contacts : state.contacts.forEach(contact => {
                let name = contact.name.toLowerCase();
                let email = contact.email.toLowerCase();
                let company = contact.company.toLowerCase();
                let input = state.searchInput;

                if((name.search(input) > -1 || email.search(input) > -1 || company.search(input) > -1)){
                    matchedContacts.push(contact)
                }
                
                contacts = matchedContacts;      
            })
            return contacts
        },
        getSelectedContacts: (state) => {
            return state.selectedContacts;
        },
        getSelectionStatus: (state) => {
            return state.selection
        },
        getDeletedContacts: (state) => {
            return state.deletedContacts;
        }
    },
    mutations: {
        toggleSidebarStatus: (state) => {
            state.sidebarStatus = !state.sidebarStatus;
        },
        toggleModal(state) {
            state.showModal = !state.showModal;
        },
        searchContacts(state, payload) {
            state.searchInput = payload.toLowerCase();
        },
        saveNewContact(state, payload) {
            state.contacts = [...state.contacts, payload]
        },
        selectContact(state, payload){
            if(state.selectedContacts){
                state.selection = true
            }
            
            return state.selectedContacts = [...state.selectedContacts, payload]
        },
        deselectContact(state, payload) {
            if(!state.selectedContacts) {
                state.selection = !state.selection
            }
            return state.selectedContacts.splice(state.selectedContacts.indexOf(payload), 1)
        },
        deleteContact(state, payload) {
            var selectedContact = state.contacts.find(contact => {
                return contact == payload
            })

            let remainingContacts = state.contacts;

            state.deletedContacts = [selectedContact, ...state.deletedContacts];
            remainingContacts.splice(remainingContacts.indexOf(selectedContact), 1);
        }
    },
    actions: {
        saveNewContact: ({ commit }, payload) => {
            commit('saveNewContact', payload)
        }
    }
});