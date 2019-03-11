<template>
    <div class="contact-detail">
        <div class="row align-items-center">
            <div class="col-2">
                <div class="img" :style="{backgroundImage: 'url('+contact.picture+')'}"></div>
            </div>
            <div class="col">
                <div class="contact-name"> {{ contact.name }} </div>
            </div>
            <div class="col">
                <div class="align-items-center">
                        <span class="mr-3"><i class="mdi mdi-24px mdi-star"></i></span>
                        <span class="mr-3"><i class="mdi mdi-24px mdi-pencil-outline"></i></span>
                        <span class="mr-3"><i class="mdi mdi-24px mdi-dots-vertical"></i></span>
                    </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <div class="title pt-5 mb-3">Contact Details</div>
            </div>
        </div>
        <div class="row mt-5 align-items-center">
            <div class="col-1">
                <i class="mdi mdi-36px mdi-phone-outline mdi-dark"></i>
            </div>
            <div class="col">
                <div> {{ contact.phone }} </div>
            </div>
        </div>
        <div class="row mt-5 align-items-center">
            <div class="col-1">
                <i class="mdi mdi-36px mdi-email-outline mdi-dark"></i>
            </div>
            <div class="col">
                <div> {{ contact.email }} </div>
            </div>
        </div>
        <div class="row mt-5 align-items-center">
            <div class="col-1">
                <i class="mdi mdi-36px mdi-domain mdi-dark"></i>
            </div>
            <div class="col">
                <div> {{ contact.company }} </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            contact: {},
        }
    },
    mounted() {
        var name = this.$route.params.name;
        this.contact = this.$store.getters.getSelectedContactByName(name);
    }
}
</script>

<style lang="scss" scoped>
.contact-detail{
    letter-spacing: .01785714em;
    font-family: Roboto,Arial,sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.25rem;
    // color: #5f6368;
    overflow: hidden;
    padding: 4px;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;

    .contact-name{
        font-family: 'Google Sans', Helvetica, Arial, sans-serif;
        font-size: 2rem;
    }
    
    .title{
        border-top: 0.5px solid lightgrey;
        font-size: 1.2rem;
    }

    .img{
        background-position: center, center;
        background-size: contain;
        min-width: auto;
        min-height: 80px;
        background-repeat: no-repeat;
    }

    .mdi-star::before, .mdi-check-box-outline::before{
        color: #1a73e8;
    }
}
</style>
