<template>
    <div class="contact-table px-4">
        <div style="width: 100%">
            <div class="row pb-4 mb-3 thead">
                <div class="col">Name</div>
                <div class="col">Email</div>
                <div class="col">Phone Number</div>
                <!-- <div class="col">Address</div> -->
                <div class="col">Company</div>
                <!-- <div class="col">Birthday</div> -->
            </div>
            <div class="row tbody py-2 align-items-center" :style="{backgroundColor: selectedColor}" @mouseover="selection" @mouseleave="revertToNormal">
                <div class="col-1">
                    <div class="checkbox text-center" v-if="hovering === 1">
                        <i class="mdi mdi-24px mdi-check-box-outline" @click="selectedDiv" v-if="checked"></i>
                        <i class="mdi mdi-24px mdi-checkbox-blank-outline" @click="selected" v-if="(hovering === 1) && !checked"></i>
                    </div> 
                    <div class="img" :style="{backgroundImage: 'url('+img+')'}"></div>
                </div>
                <div class="col-2">
                    <div class="move-left">
                        Gideon Peters
                    </div>
                </div>
                <div class="col-3">gideonpeters85@gmail.com</div>
                <div class="col-3">+2347089324817</div>
                <div class="col-3">Reftek</div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col">Name</div>
            <div class="col">Email</div>
            <div class="col">Phone Number</div>
            <div class="col">Address</div>
            <div class="col">Company</div>
            <div class="col">Birthday</div>
        </div>
        <div class="row">
            <div class="col">

            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div> -->
    </div>
</template>

<script>
export default {
    props: [
        'contactInfo'
    ],
    data() {
        return {
            img: 'https://www.placehold.it/300',
            hovering: 0,
            checked: false,
            selectedColor: 'white',
        }
    },
    methods: {
        selection() {
            this.hovering = 1;
            this.img = '';
        },
        revertToNormal() {
            // this.hovering = 0;
            // this.img = 'https://www.placehold.it/300'
        },
        selected() {
            this.checked = !this.checked;
            this.selectedColor = 'whitesmoke';
            
        },
        selectedDiv() {
            this.checked = !this.checked;
            
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
        hovering(){
            
        }
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

    .thead{
        border-bottom: 0.5px solid lightgrey;
    }

    .tbody{
        letter-spacing: .01428571em;
        font-family: Roboto,Arial,sans-serif;
        font-size: 0.95rem;
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
    }
}



.move-left{
    margin-left: -18.5%;
}
</style>

