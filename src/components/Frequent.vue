<template>
    <div>
        <contact-table :contactInfo="allContacts"/> 
    </div>
</template>

<script>
import ContactTable from './Table.vue';

export default {
    components: {
        ContactTable,
    },
    computed: {
        allContacts() {
            return this.$store.getters.getContacts
        }
    }
}
</script>


<style lang="scss" scoped>
div{
    background-color: white;
}
</style>

