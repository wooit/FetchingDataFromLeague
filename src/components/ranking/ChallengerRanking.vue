<template>
  <h3>challengers = the 300 most rated players in a given region </h3>
  <select-region @selected-region="getSelectedRegion"></select-region>
  <select-queue v-if="selectedRegion" @selected-queue="getSelectedQueue"></select-queue>
  <section v-if="requestIsValid">
    <ul v-for="challenger in challengersSortedByPoints" :key="challenger.summonerName">
      {{ challenger.summonerName }} : {{ challenger.leaguePoints }}
    </ul>
  </section>
</template>

<script>
// // data for ranking here: https://developer.riotgames.com/apis#league-v4/GET_getLeagueById

import SelectRegion from "@/components/UI/SelectRegion";
import SelectQueue from "@/components/UI/SelectQueue";
import axios from "axios";

export default {
  components: {SelectQueue, SelectRegion},
  data(){
    return {
      selectedRegion: null,
      selectedQueue: null,
      challengersSortedByPoints: [],
      requestIsValid: false
    }
  },
  methods: {
    getSelectedRegion(region){
      this.selectedRegion = region
    },
    getSelectedQueue(queue){
      this.selectedQueue = queue
      if(this.selectedRegion && this.selectedQueue){
        this.fetchLeagueData()
      }
    },
    fetchLeagueData(){
      axios.get('https://'+this.selectedRegion+'.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/'+this.selectedQueue+'?api_key='+this.apiKey).then(response => {
        this.requestIsValid = true
        const challengersData = response.data.entries
        this.challengersSortedByPoints = challengersData.sort((a,b) =>b.leaguePoints - a.leaguePoints)
        //todo i might need to make another call for fetching summoner icon and summoner info on click
      }).catch(error =>{
        console.log(error)
      })
    }
  },
  computed: {
    apiKey(){
      return this.$store.getters['getApiKey']
    }
  }
}
</script>