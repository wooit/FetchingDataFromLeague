<template>
  <div class="container">
    <div class="rotation-bloc">
      <h1> What is the champions Rotation?</h1>
      <div class="rotation-texts">
        <p>Riot Games loans out around 10% of playable champions for free each week.
        This keeps League of Legends interesting and gives players the opportunity to experiment. </p>
        <p> Once you hit level 11, you gain access to the free champion rotation.
        The free champion rotation switches up every single Tuesday</p>
        <p>You must select a region for seeing the available champions for you this week.</p>
      </div>

    </div>

    <select-region class="select-region-component" @selected-region="getSelectedRegion"></select-region>
    <div class="error-message" v-if="activeError">
      <p>{{ errorMessage }}</p>
      <p>Display Error Message according to status code error</p>
    </div>

    <transition>
      <section class="list-champions-rotation" v-if="rotationHasBeenFetched">
        <champion-card class="champion-card" v-for="champion in listRotation" :key="champion" :championKey="champion"></champion-card>
      </section>
    </transition>
  </div>
</template>

<script>
import selectRegion from "@/components/UI/SelectRegion";
import axios from "axios";
import ChampionCard from "@/components/champions/ChampionCard";

export default {
  components: {
    ChampionCard,
    selectRegion
  },
  data(){
    return {
      selectedRegion: '',
      listRotation: [],
      rotationHasBeenFetched: false,
      championKey: '',
      championData: [],
      activeError: false,
      errorMessage: ''
    }
  },
  methods: {
    getSelectedRegion(region){
      this.selectedRegion = region
      this.fetchRotationChampion()
    },
    fetchRotationChampion(){
      axios.get('https://'+this.selectedRegion+'.api.riotgames.com/lol/platform/v3/champion-rotations?api_key='+this.apiKey).then(response => {
        this.rotationHasBeenFetched = true
        this.listRotation = response.data.freeChampionIds
      }).catch(error => {
        this.activeError = true
        this.errorMessage = error.message
      })
    }
  },
  computed: {
    apiKey(){
      return this.$store.getters['getApiKey']
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 5vh;
}
.rotation-bloc {
  margin-bottom: 1rem;
  padding: 1rem;
}

.rotation-bloc h1 {
  text-align: center;
  margin-bottom: 5vh;
}

.rotation-texts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #121112;
  border-radius: 30px;
  padding: 1rem;
  margin: auto;
  width: max-content;
  max-width: 100%;
  min-width: min-content;
}

.select-region-component {
  width: 33vw;
}

.list-champions-rotation {
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-basis: fit-content;
  justify-content: center;

}

.champion-card {
  flex-basis: 0;
}

.error-message {
  background-color: #121112;
  border-radius: 30px;
  padding: 2rem;
  border: red solid;
  width: 30%;
  margin: auto;
}

.error-message p {
  text-align: center;
  margin-bottom: 1rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>