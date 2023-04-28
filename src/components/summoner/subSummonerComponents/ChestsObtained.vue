<template>
  <div class="container">
    <div class="chosen-category-explanations">
      <h1>Chests Obtained</h1>
      <p> Here are all the champions for which you already got the reward chest this season. They are filtered by total point mastery points</p>
      <p>A new reward chest for these champions will be available again when the next season will start.</p>
    </div>

    <div class="chosen-category-content">
      <div class="champion-card" v-for="champion in championsChestObtained" :key="champion.championId">
        <img :src="`${url}`+ `${champion.championName}`+'.png'" :alt="champion.champName" >
        <p class="champion-name">{{ champion.championName }}</p>
        <p class="champion-level">
          <span class="text-color">Level: </span>
          <span v-if="champion.championLevel === 7" style="color: orange"> {{ champion.championLevel }}</span>
          <span v-if="champion.championLevel === 6" style="color: rgba(172,123,255,0.59)"> {{ champion.championLevel }}</span>
          <span v-if="champion.championLevel === 5" style="color: #105be8"> {{ champion.championLevel }}</span>
          <span v-if="champion.championLevel < 5 && champion.championLevel > 2" style="color: green"> {{ champion.championLevel }}</span>
          <span v-if="champion.championLevel <= 2" style="color: white"> {{ champion.championLevel }}</span>
        </p>
        <p class="champion-points">
          <span class="text-color">Points: </span>
          {{ champion.championPoints }}
        </p>
      </div>
    </div>

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
          if(champion.chestGranted === true){
            this.championsChestObtained.push({
              championId: champion.championId,
              championLevel: champion.championLevel,
              championPoints: champion.championPoints,
              chestGranted: champion.chestGranted,
              championName: this.getNameFromId(champion.championId)
            })
          }
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

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .chosen-category-explanations {
    text-align: center;
  }

  .chosen-category-content {
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .champion-card {
    border: white solid;
    border-radius: 30px;
    padding: 1rem;
    flex-basis: 0;
  }

  .champion-card:hover {
    border-color: cyan;
    transform: scale(1.1);
    transition: transform .5s;
  }

  .champion-name {
    text-align: center;
  }

  .champion-level,
  .champion-points {
    text-align: center;
  }
  .text-color {
    color: gray;
    font-weight: lighter;
  }
</style>