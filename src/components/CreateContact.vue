<template>
    <div class="create-contact bg-white px-4">
        <div class="row">
            <div class="col">
                <div class="py-3 pl-5 title">Create new Contact</div>
            </div>
        </div>
        <v-app class="bg-white mt-3">
            <v-form>
                <v-container>
                    <v-layout row wrap align-items-center>
                        <v-flex xs2 sm2 md1>
                            <div @click="launchFilePicker">
                                <i class="mdi mdi-60px mdi-account-circle mdi-dark" @mouseover="showCamera" @mouseout="hideCamera"></i>
                            </div>
                            <div v-if="isHovered" class="camera position-absolute text-center"><i class="mdi mdi-24px mdi-camera-outline"></i></div>
                            <input type="file"
                                    ref="file"
                                    :name="uploadFieldName"
                                    @change="onFileChange($event.target.name, $event.target.files)"
                                    style="display:none">
                        </v-flex>
                        <v-flex xs12 sm5 md3>
                            <v-text-field v-model="firstName" label="First Name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm5 md3>
                            <v-text-field v-model="lastName" label="Last Name"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap align-items-center>
                        <v-flex xs2 sm2 md1>
                            <div><i class="mdi mdi-36px mdi-domain mdi-dark"></i></div>
                        </v-flex>
                        <v-flex xs12 sm5 md3>
                            <v-text-field v-model="company" label="Company"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm5 md3>
                            <v-text-field v-model="jobTitle" label="Job Title"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap align-items-center>
                        <v-flex xs2 sm2 md1>
                            <div><i class="mdi mdi-36px mdi-email-outline mdi-dark"></i></div>
                        </v-flex>
                        <v-flex xs10 sm10 md6>
                            <v-text-field v-model="email" label="Email"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap align-items-center style="min-width: 250px">
                        <v-flex xs2 sm2 md1>
                            <div><i class="mdi mdi-36px mdi-phone-outline mdi-dark"></i></div>
                        </v-flex>
                        <v-flex xs12 sm10 md1 d-flex>
                            <v-select single-line append-icon :items="countries" return-object item-text="name">
                                <template slot="selection" slot-scope="data">
                                    <div class="" style="color: black"> 
                                        <img style="width: 40px;" class="hint-flag" :src="data.item.flag"> 
                                    </div>
                                </template>

                                <template slot="item" slot-scope="data">
                                    <v-list-tile-content class="px-3">
                                        <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                                        <v-list-tile-sub-title v-html="data.item.dialCode"></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <div>
                                        <img style="width: 25px" :src="data.item.flag">
                                    </div>
                                </template>
                            </v-select>
                        </v-flex>
                        <v-flex xs7 md5>
                            <v-text-field v-model="phone" label="Phone" type="tel"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap align-items-center>
                        <v-flex xs2 sm2 md1>
                            <div><i class="mdi mdi-36px mdi-note-outline mdi-dark"></i></div>
                        </v-flex>
                        <v-flex xs10 sm10 md6>
                            <v-text-field v-model="note" label="Notes"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
        </v-app>
        
        <div class="row mt-5 utility-bar py-3">
            <div class="col-6">
                <div class="pl-5 ml-4 option-text">More Fields</div>
            </div>
            <div class="col-1">
                <div class="option-text" @click="clearForm">Cancel</div>
            </div>
            <div class="col-1">
                <div class=" ml-4 option-text" @click="saveContact">Save</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            img: 'https://www.placehold.it/300',
            firstName: '',
            lastName: '',
            company: '',
            jobTitle: '',
            email: '',
            phone: '',
            note: '',
            countries: this.$store.getters.getCountries,
            uploadFieldName: 'file',
            maxSize: 1024,
            errorDialog: null,
            errorText: '',
            isHovered: false,
        }
    },
    computed: {
        // countries() {
        //     return this.$store.getters.getCountries;
        // }
    },
    methods: {
        clearForm(){
            this.firstName = ''
            this.lastName = ''
            this.phone = ''
            this.email = ''
            this.jobTitle = ''
            this.company = ''
            this.note = ''
        },
        saveContact(){
            var body = {
                name: this.firstName + ' ' + this.lastName,
                company: this.company,
                email: this.email,
                note: this.note,
                phone: this.phone,
                jobTitle: this.jobTitle,
            }

            this.$store.dispatch('saveNewContact', body)
            this.$router.push({ name: 'contact' })
        },
        launchFilePicker(){
            this.$refs.file.click();
        },
        onFileChange(fieldName, file) {
            const { maxSize } = this
            let imageFile = file[0] 
    
            //check if user actually selected a file
            if (file.length > 0) {
                let size = imageFile.size / maxSize / maxSize

                if (!imageFile.type.match('image.*')) {
                    // check whether the upload is an image
                    this.errorDialog = true
                    this.errorText = 'Please choose an image file'
                } else if (size > 1) {
                    // check whether the size is greater than the size limit
                    this.errorDialog = true
                    this.errorText = 'Your file is too big! Please select an image under 1MB'
                } else {
                    // Append file into FormData & turn file into image URL
                    let formData = new FormData()
                    let imageURL = URL.createObjectURL(imageFile)
                    formData.append(fieldName, imageFile)
                    // Emit FormData & image URL to the parent component
                    this.$emit('input', { formData, imageURL })
                }
            }
        },
        showCamera() {
            this.isHovered = true;
        },
        hideCamera() {
            this.isHovered = false;
        }
    },
}
</script>


<style lang="scss" scoped>
.create-contact{
    z-index: 1050;
    color: #1a73e8;
    min-width: 700px;

    .mdi-account-circle{
        font-size: 5rem;
        cursor: pointer;
    }

    .img{
        background-position: center, center;
        background-size: contain;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-repeat: no-repeat;
    }

    .title{
        border-bottom: 0.5px solid lightgrey; 
        font-weight: bold;
        font-size: 1.1rem;
        color: black;
    }

    .utility-bar{
        border-top: 0.5px solid lightgrey; 
    }

    .icon-grey{
        color: lightgrey;
    }

    label{
        font-size: 0.9rem;
            
            #firstNameFilled {
                color: #1a73e8;
            }

            #filledField{
                color: lightgrey;
            }
    }

    .option-text{
        font-size: 1rem;
        color: #1a73e8;
        font-weight: 500;
        cursor: pointer;
    }

    input{
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0px;
        padding: 0px;

        &.form-control:focus{
            box-shadow: none;
            border-color: #1a73e8;
            border-width: 2px;
            transition:  border-bottom 0.9s ease, border-color 0.6s ease;     
        }
    }
}

.mine{
    margin-left: -200px;
}

.camera{
    position: absolute;
    top: 60px;
    left: 50px;
}
</style>
