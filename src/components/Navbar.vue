<template>
    <div class="" id="">
        <nav class="navbar py-2 navbar-light bg-transparent">
            <div class="row align-items-center">
                <div class="col-md-1 col-sm-2 ">
                    <i class="mdi mdi-menu mt-2" @click="toggleSidebar"/>
                </div>
                <div class="col-md-3 col-sm-2">
                    <div class="img mt-2"></div>
                </div>
                <div class="col-md-2 col-sm-2">
                    <router-link class="contact-brand mt-2" to="/">Contacts</router-link>
                </div>
                <div class="col-md-4 col-sm-3">
                    <div class="form-group has-search ml-5">
                        <i class="mdi mdi-magnify form-control-feedback ml-2"></i>
                        <input type="text" class="form-control py-4 mt-3 d-none d-md-block"  placeholder="Search">
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebarStatus')
        }
    }
}
</script>


<style lang="scss" scoped>
.mdi::before{
    font-size: 24px;
    opacity: 0.56;
    z-index: 100;
}

.navbar-brand{
    font-family: 'Product Sans',Arial,sans-serif;
}

.has-search{
    .form-control {
        padding-left: 3.575rem;
        width: 30rem !important;
        background: rgba(0,0,0,0.04);
        border-radius: 15px, 15px, 0, 0 ;
    }
}

.has-search {
    .form-control-feedback {
        // margin-top: 1.2%;
        position: absolute;
        z-index: 2;
        display: inline-block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
    }
}

.img{
    background-image: url("https://www.gstatic.com/images/branding/product/1x/contacts_48dp.png");
    background-position: center, center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 40px;
    min-width: 40px;
}

.contact-brand{
    color: inherit;
    opacity: 0.56;
    display: inline-block;
    text-decoration: none;
    font-size: 22px;
    line-height: normal;
    padding-left: 5px;
    position: relative;
    top: -1.5px;
    vertical-align: middle;
}
</style>
