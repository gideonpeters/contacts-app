<template>
    <div class="sidebar" v-if="isSidebarVisible">
        <div class="row">
            <div class="col">
                <div class="btn btn-primary"> Create Contact</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isSidebarVisible() {
            return this.$store.getters.getSidebarStatus
        }
    }
}
</script>


<style lang="scss" scoped>
.sidebar{
    position: absolute;
}

#sidebar {
        min-width: 290px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        .nav-side-link {
            padding-left: 40px;
            display: block;
            text-decoration: none;
            color: black;
            &:hover,
            &.active {
                background-color: #3D4EE1;
                color: white;
                cursor: pointer;
            }
        }
    }

#sidebar.active {
        margin-left: -250px;
    }

    .bm-item-list>* {
    display: flex;
    padding: 0px;
    text-decoration: none;
}
</style>
