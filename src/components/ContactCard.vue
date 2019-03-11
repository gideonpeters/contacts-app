<template>
    <div class="contact-table">
        <div class="row tbody ml-1 align-items-center" :style="{backgroundColor: selectedColor, borderLeft: selectedBorder}" @mouseover="selection" @mouseleave="revertToNormal">
            <div class="col-1 col-md-1 col-sm-2">
                <div class="checkbox text-center" v-if="hovering === 1">
                    <i class="mdi mdi-check-box-outline" @click="selectedDiv" v-if="checked"></i>
                    <i class="mdi mdi-checkbox-blank-outline" @click="selected" v-if="(hovering === 1) && !checked"></i>
                </div> 
                <div class="img" :style="{backgroundImage: 'url('+img+')'}"></div>
            </div>
            <div class="col-2 col-md-2 col-sm-4">
                <div class="move-left" @click="goToContact">
                    {{ contact.name }}
                </div>
            </div>
            <div class="col-3 col-md-3 d-none d-lg-block">
                <div @click="goToContact">{{ contact.email }}</div>
            </div>
            <div class="col-3 col-md-3 d-none d-sm-block">
                <div @click="goToContact">{{ contact.phone }}</div>
            </div>
            <div class="col-3 col-md-3 d-none d-lg-block align-items-center">
                <div class="align-items-center">
                    <span class="pl-5 mr-5">{{ contact.company }}</span>
                    <span class="mr-3" v-if="(hovering === 1) && !checked"><i class="mdi mdi-24px mdi-star"></i></span>
                    <span class="mr-3" v-if="(hovering === 1) && !checked"><i class="mdi mdi-24px mdi-pencil-outline"></i></span>
                    <span class="mr-3" v-if="(hovering === 1) && !checked"><i class="mdi mdi-24px mdi-dots-vertical" @click="toggleOptions"></i></span>
                </div>
                <div class="options position-absolute bg-white rounded shadow-lg" v-if="option" @click="deleteContact">
                    <div class="p-3"><i class="mdi mdi-trash-can-outline mr-3"></i> Delete</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'contact',
    ],
    data() {
        return {
            img: 'https://www.placehold.it/300',
            hovering: 0,
            checked: false,
            selectedColor: 'white',
            selectedBorder: '',
            option: false,
        }
    },
    methods: {
        goToContact(){
            this.$router.push({ name: 'contact.details' , params: {name: this.contact.name} })
        },
        selection() {
            this.hovering = 1;
            this.selectedColor = 'whitesmoke';
            this.img = '';
        },
        revertToNormal(){
            if(!this.checked){
                this.hovering = 0
                this.img = 'https://www.placehold.it/300'
                this.selectedColor = 'white';
            }
        },
        selected() {
            this.checked = !this.checked;
            this.selectedColor = 'whitesmoke';
            this.selectedBorder = '3px solid #1a73e8';
            this.$store.commit('selectContact', this.contact);
        },
        selectedDiv() {
            this.img = ''
            this.checked = !this.checked;  
            this.selectedBorder = '';
            this.$store.commit('deselectContact', this.contact) 
        },
        toggleOptions() {
            this.option = !this.option;
        },
        deleteContact() {
            this.$store.commit('deleteContact', this.contact)
        }
    },
    watch: {
        checked(){
            if(this.checked){
                this.img = ''
            } else if(!this.checked){
                this.selectedColor = 'white';
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.img{
    background-position: center, center;
    background-size: contain;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-repeat: no-repeat;
}

.icon-start{
    margin-left: 120px;
}

.options{
    // background-color: white;
    // min-height: 50px;
    // min-width: 90px;
    left: 10rem;
}

.checkbox{
    position: absolute;
    width: 48px;
    height: 48px;
    // background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .mdi{
        position: absolute;
    }
}

div.contact-table{
    letter-spacing: .01785714em;
    font-family: Roboto,Arial,sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #5f6368;
    overflow: hidden;
    padding: 0px;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;

    .thead{
        border-bottom: 0.5px solid lightgrey;
    }

    .tbody{
        letter-spacing: .01428571em;
        font-family: Roboto,Arial,sans-serif;
        font-size: 0.95rem;
        min-height: 85px;
        font-weight: 400;
        line-height: 1.25rem;
        color: #202124;
        &:hover{
            background-color: whitesmoke;
            cursor: pointer;
        }
        &:focus{
            background: whitesmoke;
        }

        .mdi-star::before, .mdi-check-box-outline::before{
            color: #1a73e8;
        }

        .mdi-check-box-outline, .mdi-checkbox-blank-outline{
            font-size: 2rem;
        }
    }
}



.move-left{
    margin-left: -18.5%;
}
</style>

