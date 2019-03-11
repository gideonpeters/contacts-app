<template>
    <div class="contact-table px-4">
        <div class="heading my-3">Deleted Contacts</div>
        <div style="width: 100%">
            <div class="row pb-4 mt-5 thead">
                <div class="col">Name</div>
                <div class="col">Email</div>
                <div class="col">Phone Number</div>
                <div class="col">Company</div>
            </div>
            <div class="row">
                <div class="col-12" v-for="contact in contacts" :key="contact">
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
            return this.$store.getters.getDeletedContacts;
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

    .heading{
        font-size: 3rem;
    }

    .thead{
        border-bottom: 0.5px solid lightgrey;
    }
}
</style>
