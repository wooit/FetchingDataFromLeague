<template>
  <div class="container">
    <div class="chosen-category-explanations">
      <h1>Match History</h1>
      <p>Summary of the last games played</p>
      <div class="error-message" v-if="messageRegionNotAvailable">
        <p>Sorry Match history is not available in this region</p>
      </div>
    </div>

    <div class="chosen-category-content" v-if="messageRegionNotAvailable === false">
      <card-match class="card-match" v-for="matchId in listMatches" :matchId="matchId" :regionAlias="regionAlias" :key="matchId"></card-match>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardMatch from "@/components/summoner/subSummonerComponents/matchHistory/CardMatch";

export default {
  components: {
    CardMatch
  },
  data(){
    return {
      //todo feature for selecting the amount of match i wanna display: Maximum 100 but i need to verify amount of API CALL (risk error 429)
      count: 5,
      messageRegionNotAvailable: false,
      regionAlias: '',
      listMatches: [],
      matchId: null,
    }
  },
  methods: {
    isMatchesAvailableInThisRegion(){
      const infoSummoner =  this.$store.getters['summoner/getSummonerInfos']
      const regionSummoner = infoSummoner.region
      const availableRegions = this.$store.getters['serverStatus/getAllAvailableRegionsForMatchHistory']
      const dataExistInThisRegion = availableRegions.find(region => region.id === regionSummoner)
      if(dataExistInThisRegion){
        this.regionAlias = dataExistInThisRegion.name
        this.getListMatchesIds()
      } else {
        this.messageRegionNotAvailable = true
      }
    },
    getListMatchesIds(){
      axios.get('https://'+this.regionAlias+'.api.riotgames.com/lol/match/v5/matches/by-puuid/'+this.puuid+'/ids?start=0&count='+this.count+'&api_key='+this.apiKey).then(response => {
        this.listMatches = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
    puuid(){
      const infoSummoner =  this.$store.getters['summoner/getSummonerInfos']
      return infoSummoner.puuid
    },
    apiKey(){
      return this.$store.getters['getApiKey']
    },
  },
  beforeMount() {
    this.isMatchesAvailableInThisRegion()
  }
}

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .chosen-category-explanations {
    text-align: center;
  }

  .error-message {
    background-color: red;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 30px;
    display: inline-block;
  }

  .chosen-category-content {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .card-match {
    height: 100%;
    max-width: 50vw;
    max-height: 50vh;
  }
</style>