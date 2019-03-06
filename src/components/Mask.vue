<template>
  <div class="mask" v-if="showModal" @click="toggleModal"></div>
</template>

<script>
export default {
    computed: {
        showModal() {
         return this.$store.getters.getShowModalStatus;
     },
    },
    methods: {
        toggleModal() {
            return this.$store.commit('toggleModal');
        }
    }
};
</script>

<style scoped>
  .mask {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 1020;
  }
</style>