<template>
  <div class="container">
    <h1>Choose the region and the username of the summoner you are looking for </h1>
    <div class="form">
      <select-region class="select-region-component" @selected-region="getSelectedRegion"></select-region>
      <v-text-field
          class="input-find-summoner"
          v-model="selectedSummoner"
          clearable
          label="Username"
          variant="outlined"
          color="cyan"
          @keyup.enter="fetchSummonerInfo"
      ></v-text-field>

      <v-btn v-if="!selectedRegion || !selectedSummoner"  class="validate-btn" disabled>
        GO
      </v-btn>
      <v-btn  v-else class="validate-btn" @click="fetchSummonerInfo">
        GO
      </v-btn>
    </div>
  </div>
</template>

<script>
import SelectRegion from "@/components/UI/SelectRegion";
import axios from "axios";

export default {
  components: {
    SelectRegion
  },
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
          console.log(response.data)
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
  .container {
    display: flex;
    flex-direction: column;
    gap: 10vh;
    align-items: center;
  }
  h1 {
    margin-top: 10vh;
    text-align: center;
  }

  .form {
    background-color: #121112;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    width: fit-content;
  }

 .select-region-component {
   width: 33vw;
 }

 .input-find-summoner {
   width: 33vw;
 }

 .input-find-summoner:hover,
 .input-find-summoner:focus {
   color: cyan;
 }

 .validate-btn {
   margin: auto;
   /*width: 33vw;*/
   align-self: center;
   font-weight: bold;
 }

 .validate-btn:hover {
   color: black;
   background-color: cyan;
 }
</style>