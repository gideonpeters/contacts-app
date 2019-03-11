<template>
    <div class="create-contact bg-white px-4">
        <div class="row">
            <div class="col">
                <div class="py-3 pl-5 title">Create new Contact</div>
            </div>
        </div>
        <div class="row align-items-center mt-3">
            <div class="col-2">
                <div class="pl-5"><i class="mdi mdi-account-circle icon-grey"></i></div>
            </div>
            <div class="col-3">
                <div>
                    <label >
                        <span :id="firstNameFilled" v-show="firstNameSelected"> First Name </span>
                    </label>
                    <input class="form-control" type="text" placeholder="First Name" v-model="firstName" @focus="doThis('firstNameField')" @blur="doThat('firstNameField')">
                </div>
            </div>
            <div class="col-3">
                <div>
                    <label for="">
                        <span :id="lastNameFilled" v-show="lastNameSelected">Last Name</span>
                    </label>
                    <input class="form-control" type="text" placeholder="Last Name" v-model="lastName" @focus="doThis('lastNameField')" @blur="doThat('lastNameField')">
                </div>
            </div>
        </div>
        <div class="row align-items-center mt-3">
            <div class="col-2">
                <div class="pl-5 ml-4"><i class="mdi mdi-36px mdi-domain mdi-dark"></i></div>
            </div>
            <div class="col-3">
                <div>
                    <label for="">
                        <span :id="companyFilled" v-show="companySelected">Company</span>
                    </label>
                    <input class="form-control" type="text" placeholder="Company" v-model="company" @focus="doThis('companyField')" @blur="doThat('companyField')">
                </div>
            </div>
            <div class="col-3">
                <div>
                    <label for="">
                        <span :id="jobTitleFilled" v-show="jobTitleSelected">Job Title</span>
                    </label>
                    <input class="form-control" type="text" placeholder="Job Title" v-model="jobTitle" @focus="doThis('jobTitleField')" @blur="doThat('jobTitleField')">
                </div>
            </div>
        </div>
        <div class="row align-items-center mt-5">
            <div class="col-2">
                <div class="pl-5 ml-4"><i class="mdi mdi-36px mdi-email-outline mdi-dark"></i></div>
            </div>
            <div class="col-6">
                <div>
                    <label for="">
                        <span :id="emailFilled" v-show="emailSelected">Email</span>
                    </label>
                    <input class="form-control" type="text" placeholder="Email" v-model="email" @focus="doThis('emailField')" @blur="doThat('emailField')">
                </div>
            </div>
        </div>
        <div class="row align-items-center mt-5">
            <div class="col-2">
                <div class="pl-5 ml-4"><i class="mdi mdi-36px mdi-phone-outline mdi-dark"></i></div>
            </div>
            <div class="col-6">
                <div>
                    <label for="">
                        <span :id="phoneFilled" v-show="phoneSelected">Phone</span>
                    </label>
                    <input class="form-control" type="text" placeholder="Phone" v-model="phone" @focus="doThis('phoneField')" @blur="doThat('phoneField')">
                </div>
            </div>
        </div>
        <div class="row align-items-center mt-5">
            <div class="col-2">
                <div class="pl-5 ml-4"><i class="mdi mdi-36px mdi-dark mdi-note-outline"></i></div>
            </div>
            <div class="col-6">
                <div>
                    <label for="">
                        <span :id="noteFilled" v-show="noteSelected">Notes</span>
                    </label>
                    <input class="form-control" type="text" placeholder="Notes" v-model="note" @focus="doThis('noteField')" @blur="doThat('noteField')">
                </div>
            </div>
        </div>
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
            firstName: '',
            lastName: '',
            company: '',
            jobTitle: '',
            email: '',
            phone: '',
            note: '',
            firstNameSelected: false,
            lastNameSelected: false,
            companySelected: false,
            jobTitleSelected: false,
            emailSelected: false,
            phoneSelected: false,
            noteSelected: false,
            firstNameFilled: 'firstNameFilled',
            lastNameFilled: 'firstNameFilled',
            companyFilled: 'firstNameFilled',
            jobTitleFilled: 'firstNameFilled',
            emailFilled: 'firstNameFilled',
            phoneFilled: 'firstNameFilled',
            noteFilled: 'firstNameFilled',
        }
    },
    methods: {
        showLabel(field){
            switch (field) {
                case 'firstNameField':
                    this.firstNameSelected = !this.firstNameSelected
                    break;
                case 'lastNameField':
                    this.lastNameSelected = !this.lastNameSelected
                    break;
                case 'companyField':
                    this.companySelected = !this.companySelected
                    break;
                case 'jobTitleField':
                    this.jobTitleSelected = !this.jobTitleSelected
                    break;
                case 'emailField':
                    this.emailSelected = !this.emailSelected
                    break;
                case 'phoneField':
                    this.phoneSelected = !this.phoneSelected
                    break;
                case 'noteField':
                    this.noteSelected = !this.noteSelected
                    break;
                default:
                    var x = 0; x + 1;
            }
        },
        doThis(field) { 
            switch (field) {
                case 'firstNameField':
                    this.firstNameFilled = 'firstNameFilled'
                    this.firstNameSelected = true
                    break;
                case 'lastNameField':
                    this.lastNameFilled = 'firstNameFilled'
                    this.lastNameSelected = true
                    break;
                case 'companyField':
                    this.companyFilled = 'firstNameFilled'
                    this.companySelected = true
                    break;
                case 'jobTitleField':
                    this.jobTitleFilled = 'firstNameFilled'
                    this.jobTitleSelected = true
                    break;
                case 'emailField':
                    this.emailFilled = 'firstNameFilled'
                    this.emailSelected = true
                    break;
                case 'phoneField':
                    this.phoneFilled = 'firstNameFilled'
                    this.phoneSelected = true
                    break;
                case 'noteField':
                    this.noteFilled = 'firstNameFilled'
                    this.noteSelected = true
                    break;
                default:
                    var x = 0; x + 1;
            }   
        },
        doThat(field) {
            switch (field) {
                case 'firstNameField':
                    if(this.firstName){
                        this.firstNameFilled = 'filledField'
                    } else if(!this.firstName) {
                        this.firstNameSelected = false
                    }
                    break;
                case 'lastNameField':
                    if(this.lastName){
                        this.lastNameFilled = 'filledField'
                    } else if(!this.lastName) {
                        this.lastNameSelected = false
                    }
                    break;
                case 'companyField':
                    if(this.company){
                        this.companyFilled = 'filledField'
                    } else if(!this.company) {
                        this.companySelected = false
                    }
                    break;
                case 'jobTitleField':
                    if(this.jobTitle){
                        this.jobTitleFilled = 'filledField'
                    } else if(!this.jobTitle) {
                        this.jobTitleSelected = false
                    }
                    break;
                case 'emailField':
                    if(this.email){
                        this.emailFilled = 'filledField'
                    } else if(!this.email) {
                        this.emailSelected = false
                    }
                    break;
                case 'phoneField':
                    if(this.phone){
                        this.phoneFilled = 'filledField'
                    } else if(!this.phone) {
                        this.phoneSelected = false
                    }
                    break;
                case 'noteField':
                    if(this.note){
                        this.noteFilled = 'filledField'
                    } else if(!this.note) {
                        this.noteSelected = false
                    }
                    break;
                default:
                    var x = 0; x + 1;
            }
        },
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
        }
    },
}
</script>


<style lang="scss" scoped>
.create-contact{
    z-index: 1050;
    color: black;
    min-width: 700px;

    .mdi-account-circle{
        font-size: 5rem;
        cursor: pointer;
    }

    .title{
        border-bottom: 0.5px solid lightgrey; 
        font-weight: bold;
        font-size: 1.1rem;
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
</style>
