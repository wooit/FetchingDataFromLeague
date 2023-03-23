<template>
  <div>
    <h1>{{ getSummonerDataProfile.name }}</h1>
    <h3>{{ getSummonerDataProfile.summonerLevel }}</h3>
    <img :src="profileIconLink" alt="icon">
  </div>
</template>

<script>
export default {
  props: ['profileIconId'],
  data(){
    return {
      profileIconLink: 'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/'+this.profileIconId+'.png'
    }
  },
  computed:{
    getSummonerDataProfile(){
      return this.$store.getters['summoner/getSummonerInfos']
    }
  },
}
</script>