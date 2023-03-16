<template>
  <router-view></router-view>
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
  <div>
    <ul v-for="champ in searchChamp" :key="champ.id" @click="openChampionInfos(champ.id, champ.key)"> {{ champ.id }}</ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      selectedChampion: '',
      sortingByRole: '',
      championName: null,
      champKey: null,
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
    },
    openChampionInfos(champName, key){
      this.championName = champName
      this.champKey = key
      //todo need a more elegant refactor
      //champKey with 2 char for retrieving spell ability video later
      if(this.champKey.length === 2){
        this.champKey = 0+this.champKey
      }
      this.$router.push({ name: 'selected-champion', params: {
          name: this.championName,
          key: this.champKey
      }})
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