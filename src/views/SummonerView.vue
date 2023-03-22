<template>
  <h1>Summoner Info</h1>
  <select-region @selected-region="getSelectedRegion"></select-region>
  <input type="search" placeholder="Search..." v-model="selectedSummoner">
  <button @click="fetchSummonerInfo">go</button>
</template>

<script>
import SelectRegion from "@/components/UI/SelectRegion";
import axios from "axios";

export default {
  components: {SelectRegion},
  data(){
    return {
      selectedRegion: null,
      selectedSummoner: '',
    }
  },
  methods: {
    getSelectedRegion(region){
      this.selectedRegion = region
    },
    fetchSummonerInfo(){
      if(this.selectedRegion && this.apiKey && this.selectedSummoner){
        axios.get('https://'+this.selectedRegion+'.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+this.selectedSummoner+'?api_key='+this.apiKey+'').then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        }).finally(()=> {
          //todo I WILL NEED STORE UPDATE
          console.log('push route summoner')
        })
        }
    }
  },
  computed: {
    apiKey(){
      return this.$store.getters['getApiKey']
    }
  }
}
</script>

<style scoped>

</style>