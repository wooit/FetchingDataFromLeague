<template>
  <div>
    <button @click="redirectToChampionInfos">
      <img :src="url" alt="championData.id">
      <p>{{ championData.id }}</p>
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
      copyKey: ''
    }
  },
  methods: {
    fetchDataChampFromId(){
      this.championData = this.$store.getters['champions/getChampionNameAndId'].find( champ => champ.key === this.championKey.toString())
      this.url = 'https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/'+this.championData.id+'.png'
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