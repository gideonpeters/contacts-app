<template>
    <div class="create-contact bg-white px-4">
        <div class="row">
            <div class="col">
                <div class="py-3 pl-5 title">Create new Contact</div>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-2">
                <div class="pl-5"><i class="mdi mdi-account-circle icon-grey"></i></div>
            </div>
            <div class="col-3">
                <div>
                    <label for="">First Name</label>
                    <input class="form-control" type="text" placeholder="First Name">
                </div>
            </div>
            <div class="col-3">
                <div>
                    <label for="">Last Name</label>
                    <input class="form-control" type="text" placeholder="Last Name">
                </div>
            </div>
        </div>
        <div class="row align-items-center mt-3">
            <div class="col-2">
                <div class="pl-5 ml-4"><i class="mdi mdi-36px mdi-domain mdi-dark"></i></div>
            </div>
            <div class="col-3">
                <div>
                    <label for="">Company</label>
                    <input class="form-control" type="text" placeholder="Company">
                </div>
            </div>
            <div class="col-3">
                <div>
                    <label for="">Job Title</label>
                    <input class="form-control" type="text" placeholder="Job Title">
                </div>
            </div>
        </div>
        <div class="row align-items-center mt-5">
            <div class="col-2">
                <div class="pl-5 ml-4"><i class="mdi mdi-36px mdi-email-outline mdi-dark"></i></div>
            </div>
            <div class="col-6">
                <div>
                    <label for="">Email</label>
                    <input class="form-control" type="text" placeholder="Email">
                </div>
            </div>
        </div>
        <div class="row align-items-center mt-5">
            <div class="col-2">
                <div class="pl-5 ml-4"><i class="mdi mdi-36px mdi-phone-outline mdi-dark"></i></div>
            </div>
            <div class="col-6">
                <div>
                    <label for="">Phone</label>
                    <input class="form-control" type="text" placeholder="Phone">
                </div>
            </div>
        </div>
        <div class="row align-items-center mt-5">
            <div class="col-2">
                <div class="pl-5 ml-4"><i class="mdi mdi-36px mdi-dark mdi-note-outline"></i></div>
            </div>
            <div class="col-6">
                <div>
                    <label for="">Notes</label>
                    <input class="form-control" type="text" placeholder="Notes">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>


<style lang="scss" scoped>
.create-contact{
    z-index: 1050;
    color: black;
    min-width: 700px;

    .mdi-account-circle{
        font-size: 5rem;
    }

    .title{
        border-bottom: 0.5px solid lightgrey; 
        font-weight: bold;
        font-size: 1.1rem;
    }

    .icon-grey{
        color: lightgrey;
    }

    label{
        font-size: 0.9rem;
        color: #1a73e8;
    }

    input{
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0px;

        &.form-control:focus{
            box-shadow: none;
            border-color: #1a73e8;
        }
    }
}
</style>
