<template>
  <div class="container">
    <h3>Find out the players with the highest ranking in your region </h3>
    <div class="form">
      <select-region class="select-region-component" @selected-region="getSelectedRegion" ></select-region>
      <select-queue class="select-queue-component" @selected-queue="getSelectedQueue" ></select-queue>
    </div>

    <section class="section-ranking-container" v-if="selectedRegion && selectedQueue">
      <p class="queue-selected">{{ computedChoices }}</p>
      <challenger-table :data="formattedDataChallenger" ></challenger-table>
    </section>
  </div>
</template>

<script>
import SelectRegion from "@/components/UI/SelectRegion";
import SelectQueue from "@/components/UI/SelectQueue";
import axios from "axios";
import ChallengerTable from "@/components/ranking/subRankingComponent/ChallengerTable";

export default {
  components: {
    SelectQueue,
    SelectRegion,
    ChallengerTable,
  },
  data(){
    return {
      selectedRegion: null,
      selectedQueue: null,
      formattedDataChallenger: [],
      currentRanking: 1,
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
        challengersSortedByPoints.forEach(challenger => {
          this.formattedDataChallenger.push({
            index: this.currentRanking,
            name: challenger.summonerName,
            lp: challenger.leaguePoints,
            wins: challenger.wins,
            losses: challenger.losses,
            hotStreak: challenger.hotStreak,
            winrate: Math.round((challenger.wins / (challenger.losses+challenger.wins)) * 100)
          })
          this.currentRanking++
        })
      }).catch(error =>{
        console.log(error)
      })
      this.currentRanking = 1;
    }
  },
  computed: {
    apiKey(){
      return this.$store.getters['getApiKey']
    },
    computedChoices(){
      return 'List of '+ this.formattedDataChallenger.length +' first Summoners in '+this.selectedQueue+' in '+this.selectedRegion
    }
  },
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2.5vh;
    align-items: center;
  }

  .form {
    background-color: #121112;
    padding: 2rem;
    border-radius: 30px;
  }

  .select-region-component {
    width: 33vw;
  }

  .select-queue-component {
    width: 33vw;
  }

  .section-ranking-container {
    background-color: #121112;
    border-radius: 30px;
    padding: 1.5rem;
    width: 80vw;
  }

  .queue-selected {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }


</style>