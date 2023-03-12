<template>
  <h1> Champions List </h1>
  <input v-model="selectedChampion" @click="resetSorting" type="text" autocomplete="off" placeholder="search for a champion">
  <button @click="resetSearch">reset</button>
  <br>
  <button @click="sortBy('Tank')">Tank</button>
  <button @click="sortBy('Fighter')">Fighter</button>
  <button @click="sortBy('Mage')">Mage</button>
  <button @click="sortBy('Assassin')">Assassin</button>
  <button @click="sortBy('Marksman')">Marksman</button>
  <button @click="sortBy('Support')">Support</button>
  <ul v-for="champ in searchChamp" :key="champ.id"> {{ champ.id }}</ul>
</template>

<script>
// Here I want a search area for searching champion
// Displaying image for every champion (clickable)
// possibility to filter champions
// possibility to sort champions
export default {
  data() {
    return {
      selectedChampion: '',
      sortingByRole: '',
    }
  },
  methods: {
    sortBy(role){
      this.selectedChampion = ''
      this.sortingByRole = role
    },
    resetSearch(){
      this.selectedChampion = ''
      this.sortingByRole = ''
    },
    resetSorting(){
      this.sortingByRole = ''
    }
  },
  computed: {
    searchChamp() {
      if(this.sortingByRole === ''){
        return this.$store.getters['champions/getChampionNameAndId'].filter(champ => champ.id.toLowerCase().includes(this.selectedChampion))
      } else {
        return this.$store.getters['champions/getChampionsByRoles'].filter((champ) => champ.tags.includes(this.sortingByRole))
      }
    },
  }
}

</script>




<style scoped>

</style>