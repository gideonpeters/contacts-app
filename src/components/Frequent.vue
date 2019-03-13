<template>
    <div>
        <!-- <contact-table :contact="conta"/>  -->
        <h1>Hlooooooooooo</h1>
  <v-app id="inspire">
    <v-form>
      <v-container>
        <v-layout row wrap>
  
          <v-flex xs12 sm6 md12>
            <v-text-field
              label="Regular"
            ></v-text-field>
          </v-flex>
  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Regular"
              placeholder="Placeholder"
            ></v-text-field>
          </v-flex>
  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Solo"
              solo
            ></v-text-field>
          </v-flex>
  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Solo"
              placeholder="Placeholder"
              solo
            ></v-text-field>
          </v-flex>
  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Box"
              box
            ></v-text-field>
          </v-flex>
  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Box"
              placeholder="Placeholder"
              box
            ></v-text-field>
          </v-flex>
  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Outline"
              outline
            ></v-text-field>
          </v-flex>
  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Outline"
              placeholder="Placeholder"
              outline
            ></v-text-field>
          </v-flex>
  
        </v-layout>
      </v-container>
    </v-form>
  </v-app>
</div>
</template>

<script>
// import ContactTable from './ContactTable.vue';

// export default {
//     components: {
//         ContactTable,
//     },
//     computed: {
//         allContacts() {
//             return this.$store.getters.getContacts
//         }
//     }
// }
</script>


<style lang="scss" scoped>
div{
    background-color: white;
}
</style>

