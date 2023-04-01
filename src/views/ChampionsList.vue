<template>
  <div>
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
      <champion-card v-for="champ in searchChamp" :key="champ.key" :championKey="champ.key"> </champion-card>
    </div>
  </div>
</template>

<script>
import ChampionCard from "@/components/champions/ChampionCard";
export default {
  components: {ChampionCard},
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