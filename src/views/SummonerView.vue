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
      summonerData: {},
    }
  },
  methods: {
    getSelectedRegion(region){
      this.selectedRegion = region
    },
    fetchSummonerInfo(){
      if(this.selectedRegion && this.apiKey && this.selectedSummoner){
        axios.get('https://'+this.selectedRegion+'.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+this.selectedSummoner+'?api_key='+this.apiKey+'').then(response => {
           this.summonerData = {
            encryptedSummonerId: response.data.id,
            puuid: response.data.puuid,
            name: response.data.name,
            profileIconId: response.data.profileIconId,
            revisionDate: response.data.revisionDate,
            summonerLevel: response.data.summonerLevel,
            accountId: response.data.accountId,
            region: this.selectedRegion,
          }
        }).catch(error => {
          console.log(error)
        }).finally(()=> {
          this.$store.commit('summoner/registerInfoSummoner', this.summonerData)

          this.$router.push({ name: 'selected-summoner', params: {
              name: this.selectedSummoner
          }})
        })
        }
    }
  },
  computed: {
    apiKey(){
      return this.$store.getters['getApiKey']
    },
  }
}
</script>

<style scoped>

</style>