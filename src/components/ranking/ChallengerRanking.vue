<template>
  <div>
    <h3>challengers = the 300 most rated players in a given region </h3>
    <select-region @selected-region="getSelectedRegion" ></select-region>
    <select-queue @selected-queue="getSelectedQueue" ></select-queue>

    <section v-if="selectedRegion && selectedQueue">
      <h3>
        {{ computedChoices }}
      </h3>
      <challenger-table :data="formattedDataChallenger" ></challenger-table>
    </section>
  </div>
</template>

<script>
// // data for ranking here: https://developer.riotgames.com/apis#league-v4/GET_getLeagueById

import SelectRegion from "@/components/UI/SelectRegion";
import SelectQueue from "@/components/UI/SelectQueue";
import axios from "axios";
import ChallengerTable from "@/components/ranking/subRankingComponent/ChallengerTable";

export default {
  components: {SelectQueue, SelectRegion, ChallengerTable},
  data(){
    return {
      selectedRegion: null,
      selectedQueue: null,
      formattedDataChallenger: [],
      // profileIconId: '',
    }
  },
  methods: {
    getSelectedRegion(region){
      this.formattedDataChallenger = []
      this.selectedRegion = region
      if(this.selectedRegion && this.selectedQueue){
        this.fetchLeagueChallengerData()
      }
    },
    getSelectedQueue(queue){
      this.selectedQueue = queue
      this.formattedDataChallenger = []
      if(this.selectedRegion && this.selectedQueue){
        this.fetchLeagueChallengerData()
      }
    },
    fetchLeagueChallengerData(){
      axios.get('https://'+this.selectedRegion+'.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/'+this.selectedQueue+'?api_key='+this.apiKey).then(response => {
        // this.requestIsValid = true
        const resp = response.data.entries
        const challengersSortedByPoints = resp.sort((a,b) =>b.leaguePoints - a.leaguePoints)
        //todo I CANT GET ALL DATA AT ONCE => ERROR 429 TOO MANY REQUESTS
        //todo I NEED A PAGINATION SYSTEM
        challengersSortedByPoints.forEach(challenger => {
          // let summonerNameWithoutSpace = challenger.summonerName.replace(/\s+/g, '')
          // axios.get('https://'+this.selectedRegion+'.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+summonerNameWithoutSpace+'?api_key='+this.apiKey+'').then(resp =>{
          //    this.profileIconId = resp.data.profileIconId
          // })
          this.formattedDataChallenger.push({
            name: challenger.summonerName,
            lp: challenger.leaguePoints,
            // summonerId : this.profileIconId,
            wins: challenger.wins,
            losses: challenger.losses,
            hotStreak: challenger.hotStreak,
            winrate: Math.round((challenger.wins / (challenger.losses+challenger.wins)) * 100)
          })
        })
      }).catch(error =>{
        console.log(error)
      })
    }
  },
  computed: {
    apiKey(){
      return this.$store.getters['getApiKey']
    },
    computedChoices(){
      return 'List of 300 first Summoner in '+this.selectedQueue+' in '+this.selectedRegion
    }
  },
}
</script>