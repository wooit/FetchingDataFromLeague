<template>
  <div>
    <h3> What is the champion Rotation?</h3>
    <p>Riot Games loans out around 10% of playable champions for free each week. This keeps League of Legends interesting and gives players the opportunity to experiment. Once you hit level 11, you gain access to the free champion rotation. The free champion rotation switches up every single Tuesday</p>
  </div>

  <select-region @selected-region="getSelectedRegion"></select-region>

  <section v-if="rotationHasBeenFetched">
    {{ listRotation }}
  </section>
</template>

<script>
import selectRegion from "@/components/UI/SelectRegion";
import axios from "axios";

export default {
  components: {
    selectRegion
  },
  data(){
    return {
      selectedRegion: '',
      listRotation: [],
      rotationHasBeenFetched: false
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
        //todo i need to fetch champions based on id received and display them
      }).catch(error => {
        console.log(error)
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