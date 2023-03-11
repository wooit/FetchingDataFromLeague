<template>
  <h1> Champions List </h1>
  <ul v-for="champ in displayAllChamps" :key="champ.id"> {{ champ }}</ul>
</template>

<script>
// Here i want a search area for searching champion
// Displaying image for every champion (clickable)
// possibility to filter champions
// possibility to sort champions
export default {
  data(){
    return {

    }
  },
  computed: {
    displayAllChamps(){
      return this.$store.getters['champions/getChampionNameAndId']
    }
  }
}

</script>




<style scoped>

</style>