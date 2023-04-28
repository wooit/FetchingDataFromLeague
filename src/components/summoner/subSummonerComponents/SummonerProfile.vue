<template>
  <div class="container-profile-infos">
    <div class="icon-container">
      <img class="summoner-icon" :src="profileIconLink" alt="icon">
      <div class="round-level">{{ getSummonerDataProfile.summonerLevel }}</div>
    </div>
    <div class="info-container">
      <h1><span>Username:  </span>{{ getSummonerDataProfile.name }}</h1>
      <h3><span>Level:  </span>{{ getSummonerDataProfile.summonerLevel }}</h3>
    </div>
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

<style scoped>
  .container-profile-infos {
    display: flex;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .summoner-icon {
    border-radius: 20px;
    border: white solid;
  }

  .round-level {
    border-radius: 30px;
    background-color: black;
    width: fit-content;
    padding: 0.5rem;
    color: white;
    margin-top: -1rem;
    border: white solid;
  }

  .info-container {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  h1 span, h3 span {
    color: gray;
    font-weight: lighter;
  }

</style>