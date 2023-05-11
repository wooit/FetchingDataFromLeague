<template>
  <div class="champion-zoom">
    <button class="button-container" @click="redirectToChampionInfos">
      <img :src="url" alt="championData.id">
      <p class="name-champion">{{ championData.id }}</p>
    </button>
  </div>

</template>

<script>
export default {
  props: ['championKey'],
  data(){
    return{
      url: '',
      championData: '',
      copyKey: '',
      urlSmallImgChampion: process.env.VUE_APP_GET_CHAMPION_IMAGE
    }
  },
  methods: {
    fetchDataChampFromId(){
      this.championData = this.$store.getters['champions/getChampionNameAndId'].find( champ => champ.key === this.championKey.toString())
      this.url = this.urlSmallImgChampion + this.championData.id +'.png'
    },
    redirectToChampionInfos(){
      //cant modify prop, so I need a copy of the prop. using toString so i can modify the number
      this.copyKey = this.championKey.toString()
      //todo need a more elegant refactor
      //champKey with 2 char for retrieving spell ability video later
      if(this.copyKey.length === 2){
        this.copyKey = 0+this.copyKey
      }
      this.$router.push({ name: 'selected-champion', params: {
          name: this.championData.id,
          key: this.copyKey
        }})
    }
  },
  beforeMount() {
     this.fetchDataChampFromId()
  }
}
</script>

<style>
  .champion-zoom {
    transition: transform .2s;
    opacity: 0.7;
    margin-right: 1.2rem;
    margin-bottom: 1.8rem;
  }

  .champion-zoom:hover {
    transform: scale(1.3);
    opacity: 1;
    height: 90%;
  }

  .button-container {
    background-color: white;
    border-radius: 10px;
    border-color: black;
  }

  .button-container:hover {
    background-color: cyan;
    border-color: cyan;
  }

  .name-champion {
    font-family: 'Alkatra', cursive;
    color: black;
  }
</style>