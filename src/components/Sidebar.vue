<template>
    <div id="sidebar" class="sidebar">
        <div class="row">
            <div class="col-10">
                <div class="btn btn-white ml-2 mt-1 mb-3 p-2">
                    <div class="row align-items-center">
                        <div class="col-1">
                            <svg width="36" height="36" viewBox="0 0 36 36">
                                <path fill="#34A853" d="M16 16v14h4V20z"></path>
                                <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                                <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                                <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                                <path fill="none" d="M0 0h36v36H0z"></path>
                            </svg>
                        </div>
                        <div class="col">
                            <div class="contact">Create contact</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <router-link tag="div" class="nav-side-link py-2" active-class="active" to="/" exact>
                    <div class="row align-items-center">
                        <div class="col-1">
                            <i class="mdi mdi-account-outline icon-grey mr-5"></i>
                        </div>
                        <div class="col">
                            <div class="pt-1 pl-3">
                                Contacts
                            </div>  
                        </div>
                    </div>   
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link tag="div" class="nav-side-link py-2" active-class="active" to="/frequent" exact>
                    <div class="row align-items-center">
                        <div class="col-1">
                            <i class="mdi mdi-history icon-grey mr-5"></i>
                        </div>
                        <div class="col">
                            <div class="pt-1 pl-3">
                                Frequently Contacted
                            </div>
                        </div>
                    </div>       
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link tag="div" class="nav-side-link py-2" to="/">
                    <div class="row align-items-center">
                        <div class="col-1">
                            <i class="mdi mdi-history icon-grey mr-5"></i>
                        </div>
                        <div class="col">
                            <div class="pt-1 pl-3">
                                Deleted Contacts
                            </div>
                        </div>
                    </div>       
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link tag="div" class="nav-side-link py-2" to="/">
                    <div class="row align-items-center">
                        <div class="col-1">
                            <i class="mdi mdi-history icon-grey mr-5"></i>
                        </div>
                        <div class="col">
                            <div class="pt-1 pl-3">
                                Trash
                            </div>
                        </div>
                    </div>       
                </router-link>
            </div>
        </div>
        <hr>
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
.btn-white{
    background-color: white;
    border-radius: 24px;
    border: 0.8px solid whitesmoke;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);

    &:hover,
    &:focus{
        box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12); 
    }
}

.contact{
    font-weight: 500;
}

.icon-grey{
    &:focus, &:active, &.active, &:hover{
        color: #1a73e8 !important;
    }
}

.mdi{
    color: #616161;
    &::before{
        font-size: 1.5rem;
    }

    &:focus, &.active, &:hover{
        color: #1a73e8 !important;
    }    
}

hr{
    margin-top: 5px;
    margin-bottom: 5px;
}

.sidebar{
    position: fixed;
    background-color: white;
}

#sidebar {
        min-width: 280px;
        min-height: 100vh;
        // margin-right: 50px;
        // display: flex;
        // flex-direction: column;
        .nav-side-link {
            padding-left: 30px;
            font-weight: 500;
            width: 280px;
            text-decoration: none;
            color: black;
            cursor: pointer;
            
            &:hover{
                background-color: #f1f3f4; 
                border-radius: 0 24px 24px 0;
            }

            &.active, &:active, &:focus {
                background-color: #e8f0fe;
                color: #1a73e8;
                border-radius: 0 24px 24px 0;
            }
        }
    }

#sidebar.active {
    margin-left: -250px;
    color: #1a73e8;
}
</style>
