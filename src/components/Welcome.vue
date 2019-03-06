<template>
    <div class="h-100 ">
        <div class="row justify-content-center">
            <div class="col">
                <div class="text-center welcome">Welcome</div>
                <div class="img" :style="{backgroundImage: 'url('+image+')'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: require('./../assets/welcome.svg')
        }
    }
}
</script>


<style lang="scss" scoped>
.img{
    background-position: center, center;
    background-size: contain;
    background-repeat: no-repeat;
    width: auto;
    height: 60vh;
}

.welcome{
    font-size: 4rem;
    font-weight: 500;
    color: #1a73e8;
}
</style>

