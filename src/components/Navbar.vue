<template>
    <div>
        <nav class="navbar sticky-top navbar-light bg-transparent">
            <div class="row align-items-center">
                <div class="col-md-1 col-sm-2 ">
                    <div class="ml-3" @click="toggleSidebar">
                        <i class="mdi mdi-menu" />
                    </div>
                </div>
                <div class="col-md-1 col-sm-2">
                    <div class="img"></div>
                </div>
                <div class="col-md-1 col-sm-2">
                    <router-link tag="div" class="contact-brand pt-1" to="/">Contacts</router-link>
                </div>
                <div class="col-md-4 col-sm-3">
                    <div class="form-group has-search ml-4">
                        <i class="mdi mdi-magnify form-control-feedback ml-2"></i>
                        <input type="text" class="form-control py-4 mt-3 d-none d-md-block"  placeholder="Search" v-model="searchInput" @input="search">
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchInput: '',
        }
    },
    computed: {
        searchedContacts(){
            if(this.searchInput == ''){
                // this.isSearchEmpty =false;
                return this.contacts;
            } else {
                let matchedContacts = [];
                this.contacts.forEach(contact => {
                    let name = contact.name.toLowerCase();
                    let input = contact.name.toLowerCase();

                    if(name.search(input) > -1){
                        matchedContacts.push(contact);
                    }
                    
                    
                });
                return matchedContacts;
            }
        }
    },
    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebarStatus')
        },
        search() {
            this.$store.commit('searchContacts', this.searchInput)
        }
    }
}
</script>


<style lang="scss" scoped>
.mdi{
    &::before{
        font-size: 24px;
        opacity: 0.56;
        z-index: 200;
        cursor: pointer;
    }
}

.has-search{
    .form-control {
        padding-left: 3.575rem;
        min-width: 50rem !important;
        min-height: 4rem;
        background: rgba(0,0,0,0.04);
        border: none;
        
        &:focus{
            border-radius: 0.25rem 0.25rem 0 0 ;
            background: rgba(0,0,0,0);
            outline: none;
            box-shadow: 0px 1px 0 0.2rem rgba(233, 233, 233, 0.664);
            border-color: none;
        }
    }

    .form-control-feedback {
        margin-top: 3.2%;
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
    min-height: 44px;
    min-width: 44px;
    cursor: pointer;
    margin-left: -50px;
    z-index: 10;
}

.contact-brand{   
    color: inherit;
    opacity: 0.56;
    display: inline-block;
    text-decoration: none;
    font-size: 25px;
    line-height: normal;
    // margin-right: 90px;
    position: relative;
    top: -1.5px;
    margin-left: -37px;
    cursor: pointer;
}
</style>
