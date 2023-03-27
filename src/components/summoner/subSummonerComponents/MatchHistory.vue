<template>
  <h1>Match History</h1>
  <div v-if="messageRegionNotAvailable">
    <p>Sorry Match history is not available in this region</p>
  </div>
  <div v-else>
    <card-match v-for="matchId in listMatches" :matchId="matchId" :regionAlias="regionAlias" :key="matchId"></card-match>
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
      count: 1,
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