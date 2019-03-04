<template>
    <div>
        <div class="row">
            <div class="col" v-if="isSidebarVisible">
                <transition name="fade">
                    <sidebar />
                </transition>
            </div>
            <div class="col">
                <h1>Hello</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
    components: {
        Sidebar,
    },
    computed: {
        isSidebarVisible() {
            return this.$store.getters.getSidebarStatus
        }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

