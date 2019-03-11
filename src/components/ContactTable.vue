<template>
    <div class="contact-table px-4">
        <div style="width: 100%">
            <div class="row ml-2 pb-4 mb-3 thead" v-if="selectionLength === 0">
                <div class="col">Name</div>
                <div class="col d-none d-lg-block">Email</div>
                <div class="col d-none d-sm-block">Phone Number</div>
                <div class="col d-none d-lg-block">Company</div>
            </div>
            <div class="row ml-2 pb-4 mb-3 thead " v-if="selectionLength > 0">
                <div class="col-1">
                    <i class="mdi mdi-minus-box-outline"> </i>
                    <i class="mdi mdi-menu-down"> </i>
                </div>
                <div class="col-9">
                    <i class="mdi mdi-label-outline mr-3"> </i>
                    <i class="mdi mdi-dots-vertical"> </i>
                </div>
                <div class="col">
                    <div class="selection">{{ selectionLength }} selected</div>
                </div>
            </div>
                
                
                <!-- <i class="mdi mdi-24px mdi-close-circle-outline"> </i>
                <i class="mdi mdi-24px mdi-plus-circle-outline"> </i> -->
            <div class="row" >
                <div class="col-12" v-for="contact in contacts" :key="contact.index">
                    <contact-card :contact="contact" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactCard from './ContactCard.vue'

export default {
    components: {
        ContactCard,
    },
    computed: {
        contacts() {
            return this.$store.getters.getSearchedContacts;
        },
        selection(){
            return this.$store.getters.getSelectionStatus;
        },
        selectionLength() {
            return this.$store.getters.getSelectedContacts.length;
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-table{
    letter-spacing: .01785714em;
    font-family: Roboto,Arial,sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #5f6368;
    overflow: hidden;
    padding: 4px;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;

    .thead{
        border-bottom: 0.5px solid lightgrey;
    }

    .selection{
        color: #1a73e8;
        font-size: 1.1rem;
        font-weight: 500;
    }

    .mdi::before{
        color: #1a73e8;
        font-size: 2rem;
    }
}
</style>
