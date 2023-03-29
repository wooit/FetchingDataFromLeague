<template>
  <h1>Champions Mastery</h1>
  <p> Here are all the champions that belong to you
    They are filtered by total point mastery points</p>

  <div v-for="champion in championsChestObtained" :key="champion.championId">
    <img :src="`${url}`+ `${champion.championName}`+'.png'" :alt="champion.champName">
    <p>{{ champion.championName }}</p>
    <p>level: {{ champion.championLevel }}</p>
    <p>total points: {{ champion.championPoints }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      championsChestObtained: [],
      url: 'https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/',
    }
  },
  methods: {
    getNameFromId(id){
      const toString = id.toString()
      const foundChampName =  this.$store.getters['champions/getChampionNameAndId'].find(champion => champion.key === toString)
      return foundChampName.id
    },
    fetchChampionsAndMasteryPoints(){
      axios.get('https://'+this.getSummonerInfos.region+'.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+this.getSummonerInfos.encryptedSummonerId+'?api_key='+this.apiKey).then(response =>{
        response.data.forEach(champion => {
            this.championsChestObtained.push({
              championId: champion.championId,
              championLevel: champion.championLevel,
              championPoints: champion.championPoints,
              chestGranted: champion.chestGranted,
              championName: this.getNameFromId(champion.championId)
            })
        })
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
    getSummonerInfos(){
      return this.$store.getters['summoner/getSummonerInfos']
    },
    apiKey(){
      return this.$store.getters['getApiKey']
    }
  },
  beforeMount() {
    this.fetchChampionsAndMasteryPoints()
  }
}
</script>