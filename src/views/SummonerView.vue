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
    <div class="error-message" v-if="activeError">
      <p>{{ errorMessage }}</p>
      <p>Display Error Message according to status code error</p>
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
      activeError: false,
      errorMessage: '',
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
          this.$store.commit('summoner/registerInfoSummoner', this.summonerData)
          this.$router.push({ name: 'selected-summoner', params: {
              name: this.selectedSummoner
          }})
        }).catch(error => {
          //todo I cant get the error.response due to CORS policy when invalid request. No ACAO header present on the requested resource.
          //todo If i want to retrieve status code for displaying custom messages in case of 404 , 500 etc , i need to make a backend able to contact API and send response to my frontend
          this.activeError = true
          this.errorMessage = error.message
        }).finally(()=> {
          //todo need to remove finally bloc if i dont use loading spinner in the future
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

 .error-message {
   background-color: #121112;
   border-radius: 30px;
   padding: 2rem;
   border: red solid;
 }

 .error-message p:first-of-type {
   text-align: center;
   margin-bottom: 1rem;
 }
</style>