<template>
    <div class="page-wrapped">
        <div class="row justify-content-center">
            <transition name="">
                <div class="col-lg-2 col-md-4" v-show="isSidebarVisible"> 
                    <sidebar />
                </div>
            </transition>
            <div class="col-lg-10 col-md-6">
                <div class="pl-3 pr-5">
                    <router-view />
                </div> 
            </div>
        </div> 
        <!-- <div class="modal">
            <create-contact />
        </div> -->
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import CreateContact from './CreateContact.vue'

export default {
    components: {
        Sidebar,
        CreateContact,
    },
    computed: {
        isSidebarVisible() {
            return this.$store.getters.getSidebarStatus
        }
    }
}
</script>

<style lang="scss" scoped>
.page-wrapped{
    overflow-x: hidden;
}

.modal{
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>

